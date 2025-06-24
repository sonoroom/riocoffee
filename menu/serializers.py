from rest_framework import serializers
from .models import Category, Product


class CategorySerializer(serializers.ModelSerializer):
    product_count = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'title', 'order', 'product_count']

    def get_product_count(self, obj):
        """Возвращает количество доступных товаров в категории"""
        return obj.products.filter(is_available=True).count()


class ProductListSerializer(serializers.ModelSerializer):
    """Сериализатор для списка товаров (без лишних деталей)"""
    category_name = serializers.CharField(source='category.slug', read_only=True)
    image_url = serializers.SerializerMethodField()
    price_display = serializers.CharField(source='get_price_display', read_only=True)
    volume_display = serializers.CharField(source='get_volume_display', read_only=True)
    has_multiple_sizes = serializers.BooleanField(read_only=True)

    class Meta:
        model = Product
        fields = [
            'id',
            'name',
            'slug',
            'category_name',
            'price',
            'price_display',
            'volume_display',
            'has_multiple_sizes',
            'description',
            'image_url',
            'is_available',
            'is_new',
            'is_favorite'
        ]

    def get_image_url(self, obj):
        """Возвращает полный URL изображения"""
        if obj.image:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url
        return None


class ProductDetailSerializer(serializers.ModelSerializer):
    """Детальный сериализатор для одного товара"""
    category = CategorySerializer(read_only=True)
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = [
            'id',
            'name',
            'slug',
            'category',
            'price',
            'description',
            'image_url',
            'is_available',
            'is_new',
            'is_favorite',
            'created_at',
            'updated_at'
        ]

    def get_image_url(self, obj):
        if obj.image:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url
        return None