import React from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

// Обновленный интерфейс, совместимый с Django API
export interface ProductProps {
  id: string | number;           // API возвращает number
  name: string;
  slug?: string;                 // добавлено для API
  description?: string;
  subtext?: string;              // делаем опциональным
  price?: string | number;       // API возвращает строку "150.00"
  price_display?: string;        // добавляем новые поля
  volume_display?: string;       // добавляем новые поля
  has_multiple_sizes?: boolean;  // добавляем новые поля
  image?: string;                // делаем опциональным
  image_url?: string | null;     // добавлено для API
  category?: string;             // делаем опциональным
  category_name?: string;        // добавлено для API
  isFavorite?: boolean;          // старое название
  is_favorite?: boolean;         // новое от API
  isNew?: boolean;               // старое название
  is_new?: boolean;              // новое от API
  is_available?: boolean;        // добавлено для API
}

interface ProductCardProps {
  product: ProductProps;
  isPromotional?: boolean;
  onProductClick?: (product: ProductProps) => void; // Добавляем колбэк
}

// Функция для адаптации API данных к старому формату
export function adaptApiProductToProps(apiProduct: any): ProductProps {
  return {
    id: apiProduct.id,
    name: apiProduct.name,
    slug: apiProduct.slug,
    description: apiProduct.description,
    price: apiProduct.price,
    price_display: apiProduct.price_display,
    volume_display: apiProduct.volume_display,
    has_multiple_sizes: apiProduct.has_multiple_sizes,
    image: apiProduct.image_url,
    image_url: apiProduct.image_url,
    category: apiProduct.category_name,
    category_name: apiProduct.category_name,
    isFavorite: apiProduct.is_favorite,
    is_favorite: apiProduct.is_favorite,
    isNew: apiProduct.is_new,
    is_new: apiProduct.is_new,
    is_available: apiProduct.is_available,
  };
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isPromotional = false,
  onProductClick
}) => {
  // Определяем изображение (поддерживаем оба формата)
  const imageUrl = product.image_url || product.image;

  // Определяем избранность (поддерживаем оба формата)
  const isFavorite = product.is_favorite || product.isFavorite || false;

  // Определяем новинку (поддерживаем оба формата)
  const isNew = product.is_new || product.isNew || false;

  // Обработчик клика
  const handleClick = () => {
    if (onProductClick) {
      onProductClick(product);
    }
  };

  return (
    <Card
      isPressable={!!onProductClick}
      onPress={handleClick}
      shadow="none"
      className="card-hover overflow-visible cursor-pointer"
    >
      <CardBody className="p-3 overflow-visible">
        <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          ) : (
            // Placeholder если нет изображения
            <div className="w-full h-full bg-default-100 flex items-center justify-center">
              <Icon icon="lucide:coffee" className="text-default-300 text-4xl" />
            </div>
          )}

          {/* Метки "Новинка" и "Популярное" */}
          {isNew && (
            <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
              Новинка
            </div>
          )}

          {isFavorite && (
               <div
               className="absolute top-2 left-2 bg-white/70 backdrop-blur-md rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-white/90 transition-colors"
               aria-label="Популярный товар"
               onClick={(e) => e.stopPropagation()} // Предотвращаем клик по карточке
               >
               <Icon icon="lucide:heart" className="text-red-500" />
               </div>
          )}
        </div>

        <div>
          <h2 className="text-lg font-medium text-foreground">{product.name}</h2>

          {product.subtext && (
            <p className="text-default-400 mt-1">
              {product.subtext}
            </p>
          )}

          {product.price && (
            <div className="mt-1">
              <p className="text-default-600 font-medium">
                {product.price_display
                  ? `${product.price_display} сом`
                  : `${typeof product.price === 'string' && product.price.includes('.')
                      ? parseFloat(product.price).toFixed(0)
                      : product.price} сом`
                }
              </p>

              {product.volume_display && (
                <p className="text-default-400 text-sm mt-1">
                  {product.volume_display}
                </p>
              )}
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
};