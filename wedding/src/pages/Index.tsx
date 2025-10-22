import { useState } from "react";
import { LandingPage } from "@/components/LandingPage";
import { Hero } from "@/components/Hero";
import { OurStory } from "@/components/OurStory";
import { WeddingDetails } from "@/components/WeddingDetails";
import { Schedule } from "@/components/Schedule";
import { RSVP } from "@/components/RSVP";
import { Travel } from "@/components/Travel";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [hasEntered, setHasEntered] = useState(false);

  if (!hasEntered) {
    return <LandingPage onEnter={() => setHasEntered(true)} />;
  }

  return (
    <div className="min-h-screen">
      <Hero />
      <OurStory />
      <WeddingDetails />
      <Schedule />
      <RSVP />
      <Travel />
      <Footer />
    </div>
  );
};

export default Index;
