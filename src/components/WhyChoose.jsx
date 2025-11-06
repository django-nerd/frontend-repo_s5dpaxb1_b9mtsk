import { Star, Leaf, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    icon: Star,
    title: 'Premium Ingredients',
    desc: 'Real butter, Belgian chocolate, and hand-selected nuts for uncompromising flavor.'
  },
  {
    icon: Leaf,
    title: 'Homemade Freshness',
    desc: 'Small batches baked daily. From our kitchen to your table with care.'
  },
  {
    icon: Shield,
    title: 'Trusted Since 2011',
    desc: 'Loved by families and corporates for gifts, hampers, and celebrations.'
  }
];

export default function WhyChoose() {
  return (
    <section id="why" className="relative py-20 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,248,235,0.6))]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-4xl text-stone-900">Why Choose Teratai</h2>
          <p className="mt-3 text-stone-700 max-w-2xl mx-auto">
            We believe in honest baking — simple, premium ingredients crafted with time and heart.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-white p-7 shadow-[0_5px_25px_rgba(0,0,0,0.06)] border border-amber-100"
            >
              <div className="h-12 w-12 rounded-xl bg-amber-50 text-amber-700 grid place-items-center shadow-inner mb-4">
                <item.icon />
              </div>
              <h3 className="font-semibold text-lg text-stone-900">{item.title}</h3>
              <p className="mt-2 text-stone-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
