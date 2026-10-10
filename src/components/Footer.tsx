import { Instagram, Facebook, Twitter, MapPin, MessageCircle, UtensilsCrossed, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const whatsappNumber = '15551234567';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello Savor Bistro, I'd like to inquire about a reservation."
  )}`;

  const socialLinks = [
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer id="footer" className="bg-charcoal-950 border-t border-charcoal-800">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <UtensilsCrossed className="w-6 h-6 text-gold-400" />
              <span className="font-serif text-2xl font-semibold text-charcoal-50">
                Savor <span className="text-gold-400">Bistro</span>
              </span>
            </div>
            <p className="text-charcoal-400 text-sm leading-relaxed mb-6">
              An international casual dining bistro where artisan flavors meet
              ambient elegance. Every plate tells a story.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-charcoal-800 hover:bg-gold-500 text-charcoal-300 hover:text-charcoal-900 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg text-charcoal-100 mb-5 flex items-center gap-2">
              <Clock className="w-5 h-5 text-gold-400" />
              Opening Hours
            </h4>
            <ul className="space-y-2.5 text-sm text-charcoal-400">
              <li className="flex justify-between">
                <span>Mon — Thu</span>
                <span className="text-charcoal-300">12:00 — 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Fri — Sat</span>
                <span className="text-charcoal-300">12:00 — 23:30</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-charcoal-300">13:00 — 21:00</span>
              </li>
            </ul>
          </div>

          {/* Location & Map */}
          <div>
            <h4 className="font-serif text-lg text-charcoal-100 mb-5 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gold-400" />
              Find Us
            </h4>
            <p className="text-charcoal-400 text-sm leading-relaxed mb-4">
              24 Gourmet Avenue<br />
              Downtown District<br />
              New York, NY 10001
            </p>
            <div className="rounded-xl overflow-hidden border border-charcoal-800 shadow-lg">
              <iframe
                title="Savor Bistro Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="160"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) contrast(0.9)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* WhatsApp Contact */}
          <div>
            <h4 className="font-serif text-lg text-charcoal-100 mb-5">
              Get in Touch
            </h4>
            <p className="text-charcoal-400 text-sm leading-relaxed mb-5">
              Have a question or special request? Chat with us directly on
              WhatsApp for instant assistance.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-success-500 hover:bg-success-400 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-success-500/30"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
            <div className="mt-5 text-sm text-charcoal-500">
              <p className="mb-1">Reservations: +1 (555) 123-4567</p>
              <p>events@savorbistro.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-charcoal-800/60">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-charcoal-500 text-xs">
            &copy; {currentYear} Savor Bistro. All rights reserved.
          </p>
          <p className="text-charcoal-600 text-xs">
            Crafted with passion for extraordinary dining.
          </p>
        </div>
      </div>
    </footer>
  );
}
