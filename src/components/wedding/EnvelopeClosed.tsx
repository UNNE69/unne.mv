import { Button } from "@/components/ui/button";

interface EnvelopeClosedProps {
  onOpen: () => void;
}

const EnvelopeClosed = ({ onOpen }: EnvelopeClosedProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 cursor-pointer" onClick={onOpen}>
      {/* Envelope Visual */}
      <div className="relative w-full max-w-md aspect-[3/2] perspective-1000">
        <div className="relative w-full h-full bg-gradient-to-br from-burgundy to-burgundy-dark rounded-lg shadow-elegant hover:shadow-2xl transition-all duration-500 hover:scale-105">
          {/* Envelope Flap Triangle */}
          <div 
            className="absolute top-0 left-0 w-full h-32 bg-burgundy-dark opacity-90 rounded-t-lg"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)'
            }}
          />
          
          {/* Decorative Gold Border */}
          <div className="absolute inset-4 border-2 border-gold/30 rounded pointer-events-none" />
          
          {/* Wax Seal Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gold rounded-full shadow-lg flex items-center justify-center">
            <div className="w-12 h-12 border-2 border-burgundy-dark rounded-full flex items-center justify-center">
              <span className="text-2xl font-ornamental text-burgundy-dark font-semibold">U&amp;R</span>
            </div>
          </div>
          
          {/* Texture Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg pointer-events-none" />
        </div>
      </div>

      {/* Click to Open Text */}
      <div className="text-center space-y-4 animate-fade-in">
        <p className="text-4xl md:text-5xl font-ornamental text-gold animate-shimmer bg-gradient-to-r from-gold via-gold-dark to-gold bg-[length:200%_auto] bg-clip-text text-transparent">
          Click to Open
        </p>
        <p className="text-sm font-sans text-muted-foreground tracking-wider uppercase">
          You're Invited
        </p>
      </div>
    </div>
  );
};

export default EnvelopeClosed;
