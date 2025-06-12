import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@heroui/react";

interface PromotionalBannerProps {
  title: string;
  description?: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  imageOnRight?: boolean;
}

export const PromotionalBanner: React.FC<PromotionalBannerProps> = ({
  title,
  description,
  image,
  ctaText,
  ctaLink,
  imageOnRight = false
}) => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${imageOnRight ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
          <div className="flex-1">
            <img 
              src={image} 
              alt={title} 
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <h2 className="section-heading">{title}</h2>
            {description && (
              <p className="text-default-600 mb-8">{description}</p>
            )}
            <Button
              as={Link}
              to={ctaLink}
              color="primary"
              radius="full"
              className="font-medium"
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};