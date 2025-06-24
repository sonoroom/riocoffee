import React from "react";
import { useEffect } from 'react';
import { HeroSection } from "../components/hero-section";
import { FeaturedProducts } from "../components/featured-products";
import { ProductProps } from "../components/product-card";
import { Card, CardBody, Button, Spinner } from "@heroui/react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { InstagramFeed } from "../components/InstagramFeed";
import { useMenuOverview } from "../hooks/useApi";
import { adaptApiProductToProps } from "../components/product-card";
import { ProductModal } from "../components/product-modal";

export const Home: React.FC = () => {
  // Загружаем все меню и фильтруем избранные товары
  const { data: menuData, loading, error } = useMenuOverview();
  const [selectedProduct, setSelectedProduct] = React.useState<ProductProps | null>(null);
  const [loadingProductDetails, setLoadingProductDetails] = React.useState(false);

  // Преобразуем данные из API в формат ProductProps
  const seasonalProducts: ProductProps[] = [];

  if (menuData) {
    // Собираем все избранные товары из всех категорий
    menuData.forEach(category => {
      category.products.forEach(product => {
        if (product.is_favorite && seasonalProducts.length < 4) {
          seasonalProducts.push(adaptApiProductToProps(product));
        }
      });
    });
  }

  // Загружаем детали товара
  const loadProductDetails = async (productSlug: string) => {
    setLoadingProductDetails(true);
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/menu/products/${productSlug}/`);
      if (response.ok) {
        const productDetails = await response.json();
        return adaptApiProductToProps(productDetails);
      }
    } catch (error) {
      console.error('Ошибка загрузки деталей товара:', error);
    } finally {
      setLoadingProductDetails(false);
    }
    return null;
  };

  // Обработчик клика по товару
  const handleProductClick = async (product: ProductProps) => {
    // Если есть описание - показываем сразу
    setSelectedProduct(product);

    // Иначе загружаем детали
    const productDetails = await loadProductDetails(product.slug || String(product.id));
    if (productDetails) {
      setSelectedProduct(productDetails);
    }
  };

  // Закрытие модалки
  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  // Updated Hero slides data
  const heroSlides = [
    {
      title: "Начни свой день со стаканчиком бодрящего кофе",
      subtitle: "А остальное подтянется.",
      ctaText: "ЗАКАЖИ СЕЙЧАС",
      ctaLink: "/menu/cold-drinks",
      backgroundImage: "https://i.postimg.cc/RCj93xMh/image.jpg"
    },
    {
      title: "Мозг тает в жару? Освежи мысли!",
      subtitle: "Ягодный лимонад, мохито или холодный кофе - выбирай своё.",
      ctaText: "ЗАКАЖИ СЕЙЧАС",
      ctaLink: "/menu/breakfast",
      backgroundImage: "https://i.postimg.cc/hP7wNJRP/image.jpg"
    },
    {
      title: "Не ищи идеальное место. Создай его",
      subtitle: "Присоединись к RIO-Coffee и открой свою кофейню в месте с нами. Мы рядом, если решишь попробовать.",
      ctaText: "О ФРАНШИЗЕ",
      ctaLink: "/membership",
      backgroundImage: "https://i.postimg.cc/nrX5Frs2/image.jpg"
    }
  ];

  return (
    <div>
      <HeroSection slides={heroSlides} />

      {loading ? (
        <div className="flex justify-center items-center py-16">
          <Spinner size="lg" />
        </div>
      ) : error ? (
        <div className="text-center py-16">
          <p className="text-red-500">Ошибка загрузки избранных товаров</p>
        </div>
      ) : (
        <FeaturedProducts
          title="Дождь, жара, ветер - какая разница, когда у тебя в с собой правильный напиток?"
          description="Освежающий колд-брю с горьким шоколадом - вкус, который заставляет остановиться и вдохнуть глубже. А дождь пускай идет и дальше, ведь у нас есть клубничный фреш, чтобы добавить летнего настроения."
          products={seasonalProducts}
          viewAllLink="/menu"
          viewAllText="В МЕНЮ"
          onProductClick={handleProductClick}
        />
      )}

      <section className="bg-secondary-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Icon icon="lucide:heart" width={32} height={32} />
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6">
            Мечтаешь открыть свою кофейню?
          </h2>
          <p className="mb-8 max-w-lg mx-auto">
            Присоединись к RIO-Coffee и открой свою кофейню в месте с нами. Мы рядом, если решишь попробовать.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              as={Link}
              to="/membership"
              variant="solid"
              className="bg-white text-secondary-600"
            >
              ПРИСОЕДИНЯЙСЯ К НАМ
            </Button>
          </div>
        </div>
      </section>

      <section className="pt-12 md:pt-16 pb-2 bg-gray-50">
       <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Подписывайся на нас в Instagram</h2>
       </div>
      </section>

     <InstagramFeed />

      {/* Модальное окно товара */}
      <ProductModal
        isOpen={!!selectedProduct}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </div>
  );
};