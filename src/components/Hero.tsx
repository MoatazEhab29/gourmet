import { ChevronDown, Star } from 'lucide-react';

interface HeroProps {
  onReserveClick: () => void;
}

export default function Hero({ onReserveClick }: HeroProps) {
  const scrollToMenu = () => {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {/* Background image with Ken Burns effect */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/28245163/pexels-photo-28245163.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Gourmet steak on heated stone platter with ambient flames"
          className="w-full h-full object-cover scale-105"
          style={{ animation: 'kenBurns 20s ease-in-out infinite alternate' }}
        />
        <style>{`
          @keyframes kenBurns {
            0% { transform: scale(1.05) translate(0, 0); }
            100% { transform: scale(1.15) translate(-2%, -2%); }
          }
        `}</style>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/50 to-charcoal-950/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="animate-fade-up flex items-center gap-2 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 text-gold-400 fill-gold-400"
            />
          ))}
        </div>

        <p className="animate-fade-up text-gold-300 text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-4" style={{ animationDelay: '0.1s', opacity: 0 }}>
          International Casual Dining
        </p>

        <h1
          className="animate-fade-up font-serif text-4xl md:text-6xl lg:text-7xl font-light text-charcoal-50 max-w-4xl leading-[1.15] tracking-tight"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          A Dining Experience
          <br />
          <span className="text-gold-400 font-medium italic">Beyond the Ordinary</span>
        </h1>

        <p
          className="animate-fade-up mt-6 text-charcoal-300 text-base md:text-lg max-w-2xl leading-relaxed font-light"
          style={{ animationDelay: '0.3s', opacity: 0 }}
        >
          Artisan steaks, fresh hand-made pastas, and hand-crafted drinks —
          served in an atmosphere of ambient elegance.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-col sm:flex-row gap-4"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          <button
            onClick={onReserveClick}
            className="px-8 py-3.5 bg-gold-500 hover:bg-gold-400 text-charcoal-900 font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/30 hover:scale-105"
          >
            Reserve Your Table
          </button>
          <button
            onClick={scrollToMenu}
            className="px-8 py-3.5 border border-charcoal-300/40 hover:border-gold-400 text-charcoal-100 hover:text-gold-400 font-medium rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            Explore the Menu
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToMenu}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-charcoal-300 hover:text-gold-400 transition-colors animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
}
