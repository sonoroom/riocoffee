import React from "react";
import { Card, CardBody, Input, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Membership: React.FC = () => {
  return (
    <div className="min-h-screen bg-background pb-16">
      <div 
        className="relative h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(https://img.heroui.chat/image/food?w=1200&h=600&u=coffee-membership-1)` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Join Our Fika Club
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Become a member and enjoy exclusive benefits, earn rewards, and get special offers
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-3xl font-serif font-semibold mb-6">
              The Fika Club Benefits
            </h2>
            <p className="text-default-600 mb-8">
              Join our Fika Club and transform your coffee experience with a range of exclusive benefits designed to reward your loyalty and enhance your enjoyment of our products.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                  <Icon icon="lucide:gift" width={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Free Birthday Treat</h3>
                  <p className="text-default-500">Enjoy a complimentary drink or pastry of your choice on your birthday.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                  <Icon icon="lucide:star" width={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Earn Points</h3>
                  <p className="text-default-500">Earn 10 points for every $1 spent, and redeem for free drinks and food.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                  <Icon icon="lucide:ticket" width={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Exclusive Offers</h3>
                  <p className="text-default-500">Access to member-only deals, early access to seasonal items, and special discounts.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                  <Icon icon="lucide:coffee" width={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Free Refills</h3>
                  <p className="text-default-500">Enjoy free refills on brewed coffee during your visit at any location.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="p-6 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
              <CardBody className="p-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-white">Rio Coffee</h3>
                    <p className="text-white/80">Fika Club Membership</p>
                  </div>
                  <div className="bg-white/20 p-3 rounded-full">
                    <Icon icon="lucide:coffee" className="text-white" width={28} />
                  </div>
                </div>
                
                <div className="mt-10 mb-6">
                  <h4 className="text-sm text-white/80 mb-1">Member</h4>
                  <p className="text-2xl font-serif">Jane Smith</p>
                  
                  <div className="mt-4">
                    <h4 className="text-sm text-white/80 mb-1">Member Since</h4>
                    <p>June 2023</p>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-sm text-white/80 mb-1">Points Balance</h4>
                    <p className="text-2xl">2,450</p>
                  </div>
                </div>
                
                <div className="mt-10 flex items-end justify-between">
                  <div>
                    <h4 className="text-sm text-white/80 mb-1">Status</h4>
                    <p className="text-lg">Gold Level</p>
                  </div>
                  <div className="text-sm text-white/80">
                    *Exclusive Member
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardBody className="text-center p-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                  <Icon icon="lucide:leaf" width={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Regular</h3>
              <p className="text-default-500 mb-6">
                Our entry-level tier with basic benefits and rewards.
              </p>
              <div className="mb-6">
                <ul className="space-y-3 text-left">
                  <li className="flex items-center gap-2">
                    <Icon icon="lucide:check" className="text-primary-600" />
                    <span>Earn 10 points per $1</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="lucide:check" className="text-primary-600" />
                    <span>Free birthday drink</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="lucide:check" className="text-primary-600" />
                    <span>Special member offers</span>
                  </li>
                </ul>
              </div>
              <div className="text-2xl font-bold mb-6">Free</div>
              <Button color="primary" size="lg" className="w-full font-medium">
                Join Now
              </Button>
            </CardBody>
          </Card>
          
          <Card className="border-primary-500 border-2">
            <CardBody className="text-center p-8">
              <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs px-3 py-1 rounded-bl-md">
                Most Popular
              </div>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                  <Icon icon="lucide:coffee" width={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Gold</h3>
              <p className="text-default-500 mb-6">
                Enhanced benefits for our regular customers.
              </p>
              <div className="mb-6">
                <ul className="space-y-3 text-left">
                  <li className="flex items-center gap-2">
                    <Icon icon="lucide:check" className="text-primary-600" />
                    <span>Earn 15 points per $1</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="lucide:check" className="text-primary-600" />
                    <span>Free birthday drink and pastry</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="lucide:check" className="text-primary-600" />
                    <span>Special member offers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="lucide:check" className="text-primary-600" />
                    <span>Free refills on brewed coffee</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="lucide:check" className="text-primary-600" />
                    <span>Exclusive tastings and events</span>
                  </li>
                </ul>
              </div>
              <div className="text-2xl font-bold mb-6">$24.99/year</div>
              <Button color="primary" size="lg" className="w-full font-medium">
                Get Gold Status
              </Button>
            </CardBody>
          </Card>
          
          <Card>
            <CardBody className="text-center p-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                  <Icon icon="lucide:gem" width={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium</h3>
              <p className="text-default-500 mb-6">
                The ultimate Rio Coffee experience with exclusive perks.
              </p>
              <div className="mb-6">
                <ul className="space-y-3 text-left">
                  <li className="flex items-center gap-2">
                    <Icon icon="lucide:check" className="text-primary-600" />
                    <span>Earn 20 points per $1</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="lucide:check" className="text-primary-600" />
                    <span>Free birthday drink, pastry, and gift</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="lucide:check" className="text-primary-600" />
                    <span>All Gold benefits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="lucide:check" className="text-primary-600" />
                    <span>Monthly free drink of choice</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="lucide:check" className="text-primary-600" />
                    <span>Priority mobile ordering</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="lucide:check" className="text-primary-600" />
                    <span>Exclusive merchandise</span>
                  </li>
                </ul>
              </div>
              <div className="text-2xl font-bold mb-6">$99.99/year</div>
              <Button color="primary" size="lg" className="w-full font-medium">
                Get Premium Status
              </Button>
            </CardBody>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif font-semibold mb-6">
              Download Our App
            </h2>
            <p className="text-default-600 mb-8">
              Get the most out of your Fika Club membership with our mobile app. Order ahead, track your points, access exclusive offers, and more!
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                  <Icon icon="lucide:smartphone" width={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Mobile Ordering</h3>
                  <p className="text-default-500">Skip the line by ordering ahead on your phone.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                  <Icon icon="lucide:map-pin" width={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Store Locator</h3>
                  <p className="text-default-500">Find the nearest Rio Coffee shop with current wait times.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                  <Icon icon="lucide:bell" width={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Personalized Notifications</h3>
                  <p className="text-default-500">Receive alerts for new offers that match your preferences.</p>
                </div>
              </div>
            </div>
            
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
          
          <div className="flex justify-center">
            <img 
              src="https://img.heroui.chat/image/ai?w=400&h=600&u=coffee-app-screen" 
              alt="Rio Coffee App" 
              className="max-h-96"
            />
          </div>
        </div>
        
        <div className="mt-16 bg-primary-600 text-white rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-semibold mb-4">
              Sign Up for Fika Club
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Join our Fika Club today and start enjoying exclusive benefits, earning rewards, and enhancing your Rio Coffee experience.
            </p>
          </div>
          
          <form className="max-w-md mx-auto">
            <div className="space-y-4">
              <Input 
                label="Full Name" 
                placeholder="Enter your full name"
                className="bg-white/10 text-white placeholder:text-white/50"
                labelPlacement="outside"
              />
              <Input 
                label="Email" 
                placeholder="Enter your email address"
                type="email"
                className="bg-white/10 text-white placeholder:text-white/50"
                labelPlacement="outside"
              />
              <Input 
                label="Phone Number" 
                placeholder="Enter your phone number"
                className="bg-white/10 text-white placeholder:text-white/50"
                labelPlacement="outside"
              />
              <Input 
                label="Date of Birth" 
                placeholder="MM/DD/YYYY"
                className="bg-white/10 text-white placeholder:text-white/50"
                labelPlacement="outside"
              />
              
              <div className="pt-4">
                <Button 
                  color="default" 
                  className="w-full font-medium bg-white text-primary-600"
                  size="lg"
                >
                  Join Fika Club
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};