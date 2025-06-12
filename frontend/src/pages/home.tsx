import React from "react";
import { HeroSection } from "../components/hero-section";
import { FeaturedProducts } from "../components/featured-products";
import { PromotionalBanner } from "../components/promotional-banner";
import { NewsletterSignup } from "../components/newsletter-signup";
import { ProductProps } from "../components/product-card";
import { Card, CardBody, Button } from "@heroui/react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export const Home: React.FC = () => {
  // Sample featured products
  const seasonalProducts: ProductProps[] = [
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
      id: "iced-caramel",
      name: "Iced Caramel Latte",
      price: 5.25,
      image: "https://img.heroui.chat/image/food?w=400&h=400&u=iced-coffee-2",
      category: "cold-drinks"
    }
  ];

  // Sample breakfast products
  const breakfastProducts: ProductProps[] = [
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
      id: "sandwich-1",
      name: "Sourdough Roll Tomato & Avocado",
      price: 6.95,
      image: "https://img.heroui.chat/image/food?w=400&h=400&u=sandwich-1",
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

  // Updated Hero slides data
  const heroSlides = [
    {
      title: "Горячее или холодное?",
      subtitle: "Неважно, любите ли вы горячий кофе или предпочитаете что-то холодное и освежающее, мы найдем для вас идеальный напиток.",
      ctaText: "ОТКРОЙ ВКУС ЛЕТА",
      ctaLink: "/menu/cold-drinks",
      backgroundImage: "https://i.postimg.cc/RCj93xMh/image.jpg"
    },
    {
      title: "Fresh Pastries Daily",
      subtitle: "Start your day with our freshly baked pastries, made with high-quality ingredients every morning.",
      ctaText: "ЗАКАЖИ СЕЙЧАС",
      ctaLink: "/menu/breakfast",
      backgroundImage: "https://i.postimg.cc/hP7wNJRP/image.jpg"
    },
    {
      title: "Join Our Fika Club",
      subtitle: "Become a member to enjoy exclusive benefits, rewards, and special offers on your favorite drinks.",
      ctaText: "BECOME A MEMBER",
      ctaLink: "/membership",
      backgroundImage: "https://i.postimg.cc/nrX5Frs2/image.jpg"
    }
  ];

  return (
    <div>
      <HeroSection slides={heroSlides} />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-heading"></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-default-600 mb-4">

              </p>
              <p className="text-default-600 mb-8">

              </p>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://img.heroui.chat/image/food?w=400&h=400&u=strawberry-coffee-1"
                  alt="Strawberry coffee"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="https://img.heroui.chat/image/food?w=400&h=400&u=iced-coffee-3"
                  alt="Iced coffee"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
            <div>
              <p className="text-default-600 mb-4">
                This summer, we are serving fresh fruit and freshly brewed coffee over crushed ice cubes with incredible flavours.
              </p>
              <p className="text-default-600 mb-6">
                We have everything you need this summer, and more.
              </p>
              <img
                src="https://img.heroui.chat/image/food?w=600&h=400&u=summer-drinks-1"
                alt="Summer drinks"
                className="w-full h-64 object-cover rounded-lg"
              />
              <Button
                as={Link}
                to="/news"
                color="primary"
                variant="flat"
                className="mt-6 font-medium"
              >
                READ MORE HERE
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedProducts
        title="Something for every kind of weather"
        description="A refreshing iced Fika brings thoughts for every day in school, the taste of bitter chocolate pairs perfectly with cold brew, and will the rain ever stop? Celebrate with strawberry fresh!"
        products={seasonalProducts}
        viewAllLink="/menu/cold-drinks"
        viewAllText="VIEW MORE SUMMER FLAVORS"
      />
      
      <section className="bg-secondary-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Icon icon="lucide:heart" width={32} height={32} />
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6">
            Fika Moments
          </h2>
          <p className="mb-8 max-w-lg mx-auto">
            Sometimes, all it takes is a cup of coffee, a sweet pastry, and some good company to make life a little brighter.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              as={Link}
              to="/menu"
              variant="bordered"
              className="text-white border-white"
            >
              OUR MENU
            </Button>
            <Button
              as={Link}
              to="/membership"
              variant="solid"
              className="bg-white text-secondary-600"
            >
              JOIN FIKA CLUB
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="section-heading">Still Not a Member?</h2>
              <p className="text-default-600 mb-6">
                Download our app and join our membership program for exclusive offers and a free drink on your birthday! Plus, earn points for every purchase and get rewards for your coffee habit.
              </p>
              <Button
                as={Link}
                to="/membership"
                color="primary"
                className="mb-8 font-medium"
              >
                LEARN MORE ABOUT MEMBERSHIP
              </Button>
              
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
            
            <div className="flex justify-center items-center">
              <img 
                src="https://img.heroui.chat/image/ai?w=400&h=600&u=coffee-app-screen" 
                alt="Rio Coffee App" 
                className="max-h-96"
              />
            </div>
          </div>
        </div>
      </section>
      
      <PromotionalBanner
        title="Cater with us!"
        description="Elevate your next meeting, workshop, lunch, or event with our catering services. From fresh coffee to delicious pastries, we provide the perfect culinary touch to make your event special."
        image="https://img.heroui.chat/image/food?w=600&h=400&u=coffee-catering-1"
        ctaText="EXPLORE CATERING OPTIONS"
        ctaLink="/catering"
      />
      
      <PromotionalBanner
        title="Perfect Gifts for Coffee Lovers"
        description="Bring your best experience to our coffee lovers with high-quality coffee beans, brewing equipment, and merchandise. Our curated gifts make perfect presents for coffee enthusiasts."
        image="https://img.heroui.chat/image/food?w=600&h=400&u=coffee-gifts-1"
        ctaText="VIEW GIFTS"
        ctaLink="/gifts"
        imageOnRight={true}
      />
      
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Brew Your Future</h2>
          <p className="text-default-600 text-center mb-10 max-w-2xl mx-auto">
            Come and work with us! We're looking to grow in various areas, and if you're passionate about coffee and providing exceptional service, you're halfway there! Hope we'll be seeing you soon.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardBody>
                <h3 className="text-lg font-semibold mb-2">Barista</h3>
                <p className="text-default-500 mb-4">Full-time & Part-time</p>
                <p className="text-default-600 mb-6">
                  Craft exceptional coffee beverages and provide outstanding customer service.
                </p>
                <Button
                  as={Link}
                  to="/careers/barista"
                  color="primary"
                  variant="flat"
                  size="sm"
                  className="font-medium"
                >
                  View Position
                </Button>
              </CardBody>
            </Card>
            
            <Card>
              <CardBody>
                <h3 className="text-lg font-semibold mb-2">Shift Supervisor</h3>
                <p className="text-default-500 mb-4">Full-time</p>
                <p className="text-default-600 mb-6">
                  Lead a team of baristas and ensure smooth operations during your shift.
                </p>
                <Button
                  as={Link}
                  to="/careers/supervisor"
                  color="primary"
                  variant="flat"
                  size="sm"
                  className="font-medium"
                >
                  View Position
                </Button>
              </CardBody>
            </Card>
            
            <Card>
              <CardBody>
                <h3 className="text-lg font-semibold mb-2">Baker</h3>
                <p className="text-default-500 mb-4">Full-time</p>
                <p className="text-default-600 mb-6">
                  Create fresh pastries and bakery items for our customers to enjoy.
                </p>
                <Button
                  as={Link}
                  to="/careers/baker"
                  color="primary"
                  variant="flat"
                  size="sm"
                  className="font-medium"
                >
                  View Position
                </Button>
              </CardBody>
            </Card>
          </div>
          
          <div className="text-center mt-10">
            <Button
              as={Link}
              to="/careers"
              color="primary"
              radius="full"
              className="font-medium"
            >
              VIEW ALL OPENINGS
            </Button>
          </div>
        </div>
      </section>
      
      <NewsletterSignup />
    </div>
  );
};