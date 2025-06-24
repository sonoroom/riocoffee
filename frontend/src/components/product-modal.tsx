import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { ProductProps } from "./product-card";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: ProductProps | null;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  product
}) => {
  if (!product) return null;

  // Определяем изображение
  const imageUrl = product.image_url || product.image;

  // Форматируем цену
  const formatPrice = () => {
    if (product.price_display) {
      return `${product.price_display} сом`;
    }
    if (product.price) {
      const price = typeof product.price === 'string' ? parseFloat(product.price) : product.price;
      return `${price.toFixed(0)} сом`;
    }
    return "Цена не указана";
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="4xl"
      scrollBehavior="inside"
      classNames={{
        base: "bg-background",
        backdrop: "bg-black/50 backdrop-blur-sm",
      }}
    >
      <ModalContent>
        <ModalBody className="pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Левая колонка - информация */}
            <div className="space-y-6">
              {/* Заголовок и цена */}
              <div className="flex items-start justify-between w-full">
                <div className="flex-1">
                  <h2 className="text-2xl font-serif font-semibold text-foreground">
                    {product.name}
                  </h2>
                  {product.volume_display && (
                    <p className="text-default-500 text-sm mt-1">
                      {product.volume_display}
                    </p>
                  )}
                </div>
                <div className="bg-gray-500/70 text-white px-4 py-2 rounded-xl font-medium text-base ml-4 backdrop-blur-sm shadow-sm">
                  {formatPrice()}
                </div>
              </div>

              {/* Описание */}
              {product.description && (
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Описание:</h3>
                  <p className="text-default-600 leading-relaxed whitespace-pre-line">
                    {product.description}
                  </p>
                </div>
              )}
            </div>

            {/* Правая колонка - изображение */}
            <div className="order-first md:order-last">
              <div className="aspect-square bg-default-100 rounded-xl overflow-hidden">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Icon icon="lucide:coffee" className="text-default-300 text-6xl" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};