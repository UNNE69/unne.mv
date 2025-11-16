import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import EnvelopeClosed from "@/components/wedding/EnvelopeClosed";
import EnvelopeOpen from "@/components/wedding/EnvelopeOpen";
import InvitationCards from "@/components/wedding/InvitationCards";
const Index = () => {
  const [phase, setPhase] = useState<1 | 2 | 3 | 4>(1);
  const handleOpenEnvelope = () => {
    setPhase(2);
    setTimeout(() => setPhase(3), 1500);
    setTimeout(() => setPhase(4), 2500);
  };
  const handleReset = () => {
    setPhase(1);
  };
  return <main className="min-h-screen bg-background flex items-center justify-center p-4 overflow-hidden">
      <div className="w-full max-w-4xl mx-auto">
        {/* Phase 1: Closed Envelope */}
        {phase === 1 && <div className="animate-scale-in">
            <EnvelopeClosed onOpen={handleOpenEnvelope} />
          </div>}

        {/* Phase 2, 3, 4: Opening Animation + Cards */}
        {phase >= 2 && <div className="space-y-8 animate-fade-in">
            <EnvelopeOpen phase={phase} />
            
            {phase >= 3 && <div className="animate-slide-up">
                <InvitationCards phase={phase} />
              </div>}

            {phase === 4 && <div className="text-center mt-8 animate-fade-in">
                
              </div>}
          </div>}
      </div>
    </main>;
};
export default Index;