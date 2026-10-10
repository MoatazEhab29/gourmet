import { useEffect, useState } from 'react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

interface NavbarProps {
  onReserveClick: () => void;
}

export default function Navbar({ onReserveClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Menu', href: '#menu' },
    { label: 'Reserve', href: '#reservation' },
    { label: 'Visit', href: '#footer' },
  ];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal-900/95 backdrop-blur-md shadow-lg shadow-black/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => handleNavClick('#hero')}
          className="flex items-center gap-2 group"
        >
          <UtensilsCrossed className="w-7 h-7 text-gold-400 group-hover:text-gold-300 transition-colors" />
          <span className="font-serif text-2xl font-semibold tracking-wide text-charcoal-50">
            Savor
            <span className="text-gold-400 ml-1">Bistro</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium tracking-wide text-charcoal-200 hover:text-gold-400 transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-400 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <button
            onClick={onReserveClick}
            className="px-6 py-2.5 bg-gold-500 hover:bg-gold-400 text-charcoal-900 font-semibold text-sm rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20 hover:scale-105"
          >
            Book a Table
          </button>
        </div>

        <button
          className="md:hidden text-charcoal-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4 bg-charcoal-900/98 backdrop-blur-md">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-charcoal-200 hover:text-gold-400 transition-colors text-base font-medium py-1"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              onReserveClick();
            }}
            className="px-6 py-3 bg-gold-500 text-charcoal-900 font-semibold text-sm rounded-full text-center"
          >
            Book a Table
          </button>
        </div>
      </div>
    </nav>
  );
}
