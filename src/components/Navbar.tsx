import { Menu, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Logo />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amber-500">
              Home
            </a>
            <a href="#benefits" className="text-gray-700 hover:text-amber-500">
              Profits
            </a>
            <a href="#products" className="text-gray-700 hover:text-amber-500">
              Produits
            </a>
            <a href="#science" className="text-gray-700 hover:text-amber-500">
              Science
            </a>
            <a
              href="https://wa.me/+212634909556"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-amber-500 text-white px-4 py-2 rounded-full hover:bg-amber-600"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Acheter maintenant
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-amber-500">
                Home
              </a>
              <a href="#benefits" className="text-gray-700 hover:text-amber-500">
                Profits
              </a>
              <a href="#products" className="text-gray-700 hover:text-amber-500">
                Produits
              </a>
              <a href="#science" className="text-gray-700 hover:text-amber-500">
                Science
              </a>
              <a
                href="https://wa.me/+212634909556"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-amber-500 text-white px-4 py-2 rounded-full hover:bg-amber-600"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Acheter maintenant
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}