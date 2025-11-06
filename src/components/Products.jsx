import React, { useState } from 'react';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Classic Butter Cookies', price: 6.5, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2069&auto=format&fit=crop', category: 'Cookies' },
  { id: 2, name: 'Almond Chocolate Chunk', price: 8.0, image: 'https://images.unsplash.com/photo-1734772307171-fa1ee9640c95?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDbGFzc2ljJTIwQnV0dGVyJTIwQ29va2llc3xlbnwwfDB8fHwxNzYyMzE4NTU1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', category: 'Cookies' },
  { id: 3, name: 'Festive Gift Box', price: 24.0, image: 'https://images.unsplash.com/photo-1543168256-418811576931?q=80&w=1974&auto=format&fit=crop', category: 'Gift Box' },
  { id: 4, name: 'Hari Raya Hamper', price: 58.0, image: 'https://images.unsplash.com/photo-1734772307171-fa1ee9640c95?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDbGFzc2ljJTIwQnV0dGVyJTIwQ29va2llc3xlbnwwfDB8fHwxNzYyMzE4NTU1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', category: 'Hampers' },
  { id: 5, name: 'Chewy Oatmeal Raisin', price: 7.5, image: 'https://images.unsplash.com/photo-1734772307171-fa1ee9640c95?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDbGFzc2ljJTIwQnV0dGVyJTIwQ29va2llc3xlbnwwfDB8fHwxNzYyMzE4NTU1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', category: 'Cookies' },
  { id: 6, name: 'Floral Selection Box', price: 28.0, image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1974&auto=format&fit=crop', category: 'Gift Box' }
];

const categories = ['All', 'Cookies', 'Hampers', 'Gift Box'];

export default function Products() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? products : products.filter(p => p.category === active);

  return (
    <section id="menu" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h2 className="font-serif text-4xl text-stone-900">Our Favorites</h2>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm border transition-all whitespace-nowrap ${
                  active === cat
                    ? 'bg-amber-600 text-white border-amber-600 shadow'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <motion.a
              key={p.id}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-[0_5px_15px_rgba(0,0,0,0.06)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-stone-900 font-medium">{p.name}</h3>
                  <p className="text-amber-700 font-semibold">${p.price.toFixed(2)}</p>
                </div>
                <p className="mt-2 text-sm text-stone-500">{p.category}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
