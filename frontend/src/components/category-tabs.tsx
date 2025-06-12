import React from "react";
import { Tabs, Tab } from "@heroui/react";
import { useHistory, useLocation } from "react-router-dom";

interface Category {
  key: string;
  title: string;
}

interface CategoryTabsProps {
  categories: Category[];
  baseUrl?: string;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({ 
  categories,
  baseUrl = "/menu"
}) => {
  const history = useHistory();
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Extract category from the current path
  const pathParts = currentPath.split("/");
  const currentCategory = pathParts.length > 2 ? pathParts[2] : "";
  
  const handleSelectionChange = (key: React.Key) => {
    if (key === "all") {
      history.push(baseUrl);
    } else {
      history.push(`${baseUrl}/${key}`);
    }
  };

  return (
    <div className="overflow-auto pb-2">
      <Tabs 
        aria-label="Categories" 
        color="primary"
        variant="underlined"
        selectedKey={currentCategory || "all"}
        onSelectionChange={handleSelectionChange}
        className="min-w-max"
      >
        <Tab key="all" title="ALL ITEMS" />
        {categories.map((category) => (
          <Tab key={category.key} title={category.title.toUpperCase()} />
        ))}
      </Tabs>
    </div>
  );
};