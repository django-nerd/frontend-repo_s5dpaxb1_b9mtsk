export default function Footer() {
  return (
    <footer id="contact" className="border-t border-amber-100 bg-gradient-to-b from-white to-amber-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <p className="font-serif text-2xl text-stone-900">Teratai</p>
            <p className="text-[12px] uppercase tracking-[0.2em] text-stone-500">Cookies & Cakes</p>
            <p className="mt-4 text-stone-600 max-w-xs">Handmade in small batches using premium ingredients. Jakarta • Since 2011.</p>
          </div>
          <div>
            <p className="font-semibold text-stone-900">Quick Links</p>
            <ul className="mt-3 space-y-2 text-stone-600">
              <li><a href="#menu" className="hover:text-stone-900">Menu</a></li>
              <li><a href="#why" className="hover:text-stone-900">Why Teratai</a></li>
              <li><a href="#" className="hover:text-stone-900">About Us</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-stone-900">Contact</p>
            <ul className="mt-3 space-y-2 text-stone-600">
              <li>WhatsApp: +62 812 3456 7890</li>
              <li>Email: hello@terataicookie.co</li>
              <li>Mon–Sat: 9:00–18:00</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-stone-900">Instagram</p>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="aspect-square overflow-hidden rounded-lg">
                  <img src={`https://source.unsplash.com/random/300x300?bakery,cookie&sig=${i}`} alt="Insta" className="h-full w-full object-cover hover:scale-105 transition-transform"/>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-amber-100 pt-6 text-sm text-stone-500">
          <p>© {new Date().getFullYear()} Teratai Cookies & Cakes. All rights reserved.</p>
          <p>Crafted with love • Baked to perfection</p>
        </div>
      </div>
    </footer>
  );
}
