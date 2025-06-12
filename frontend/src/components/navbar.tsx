import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar as HeroNavbar, NavbarBrand, NavbarContent, NavbarItem, Button, Link as HeroLink, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Navbar: React.FC = () => {
  const location = useLocation();
  
  return (
    <HeroNavbar maxWidth="xl" className="bg-white border-b border-gray-100">
            <NavbarBrand className="gap-3">
        <Link to="/" className="flex items-center">
          <div className="flex items-center justify-center h-11 w-13 mr-1">
            <img src="https://i.postimg.cc/kXPRb04f/image.png" alt="Rio Coffee" className="h-full" />
          </div>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem isActive={location.pathname.startsWith("/menu")}>
          <HeroLink as={Link} to="/menu" color="foreground">
            Меню
          </HeroLink>
        </NavbarItem>
        <NavbarItem isActive={location.pathname === "/deals"}>
          <HeroLink as={Link} to="/deals" color="foreground">
            Контакты
          </HeroLink>
        </NavbarItem>
        <NavbarItem isActive={location.pathname === "/sustainability"}>
          <HeroLink as={Link} to="/sustainability" color="foreground">
            Новости
          </HeroLink>
        </NavbarItem>
        <NavbarItem isActive={location.pathname === "/sustainability"}>
          <HeroLink as={Link} to="/sustainability" color="foreground">
            Франшиза
          </HeroLink>
        </NavbarItem>
        <NavbarItem isActive={location.pathname === "/sustainability"}>
          <HeroLink as={Link} to="/sustainability" color="foreground">
            О нас
          </HeroLink>
        </NavbarItem>
      </NavbarContent>      
      
      <NavbarContent justify="end">
        <NavbarItem className="flex">
          <Dropdown>
            <DropdownTrigger>
              <Button 
                isIconOnly 
                variant="light" 
                radius="full"
              >
                <Icon icon="lucide:search" className="text-lg" />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Search">
              <div className="px-3 py-2">
                <input 
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
                  placeholder="Search for products..."
                />
              </div>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Button 
            as={Link} 
            to="/membership"
            variant="light" 
            className="hidden md:flex" 
            startContent={<Icon icon="lucide:user" />}
          >
            Наши кофейни
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button 
            as={Link}
            to="/order"
            color="primary" 
            className="font-medium" 
            variant="solid" 
            radius="full"
          >
            Закажи сейчас
          </Button>
        </NavbarItem>
      </NavbarContent>
    </HeroNavbar>
  );
};