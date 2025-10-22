import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { Send } from "lucide-react";

export const RSVP = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "1",
    attending: "yes",
    dietary: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your RSVP! We can't wait to celebrate with you.", {
      description: "You'll receive a confirmation email shortly.",
    });
    setFormData({
      name: "",
      email: "",
      guests: "1",
      attending: "yes",
      dietary: "",
      message: "",
    });
  };

  return (
    <section id="rsvp" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-5xl font-bold text-primary mb-4">RSVP</h2>
          <p className="text-muted-foreground text-lg">Please respond by May 1st, 2025</p>
          <div className="w-24 h-px bg-accent mx-auto mt-4"></div>
        </div>

        <Card className="shadow-postcard animate-fade-in border-border">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium">Full Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-input focus:ring-primary"
                  placeholder="John & Jane Doe"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-input focus:ring-primary"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Attending */}
              <div className="space-y-3">
                <Label className="text-foreground font-medium">Will you be attending? *</Label>
                <RadioGroup
                  value={formData.attending}
                  onValueChange={(value) => setFormData({ ...formData, attending: value })}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes" className="font-normal cursor-pointer">
                      Joyfully accepts
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no" className="font-normal cursor-pointer">
                      Regretfully declines
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Number of Guests */}
              <div className="space-y-2">
                <Label htmlFor="guests" className="text-foreground font-medium">Number of Guests *</Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  max="5"
                  required
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="border-input focus:ring-primary"
                />
                <p className="text-sm text-muted-foreground">Including yourself</p>
              </div>

              {/* Dietary Restrictions */}
              <div className="space-y-2">
                <Label htmlFor="dietary" className="text-foreground font-medium">Dietary Restrictions</Label>
                <Input
                  id="dietary"
                  value={formData.dietary}
                  onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                  className="border-input focus:ring-primary"
                  placeholder="Vegetarian, vegan, allergies, etc."
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground font-medium">Special Message (Optional)</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-input focus:ring-primary min-h-[100px]"
                  placeholder="Share a message, song request, or special note with us..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-postcard hover:shadow-polaroid transition-all"
                size="lg"
              >
                <Send className="w-4 h-4 mr-2" />
                Submit RSVP
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
