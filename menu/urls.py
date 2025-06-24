from django.urls import path
from . import views

urlpatterns = [
    # Категории
    path('categories/', views.CategoryListView.as_view(), name='category-list'),

    # Товары
    path('products/', views.ProductListView.as_view(), name='product-list'),
    path('products/<slug:slug>/', views.ProductDetailView.as_view(), name='product-detail'),

    # Специальные endpoints
    path('menu/overview/', views.menu_overview, name='menu-overview'),
    path('products/featured/', views.featured_products, name='featured-products'),
    path('products/new/', views.new_products, name='new-products'),
]