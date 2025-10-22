import { Calendar, Clock, MapPin, Shirt } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export const WeddingDetails = () => {
  return (
    <section id="details" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-5xl font-bold text-primary mb-4">Wedding Details</h2>
          <p className="text-muted-foreground text-lg">Everything you need to know about our special day</p>
          <div className="w-24 h-px bg-accent mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Ceremony */}
          <Card className="overflow-hidden shadow-postcard hover:shadow-polaroid transition-all animate-fade-in border-border">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-primary">Ceremony</h3>
                </div>
                
                <div className="space-y-4 pl-15">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">4:00 PM</p>
                      <p className="text-sm text-muted-foreground">Ceremony begins promptly</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Rosewood Gardens</p>
                      <p className="text-sm text-muted-foreground">1234 Vineyard Lane<br/>Napa Valley, CA 94558</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reception */}
          <Card className="overflow-hidden shadow-postcard hover:shadow-polaroid transition-all animate-fade-in border-border">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-primary">Reception</h3>
                </div>
                
                <div className="space-y-4 pl-15">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">6:00 PM - 11:00 PM</p>
                      <p className="text-sm text-muted-foreground">Dinner, dancing, and celebration</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">The Grand Pavilion</p>
                      <p className="text-sm text-muted-foreground">Same venue, adjacent ballroom</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Dress Code */}
        <Card className="mt-8 overflow-hidden shadow-postcard hover:shadow-polaroid transition-all animate-fade-in border-border">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shirt className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-semibold text-primary mb-3">Dress Code</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-medium text-foreground">Formal Attire.</span> We kindly request that our guests 
                  dress in formal attire. Think floor-length gowns and suits. Our color palette includes olive green, 
                  burgundy, and cream - feel free to incorporate these colors, but it's not required. Most importantly, 
                  wear something that makes you feel wonderful!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
