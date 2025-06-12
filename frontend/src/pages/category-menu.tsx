import React from "react";
import { useParams } from "react-router-dom";
import { Input, Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { CategoryTabs } from "../components/category-tabs";
import { ProductCard, ProductProps } from "../components/product-card";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

interface ParamTypes {
  category: string;
}

export const CategoryMenu: React.FC = () => {
  const { category } = useParams<ParamTypes>();
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

  const categoryMap = {
    "app-deals": "App Deals",
    "breakfast": "Breakfast",
    "hot-drinks": "Hot Drinks",
    "cold-drinks": "Cold Drinks",
    "pastries": "Pastries",
    "food": "Food",
    "merchandise": "Merchandise"
  };

  // Sample products data - in a real app, this would be fetched from an API
  const productsData: Record<string, ProductProps[]> = {
    "app-deals": [
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
    ],
    "breakfast": [
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
      },
      {
        id: "breakfast-bagel",
        name: "Breakfast Bagel",
        price: 5.95,
        image: "https://img.heroui.chat/image/food?w=400&h=400&u=bagel-1",
        category: "breakfast"
      },
      {
        id: "egg-sandwich",
        name: "Egg & Cheese Sandwich",
        price: 6.50,
        image: "https://img.heroui.chat/image/food?w=400&h=400&u=sandwich-4",
        category: "breakfast"
      }
    ],
    "hot-drinks": [
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
      },
      {
        id: "americano",
        name: "Americano",
        price: 3.95,
        image: "https://img.heroui.chat/image/food?w=400&h=400&u=americano-1",
        category: "hot-drinks"
      },
      {
        id: "cappuccino",
        name: "Cappuccino",
        price: 4.50,
        image: "https://img.heroui.chat/image/food?w=400&h=400&u=cappuccino-1",
        category: "hot-drinks"
      },
      {
        id: "espresso",
        name: "Espresso",
        price: 2.95,
        image: "https://img.heroui.chat/image/food?w=400&h=400&u=espresso-1",
        category: "hot-drinks"
      }
    ],
    "cold-drinks": [
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
    ],
    "pastries": [],
    "food": [],
    "merchandise": []
  };

  const products = category && productsData[category] 
    ? productsData[category] 
    : [];

  // Filter products based on search query
  const filteredProducts = searchQuery 
    ? products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs className="mb-6">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/menu">Menu</BreadcrumbItem>
          <BreadcrumbItem>{category && categoryMap[category] || "Category"}</BreadcrumbItem>
        </Breadcrumbs>

        <h1 className="text-3xl font-serif font-semibold mb-8">
          {category && categoryMap[category] || "Products"}
        </h1>

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

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 mt-8">
            <Icon icon="lucide:coffee" className="mx-auto text-default-300 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-default-500">
              {searchQuery 
                ? "Try adjusting your search term." 
                : "We're brewing up some new items for this category. Check back soon!"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};