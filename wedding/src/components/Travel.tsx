import { Plane, Hotel, Car } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export const Travel = () => {
  return (
    <section id="travel" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-5xl font-bold text-primary mb-4">Travel & Stay</h2>
          <p className="text-muted-foreground text-lg">Information to help you plan your visit</p>
          <div className="w-24 h-px bg-accent mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Getting There */}
          <Card className="shadow-postcard hover:shadow-polaroid transition-all animate-fade-in border-border">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Plane className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-primary mb-4">Getting There</h3>
              <div className="space-y-3 text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">Nearest Airport</p>
                  <p className="text-sm">San Francisco International (SFO)</p>
                  <p className="text-sm">1 hour 15 min drive to venue</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Oakland Airport (OAK)</p>
                  <p className="text-sm">1 hour drive to venue</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Accommodations */}
          <Card className="shadow-postcard hover:shadow-polaroid transition-all animate-fade-in border-border">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Hotel className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-primary mb-4">Accommodations</h3>
              <div className="space-y-3 text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">The Napa Inn</p>
                  <p className="text-sm">2 miles from venue</p>
                  <p className="text-sm text-accent">Room block available</p>
                  <p className="text-sm">Code: EMILYJAMES2025</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Vineyard Suites</p>
                  <p className="text-sm">3 miles from venue</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Transportation */}
          <Card className="shadow-postcard hover:shadow-polaroid transition-all animate-fade-in border-border">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Car className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-primary mb-4">Transportation</h3>
              <div className="space-y-3 text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">Shuttle Service</p>
                  <p className="text-sm">Complimentary shuttles from The Napa Inn</p>
                  <p className="text-sm">Departure: 3:00 PM</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Parking</p>
                  <p className="text-sm">Free parking available at venue</p>
                  <p className="text-sm">Valet service provided</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Local Attractions */}
        <Card className="mt-8 shadow-postcard hover:shadow-polaroid transition-all animate-fade-in border-border">
          <CardContent className="p-8">
            <h3 className="font-serif text-2xl font-semibold text-primary mb-4">Things to Do in Napa</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Make a weekend of it! Napa Valley offers world-class wineries, farm-to-table dining, 
              hot air balloon rides, and stunning natural beauty. We recommend arriving a day early 
              or staying a day after to explore this beautiful region.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">Wine Tasting</p>
                <p className="text-sm">Visit renowned wineries like Opus One, Domaine Carneros</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Downtown Napa</p>
                <p className="text-sm">Boutique shopping and riverside dining</p>
              </div>
              <div>
                <p className="font-medium text-foreground">The Napa Valley Wine Train</p>
                <p className="text-sm">Scenic railway journey with gourmet dining</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Oxbow Public Market</p>
                <p className="text-sm">Local food, artisan goods, and wine</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
