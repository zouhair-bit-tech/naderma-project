import React, { useState } from 'react';
import { ShoppingCart, Star, Plus, Minus } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'NADERMA Sky Shield SPF 50+',
    price: 49.99,
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    description: 'Protection UV avancée avec des propriétés anti-âge',
  },
  {
    id: 2,
    name: 'NADERMA Hydrating Serum',
    price: 39.99,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80',
    description: 'Hydratation 24 heures avec des éléments protecteurs',
  },
  {
    id: 3,
    name: 'NADERMA Night Repair',
    price: 54.99,
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80',
    description: 'Overnight skin regeneration et protection',
  },
];

export default function Shop() {
  const [cart, setCart] = useState(new Map());

  const addToCart = (productId) => {
    setCart((prev) =>
      new Map(prev).set(productId, (prev.get(productId) || 0) + 1)
    );
  };

  const removeFromCart = (productId) => {
    setCart((prev) => {
      const newCart = new Map(prev);
      const currentQty = prev.get(productId);
      if (currentQty <= 1) {
        newCart.delete(productId);
      } else {
        newCart.set(productId, currentQty - 1);
      }
      return newCart;
    });
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Acheter les produits NADERMA
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-amber-500 fill-current" />
                    <span className="ml-1">{product.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">${product.price}</span>
                  <div className="flex items-center space-x-2">
                    {cart.has(product.id) && (
                      <>
                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span>{cart.get(product.id)}</span>
                      </>
                    )}
                    <button
                      onClick={() => addToCart(product.id)}
                      className="flex items-center bg-amber-500 text-white px-4 py-2 rounded-full hover:bg-amber-600"
                    >
                      {cart.has(product.id) ? (
                        <Plus className="h-4 w-4" />
                      ) : (
                        <>
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Ajouter au Panier
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
