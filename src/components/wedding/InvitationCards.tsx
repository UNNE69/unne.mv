import { Card } from "@/components/ui/card";
import { Calendar, Shirt, Gift, Heart } from "lucide-react";
interface InvitationCardsProps {
  phase: number;
}
const InvitationCards = ({
  phase
}: InvitationCardsProps) => {
  return <div className="space-y-6 max-w-2xl mx-auto">
      {/* Card 0: Wedding Invite */}
      <Card className={`p-6 md:p-8 bg-card shadow-card border-border/50 ${phase >= 3 ? 'animate-slide-up' : 'opacity-0'}`} style={{
      animationDelay: '0s'
    }}>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-burgundy/10 flex items-center justify-center">
            <Heart className="w-6 h-6 text-burgundy" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-serif text-burgundy mb-3">Wedding Invite</h2>
            <p className="font-sans text-foreground mb-4 italic">Together with our families, we request the honor of your presence. Please join us as we embark on this chapter.</p>
            <div className="space-y-3 font-sans text-foreground">
              <p className="text-center font-thin text-xs">
                <span className="font-semibold text-burgundy text-lg">Mohamed Unaish Amjadh</span><br />
                The son of Ibrahim Amjadh and Aishath Ahmed
              </p>
              <p className="text-center text-burgundy font-serif text-xl">weds</p>
              <p className="text-center text-xs font-thin">
                <span className="font-semibold text-burgundy text-lg">Mariyam Rayyaan Rushdhy</span><br />
                The daughter of Hassan Rushdhy and Seema Mohamed
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Card 1: Ceremony Details */}
      <Card className={`p-6 md:p-8 bg-card shadow-card border-border/50 ${phase >= 3 ? 'animate-slide-up' : 'opacity-0'}`} style={{
      animationDelay: '0.1s'
    }}>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-burgundy/10 flex items-center justify-center">
            <Calendar className="w-6 h-6 text-burgundy" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-serif text-burgundy mb-3">Ceremony Details</h2>
            <div className="space-y-2 font-sans text-foreground">
              <p className="flex flex-col md:flex-row md:gap-2">
                <span className="font-semibold text-burgundy">Location:</span>
                <span>In front of Dhiraagu SOC office</span>
              </p>
              <p className="flex flex-col md:flex-row md:gap-2">
                <span className="font-semibold text-burgundy">Date & Time:</span>
                <span>31 December 2025 — 16:00</span>
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Card 2: Dress Code */}
      <Card className={`p-6 md:p-8 bg-card shadow-card border-border/50 ${phase >= 3 ? 'animate-slide-up' : 'opacity-0'}`} style={{
      animationDelay: '0.3s'
    }}>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-burgundy/10 flex items-center justify-center">
            <Shirt className="w-6 h-6 text-burgundy" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-serif text-burgundy mb-3">Dress Code</h2>
            <div className="flex flex-wrap gap-3">
              {['Burgundy', 'Khaki', 'Black', 'White'].map(color => <div key={color} className="px-4 py-2 rounded-full bg-burgundy/10 border border-burgundy/20 font-sans text-burgundy font-medium">
                  {color}
                </div>)}
            </div>
          </div>
        </div>
      </Card>

      {/* Card 3: Blessing / Donation */}
      <Card className={`p-6 md:p-8 bg-card shadow-card border-border/50 ${phase >= 3 ? 'animate-slide-up' : 'opacity-0'}`} style={{
      animationDelay: '0.5s'
    }}>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-burgundy/10 flex items-center justify-center">
            <Gift className="w-6 h-6 text-burgundy" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-serif text-burgundy mb-2">Your Blessing</h2>
            <p className="text-sm font-sans text-muted-foreground italic mb-4">
              Your presence is our present. Should you wish to bless us:
            </p>
            
            <div className="space-y-3 font-sans text-sm">
              <div className="p-3 bg-cream-dark rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">Unaish's BML Account</p>
                <p className="font-bold text-burgundy text-base md:text-lg tracking-wide">
                  7770000076245
                </p>
              </div>
              
              <div className="p-3 bg-cream-dark rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">Unaish's MIB Account</p>
                <p className="font-bold text-burgundy text-base md:text-lg tracking-wide">90103101489291000</p>
              </div>
              
              <div className="p-3 bg-cream-dark rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">Rayya's BML Account</p>
                <p className="font-bold text-burgundy text-base md:text-lg tracking-wide">7770000063573</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>;
};
export default InvitationCards;