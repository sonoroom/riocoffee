import React from "react";
import { Input } from "@heroui/react";
import { ProductCard, ProductProps, adaptApiProductToProps } from "../components/product-card";
import { ProductModal } from "../components/product-modal";
import { CategoryTabs } from "../components/category-tabs";
import { Icon } from "@iconify/react";
import { useMenuOverview } from "../hooks/useApi";

export const Menu: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = React.useState<ProductProps | null>(null);
  const [loadingProductDetails, setLoadingProductDetails] = React.useState(false);
  const [showAllInCategory, setShowAllInCategory] = React.useState(false);
  const { data: menuData, loading, error } = useMenuOverview();

  // Загружаем детали товара
  const loadProductDetails = async (productSlug: string) => {
    setLoadingProductDetails(true);
    try {
      const response = await fetch(`/api/menu/products/${productSlug}/`);
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

  // Фильтрация по поисковому запросу
  const getFilteredProducts = () => {
    if (!menuData || !searchQuery) return [];

    const allProducts: ProductProps[] = [];
    menuData.forEach(category => {
      category.products.forEach(product => {
        if (product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
          allProducts.push(adaptApiProductToProps(product));
        }
      });
    });

    return allProducts;
  };

  // Получаем товары выбранной категории
  const getSelectedCategoryProducts = () => {
    if (!menuData || !selectedCategory) return [];

    const category = menuData.find(cat => cat.slug === selectedCategory);
    if (!category) return [];

    return category.products.map(product => adaptApiProductToProps(product));
  };

  const filteredProducts = getFilteredProducts();
  const selectedCategoryProducts = getSelectedCategoryProducts();

  // Подготавливаем категории для табов
  const categories = menuData?.map(cat => ({
    key: cat.slug,
    title: cat.title
  })) || [];

  // Обработчик клика по табу категории
  const handleCategorySelect = (categoryKey: string) => {
    if (selectedCategory === categoryKey) {
      // Если уже выбрана эта категория - возвращаемся к общему виду
      setSelectedCategory(null);
      setShowAllInCategory(false);
    } else {
      setSelectedCategory(categoryKey);
      setShowAllInCategory(true); // Сразу показываем все товары
    }
    setSearchQuery(""); // Очищаем поиск при смене категории
  };

  // Получаем название выбранной категории
  const getSelectedCategoryTitle = () => {
    if (!selectedCategory || !menuData) return "";
    const category = menuData.find(cat => cat.slug === selectedCategory);
    return category?.title || "";
  };


  if (error) {
    return (
      <div className="min-h-screen bg-background pb-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <Icon icon="lucide:wifi-off" className="mx-auto text-red-400 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ошибка загрузки</h3>
            <p className="text-default-500">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Попробовать снова
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="container mx-auto px-4 py-8">
        {/* Кнопка "Назад" если выбрана категория */}
        {selectedCategory && (
          <button
            onClick={() => {
              setSelectedCategory(null);
              setShowAllInCategory(false);
            }}
            className="flex items-center gap-2 mb-4 text-default-600 hover:text-default-900 transition-colors"
          >
            <Icon icon="lucide:arrow-left" />
            <span>Назад к меню</span>
          </button>
        )}

        <h1 className="text-3xl font-serif font-semibold mb-4">
          {selectedCategory ? getSelectedCategoryTitle() : "Menu"}
        </h1>

        {!selectedCategory && (
          <p className="text-default-600 mb-8">
            Мы работаем с различными продуктами и аллергенами в наших кофейнях, которые могут контактировать друг с другом.
          </p>
        )}

        <div className="relative mb-8">
          <Input
            placeholder="Поиск товаров..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            startContent={<Icon icon="lucide:search" className="text-default-400" />}
            clearable
            onClear={() => setSearchQuery("")}
            classNames={{
              inputWrapper: "border border-default-200"
            }}
          />
        </div>

        <CategoryTabs
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
        />

        {/* Если есть поисковый запрос - показываем результаты поиска */}
        {searchQuery && (
          <section className="mt-12">
            <h2 className="text-2xl font-serif font-semibold mb-6">
              Результаты поиска ({filteredProducts.length})
            </h2>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onProductClick={handleProductClick}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Icon icon="lucide:search-x" className="mx-auto text-default-300 text-4xl mb-2" />
                <p className="text-default-500">По запросу "{searchQuery}" ничего не найдено</p>
              </div>
            )}
          </section>
        )}

        {/* Если выбрана конкретная категория - показываем все её товары */}
        {!searchQuery && selectedCategory && (
          <section className="mt-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {selectedCategoryProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onProductClick={handleProductClick}
                />
              ))}
            </div>

            {selectedCategoryProducts.length === 0 && (
              <div className="text-center py-8">
                <Icon icon="lucide:coffee" className="mx-auto text-default-300 text-4xl mb-2" />
                <p className="text-default-500">В этой категории пока нет товаров</p>
              </div>
            )}

            {/* Показываем количество товаров */}
            {selectedCategoryProducts.length > 0 && (
              <div className="text-center mt-6 text-default-500">
                {menuData?.find(cat => cat.slug === selectedCategory)?.total_products === selectedCategoryProducts.length
                  ? `Показаны все ${selectedCategoryProducts.length} товаров`
                  : `Показано ${selectedCategoryProducts.length} из ${menuData?.find(cat => cat.slug === selectedCategory)?.total_products} товаров`
                }
              </div>
            )}
          </section>
        )}

        {/* Если нет поискового запроса и не выбрана категория - показываем обзор категорий */}
        {!searchQuery && !selectedCategory && menuData && menuData.map((category) => (
          <section key={category.id} className="mt-12">
            <h2 className="text-2xl font-serif font-semibold mb-6">{category.title}</h2>

            {category.products.length > 0 ? (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {category.products.slice(0, 5).map((product) => (
                    <ProductCard
                      key={product.id}
                      product={adaptApiProductToProps(product)}
                      onProductClick={handleProductClick}
                    />
                  ))}
                </div>

                {/* Кнопка "Посмотреть всё", если товаров больше 5 */}
                {category.total_products > 5 && (
                  <div className="text-center mt-6">
                    <button
                      onClick={() => {
                        setSelectedCategory(category.slug);
                        setShowAllInCategory(true);
                      }}
                      className="inline-block px-6 py-2 border border-default-200 rounded-full text-default-600 hover:bg-default-100 transition-colors"
                    >
                      Посмотреть всё ({category.total_products})
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-8">
                <Icon icon="lucide:coffee" className="mx-auto text-default-300 text-4xl mb-2" />
                <p className="text-default-500">В этой категории пока нет товаров</p>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Модальное окно товара */}
      <ProductModal
        isOpen={!!selectedProduct}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </div>
  );
};