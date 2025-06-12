import React from "react";
import { useParams } from "react-router-dom";
import { Breadcrumbs, BreadcrumbItem, Button, Tabs, Tab, Card, CardBody } from "@heroui/react";
import { Link } from "react-router-dom";
import { FeaturedProducts } from "../components/featured-products";
import { ProductProps } from "../components/product-card";
import { Icon } from "@iconify/react";

interface ParamTypes {
  id: string;
}

// In a real app, this would come from an API
const getProduct = (id: string) => {
  return {
    id,
    name: "Iced Salted Caramel Latte",
    description: "Our signature espresso combined with salted caramel syrup, milk, and ice for a perfectly balanced sweet and salty flavor. Topped with whipped cream and a caramel drizzle.",
    price: 5.50,
    image: "https://img.heroui.chat/image/food?w=600&h=600&u=iced-coffee-6",
    category: "cold-drinks",
    allergens: ["Milk"],
    nutritionalInfo: {
      calories: 320,
      protein: 8,
      fat: 14,
      carbs: 38,
      sugar: 35,
    },
    sizes: [
      { name: "Small", price: 5.50 },
      { name: "Medium", price: 6.25 },
      { name: "Large", price: 6.95 }
    ],
    milkOptions: [
      { name: "Whole Milk", default: true },
      { name: "Skim Milk", price: 0 },
      { name: "Oat Milk", price: 0.75 },
      { name: "Almond Milk", price: 0.75 },
      { name: "Soy Milk", price: 0.75 }
    ],
    extras: [
      { name: "Extra Shot", price: 0.95 },
      { name: "Extra Caramel", price: 0.50 },
      { name: "Whipped Cream", price: 0.75 }
    ]
  };
};

// Sample related products
const relatedProducts: ProductProps[] = [
  {
    id: "iced-latte",
    name: "Iced Latte",
    price: 4.75,
    image: "https://img.heroui.chat/image/food?w=400&h=400&u=iced-coffee-1",
    category: "cold-drinks"
  },
  {
    id: "iced-caramel",
    name: "Iced Caramel Macchiato",
    price: 5.25,
    image: "https://img.heroui.chat/image/food?w=400&h=400&u=iced-coffee-2",
    category: "cold-drinks"
  },
  {
    id: "iced-mocha",
    name: "Iced Mocha",
    price: 5.50,
    image: "https://img.heroui.chat/image/food?w=400&h=400&u=iced-coffee-3",
    category: "cold-drinks"
  },
  {
    id: "cold-brew",
    name: "Cold Brew",
    price: 4.95,
    image: "https://img.heroui.chat/image/food?w=400&h=400&u=cold-brew-1",
    category: "cold-drinks"
  }
];

