import React from 'react';
import { Shield, Sparkles, ThumbsUp } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: "Protection Avancée",
    description: "Protégez votre peau des rayons UV nocifs et des stress environnementaux."
  },
  {
    icon: Sparkles,
    title: "Ingrédients de Qualité",
    description: "Chaque produit est formulé avec des ingrédients de qualité supérieure pour créer une barrière contre les polluants."
  },
  {
    icon: ThumbsUp,
    title: "Approuvé Par Des Dermatologues",
    description: "Cliniquement testé et recommandé par des experts en soins de la peau."
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose NADERMA?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 bg-amber-50 rounded-xl">
              <benefit.icon className="h-12 w-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}