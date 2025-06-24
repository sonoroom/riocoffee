# menu/views.py

from rest_framework import generics, filters
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from .models import Category, Product
from .serializers import (
    CategorySerializer,
    ProductListSerializer,
    ProductDetailSerializer
)


class CategoryListView(generics.ListAPIView):
    """
    GET /api/categories/
    Возвращает список всех категорий
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ProductListView(generics.ListAPIView):
    """
    GET /api/products/
    GET /api/products/?category=hot-drinks
    GET /api/products/?search=latte
    GET /api/products/?is_new=true
    """
    serializer_class = ProductListSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['category__slug', 'is_available', 'is_new', 'is_favorite']
    search_fields = ['name', 'description']

    def get_queryset(self):
        """Возвращает только доступные товары"""
        return Product.objects.filter(is_available=True).select_related('category')


class ProductDetailView(generics.RetrieveAPIView):
    """
    GET /api/products/1/
    GET /api/products/latte-caramel/  (по slug)
    """
    serializer_class = ProductDetailSerializer
    lookup_field = 'slug'  # Можно искать по slug вместо id

    def get_queryset(self):
        return Product.objects.filter(is_available=True).select_related('category')


@api_view(['GET'])
def menu_overview(request):
    """
    GET /api/menu/overview/
    Возвращает краткий обзор меню: категории + по несколько товаров из каждой
    Идеально для главной страницы меню
    """
    categories = Category.objects.all()
    result = []

    for category in categories:
        # Берем первые 6 товаров из категории (как у вас на фронте)
        products = Product.objects.filter(
            category=category,
            is_available=True
        )

        category_data = {
            'id': category.id,
            'name': category.name,
            'slug': category.slug,
            'title': category.title,
            'products': ProductListSerializer(
                products,
                many=True,
                context={'request': request}
            ).data,
            'total_products': Product.objects.filter(
                category=category,
                is_available=True
            ).count()
        }
        result.append(category_data)

    return Response(result)


@api_view(['GET'])
def featured_products(request):
    """
    GET /api/products/featured/
    Возвращает избранные/популярные товары
    """
    featured = Product.objects.filter(
        is_available=True,
        is_favorite=True
    ).select_related('category')[:8]

    serializer = ProductListSerializer(
        featured,
        many=True,
        context={'request': request}
    )
    return Response(serializer.data)


@api_view(['GET'])
def new_products(request):
    """
    GET /api/products/new/
    Возвращает новые товары
    """
    new_products = Product.objects.filter(
        is_available=True,
        is_new=True
    ).select_related('category')[:8]

    serializer = ProductListSerializer(
        new_products,
        many=True,
        context={'request': request}
    )
    return Response(serializer.data)



