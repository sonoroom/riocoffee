import React from "react";
import { Input } from "@heroui/react";
import { CategoryTabs } from "../components/category-tabs";
import { ProductCard, ProductProps } from "../components/product-card";
import { Icon } from "@iconify/react";

export const Menu: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const categories = [
    { key: "app-deals", title: "App deals" },
    { key: "breakfast", title: "Breakfast" },
    { key: "hot-drinks", title: "Hot drinks" },
    { key: "cold-drinks", title: "Cold drinks" },
    { key: "pastries", title: "Pastries" },
    { key: "food", title: "Food" },
    { key: "merchandise", title: "Merchandise" }
  ];

  // Sample products for each category
  const appDeals: ProductProps[] = [
    {
      id: "breakfast-combo",
      name: "Breakfast",
      price: 7.99,
      image: "https://img.heroui.chat/image/food?w=400&h=400&u=breakfast-combo-1",
      category: "app-deals"
    },
    {
      id: "lunch-combo",
      name: "Lunch",
      price: 9.99,
      image: "https://img.heroui.chat/image/food?w=400&h=400&u=sandwich-combo-1",
      category: "app-deals"
    },
    {
      id: "fika-combo-1",
      name: "Fika",
      price: 6.99,
      image: "https://img.heroui.chat/image/food?w=400&h=400&u=pastry-coffee-combo-1",
      category: "app-deals"
    },
    {
      id: "summer-fika",
      name: "Summer Fika",
      price: 7.99,
      image: "https://img.heroui.chat/image/food?w=400&h=400&u=iced-coffee-pastry-1",
      category: "app-deals"
    },
    {
      id: "fika-club-combo",
      name: "Fika Club Combo",
      price: 12.99,
      image: "https://img.heroui.chat/image/food?w=400&h=400&u=coffee-pastry-set-1",
      category: "app-deals",
      isNew: true
    }
  ];

  const breakfastItems: ProductProps[] = [
    {
      id: "scone",
      name: "Scone",
      price: 3.75,
      image: "https://img.heroui.chat/image/food?w=400&h=400&u=scone-1",
      category: "breakfast"
    },
    {
      id: "gluten-free-roll",
      name: "Gluten-free roll",
      price: 4.25,
      image: "https://img.heroui.chat/image/food?w=400&h=400&u=bread-roll-1",
      category: "breakfast"
    },
    {
      id: "sandwich-tomato",
      name: "Sourdough Roll Tomato & Avocado",
      price: 6.95,
      image: "https://img.heroui.chat/image/food?w=400&h=400&u=sandwich-1",
      category: "breakfast"
    },
    {
      id: "sandwich-cheese",
      name: "Sourdough roll cheese & Vegetable",
      price: 6.75,
      image: "https://img.heroui.chat/image/food?w=400&h=400&u=sandwich-2",
      category: "breakfast"
    },
    {
      id: "sandwich-turkey",
      name: "Sourdough roll cheese & Turkey",
      price: 7.25,
      image: "https://img.heroui.chat/image/food?w=400&h=400&u=sandwich-3",
      category: "breakfast"
    },
    {
      id: "greek-yogurt",
      name: "Greek Yoghurt Agave",
      price: 5.75,
      image: "https://img.heroui.chat/image/food?w=400&h=400&u=yogurt-1",
      category: "breakfast"
    }
  ];

  const hotDrinks: ProductProps[] = [
    {
      id: "oat-latte-caramel",
      name: "Oats Latte Caramel",
      price: 4.95,
      image: "https://img.heroui.chat/image/food?w=400&h=400&u=hot-latte-1",
      category: "hot-drinks",
      isFavorite: true
    },
    {
      id: "oat-latte-vanilla",
      name: "Oats Latte Vanilla",
      price: 4.95,
      image: "https://img.heroui.chat/image/food?w=400&h=400&u=hot-latte-2",
      category: "hot-drinks"
    },
    {
      id: "salted-caramel-latte",
      name: "Salted Caramel Latte",
      price: 5.25,
      image: "https://img.heroui.chat/image/food?w=400&h=400&u=hot-latte-3",
      category: "hot-drinks",
      isNew: true
    },
    {
      id: "caramel-latte",
      name: "Caramel Latte",
      price: 4.75,
      image: "https://img.heroui.chat/image/food?w=400&h=400&u=hot-latte-4",
      category: "hot-drinks"
    },
    {
      id: "vanilla-latte",
      name: "Vanilla Latte",
      price: 4.75,
      image: "https://img.heroui.chat/image/food?w=400&h=400&u=hot-latte-5",
      category: "hot-drinks"
    },
    {
      id: "cafe-latte",
      name: "Caffè Latte",
      price: 4.50,
      image: "https://img.heroui.chat/image/food?w=400&h=400&u=hot-latte-6",
      category: "hot-drinks"
    }
  ];

  const coldDrinks: ProductProps[] = [
    {
      id: "summer-iced-latte",
      name: "Summer Iced Latte",
      price: 4.95,
      image: "https://img.heroui.chat/image/food?w=400&h=400&u=iced-coffee-1",
      category: "cold-drinks",
      isNew: true
    },
    {
      id: "iced-matcha",
      name: "Summer Iced Matcha",
      price: 5.50,
      image: "https://img.heroui.chat/image/food?w=400&h=400&u=iced-matcha-1",
      category: "cold-drinks"
    },
    {
      id: "iced-mango",
      name: "Iced Tea Mango Mojito",
      price: 4.75,
      image: "https://img.heroui.chat/image/food?w=400&h=400&u=iced-tea-1",
      category: "cold-drinks"
    },
    {
      id: "iced-dusty-latte",
      name: "Iced Dusty Latte Vanilla",
      price: 5.25,
      image: "https://img.heroui.chat/image/food?w=400&h=400&u=iced-coffee-4",
      category: "cold-drinks"
    },
    {
      id: "iced-dusty-caramel",
      name: "Iced Dusty Latte Caramel",
      price: 5.25,
      image: "https://img.heroui.chat/image/food?w=400&h=400&u=iced-coffee-5",
      category: "cold-drinks"
    },
    {
      id: "ice-latte-salted",
      name: "Ice Latte Salted Caramel",
      price: 5.50,
      image: "https://img.heroui.chat/image/food?w=400&h=400&u=iced-coffee-6",
      category: "cold-drinks",
      isFavorite: true
    }
  ];

  // Combine all products
  const allProducts = [
    ...appDeals,
    ...breakfastItems,
    ...hotDrinks,
    ...coldDrinks
  ];

  // Filter products based on search query
  const filteredProducts = searchQuery 
    ? allProducts.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allProducts;

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-semibold mb-4">Menu</h1>
        <p className="text-default-600 mb-8">
          We handle different products and allergens in our Coffee Shops that may come into contact with each other.
        </p>

        <div className="relative mb-8">
          <Input
            placeholder="Search for products..."
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

        <CategoryTabs categories={categories} />

        <section className="mt-8">
          <h2 className="text-2xl font-serif font-semibold mb-6">App deals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {appDeals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-serif font-semibold mb-6">Breakfast</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {breakfastItems.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
            {breakfastItems.slice(3, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="/menu/breakfast" className="inline-block px-6 py-2 border border-default-200 rounded-full text-default-600 hover:bg-default-100 transition-colors">
              VIEW ALL (8)
            </a>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-serif font-semibold mb-6">Hot drinks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {hotDrinks.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
            {hotDrinks.slice(3, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="/menu/hot-drinks" className="inline-block px-6 py-2 border border-default-200 rounded-full text-default-600 hover:bg-default-100 transition-colors">
              VIEW ALL (12)
            </a>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-serif font-semibold mb-6">Cold drinks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {coldDrinks.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
            {coldDrinks.slice(3, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="/menu/cold-drinks" className="inline-block px-6 py-2 border border-default-200 rounded-full text-default-600 hover:bg-default-100 transition-colors">
              VIEW ALL (15)
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};