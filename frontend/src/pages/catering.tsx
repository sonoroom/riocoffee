import React from "react";
import { Card, CardBody, Input, Textarea, Button, Checkbox } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Catering: React.FC = () => {
  return (
    <div className="min-h-screen bg-background pb-16">
      <div 
        className="relative h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(https://img.heroui.chat/image/food?w=1200&h=600&u=coffee-catering-1)` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Catering Services
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Perfect coffee and food options for your meetings, events, and celebrations
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <h2 className="text-3xl font-serif font-semibold mb-6">
              Elevate Your Event with Rio Coffee
            </h2>
            <p className="text-default-600 mb-8">
              Whether you're planning a business meeting, conference, office celebration, or private event, our catering services provide delicious coffee and food options that will impress your guests.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Coffee Service Options</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card shadow="sm">
                    <CardBody>
                      <h4 className="text-lg font-medium mb-2">Coffee Boxes</h4>
                      <p className="text-default-500 mb-1">Serves 8-10 people</p>
                      <p className="text-default-600">
                        Your choice of our signature blends, served hot and fresh in convenient to-go boxes.
                      </p>
                    </CardBody>
                  </Card>
                  
                  <Card shadow="sm">
                    <CardBody>
                      <h4 className="text-lg font-medium mb-2">Coffee Station</h4>
                      <p className="text-default-500 mb-1">Minimum 20 people</p>
                      <p className="text-default-600">
                        Full-service coffee bar with barista for custom-made drinks at your event.
                      </p>
                    </CardBody>
                  </Card>
                  
                  <Card shadow="sm">
                    <CardBody>
                      <h4 className="text-lg font-medium mb-2">Cold Brew Kegs</h4>
                      <p className="text-default-500 mb-1">Serves 40-50 people</p>
                      <p className="text-default-600">
                        Our signature cold brew coffee in a convenient keg for larger events.
                      </p>
                    </CardBody>
                  </Card>
                  
                  <Card shadow="sm">
                    <CardBody>
                      <h4 className="text-lg font-medium mb-2">Tea Service</h4>
                      <p className="text-default-500 mb-1">Serves 10-12 people</p>
                      <p className="text-default-600">
                        Selection of our premium teas with hot water service.
                      </p>
                    </CardBody>
                  </Card>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Food Options</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card shadow="sm">
                    <CardBody>
                      <h4 className="text-lg font-medium mb-2">Breakfast Platters</h4>
                      <p className="text-default-600">
                        Assortment of freshly baked pastries, muffins, and bagels with spreads.
                      </p>
                    </CardBody>
                  </Card>
                  
                  <Card shadow="sm">
                    <CardBody>
                      <h4 className="text-lg font-medium mb-2">Sandwich Platters</h4>
                      <p className="text-default-600">
                        Selection of our popular sandwiches, cut and arranged for easy serving.
                      </p>
                    </CardBody>
                  </Card>
                  
                  <Card shadow="sm">
                    <CardBody>
                      <h4 className="text-lg font-medium mb-2">Salad Bowls</h4>
                      <p className="text-default-600">
                        Fresh salads with dressings on the side, perfect for a healthy option.
                      </p>
                    </CardBody>
                  </Card>
                  
                  <Card shadow="sm">
                    <CardBody>
                      <h4 className="text-lg font-medium mb-2">Dessert Platters</h4>
                      <p className="text-default-600">
                        Assortment of cookies, brownies, and mini pastries for a sweet touch.
                      </p>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Why Choose Our Catering?</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Icon icon="lucide:check-circle" className="text-primary-600 text-xl" />
                  </div>
                  <p className="text-default-600">
                    <strong>Quality Ingredients</strong> - We use the same high-quality ingredients and coffee beans that we serve in our shops.
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Icon icon="lucide:check-circle" className="text-primary-600 text-xl" />
                  </div>
                  <p className="text-default-600">
                    <strong>Flexible Options</strong> - Customize your order to match your event's needs and dietary requirements.
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Icon icon="lucide:check-circle" className="text-primary-600 text-xl" />
                  </div>
                  <p className="text-default-600">
                    <strong>Reliable Service</strong> - On-time delivery and setup so you can focus on your event.
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Icon icon="lucide:check-circle" className="text-primary-600 text-xl" />
                  </div>
                  <p className="text-default-600">
                    <strong>Eco-Friendly Packaging</strong> - All our catering supplies use sustainable materials.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="p-6">
              <CardBody className="p-0">
                <h3 className="text-2xl font-serif font-semibold mb-6">Request a Quote</h3>
                <p className="text-default-600 mb-6">
                  Fill out the form below and our catering team will contact you within 24 hours with options and pricing.
                </p>

                <form className="space-y-4">
                  <Input 
                    label="Full Name" 
                    placeholder="Enter your full name"
                    labelPlacement="outside"
                  />
                  <Input 
                    label="Email" 
                    placeholder="Enter your email address"
                    type="email"
                    labelPlacement="outside"
                  />
                  <Input 
                    label="Phone Number" 
                    placeholder="Enter your phone number"
                    labelPlacement="outside"
                  />
                  <Input 
                    label="Event Date" 
                    placeholder="MM/DD/YYYY"
                    labelPlacement="outside"
                  />
                  <Input 
                    label="Number of Guests" 
                    placeholder="Enter expected number of attendees"
                    type="number"
                    labelPlacement="outside"
                  />
                  <Input 
                    label="Event Location" 
                    placeholder="Enter the address of your event"
                    labelPlacement="outside"
                  />
                  
                  <div>
                    <p className="text-default-700 text-sm mb-2">Services Needed (select all that apply)</p>
                    <div className="space-y-2">
                      <Checkbox defaultSelected>Coffee Service</Checkbox>
                      <Checkbox>Tea Service</Checkbox>
                      <Checkbox>Breakfast/Pastries</Checkbox>
                      <Checkbox>Lunch/Sandwiches</Checkbox>
                      <Checkbox>Desserts</Checkbox>
                      <Checkbox>Full-service Barista</Checkbox>
                    </div>
                  </div>
                  
                  <Textarea 
                    label="Additional Information" 
                    placeholder="Please share any specific requirements, dietary restrictions, or questions you might have."
                    labelPlacement="outside"
                    minRows={4}
                  />
                  
                  <Button 
                    color="primary" 
                    className="w-full font-medium"
                    size="lg"
                  >
                    Request Quote
                  </Button>
                </form>
              </CardBody>
            </Card>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-semibold mb-8 text-center">
            Our Catering Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img 
              src="https://img.heroui.chat/image/food?w=400&h=300&u=catering-1" 
              alt="Coffee catering" 
              className="w-full h-64 object-cover rounded-lg"
            />
            <img 
              src="https://img.heroui.chat/image/food?w=400&h=300&u=catering-2" 
              alt="Breakfast catering" 
              className="w-full h-64 object-cover rounded-lg"
            />
            <img 
              src="https://img.heroui.chat/image/food?w=400&h=300&u=catering-3" 
              alt="Sandwich platter" 
              className="w-full h-64 object-cover rounded-lg"
            />
            <img 
              src="https://img.heroui.chat/image/food?w=400&h=300&u=catering-4" 
              alt="Dessert platter" 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-semibold mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card shadow="sm">
              <CardBody>
                <h3 className="text-lg font-semibold mb-2">How far in advance should I place my catering order?</h3>
                <p className="text-default-600">
                  We recommend placing your order at least 48 hours in advance. For larger events (50+ people), please give us at least 72 hours notice.
                </p>
              </CardBody>
            </Card>
            
            <Card shadow="sm">
              <CardBody>
                <h3 className="text-lg font-semibold mb-2">Do you provide setup services?</h3>
                <p className="text-default-600">
                  Yes, we can provide setup services for an additional fee. This includes arranging food platters, setting up coffee stations, and providing all necessary serving supplies.
                </p>
              </CardBody>
            </Card>
            
            <Card shadow="sm">
              <CardBody>
                <h3 className="text-lg font-semibold mb-2">What's your cancellation policy?</h3>
                <p className="text-default-600">
                  Orders can be canceled with full refund up to 24 hours before the scheduled delivery time. Cancellations within 24 hours may be subject to a 50% charge.
                </p>
              </CardBody>
            </Card>
            
            <Card shadow="sm">
              <CardBody>
                <h3 className="text-lg font-semibold mb-2">Can you accommodate dietary restrictions?</h3>
                <p className="text-default-600">
                  Yes, we offer options for various dietary needs including vegetarian, vegan, gluten-free, and dairy-free. Please specify any requirements when ordering.
                </p>
              </CardBody>
            </Card>
            
            <Card shadow="sm">
              <CardBody>
                <h3 className="text-lg font-semibold mb-2">Is there a minimum order requirement?</h3>
                <p className="text-default-600">
                  Yes, our minimum order is $100 for delivery services. There is no minimum for pickup orders.
                </p>
              </CardBody>
            </Card>
            
            <Card shadow="sm">
              <CardBody>
                <h3 className="text-lg font-semibold mb-2">What is your delivery area and fee?</h3>
                <p className="text-default-600">
                  We deliver within a 15-mile radius of our locations. Delivery fees start at $15 and may increase based on distance and order size.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
        
        <div className="bg-primary-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-serif font-semibold mb-4">
            Ready to place an order?
          </h2>
          <p className="text-default-600 mb-6 max-w-2xl mx-auto">
            For immediate assistance or to place an order over the phone, call our catering team directly. We're here to help make your event successful!
          </p>
          <Button 
            color="primary" 
            size="lg"
            className="font-medium px-8"
            startContent={<Icon icon="lucide:phone" />}
          >
            Call Catering: (555) 123-4567
          </Button>
        </div>
      </div>
    </div>
  );
};