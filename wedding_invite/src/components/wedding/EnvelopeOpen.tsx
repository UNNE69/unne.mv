interface EnvelopeOpenProps {
  phase: number;
}
const EnvelopeOpen = ({
  phase
}: EnvelopeOpenProps) => {
  return <div className="relative w-full max-w-md mx-auto">
      {/* Opened Envelope Container */}
      <div className="relative w-full aspect-[3/2]">
        {/* Envelope Body */}
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy to-burgundy-dark rounded-lg shadow-elegant" />
        
        {/* Opened Flap - Animated */}
        <div className={`absolute top-0 left-0 w-full h-32 origin-top ${phase >= 2 ? 'animate-envelope-open' : ''}`} style={{
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
        clipPath: 'polygon(0 0, 100% 0, 50% 100%)'
      }}>
          <div className="w-full h-full bg-burgundy-dark opacity-90 rounded-t-lg" />
        </div>

        {/* Inner Card with Names */}
        <div className={`absolute inset-x-8 top-12 ${phase >= 2 ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="bg-cream rounded-lg p-8 shadow-card text-center my-px py-[15px]">
            <h1 className="text-5xl md:text-6xl font-ornamental text-gold mb-2 animate-shimmer bg-gradient-to-r from-gold via-gold-dark to-gold bg-[length:200%_auto] bg-clip-text text-transparent my-0 py-[9px]">
              Unaish & Rayya
            </h1>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-gold/50" />
              <p className="text-xs font-serif text-burgundy tracking-widest uppercase">Request's the Pleasure of Your Company</p>
              <div className="h-px w-12 bg-gold/50" />
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default EnvelopeOpen;