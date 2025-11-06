import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2069&auto=format&fit=crop"
          alt="Handmade cookies on wooden table"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="inline-block rounded-full border border-amber-200/60 bg-white/70 px-3 py-1 text-xs tracking-widest text-amber-800 uppercase shadow-sm backdrop-blur">
            Trusted since 2011
          </p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl text-stone-900 leading-tight">
            Crafted with Love. Baked to Perfection.
          </h1>
          <p className="mt-6 text-stone-700 text-lg leading-relaxed max-w-prose">
            Teratai brings artisanal cookies and cakes made in small batches using premium ingredients. Warmth in every bite, elegance in every detail.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="inline-flex items-center rounded-full bg-stone-900 text-amber-50 px-6 py-3 text-sm font-medium shadow hover:shadow-md transition-all">Explore Our Cookies</a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-amber-600 text-amber-700 px-6 py-3 text-sm font-medium hover:bg-amber-50 transition-colors">Order Now</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
