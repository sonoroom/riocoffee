import React from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export interface ProductProps {
  id: string;
  name: string;
  description?: string;
  price?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isFavorite?: boolean;
}

interface ProductCardProps {
  product: ProductProps;
  isPromotional?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product,
  isPromotional = false
}) => {
  return (
    <Card 
      isPressable
      as={Link}
      to={`/product/${product.id}`}
      shadow="none"
      className="card-hover overflow-visible"
    >
      <CardBody className="p-3 overflow-visible">
        <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {product.isNew && (
            <div className="absolute top-2 right-2 bg-secondary-500 text-white text-xs px-2 py-1 rounded-full">
              New
            </div>
          )}
          <Button
            isIconOnly
            size="sm"
            variant="flat"
            color="default"
            radius="full"
            className="absolute top-2 left-2 bg-white/70 backdrop-blur-md"
            aria-label={product.isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            {product.isFavorite ? (
              <Icon icon="lucide:heart-filled" className="text-red-500" />
            ) : (
              <Icon icon="lucide:heart" />
            )}
          </Button>
        </div>
        
        <div>
          <h3 className="font-medium text-foreground">{product.name}</h3>
          {product.price && (
            <p className="text-default-500 mt-1">
              {product.price.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2
              })}
            </p>
          )}
          {isPromotional && product.description && (
            <p className="mt-2 text-sm text-default-600 line-clamp-2">{product.description}</p>
          )}
        </div>
      </CardBody>
    </Card>
  );
};