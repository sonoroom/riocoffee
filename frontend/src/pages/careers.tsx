import React from "react";
import { Card, CardBody, Button, Input } from "@heroui/react";
import { Icon } from "@iconify/react";

interface JobPosition {
  id: string;
  title: string;
  type: string;
  location: string;
  department: string;
  description: string;
  requirements: string[];
}

export const Careers: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = React.useState("all");
  const [searchQuery, setSearchQuery] = React.useState("");
  
  const departments = [
    { key: "all", name: "All Departments" },
    { key: "cafe", name: "Café Operations" },
    { key: "bakery", name: "Bakery" },
    { key: "corporate", name: "Corporate" },
    { key: "logistics", name: "Logistics & Supply Chain" }
  ];
  
  const jobPositions: JobPosition[] = [
    {
      id: "barista",
      title: "Barista",
      type: "Full-time / Part-time",
      location: "Multiple Locations",
      department: "cafe",
      description: "Join our team of coffee experts to craft exceptional beverages and provide outstanding customer service to our guests.",
      requirements: [
        "Passion for coffee and customer service",
        "Ability to work in a fast-paced environment",
        "Excellent communication skills",
        "Available to work flexible hours including weekends"
      ]
    },
    {
      id: "shift-supervisor",
      title: "Shift Supervisor",
      type: "Full-time",
      location: "Multiple Locations",
      department: "cafe",
      description: "Lead a team of baristas and ensure smooth operations during your shift while maintaining our high standards of product quality and customer service.",
      requirements: [
        "Previous supervisory experience preferred",
        "Strong leadership and problem-solving skills",
        "Excellent organizational abilities",
        "Food safety knowledge",
        "Available to work flexible hours including weekends"
      ]
    },
    {
      id: "baker",
      title: "Baker",
      type: "Full-time",
      location: "Central Production Facility",
      department: "bakery",
      description: "Create fresh pastries and bakery items for our customers to enjoy, following our recipes and maintaining our quality standards.",
      requirements: [
        "Previous experience in commercial baking",
        "Knowledge of baking techniques and food safety",
        "Ability to work early morning shifts",
        "Attention to detail and consistency"
      ]
    },
    {
      id: "pastry-chef",
      title: "Pastry Chef",
      type: "Full-time",
      location: "Central Production Facility",
      department: "bakery",
      description: "Develop new recipes and oversee production of our signature pastries and baked goods.",
      requirements: [
        "Culinary degree or equivalent experience",
        "Minimum 2 years experience as a pastry chef",
        "Creative with strong attention to detail",
        "Team leadership experience"
      ]
    },
    {
      id: "marketing-coordinator",
      title: "Marketing Coordinator",
      type: "Full-time",
      location: "Headquarters",
      department: "corporate",
      description: "Support our marketing initiatives across digital and traditional channels to promote our brand and engage with our customers.",
      requirements: [
        "Bachelor's degree in Marketing or related field",
        "Experience with social media management",
        "Strong written and visual communication skills",
        "Knowledge of digital marketing tools"
      ]
    },
    {
      id: "hr-specialist",
      title: "HR Specialist",
      type: "Full-time",
      location: "Headquarters",
      department: "corporate",
      description: "Support our human resources functions including recruitment, onboarding, and employee relations.",
      requirements: [
        "Bachelor's degree in HR or related field",
        "Minimum 2 years HR experience",
        "Knowledge of labor laws and regulations",
        "Excellent interpersonal and communication skills"
      ]
    },
    {
      id: "logistics-coordinator",
      title: "Logistics Coordinator",
      type: "Full-time",
      location: "Distribution Center",
      department: "logistics",
      description: "Coordinate the movement of products between our production facilities, distribution center, and retail locations.",
      requirements: [
        "Experience in logistics or supply chain",
        "Strong organizational and problem-solving skills",
        "Proficiency in inventory management systems",
        "Valid driver's license"
      ]
    }
  ];
  
  // Filter jobs based on selected department and search query
  const filteredJobs = jobPositions.filter(job => {
    const matchesDepartment = selectedDepartment === "all" || job.department === selectedDepartment;
    const matchesSearch = !searchQuery || 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesDepartment && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background pb-16">
      <div 
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(https://img.heroui.chat/image/food?w=1200&h=600&u=coffee-shop-barista-1)` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Brew Your Future
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-6">
            Join our team of passionate coffee enthusiasts and help create exceptional experiences for our customers
          </p>
          <Button 
            color="primary" 
            size="lg" 
            className="font-medium"
          >
            View Open Positions
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-semibold mb-6 text-center">
            Why Work With Us
          </h2>
          <p className="text-default-600 text-center mb-10">
            At Rio Coffee, we're more than just a coffee shop. We're a community of passionate people dedicated to creating memorable experiences one cup at a time.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon="lucide:heart" width={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community First</h3>
              <p className="text-default-500">
                We foster a supportive workplace where everyone belongs and can thrive.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon="lucide:trending-up" width={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth Opportunities</h3>
              <p className="text-default-500">
                Develop your skills with training programs and clear career paths.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon="lucide:gift" width={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Great Benefits</h3>
              <p className="text-default-500">
                Enjoy competitive pay, health benefits, and free coffee every day.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-semibold mb-8 text-center">
            Our Company Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-primary-50">
              <CardBody>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600">
                    <Icon icon="lucide:coffee" width={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Above All</h3>
                    <p className="text-default-600">
                      We never compromise on the quality of our products. From sourcing the finest coffee beans to perfecting our brewing techniques, excellence is our standard.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
            
            <Card className="bg-primary-50">
              <CardBody>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600">
                    <Icon icon="lucide:users" width={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Community Connection</h3>
                    <p className="text-default-600">
                      We believe in creating spaces where people can connect, collaborate, and find comfort. Our cafés are designed to foster community and belonging.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
            
            <Card className="bg-primary-50">
              <CardBody>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600">
                    <Icon icon="lucide:leaf" width={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                    <p className="text-default-600">
                      We're committed to responsible practices that protect our planet and support coffee-growing communities around the world.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
            
            <Card className="bg-primary-50">
              <CardBody>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600">
                    <Icon icon="lucide:sparkles" width={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Continuous Innovation</h3>
                    <p className="text-default-600">
                      We embrace change and constantly look for new ways to improve our products, services, and customer experience.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl font-serif font-semibold mb-8 text-center">
            Open Positions
          </h2>
          
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="md:w-1/3">
              <Input
                placeholder="Search positions..."
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
                {departments.map((dept) => (
                  <Button
                    key={dept.key}
                    color={selectedDepartment === dept.key ? "primary" : "default"}
                    variant={selectedDepartment === dept.key ? "solid" : "flat"}
                    onPress={() => setSelectedDepartment(dept.key)}
                    size="sm"
                  >
                    {dept.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          {filteredJobs.length > 0 ? (
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="overflow-hidden">
                  <CardBody>
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <div className="text-default-500 mb-4">
                          {job.type} | {job.location}
                        </div>
                        <p className="text-default-600 mb-4">
                          {job.description}
                        </p>
                        <div className="mb-6">
                          <h4 className="font-medium mb-2">Requirements:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-default-600">
                            {job.requirements.map((req, index) => (
                              <li key={index}>{req}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="md:ml-6 mt-4 md:mt-0">
                        <Button
                          color="primary"
                          size="lg"
                          className="w-full md:w-auto font-medium"
                          endContent={<Icon icon="lucide:arrow-right" />}
                          as="a"
                          href={`/careers/${job.id}`}
                        >
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Icon icon="lucide:search-x" className="mx-auto text-default-300 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">No positions found</h3>
              <p className="text-default-500 mb-6">
                We couldn't find any positions matching your criteria.
              </p>
              <Button
                variant="flat"
                color="primary"
                onPress={() => {
                  setSelectedDepartment("all");
                  setSearchQuery("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
        
        <div className="mt-16 bg-secondary-600 text-white rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-serif font-semibold mb-4">
                Don't See the Right Position?
              </h2>
              <p className="text-white/90 mb-6">
                Even if you don't see a position that matches your skills, we'd love to hear from you. Submit your resume for future opportunities at Rio Coffee.
              </p>
              <Button
                color="default"
                className="bg-white text-secondary-600 font-medium"
              >
                Submit Your Resume
              </Button>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://img.heroui.chat/image/food?w=400&h=300&u=coffee-team-1" 
                alt="Rio Coffee Team" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl font-serif font-semibold mb-8 text-center">
            Meet Some of Our Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardBody className="text-center">
                <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                  <img 
                    src="https://img.heroui.chat/image/avatar?w=200&h=200&u=employee-1" 
                    alt="Employee" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
                <p className="text-default-500 mb-4">Store Manager</p>
                <p className="text-default-600">
                  "I started as a barista 5 years ago and worked my way up to managing our flagship store. Rio Coffee invests in their people and creates real growth opportunities."
                </p>
              </CardBody>
            </Card>
            
            <Card>
              <CardBody className="text-center">
                <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                  <img 
                    src="https://img.heroui.chat/image/avatar?w=200&h=200&u=employee-2" 
                    alt="Employee" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Michael Chen</h3>
                <p className="text-default-500 mb-4">Head Barista</p>
                <p className="text-default-600">
                  "The coffee culture here is amazing. I've learned so much about brewing techniques and bean origins, and I love sharing that knowledge with our customers."
                </p>
              </CardBody>
            </Card>
            
            <Card>
              <CardBody className="text-center">
                <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                  <img 
                    src="https://img.heroui.chat/image/avatar?w=200&h=200&u=employee-3" 
                    alt="Employee" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Elena Rodríguez</h3>
                <p className="text-default-500 mb-4">Pastry Chef</p>
                <p className="text-default-600">
                  "Working at Rio Coffee gives me the creative freedom to develop new pastries that complement our coffee offerings. It's a collaborative environment where innovation thrives."
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};