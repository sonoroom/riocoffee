/// hooks/useApi.ts

import { useState, useEffect } from 'react';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

// Типы данных из Django API
export interface Category {
  id: number;
  name: string;
  slug: string;
  title: string;
  order: number;
  product_count: number;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  category_name: string;
  price: string;
  image_url: string | null;
  is_available: boolean;
  is_new: boolean;
  is_favorite: boolean;
}

export interface CategoryWithProducts {
  id: number;
  name: string;
  slug: string;
  title: string;
  products: Product[];
  total_products: number;
}

// Общий хук для API запросов
function useApi<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`${API_BASE_URL}${url}`);

        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Произошла ошибка');
        console.error('API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Специфичные хуки
export function useCategories() {
  return useApi<Category[]>('/categories/');
}

export function useProducts(categorySlug?: string, searchQuery?: string) {
  let url = '/products/';
  const params = new URLSearchParams();

  if (categorySlug) {
    params.append('category__slug', categorySlug);
  }

  if (searchQuery) {
    params.append('search', searchQuery);
  }

  if (params.toString()) {
    url += `?${params.toString()}`;
  }

  return useApi<Product[]>(url);
}

// 🔥 ГЛАВНЫЙ хук для страницы меню
export function useMenuOverview() {
  return useApi<CategoryWithProducts[]>('/menu/overview/');
}

export function useFeaturedProducts() {
  return useApi<Product[]>('/products/featured/');
}

export function useNewProducts() {
  return useApi<Product[]>('/products/new/');
}

