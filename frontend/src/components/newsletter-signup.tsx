import React from "react";
import { Input, Button } from "@heroui/react";

export const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, we would submit to an API
      console.log("Submitting email:", email);
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="bg-primary-600 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
          Sign up for our Freshly Brewed News
        </h2>
        <p className="mb-6 max-w-lg mx-auto">
          Be the first to know about new products, seasonal specials, and exclusive offers.
        </p>
        
        <form 
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-2 justify-center max-w-md mx-auto"
        >
          <Input
            placeholder="Email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
            required
          />
          <Button 
            type="submit" 
            color="default"
            className="bg-white text-primary-600 font-medium"
          >
            {isSubmitted ? "Subscribed!" : "Subscribe"}
          </Button>
        </form>
      </div>
    </section>
  );
};