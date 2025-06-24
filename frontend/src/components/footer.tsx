import React from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "@heroui/react";
import { Icon } from "@iconify/react";


export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-600 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="text-sm text-white/70">
          <p>© {new Date().getFullYear()} Rio Coffee. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};