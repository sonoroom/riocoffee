import React from "react";
import { Tabs, Tab } from "@heroui/react";

interface Category {
  key: string;
  title: string;
}

interface CategoryTabsProps {
  categories: Category[];
  selectedCategory?: string | null;
  onCategorySelect?: (category: string | null) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  selectedCategory = null,
  onCategorySelect
}) => {

  const handleSelectionChange = (key: React.Key) => {
    if (key === "all") {
      onCategorySelect?.(null);
    } else {
      onCategorySelect?.(key as string);
    }
  };

  return (
    <div className="overflow-auto pb-2">
      <Tabs
        aria-label="Categories"
        color="primary"
        variant="underlined"
        selectedKey={selectedCategory || "all"}
        onSelectionChange={handleSelectionChange}
        className="min-w-max"
      >
        <Tab key="all" title="Меню" />
        {categories.map((category) => (
          <Tab key={category.key} title={category.title.toUpperCase()} />
        ))}
      </Tabs>
    </div>
  );
};