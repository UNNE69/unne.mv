import { useState } from "react";
import { Button } from "./ui/button";
import floralCorner from "@/assets/floral-corner.png";

interface LandingPageProps {
  onEnter: () => void;
}

export const LandingPage = ({ onEnter }: LandingPageProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onEnter();
    }, 600);
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-primary transition-opacity duration-600 ${
        isAnimating ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Floral Decorations */}
      <div className="absolute top-0 left-0 w-48 h-48 opacity-60">
        <img src={floralCorner} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-0 right-0 w-48 h-48 opacity-60 rotate-90">
        <img src={floralCorner} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-60 -rotate-90">
        <img src={floralCorner} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-60 rotate-180">
        <img src={floralCorner} alt="" className="w-full h-full object-contain" />
      </div>

      {/* Postcard Container */}
      <div className="relative max-w-2xl w-full mx-4 animate-fade-in">
        {/* Postage Stamp */}
        <div className="absolute -top-4 -right-4 w-16 h-20 bg-primary-foreground/10 border-2 border-primary-foreground/30 border-dashed flex flex-col items-center justify-center text-xs text-primary-foreground/70">
          <div className="text-center leading-tight">
            <div className="text-2xl mb-1">✉</div>
            <div className="text-[10px]">LOVE</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-card/95 backdrop-blur rounded-sm p-12 md:p-16 text-center shadow-postcard border border-primary-foreground/10">
          {/* Script Intro Text */}
          <div className="mb-8">
            <p className="font-script text-5xl md:text-7xl text-primary mb-2">
              Introducing
            </p>
            <p className="font-script text-6xl md:text-8xl text-primary">
              the Browns
            </p>
          </div>

          {/* Divider Line */}
          <div className="w-32 h-px bg-accent mx-auto mb-8"></div>

          {/* Call to Action */}
          <div className="space-y-6">
            <p className="text-muted-foreground uppercase tracking-[0.3em] text-sm">
              Digital Save the Date
            </p>
            
            <Button
              onClick={handleClick}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-12 py-6 text-lg tracking-wider uppercase shadow-postcard hover:shadow-polaroid transition-all hover:scale-105"
            >
              Click to Open...
            </Button>

            <p className="text-xs text-muted-foreground/70 tracking-wider">
              You're invited to our special day
            </p>
          </div>

          {/* Monogram */}
          <div className="mt-12">
            <div className="w-16 h-16 mx-auto border-2 border-accent rounded-full flex items-center justify-center">
              <span className="font-script text-3xl text-accent">E & J</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
