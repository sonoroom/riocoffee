import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white border-b border-gray-100">
      {/* Первый раздел - логотип с элементами по краям */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative flex justify-between items-center py-4 sm:py-6">
          {/* Левая часть - предложение (скрыто на мобильных) */}
          <div className="hidden sm:block text-gray-600 text-sm font-medium flex-1">
            Сеть кофеен «RIO» в Кыргызстане
          </div>

          {/* Мобильное меню бургер (только на мобильных) */}
          <button
            className="sm:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon icon={isMenuOpen ? "lucide:x" : "lucide:menu"} width={24} height={24} />
          </button>

          {/* Центр - логотип */}
          <Link to="/" className="sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 flex items-center">
            <div className="flex items-center justify-center h-12 sm:h-12 w-15 sm:w-13">
              <img src="https://i.postimg.cc/kXPRb04f/image.png" alt="Rio Coffee" className="h-full" />
            </div>
          </Link>

          {/* Правая часть - социальные иконки */}
          <div className="flex items-center gap-2 sm:gap-3 sm:flex-1 sm:justify-end">
            <a href="https://instagram.com/rio_coffee_karakol" className="text-gray-600 hover:text-pink-600 transition-colors">
              <Icon icon="lucide:instagram" width={20} height={20} className="sm:w-6 sm:h-6" />
            </a>
            <a href="https://wa.me/996555123456" className="text-gray-600 hover:text-green-600 transition-colors">
              <Icon icon="ic:baseline-whatsapp" width={20} height={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Разделительная линия на весь экран */}
      <div className="border-t border-gray-200"></div>

      {/* Второй раздел - навигационное меню */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Навигационное меню (десктоп) */}
        <div className="hidden sm:flex justify-center py-4">
          <div className="flex items-center gap-4 lg:gap-8">
            {/* Главная */}
            <Link
              to="/"
              className={`text-base lg:text-lg transition-colors ${
                location.pathname.startsWith("/home")
                  ? "text-primary font-medium"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Главная
            </Link>
            {/* Меню */}
            <Link
              to="/menu"
              className={`text-base lg:text-lg transition-colors ${
                location.pathname.startsWith("/menu")
                  ? "text-primary font-medium"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Меню
            </Link>

            {/* Франшиза */}
            <Link
              to="/franchise"
              className={`text-base lg:text-lg transition-colors ${
                location.pathname === "/franchise"
                  ? "text-primary font-medium"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Франшиза
            </Link>

            {/* О нас */}
            <Link
              to="/aboutus"
              className={`text-base lg:text-lg transition-colors ${
                location.pathname === "/aboutus"
                  ? "text-primary font-medium"
                  : "text-foreground hover:text-primary"
              }`}
            >
              О нас
            </Link>

            {/* Наши кофейни */}
            <Button
              as={Link}
              to="/map"
              variant="light"
              className="text-base lg:text-lg"
              size="sm"
              startContent={<Icon icon="lucide:user" className="w-4 h-4 lg:w-5 lg:h-5" />}
            >
              Наши кофейни
            </Button>

            {/* Закажи сейчас */}
            <Button
              as={Link}
              to="/order"
              color="primary"
              className="font-medium text-base lg:text-lg"
              variant="solid"
              radius="full"
              size="sm"
            >
              Закажи сейчас
            </Button>
          </div>
        </div>

        {/* Мобильное меню (выпадающее) */}
        {isMenuOpen && (
          <div className="sm:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link
                to="/menu"
                className={`text-base px-4 py-2 transition-colors ${
                  location.pathname.startsWith("/menu")
                    ? "text-primary font-medium bg-gray-50"
                    : "text-foreground hover:text-primary hover:bg-gray-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Меню
              </Link>

              <Link
                to="/membership"
                className={`text-base px-4 py-2 transition-colors ${
                  location.pathname === "/membership"
                    ? "text-primary font-medium bg-gray-50"
                    : "text-foreground hover:text-primary hover:bg-gray-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Франшиза
              </Link>

              <Link
                to="/aboutus"
                className={`text-base px-4 py-2 transition-colors ${
                  location.pathname === "/aboutus"
                    ? "text-primary font-medium bg-gray-50"
                    : "text-foreground hover:text-primary hover:bg-gray-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                О нас
              </Link>

              <Link
                to="/map"
                className={`text-base px-4 py-2 transition-colors flex items-center gap-2 ${
                  location.pathname === "/map"
                    ? "text-primary font-medium bg-gray-50"
                    : "text-foreground hover:text-primary hover:bg-gray-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon icon="lucide:user" className="w-4 h-4" />
                Наши кофейни
              </Link>

              <div className="px-4 pt-2">
                <Button
                  as={Link}
                  to="/order"
                  color="primary"
                  className="font-medium text-base w-full"
                  variant="solid"
                  radius="full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Закажи сейчас
                </Button>
              </div>

              {/* Текст кофеен для мобильных */}
              <div className="text-gray-600 text-sm font-medium px-4 pt-2 border-t border-gray-200">
                Сеть кофеен «RIO» в Кыргызстане
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};