export const ProductDetail: React.FC = () => {
  const { id } = useParams<ParamTypes>();
  const [selectedSize, setSelectedSize] = React.useState<string>("Small");
  const [selectedMilk, setSelectedMilk] = React.useState<string>("Whole Milk");
  const [selectedExtras, setSelectedExtras] = React.useState<string[]>([]);
  const [quantity, setQuantity] = React.useState(1);
  
  // Get product data
  const product = getProduct(id);
  
  // Calculate price based on selections
  const basePrice = product.sizes.find(size => size.name === selectedSize)?.price || product.price;
  const milkPrice = product.milkOptions.find(milk => milk.name === selectedMilk)?.price || 0;
  const extrasPrice = product.extras
    .filter(extra => selectedExtras.includes(extra.name))
    .reduce((total, extra) => total + extra.price, 0);
  
  const totalPrice = (basePrice + milkPrice + extrasPrice) * quantity;
  
  // Handle extras toggle
  const handleExtraToggle = (extraName: string) => {
    if (selectedExtras.includes(extraName)) {
      setSelectedExtras(selectedExtras.filter(name => name !== extraName));
    } else {
      setSelectedExtras([...selectedExtras, extraName]);
    }
  };
  
  // Handle quantity change
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs className="mb-6">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/menu">Menu</BreadcrumbItem>
          <BreadcrumbItem href={`/menu/${product.category}`}>{product.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</BreadcrumbItem>
          <BreadcrumbItem>{product.name}</BreadcrumbItem>
        </Breadcrumbs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div>
            <h1 className="text-3xl font-serif font-semibold mb-2">{product.name}</h1>
            <p className="text-default-600 mb-6">{product.description}</p>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="text-2xl font-semibold">
                {totalPrice.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 2
                })}
              </div>
              
              <div className="text-xs px-2 py-1 bg-primary-100 text-primary-600 rounded-full">
                {product.allergens.length > 0 && (
                  <span>Contains: {product.allergens.join(', ')}</span>
                )}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Size</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <Button
                    key={size.name}
                    color={selectedSize === size.name ? "primary" : "default"}
                    variant={selectedSize === size.name ? "solid" : "bordered"}
                    className="px-6"
                    onPress={() => setSelectedSize(size.name)}
                  >
                    {size.name}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Milk</h3>
              <div className="flex flex-wrap gap-3">
                {product.milkOptions.map((milk) => (
                  <Button
                    key={milk.name}
                    color={selectedMilk === milk.name ? "primary" : "default"}
                    variant={selectedMilk === milk.name ? "solid" : "bordered"}
                    className="px-4"
                    onPress={() => setSelectedMilk(milk.name)}
                  >
                    {milk.name}
                    {milk.price > 0 && ` (+$${milk.price.toFixed(2)})`}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Extras</h3>
              <div className="flex flex-wrap gap-3">
                {product.extras.map((extra) => (
                  <Button
                    key={extra.name}
                    color={selectedExtras.includes(extra.name) ? "primary" : "default"}
                    variant={selectedExtras.includes(extra.name) ? "solid" : "bordered"}
                    className="px-4"
                    onPress={() => handleExtraToggle(extra.name)}
                  >
                    {extra.name} (+${extra.price.toFixed(2)})
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <Button
                  isIconOnly
                  variant="bordered"
                  onPress={decreaseQuantity}
                  isDisabled={quantity <= 1}
                >
                  <Icon icon="lucide:minus" />
                </Button>
                <span className="text-xl font-semibold min-w-[40px] text-center">
                  {quantity}
                </span>
                <Button
                  isIconOnly
                  variant="bordered"
                  onPress={increaseQuantity}
                >
                  <Icon icon="lucide:plus" />
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button
                color="primary"
                size="lg"
                className="font-medium"
                startContent={<Icon icon="lucide:shopping-cart" />}
              >
                Add to Cart
              </Button>
              <Button
                color="primary"
                variant="flat"
                size="lg"
                className="font-medium"
                startContent={<Icon icon="lucide:heart" />}
              >
                Add to Favorites
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <Tabs aria-label="Product information" color="primary" variant="underlined">
            <Tab key="nutrition" title="Nutritional Information">
              <Card shadow="none" className="mt-4">
                <CardBody>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                    <div className="border border-default-200 rounded-md p-4 text-center">
                      <div className="text-default-500 text-sm mb-1">Calories</div>
                      <div className="font-semibold text-lg">{product.nutritionalInfo.calories}</div>
                    </div>
                    <div className="border border-default-200 rounded-md p-4 text-center">
                      <div className="text-default-500 text-sm mb-1">Protein</div>
                      <div className="font-semibold text-lg">{product.nutritionalInfo.protein}g</div>
                    </div>
                    <div className="border border-default-200 rounded-md p-4 text-center">
                      <div className="text-default-500 text-sm mb-1">Fat</div>
                      <div className="font-semibold text-lg">{product.nutritionalInfo.fat}g</div>
                    </div>
                    <div className="border border-default-200 rounded-md p-4 text-center">
                      <div className="text-default-500 text-sm mb-1">Carbs</div>
                      <div className="font-semibold text-lg">{product.nutritionalInfo.carbs}g</div>
                    </div>
                    <div className="border border-default-200 rounded-md p-4 text-center">
                      <div className="text-default-500 text-sm mb-1">Sugar</div>
                      <div className="font-semibold text-lg">{product.nutritionalInfo.sugar}g</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-sm text-default-500">
                    <p>The nutritional information is based on our standard recipes. Variations may occur due to:</p>
                    <ul className="list-disc ml-6 mt-2">
                      <li>Customization of the order</li>
                      <li>Substitution of ingredients</li>
                      <li>Regional and seasonal differences in ingredients</li>
                      <li>Rounding of values according to regulatory requirements</li>
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="allergens" title="Allergens">
              <Card shadow="none" className="mt-4">
                <CardBody>
                  <h3 className="font-semibold text-lg mb-4">Allergen Information</h3>
                  <p className="mb-4 text-default-600">
                    This product contains the following allergens:
                  </p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {product.allergens.map((allergen) => (
                      <div key={allergen} className="border border-default-200 rounded-md p-4 flex items-center gap-3">
                        <Icon icon="lucide:alert-circle" className="text-warning" />
                        <span className="font-medium">{allergen}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-sm text-default-500">
                    <p className="font-medium">Important allergen notice:</p>
                    <p className="mt-2">
                      We handle various ingredients in our kitchens and cannot guarantee that any product is completely free from allergens. 
                      Cross-contamination may occur between products.
                    </p>
                    <p className="mt-2">
                      If you have a food allergy or intolerance, please speak to our staff before ordering.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
        
        <FeaturedProducts
          title="You may also like"
          products={relatedProducts}
          viewAllLink="/menu/cold-drinks"
          viewAllText="View all cold drinks"
        />
      </div>
    </div>
  );
};