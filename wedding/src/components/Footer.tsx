import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="flex items-center justify-center gap-2">
          <Heart className="w-6 h-6 fill-current" />
          <span className="font-serif text-2xl font-semibold">Emily & James</span>
          <Heart className="w-6 h-6 fill-current" />
        </div>
        
        <div className="space-y-2">
          <p className="text-primary-foreground/80">June 15, 2025</p>
          <p className="text-primary-foreground/80">Rosewood Gardens, Napa Valley</p>
        </div>

        <div className="w-24 h-0.5 bg-primary-foreground/30 mx-auto"></div>

        <p className="text-sm text-primary-foreground/60">
          We can't wait to celebrate with you!
        </p>

        <p className="text-xs text-primary-foreground/40 pt-4">
          For questions, please contact us at hello@emilyandj ames.com
        </p>
      </div>
    </footer>
  );
};
