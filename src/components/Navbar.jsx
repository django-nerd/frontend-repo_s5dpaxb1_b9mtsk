import { useState, useEffect } from 'react';
import { ShoppingBag, Phone, Instagram } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-amber-200 via-amber-100 to-rose-100 grid place-items-center shadow-inner">
              <span className="text-amber-700 font-semibold">T</span>
            </div>
            <div className="leading-tight">
              <p className="font-serif text-lg tracking-wide text-stone-800">Teratai</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-stone-500">Cookies & Cakes</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#story" className="text-stone-700 hover:text-stone-900 transition-colors">Our Story</a>
            <a href="#menu" className="text-stone-700 hover:text-stone-900 transition-colors">Menu</a>
            <a href="#why" className="text-stone-700 hover:text-stone-900 transition-colors">Why Teratai</a>
            <a href="#contact" className="text-stone-700 hover:text-stone-900 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white px-4 py-2 text-sm shadow-[0_10px_20px_rgba(245,158,11,0.25)] hover:shadow-[0_12px_24px_rgba(245,158,11,0.35)] transition-all"
            >
              <Phone size={16} /> Order
            </a>
            <a
              href="#cart"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 shadow hover:shadow-md transition-all backdrop-blur border border-stone-200"
              aria-label="Cart"
            >
              <ShoppingBag className="text-stone-700" size={20} />
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center rounded-full bg-amber-600 text-white text-xs h-5 w-5">2</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 shadow hover:shadow-md transition-all backdrop-blur border border-stone-200"
              aria-label="Instagram"
            >
              <Instagram className="text-stone-700" size={20} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
