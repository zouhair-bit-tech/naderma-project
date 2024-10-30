import React from 'react';
import { Instagram } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Logo />
            </div>
            <p className="text-gray-400">Protéger, Nourrir, Éclairer</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-amber-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-400 hover:text-amber-500">
                  Profits
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-amber-500">
                  Produits
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>naderma@gmail.com</li>
              <li>(+212) 634909556</li>
              <li className="pt-2">
                <a
                  href="https://www.instagram.com/swetty_center?igsh=MXhydjU5aGR4bXh2cQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-pink-400 hover:text-pink-300"
                >
                  <Instagram className="h-5 w-5 mr-2" />
                  Suivez-nous sur Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Entrer ton Email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="bg-amber-500 px-4 py-2 rounded-r-full hover:bg-amber-600">
                S'abonner
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 NADERMA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}