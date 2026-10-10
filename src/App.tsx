import { useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import ReservationSection from '@/components/ReservationSection';
import Footer from '@/components/Footer';

export default function App() {
  const scrollToReservation = useCallback(() => {
    document.querySelector('#reservation')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-charcoal-950 text-charcoal-50 antialiased">
      <Navbar onReserveClick={scrollToReservation} />
      <main>
        <Hero onReserveClick={scrollToReservation} />
        <MenuSection />
        <ReservationSection />
      </main>
      <Footer />
    </div>
  );
}
