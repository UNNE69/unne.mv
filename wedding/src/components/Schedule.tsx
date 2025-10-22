import { Clock } from "lucide-react";

const events = [
  {
    time: "3:30 PM",
    title: "Guest Arrival",
    description: "Please arrive early to find your seats and enjoy pre-ceremony music",
  },
  {
    time: "4:00 PM",
    title: "Ceremony",
    description: "Join us as we exchange vows in the garden",
  },
  {
    time: "4:45 PM",
    title: "Cocktail Hour",
    description: "Enjoy cocktails, hors d'oeuvres, and lawn games",
  },
  {
    time: "6:00 PM",
    title: "Reception Begins",
    description: "Grand entrance and first dance",
  },
  {
    time: "6:30 PM",
    title: "Dinner Service",
    description: "Three-course plated dinner with wine pairings",
  },
  {
    time: "8:00 PM",
    title: "Toasts & Cake Cutting",
    description: "Speeches from our loved ones and dessert",
  },
  {
    time: "8:30 PM",
    title: "Dancing",
    description: "Dance the night away with live music",
  },
  {
    time: "11:00 PM",
    title: "Send Off",
    description: "Sparkler exit under the stars",
  },
];

export const Schedule = () => {
  return (
    <section id="schedule" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="font-serif text-5xl font-bold text-primary mb-4">Schedule</h2>
          <p className="text-muted-foreground text-lg">Timeline for our special day</p>
          <div className="w-24 h-px bg-accent mx-auto mt-4"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block"></div>

          <div className="space-y-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="relative pl-0 md:pl-20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-accent border-4 border-background hidden md:block"></div>

                <div className="bg-card rounded-sm p-6 shadow-postcard hover:shadow-polaroid transition-all border border-border">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-shrink-0">
                      <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                        {event.time}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
