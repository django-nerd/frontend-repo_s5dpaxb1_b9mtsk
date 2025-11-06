import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Alya M.',
    text: 'The butter cookies melt in your mouth! Packaging is so elegant — perfect for gifting.',
  },
  {
    name: 'Kevin S.',
    text: 'We ordered hampers for our clients. Everyone loved the taste and presentation. Five stars!',
  },
  {
    name: 'Nadia R.',
    text: 'Feels homemade yet premium. The chocolate chunk cookies are addictive!'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[radial-gradient(60%_60%_at_50%_0%,#fff7e6,transparent)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-4xl text-stone-900">Loved by Cookie Lovers</h2>
          <p className="mt-3 text-stone-700 max-w-2xl mx-auto">
            Stories from our community — small moments of joy, one bite at a time.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-white p-6 shadow-[0_5px_20px_rgba(0,0,0,0.06)] border border-amber-100"
            >
              <p className="text-stone-700 leading-relaxed">“{t.text}”</p>
              <footer className="mt-4 text-sm font-medium text-stone-900">— {t.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
