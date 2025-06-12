import React from "react";
import { Link } from "react-router-dom";

// Updated props to accept an array of slides instead of single values
interface SlideProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

interface HeroSectionProps {
  slides: SlideProps[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  slides
}) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  // Auto-rotate slides every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center flex items-end transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${slide.backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          
          <div className="container mx-auto px-4 pb-12 md:pb-20 relative z-10">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
                {slide.title}
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-8">
                {slide.subtitle}
              </p>
              <Link to={slide.ctaLink} className="hero-button">
                {slide.ctaText}
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? "bg-white scale-110" 
                : "bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};