from django.contrib import admin
from django.utils.html import format_html
from .models import Category, Product


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['title', 'name', 'slug', 'order', 'product_count']
    list_editable = ['order']
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ['name', 'title']
    ordering = ['order', 'name']

    def product_count(self, obj):
        count = obj.products.count()
        return format_html(f'<span style="color: #007cba;">{count} товаров</span>')

    product_count.short_description = 'Количество товаров'


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = [
        'name',
        'category',
        'price',
        'get_image_preview',
        'is_available',
        'is_new',
        'is_favorite',
        'order'
    ]
    list_editable = ['price', 'order']  # убираем булевы поля из редактируемых
    list_filter = ['category', 'is_available', 'is_new', 'is_favorite', 'created_at']
    list_filter = ['category', 'is_available', 'is_new', 'is_favorite', 'created_at']
    search_fields = ['name', 'description']
    prepopulated_fields = {'slug': ('name',)}
    ordering = ['category__order', 'order', 'name']

    fieldsets = (
        ('Основная информация', {
            'fields': ('name', 'slug', 'category', 'description')
        }),
        ('Размеры и цены', {
            'fields': (
                ('price', 'volume'),
                ('price_medium', 'volume_medium'),
                ('price_large', 'volume_large')
            ),
            'description': 'Укажите цены и объемы для разных размеров'
        }),
        ('Изображение', {
            'fields': ('image',)
        }),
        ('Настройки отображения', {
            'fields': ('is_available', 'is_new', 'is_favorite', 'order'),
            'description': 'Настройте видимость и особенности товара'
        }),
    )

    def get_image_preview(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" width="50" height="50" style="object-fit: cover; border-radius: 4px;" />',
                obj.image.url
            )
        return "Нет изображения"

    get_image_preview.short_description = 'Превью'

    # Добавляем возможность массового изменения статусов
    actions = ['make_available', 'make_unavailable', 'mark_as_new', 'unmark_as_new']

    def make_available(self, request, queryset):
        queryset.update(is_available=True)
        self.message_user(request, f"Отмечено как доступные: {queryset.count()} товаров")

    make_available.short_description = "Отметить как доступные"

    def make_unavailable(self, request, queryset):
        queryset.update(is_available=False)
        self.message_user(request, f"Отмечено как недоступные: {queryset.count()} товаров")

    make_unavailable.short_description = "Отметить как недоступные"

    def mark_as_new(self, request, queryset):
        queryset.update(is_new=True)
        self.message_user(request, f"Отмечено как новинки: {queryset.count()} товаров")

    mark_as_new.short_description = "Отметить как новинки"

    def unmark_as_new(self, request, queryset):
        queryset.update(is_new=False)
        self.message_user(request, f"Убрана отметка 'новинка': {queryset.count()} товаров")

    unmark_as_new.short_description = "Убрать отметку 'новинка'"