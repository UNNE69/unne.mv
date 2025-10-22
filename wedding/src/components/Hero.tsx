import { Calendar, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import couplePhotos from "@/assets/couple-photos.jpg";
import floralCorner from "@/assets/floral-corner.png";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary py-20">
      {/* Floral Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-40">
        <img src={floralCorner} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-40 rotate-180">
        <img src={floralCorner} alt="" className="w-full h-full object-contain" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        {/* Photo Collage */}
        <div className="mb-12 relative">
          <div className="w-72 h-72 md:w-96 md:h-96 mx-auto bg-card p-4 shadow-postcard transform rotate-2 hover:rotate-0 transition-transform">
            <img 
              src={couplePhotos} 
              alt="Jessica & Tom" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Date Badge */}
        <div className="inline-block bg-card px-8 py-6 shadow-postcard mb-8 transform -rotate-1">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
            Save Our Date
          </p>
          <p className="font-serif text-5xl md:text-6xl font-bold text-primary">
            11.11.26
          </p>
          <p className="font-script text-2xl md:text-3xl text-accent mt-2">
            we're getting married
          </p>
        </div>

        {/* Names */}
        <div className="mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-primary-foreground mb-2">
            JESSICA · TOM
          </h1>
          <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
            <MapPin className="w-4 h-4" />
            <p className="text-lg">Rosewood Gardens, Napa Valley</p>
          </div>
        </div>

        {/* Formal Invitation Line */}
        <p className="font-script text-2xl md:text-3xl text-primary-foreground/90 mb-8 italic">
          Formal invitation to follow
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-card text-primary hover:bg-card/90 font-medium shadow-postcard transition-all hover:scale-105 px-8"
            onClick={() => scrollToSection('details')}
          >
            View Details
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-card text-card hover:bg-card hover:text-primary font-medium transition-all hover:scale-105 px-8"
            onClick={() => scrollToSection('rsvp')}
          >
            RSVP
          </Button>
        </div>

        {/* Monogram at bottom */}
        <div className="mt-16">
          <div className="w-20 h-20 mx-auto border-2 border-card rounded-full flex items-center justify-center bg-primary">
            <span className="font-script text-4xl text-card">JT</span>
          </div>
        </div>
      </div>
    </section>
  );
};
