import React from 'react';
import { Sun } from 'lucide-react';

const features = [
  'SPF 50+ Broad Spectrum Protection',
  'Anti-aging Properties',
  '24-Hour Hydration',
];

export default function Products() {
  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-b from-white to-amber-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1556229162-5c63ed9c4efb?auto=format&fit=crop&w=800&q=80"
              alt="NADERMA product showcase"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">
              NADERMA Formule Sky Shield
            </h2>
            <p className="text-gray-600 mb-6">
              Découvrez des soins de la peau conçus non seulement pour protéger
              mais aussi pour améliorer la beauté naturelle de votre peau, vous
              donnant une confiance qui brille.
            </p>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Sun className="h-5 w-5 text-amber-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/+212634909556"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-600 transition-colors"
            >
              Acheter maintenant sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}