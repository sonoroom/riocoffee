import React from "react";
import { Card, CardBody, Button, Tabs, Tab } from "@heroui/react";
import { ProductCard, ProductProps } from "../components/product-card";
import { Icon } from "@iconify/react";

export const Gifts: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  
  const giftProducts: Record<string, ProductProps[]> = {
    "gift-cards": [
      {
        id: "gift-card-25",
        name: "Gift Card $25",
        price: 25,
        image: "https://img.heroui.chat/image/ai?w=400&h=400&u=coffee-gift-card-1",
        category: "gift-cards"
      },
      {
        id: "gift-card-50",
        name: "Gift Card $50",
        price: 50,
        image: "https://img.heroui.chat/image/ai?w=400&h=400&u=coffee-gift-card-2",
        category: "gift-cards"
      },
      {
        id: "gift-card-100",
        name: "Gift Card $100",
        price: 100,
        image: "https://img.heroui.chat/image/ai?w=400&h=400&u=coffee-gift-card-3",
        category: "gift-cards"
      }
    ],
    "coffee-beans": [
      {
        id: "house-blend",
        name: "House Blend Coffee Beans",
        price: 14.99,
        image: "https://img.heroui.chat/image/food?w=400&h=400&u=coffee-beans-1",
        category: "coffee-beans"
      },
      {
        id: "dark-roast",
        name: "Dark Roast Coffee Beans",
        price: 15.99,
        image: "https://img.heroui.chat/image/food?w=400&h=400&u=coffee-beans-2",
        category: "coffee-beans"
      },
      {
        id: "decaf-blend",
        name: "Decaf Blend Coffee Beans",
        price: 16.99,
        image: "https://img.heroui.chat/image/food?w=400&h=400&u=coffee-beans-3",
        category: "coffee-beans",
        isNew: true
      },
      {
        id: "single-origin",
        name: "Single Origin Ethiopian",
        price: 18.99,
        image: "https://img.heroui.chat/image/food?w=400&h=400&u=coffee-beans-4",
        category: "coffee-beans"
      }
    ],
    "brewing": [
      {
        id: "french-press",
        name: "French Press",
        price: 29.99,
        image: "https://img.heroui.chat/image/ai?w=400&h=400&u=french-press",
        category: "brewing"
      },
      {
        id: "pour-over",
        name: "Pour Over Kit",
        price: 34.99,
        image: "https://img.heroui.chat/image/ai?w=400&h=400&u=pour-over",
        category: "brewing",
        isNew: true
      },
      {
        id: "aeropress",
        name: "AeroPress Coffee Maker",
        price: 39.99,
        image: "https://img.heroui.chat/image/ai?w=400&h=400&u=aeropress",
        category: "brewing"
      }
    ],
    "merchandise": [
      {
        id: "coffee-mug",
        name: "Rio Coffee Ceramic Mug",
        price: 12.99,
        image: "https://img.heroui.chat/image/ai?w=400&h=400&u=coffee-mug",
        category: "merchandise"
      },
      {
        id: "travel-tumbler",
        name: "Travel Tumbler",
        price: 24.99,
        image: "https://img.heroui.chat/image/ai?w=400&h=400&u=travel-mug",
        category: "merchandise"
      },
      {
        id: "tshirt",
        name: "Rio Coffee T-Shirt",
        price: 22.99,
        image: "https://img.heroui.chat/image/ai?w=400&h=400&u=coffee-tshirt",
        category: "merchandise"
      },
      {
        id: "tote-bag",
        name: "Canvas Tote Bag",
        price: 18.99,
        image: "https://img.heroui.chat/image/ai?w=400&h=400&u=tote-bag",
        category: "merchandise",
        isNew: true
      }
    ],
    "gift-sets": [
      {
        id: "coffee-lover-kit",
        name: "Coffee Lover's Kit",
        price: 49.99,
        image: "https://img.heroui.chat/image/ai?w=400&h=400&u=coffee-gift-set-1",
        category: "gift-sets",
        description: "House blend beans, ceramic mug, and a bag of cookies."
      },
      {
        id: "brew-master-set",
        name: "Brew Master Set",
        price: 79.99,
        image: "https://img.heroui.chat/image/ai?w=400&h=400&u=coffee-gift-set-2",
        category: "gift-sets",
        description: "Pour over kit, premium beans, and a temperature-controlled kettle.",
        isNew: true
      },
      {
        id: "deluxe-gift-box",
        name: "Deluxe Gift Box",
        price: 99.99,
        image: "https://img.heroui.chat/image/ai?w=400&h=400&u=coffee-gift-set-3",
        category: "gift-sets",
        description: "Three premium coffee varieties, branded mug, and artisan chocolate."
      }
    ]
  };

  // Combine all products for "all" category
  const allProducts = Object.values(giftProducts).flat();

  // Get products based on selected category
  const displayProducts = selectedCategory === "all" 
    ? allProducts 
    : giftProducts[selectedCategory] || [];

  return (
    <div className="min-h-screen bg-background pb-16">
      <div 
        className="relative h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(https://img.heroui.chat/image/food?w=1200&h=600&u=coffee-gifts-1)` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Perfect Gifts for Coffee Lovers
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Browse our selection of high-quality coffee beans, brewing equipment, and branded merchandise
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs 
          aria-label="Gift Categories" 
          color="primary"
          selectedKey={selectedCategory}
          onSelectionChange={setSelectedCategory as any}
          variant="underlined"
          className="mb-8"
        >
          <Tab key="all" title="All Gifts" />
          <Tab key="gift-cards" title="Gift Cards" />
          <Tab key="coffee-beans" title="Coffee Beans" />
          <Tab key="brewing" title="Brewing Equipment" />
          <Tab key="merchandise" title="Merchandise" />
          <Tab key="gift-sets" title="Gift Sets" />
        </Tabs>

        {selectedCategory === "all" && (
          <div className="mb-12">
            <div className="bg-primary-50 p-8 rounded-lg">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-serif font-semibold mb-4">
                    Gift Cards - Give the Gift of Choice
                  </h2>
                  <p className="text-default-600 mb-6">
                    Let them choose their favorite coffee and treats with our digital or physical gift cards. Available in various denominations and designs, our gift cards are perfect for any occasion.
                  </p>
                  <Button
                    color="primary"
                    variant="solid"
                    onPress={() => setSelectedCategory("gift-cards")}
                  >
                    Explore Gift Cards
                  </Button>
                </div>
                <div className="md:w-1/3">
                  <img 
                    src="https://img.heroui.chat/image/ai?w=400&h=300&u=coffee-gift-cards-display" 
                    alt="Gift Cards" 
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              isPromotional={selectedCategory === "gift-sets"}
            />
          ))}
        </div>

        {selectedCategory === "all" && (
          <>
            <div className="mt-16">
              <h2 className="text-3xl font-serif font-semibold mb-8">
                Curated Gift Collections
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="overflow-hidden">
                  <CardBody className="p-0">
                    <div className="h-48">
                      <img 
                        src="https://img.heroui.chat/image/ai?w=400&h=250&u=coffee-beans-gift-collection" 
                        alt="Coffee Bean Sampler" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-semibold mb-2">Coffee Bean Sampler</h3>
                      <p className="text-default-500 mb-4">
                        Three distinct coffee blends from different regions for the true coffee connoisseur.
                      </p>
                      <Button
                        color="primary"
                        variant="flat"
                        onPress={() => setSelectedCategory("coffee-beans")}
                      >
                        View Collection
                      </Button>
                    </div>
                  </CardBody>
                </Card>
                
                <Card className="overflow-hidden">
                  <CardBody className="p-0">
                    <div className="h-48">
                      <img 
                        src="https://img.heroui.chat/image/ai?w=400&h=250&u=home-brewing-kit" 
                        alt="Home Brewing Starter Kit" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-semibold mb-2">Home Brewing Starter Kit</h3>
                      <p className="text-default-500 mb-4">
                        Everything needed to start brewing café-quality coffee at home.
                      </p>
                      <Button
                        color="primary"
                        variant="flat"
                        onPress={() => setSelectedCategory("brewing")}
                      >
                        View Collection
                      </Button>
                    </div>
                  </CardBody>
                </Card>
                
                <Card className="overflow-hidden">
                  <CardBody className="p-0">
                    <div className="h-48">
                      <img 
                        src="https://img.heroui.chat/image/ai?w=400&h=250&u=branded-merchandise" 
                        alt="Branded Merchandise" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-semibold mb-2">Rio Coffee Swag</h3>
                      <p className="text-default-500 mb-4">
                        Show your love for our coffee with branded merchandise and apparel.
                      </p>
                      <Button
                        color="primary"
                        variant="flat"
                        onPress={() => setSelectedCategory("merchandise")}
                      >
                        View Collection
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
            
            <div className="mt-16">
              <div className="bg-gradient-to-r from-secondary-600 to-primary-600 text-white p-8 rounded-lg">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-serif font-semibold mb-4">
                      Custom Corporate Gifts
                    </h2>
                    <p className="text-white/90 mb-6">
                      Looking for gifts for your team or clients? We offer custom corporate gift packages with your branding. Perfect for employee appreciation, client gifts, or event giveaways.
                    </p>
                    <Button
                      color="default"
                      className="bg-white text-primary-600 font-medium"
                      endContent={<Icon icon="lucide:arrow-right" />}
                    >
                      Contact for Corporate Orders
                    </Button>
                  </div>
                  <div className="md:w-1/3">
                    <img 
                      src="https://img.heroui.chat/image/ai?w=400&h=300&u=corporate-coffee-gifts" 
                      alt="Corporate Gifts" 
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-semibold mb-6 text-center">
            Gift Giving Made Easy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon="lucide:gift" width={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Choose Your Gift</h3>
              <p className="text-default-500">
                Browse our selection of coffee products, gift sets, or gift cards to find the perfect gift.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon="lucide:package" width={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Personalize It</h3>
              <p className="text-default-500">
                Add a personal note and choose gift wrapping options to make your gift special.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon="lucide:truck" width={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Swift Delivery</h3>
              <p className="text-default-500">
                We'll deliver directly to your recipient with care, or to you for personal giving.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-serif font-semibold mb-4">
            Need Help Choosing the Perfect Gift?
          </h2>
          <p className="text-default-600 mb-6 max-w-2xl mx-auto">
            Our gift experts are here to help you select the perfect present for any coffee lover in your life.
          </p>
          <Button 
            color="primary" 
            className="font-medium"
            endContent={<Icon icon="lucide:message-circle" />}
          >
            Chat with a Gift Expert
          </Button>
        </div>
      </div>
    </div>
  );
};