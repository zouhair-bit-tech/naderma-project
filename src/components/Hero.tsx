import React from 'react';
import { Instagram } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-20 pb-12 bg-gradient-to-b from-amber-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              La Protection Ultime de votre Peau
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Chez NADERMA, nous croyons que la peau radieuse commence par la
              bonne protection. Nos produits de soins de la peau sont conçus
              pour protéger votre peau des facteurs environnementaux, en la
              maintenant nourrie, équilibrée et saine.
            </p>
            <div className="space-y-4">
              <button className="bg-amber-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-600 transition-colors">
                Découvrir
              </button>
              <div className="flex justify-center">
                <div className="w-full max-w-md bg-green-500 text-white p-4 rounded-lg text-center">
                  <p className="font-semibold mb-2">Achetez maintenant</p>
                  <p className="text-sm mb-2">Votre premier produit est à un message sur WhatsApp !</p>
                  <a 
                    href="https://wa.me/+212634909556" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-white text-green-500 px-6 py-2 rounded-full font-semibold hover:bg-green-50 transition-colors"
                  >
                    Achetez maintenant sur WhatsApp
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-md bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg text-center">
                  <p className="font-semibold mb-2">Suivez notre actualité</p>
                  <a 
                    href="https://www.instagram.com/swetty_center?igsh=MXhydjU5aGR4bXh2cQ==" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center bg-white text-pink-500 px-6 py-2 rounded-full font-semibold hover:bg-pink-50 transition-colors"
                  >
                    <Instagram className="h-5 w-5 mr-2" />
                    Suivez-nous sur Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1570554520913-ce2192a7f7d7?auto=format&fit=crop&w=800&q=80"
              alt="NADERMA produit"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}