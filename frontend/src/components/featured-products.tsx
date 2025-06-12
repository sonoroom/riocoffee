import React from "react";
import { ProductCard, ProductProps } from "./product-card";
import { Button } from "@heroui/react";
import { Link } from "react-router-dom";

interface FeaturedProductsProps {
  title: string;
  description?: string;
  products: ProductProps[];
  viewAllLink?: string;
  viewAllText?: string;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  title,
  description,
  products,
  viewAllLink = "/menu",
  viewAllText = "View all"
}) => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">{title}</h2>
        {description && (
          <p className="text-default-600 mb-8 max-w-2xl">{description}</p>
        )}
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {viewAllLink && (
          <div className="mt-10 text-center">
            <Button
              as={Link}
              to={viewAllLink}
              variant="bordered"
              color="primary"
              radius="full"
              className="font-medium"
            >
              {viewAllText}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};