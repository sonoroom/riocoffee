import React from "react";
import { Card, CardBody, Button, Input } from "@heroui/react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  isFeatured?: boolean;
}

export const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [searchQuery, setSearchQuery] = React.useState("");
  
  const categories = [
    { key: "all", name: "All News" },
    { key: "company", name: "Company Updates" },
    { key: "products", name: "New Products" },
    { key: "sustainability", name: "Sustainability" },
    { key: "events", name: "Events" }
  ];
  
  const newsArticles: NewsArticle[] = [
    {
      id: "summer-menu-2023",
      title: "Summer Menu 2023 Has Arrived",
      excerpt: "Introducing our new summer menu with refreshing drinks and seasonal treats.",
      content: "Lorem ipsum dolor sit amet...",
      date: "2023-06-01",
      author: "Marketing Team",
      category: "products",
      image: "https://img.heroui.chat/image/food?w=800&h=400&u=summer-drinks-1",
      isFeatured: true
    },
    {
      id: "new-store-opening",
      title: "Grand Opening: Our 50th Location",
      excerpt: "We're excited to announce the opening of our 50th store in Downtown.",
      content: "Lorem ipsum dolor sit amet...",
      date: "2023-05-15",
      author: "Rio Coffee Team",
      category: "company",
      image: "https://img.heroui.chat/image/food?w=800&h=400&u=coffee-shop-1"
    },
    {
      id: "sustainable-packaging",
      title: "Transitioning to 100% Sustainable Packaging",
      excerpt: "Our commitment to reduce environmental impact with eco-friendly packaging solutions.",
      content: "Lorem ipsum dolor sit amet...",
      date: "2023-04-22",
      author: "Sustainability Team",
      category: "sustainability",
      image: "https://img.heroui.chat/image/food?w=800&h=400&u=eco-packaging-1"
    },
    {
      id: "coffee-festival",
      title: "Join Us at the Annual Coffee Festival",
      excerpt: "Rio Coffee will be showcasing our premium blends at this year's Coffee Festival.",
      content: "Lorem ipsum dolor sit amet...",
      date: "2023-03-30",
      author: "Events Team",
      category: "events",
      image: "https://img.heroui.chat/image/food?w=800&h=400&u=coffee-festival-1"
    },
    {
      id: "specialty-beans",
      title: "New Single-Origin Beans from Ethiopia",
      excerpt: "Introducing our limited edition Ethiopian Yirgacheffe beans with notes of blueberry and dark chocolate.",
      content: "Lorem ipsum dolor sit amet...",
      date: "2023-03-10",
      author: "Coffee Team",
      category: "products",
      image: "https://img.heroui.chat/image/food?w=800&h=400&u=coffee-beans-1"
    },
    {
      id: "barista-championships",
      title: "Our Baristas Win National Competition",
      excerpt: "Rio Coffee baristas take top honors at the National Barista Championships.",
      content: "Lorem ipsum dolor sit amet...",
      date: "2023-02-15",
      author: "Training Team",
      category: "company",
      image: "https://img.heroui.chat/image/food?w=800&h=400&u=barista-competition-1"
    },
    {
      id: "farmer-partnership",
      title: "New Direct Trade Partnership in Colombia",
      excerpt: "We've established a new partnership with coffee farmers in Colombia's Huila region.",
      content: "Lorem ipsum dolor sit amet...",
      date: "2023-01-20",
      author: "Sustainability Team",
      category: "sustainability",
      image: "https://img.heroui.chat/image/food?w=800&h=400&u=coffee-farm-1"
    }
  ];
  
  // Get featured article
  const featuredArticle = newsArticles.find(article => article.isFeatured);
  
  // Filter articles based on selected category and search query
  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-semibold mb-4">News & Updates</h1>
        <p className="text-default-600 mb-8">
          Stay up-to-date with the latest news, events, and product launches from Rio Coffee.
        </p>

        {featuredArticle && (
          <div className="mb-12">
            <Card className="overflow-hidden">
              <CardBody className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="h-64 md:h-auto">
                    <img 
                      src={featuredArticle.image} 
                      alt={featuredArticle.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="text-primary-600 font-medium text-sm mb-2">
                      FEATURED
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-3">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-default-500 mb-2">
                      {new Date(featuredArticle.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })} • {featuredArticle.author}
                    </p>
                    <p className="text-default-600 mb-6">
                      {featuredArticle.excerpt}
                    </p>
                    <Button
                      as={Link}
                      to={`/news/${featuredArticle.id}`}
                      color="primary"
                      variant="flat"
                      endContent={<Icon icon="lucide:arrow-right" />}
                    >
                      Read Full Article
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        )}
        
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="md:w-1/3">
            <Input
              placeholder="Search articles..."
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
          
          <div className="md:w-2/3">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.key}
                  color={selectedCategory === category.key ? "primary" : "default"}
                  variant={selectedCategory === category.key ? "solid" : "flat"}
                  size="sm"
                  onPress={() => setSelectedCategory(category.key)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredArticles
              .filter(article => !article.isFeatured)
              .map((article) => (
                <Card key={article.id} isPressable className="overflow-hidden">
                  <CardBody className="p-0">
                    <div>
                      <div className="h-48">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <div className="text-xs text-default-500 mb-2">
                          {new Date(article.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                        <p className="text-default-600 mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <Link 
                          to={`/news/${article.id}`}
                          className="text-primary-600 font-medium flex items-center gap-1 hover:underline"
                        >
                          Read More <Icon icon="lucide:arrow-right" className="text-sm" />
                        </Link>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Icon icon="lucide:search-x" className="mx-auto text-default-300 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-default-500 mb-6">
              We couldn't find any articles matching your criteria.
            </p>
            <Button
              variant="flat"
              color="primary"
              onPress={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
        
        <div className="mt-12 text-center">
          <Button
            variant="bordered"
            color="primary"
            className="px-8"
          >
            Load More
          </Button>
        </div>
        
        <div className="mt-16 bg-primary-50 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-serif font-semibold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-default-600 mb-6">
                Get the latest Rio Coffee news, product updates, and exclusive offers delivered directly to your inbox.
              </p>
              <div className="flex max-w-md">
                <Input 
                  placeholder="Enter your email address"
                  type="email"
                  className="border-default-200"
                />
                <Button color="primary" className="ml-2 font-medium">
                  Subscribe
                </Button>
              </div>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://img.heroui.chat/image/food?w=300&h=300&u=newsletter-coffee" 
                alt="Newsletter" 
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};