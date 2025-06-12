import React from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

interface DealProps {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  originalPrice: number;
  validUntil: string;
  isAppOnly?: boolean;
}

export const Deals: React.FC = () => {
  const deals: DealProps[] = [
    {
      id: "breakfast-combo",
      title: "Breakfast Combo",
      description: "Any breakfast sandwich with a medium coffee of your choice.",
      image: "https://img.heroui.chat/image/food?w=600&h=400&u=breakfast-combo-1",
      price: 7.99,
      originalPrice: 9.95,
      validUntil: "2023-12-31",
      isAppOnly: true
    },
    {
      id: "summer-fika",
      title: "Summer Fika",
      description: "Any iced coffee with a pastry of your choice.",
      image: "https://img.heroui.chat/image/food?w=600&h=400&u=iced-coffee-pastry-1",
      price: 6.99,
      originalPrice: 8.95,
      validUntil: "2023-09-30"
    },
    {
      id: "lunch-combo",
      title: "Lunch Combo",
      description: "Any sandwich with a medium drink of your choice.",
      image: "https://img.heroui.chat/image/food?w=600&h=400&u=sandwich-combo-1",
      price: 9.99,
      originalPrice: 12.95,
      validUntil: "2023-12-31",
      isAppOnly: true
    },
    {
      id: "coffee-pastry",
      title: "Coffee & Pastry",
      description: "Any hot coffee with a pastry of your choice.",
      image: "https://img.heroui.chat/image/food?w=600&h=400&u=coffee-pastry-1",
      price: 5.99,
      originalPrice: 7.95,
      validUntil: "2023-12-31"
    },
    {
      id: "family-bundle",
      title: "Family Bundle",
      description: "Four beverages of your choice with four pastries.",
      image: "https://img.heroui.chat/image/food?w=600&h=400&u=coffee-pastry-set-1",
      price: 24.99,
      originalPrice: 32.95,
      validUntil: "2023-12-31",
      isAppOnly: true
    },
    {
      id: "dessert-deal",
      title: "Sweet Treat Deal",
      description: "Buy one dessert, get the second at 50% off.",
      image: "https://img.heroui.chat/image/food?w=600&h=400&u=desserts-1",
      price: 0,
      originalPrice: 0,
      validUntil: "2023-09-30"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-16">
      <div 
        className="relative h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(https://img.heroui.chat/image/food?w=1200&h=600&u=coffee-shop-1)` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Special Deals & Offers
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Enjoy our delicious coffee and food at great prices with these limited-time offers
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <Card key={deal.id} className="overflow-hidden">
              <CardBody className="p-0">
                <div className="relative h-48">
                  <img 
                    src={deal.image} 
                    alt={deal.title} 
                    className="w-full h-full object-cover"
                  />
                  {deal.isAppOnly && (
                    <div className="absolute top-0 right-0 bg-primary-600 text-white text-sm px-3 py-1">
                      App Only
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 bg-secondary-600 text-white text-sm px-3 py-1">
                    Save {Math.round((1 - deal.price / deal.originalPrice) * 100)}%
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{deal.title}</h3>
                  <p className="text-default-600 mb-4">{deal.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    {deal.price > 0 ? (
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-semibold">
                          ${deal.price.toFixed(2)}
                        </span>
                        <span className="text-default-400 line-through text-sm">
                          ${deal.originalPrice.toFixed(2)}
                        </span>
                      </div>
                    ) : (
                      <div className="text-xl font-semibold">Special Offer</div>
                    )}
                    <div className="text-xs text-default-500">
                      Valid until {new Date(deal.validUntil).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                  
                  <Button
                    as={Link}
                    to={`/deals/${deal.id}`}
                    color="primary"
                    className="w-full font-medium"
                  >
                    View Deal
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-primary-50 rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-serif font-semibold mb-4">
                Get Exclusive Deals in Our App
              </h2>
              <p className="text-default-600 mb-6">
                Download our app to access exclusive deals, earn rewards with every purchase, and skip the line with mobile ordering.
              </p>
              <div className="flex gap-4">
                <a href="#" className="block">
                  <img 
                    src="https://img.heroui.chat/image/ai?w=140&h=48&u=appstore" 
                    alt="Download on App Store" 
                    className="h-12"
                  />
                </a>
                <a href="#" className="block">
                  <img 
                    src="https://img.heroui.chat/image/ai?w=140&h=48&u=googleplay" 
                    alt="Get it on Google Play" 
                    className="h-12"
                  />
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://img.heroui.chat/image/ai?w=300&h=600&u=coffee-app-screen" 
                alt="Rio Coffee App" 
                className="max-h-72"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-semibold mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4 max-w-3xl">
            <Card shadow="sm">
              <CardBody>
                <h3 className="text-lg font-semibold">How do I redeem these deals?</h3>
                <p className="text-default-600 mt-2">
                  You can redeem these deals by showing the offer in our app or mentioning it to our barista when placing your order. App-only deals must be redeemed through our mobile app.
                </p>
              </CardBody>
            </Card>
            
            <Card shadow="sm">
              <CardBody>
                <h3 className="text-lg font-semibold">Can deals be combined with other promotions?</h3>
                <p className="text-default-600 mt-2">
                  Deals cannot be combined with other promotions, discounts, or offers unless explicitly stated.
                </p>
              </CardBody>
            </Card>
            
            <Card shadow="sm">
              <CardBody>
                <h3 className="text-lg font-semibold">Are deals available at all locations?</h3>
                <p className="text-default-600 mt-2">
                  Most deals are available at all Rio Coffee locations, but some may be location-specific. Please check the deal details or ask our staff for more information.
                </p>
              </CardBody>
            </Card>
            
            <Card shadow="sm">
              <CardBody>
                <h3 className="text-lg font-semibold">How often are new deals added?</h3>
                <p className="text-default-600 mt-2">
                  We add new deals regularly, especially for seasonal items. Subscribe to our newsletter or check our app for the latest offers.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};