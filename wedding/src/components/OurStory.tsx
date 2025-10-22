import { Heart } from "lucide-react";

export const OurStory = () => {
  return (
    <section id="story" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="font-serif text-5xl font-bold text-primary mb-4">Our Story</h2>
          <div className="w-24 h-px bg-accent mx-auto"></div>
        </div>

        <div className="space-y-12">
          {/* First Meeting */}
          <div className="bg-card rounded-sm p-8 shadow-postcard hover:shadow-polaroid transition-all animate-fade-in border border-border">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-serif text-2xl font-bold text-primary">2018</span>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary mb-3">How We Met</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our paths first crossed at a mutual friend's art gallery opening in San Francisco. 
                  James was admiring a landscape painting, and Emily accidentally bumped into him while 
                  stepping back to get a better view. That clumsy moment sparked a conversation that 
                  lasted the entire evening, and we've been inseparable ever since.
                </p>
              </div>
            </div>
          </div>

          {/* Relationship */}
          <div className="bg-card rounded-sm p-8 shadow-postcard hover:shadow-polaroid transition-all animate-fade-in border border-border">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="font-serif text-2xl font-bold text-accent">2020</span>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary mb-3">Our Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Through coffee dates turned into wine nights, weekend hikes, and countless adventures, 
                  we discovered a love that grows stronger with each passing day. We've traveled together, 
                  adopted our beloved dog Max, and built a life filled with laughter, support, and endless love.
                </p>
              </div>
            </div>
          </div>

          {/* Proposal */}
          <div className="bg-card rounded-sm p-8 shadow-postcard hover:shadow-polaroid transition-all animate-fade-in border border-border">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-serif text-2xl font-bold text-primary">2024</span>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary mb-3">The Proposal</h3>
                <p className="text-muted-foreground leading-relaxed">
                  James proposed during a sunset picnic at our favorite spot overlooking the Golden Gate Bridge. 
                  Surrounded by candles and roses, he got down on one knee and asked Emily to be his forever. 
                  With tears of joy and an enthusiastic "Yes!", we began our journey toward becoming husband and wife.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
