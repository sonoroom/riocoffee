import React from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-600 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h3 className="text-xl font-medium mb-4">Sign up for our Freshly Brewed News</h3>
          <div className="flex max-w-md">
            <Input
              placeholder="Email address"
              className="bg-opacity-20 bg-white border border-white/30 text-white placeholder:text-white/70"
            />
            <Button color="default" className="ml-2 bg-white text-primary-600 font-medium">
              Subscribe
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10">
          <div>
            <h4 className="footer-heading">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/menu" className="footer-link">Наш кофе</Link></li>
              <li><Link to="/catering" className="footer-link">Catering</Link></li>
              <li><Link to="/menu" className="footer-link">Delivery</Link></li>
              <li><Link to="/gifts" className="footer-link">Gift cards</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Espresso House</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="footer-link">About us</Link></li>
              <li><Link to="/press" className="footer-link">Press</Link></li>
              <li><Link to="/contact" className="footer-link">Contact us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/allergens" className="footer-link">Nutritional info and allergens</Link></li>
              <li><Link to="/privacy" className="footer-link">Privacy Notice</Link></li>
              <li><Link to="/sustainability" className="footer-link">Sustainable Report</Link></li>
              <li><Link to="/food-policy" className="footer-link">Food policy</Link></li>
              <li><Link to="/terms" className="footer-link">Terms & Conditions - App</Link></li>
              <li><Link to="/cookie-policy" className="footer-link">Cookie policy</Link></li>
              <li><Link to="/whistleblower" className="footer-link">Whistleblower service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Follow us</h4>
            <div className="flex gap-4 my-4">
              <a href="#" className="footer-link">
                <Icon icon="lucide:facebook" width={24} height={24} />
              </a>
              <a href="#" className="footer-link">
                <Icon icon="lucide:instagram" width={24} height={24} />
              </a>
              <a href="#" className="footer-link">
                <Icon icon="lucide:twitter" width={24} height={24} />
              </a>
              <a href="#" className="footer-link">
                <Icon icon="lucide:linkedin" width={24} height={24} />
              </a>
            </div>
            <div className="mt-8">
              <h4 className="footer-heading">Download our app</h4>
              <div className="flex gap-2 mt-3">
                <a href="#" className="block">
                  <img 
                    src="https://img.heroui.chat/image/ai?w=120&h=40&u=appstore" 
                    alt="Download on App Store" 
                    className="h-10"
                  />
                </a>
                <a href="#" className="block">
                  <img 
                    src="https://img.heroui.chat/image/ai?w=120&h=40&u=googleplay" 
                    alt="Get it on Google Play" 
                    className="h-10"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 text-sm text-white/70">
          <p>© {new Date().getFullYear()} Rio Coffee / Espresso House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};