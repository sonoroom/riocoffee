# menu/models.py

from django.db import models
from django.utils.text import slugify


class Category(models.Model):
    name = models.CharField(max_length=100, verbose_name="Название")
    slug = models.SlugField(unique=True, verbose_name="URL slug")
    title = models.CharField(max_length=100, verbose_name="Отображаемое название")
    order = models.IntegerField(default=0, verbose_name="Порядок отображения")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Категория"
        verbose_name_plural = "Категории"
        ordering = ['order', 'name']

    def __str__(self):
        return self.title


class Product(models.Model):
    name = models.CharField(max_length=200, verbose_name="Название")
    slug = models.SlugField(unique=True, blank=True, verbose_name="URL slug")
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name='products',
        verbose_name="Категория"
    )

    # Цена и объемы (поддержка до 3 размеров)
    price = models.DecimalField(max_digits=8, decimal_places=2, verbose_name="Цена (основная)")
    volume = models.CharField(max_length=50, blank=True, verbose_name="Объем (основной)", help_text="Например: 250 мл")

    price_medium = models.DecimalField(max_digits=8, decimal_places=2, blank=True, null=True,
                                       verbose_name="Цена (средний)")
    volume_medium = models.CharField(max_length=50, blank=True, verbose_name="Объем (средний)",
                                     help_text="Например: 350 мл")

    price_large = models.DecimalField(max_digits=8, decimal_places=2, blank=True, null=True,
                                      verbose_name="Цена (большой)")
    volume_large = models.CharField(max_length=50, blank=True, verbose_name="Объем (большой)",
                                    help_text="Например: 450 мл")

    description = models.TextField(blank=True, verbose_name="Описание")
    image = models.ImageField(
        upload_to='products/',
        blank=True,
        null=True,
        verbose_name="Изображение"
    )

    # Дополнительные поля для меток
    is_available = models.BooleanField(default=True, verbose_name="Доступен")
    is_new = models.BooleanField(default=False, verbose_name="Новинка")
    is_favorite = models.BooleanField(default=False, verbose_name="Популярный")

    order = models.IntegerField(default=0, verbose_name="Порядок отображения")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Продукт"
        verbose_name_plural = "Продукты"
        ordering = ['category__order', 'order', 'name']

    def __str__(self):
        return f"{self.name} ({self.category.title})"

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    @property
    def image_url(self):
        """Возвращает полный URL изображения"""
        if self.image:
            return self.image.url
        return None

    def get_price_display(self):
        """Возвращает цены через слэш если есть несколько размеров"""
        prices = [str(int(self.price))]

        if self.price_medium:
            prices.append(str(int(self.price_medium)))
        if self.price_large:
            prices.append(str(int(self.price_large)))

        return " / ".join(prices)

    def get_volume_display(self):
        """Возвращает объемы через слэш если есть несколько размеров"""
        volumes = []

        if self.volume:
            volumes.append(self.volume)
        if self.volume_medium:
            volumes.append(self.volume_medium)
        if self.volume_large:
            volumes.append(self.volume_large)

        return " / ".join(volumes) if volumes else ""

    def has_multiple_sizes(self):
        """Проверяет есть ли несколько размеров"""
        return bool(self.price_medium or self.price_large)