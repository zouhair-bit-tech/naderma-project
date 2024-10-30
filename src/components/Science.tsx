import React from 'react';
import { ShieldCheck, Droplets, Beaker, Sun } from 'lucide-react';

const scientificFeatures = [
  {
    icon: ShieldCheck,
    title: 'UV Protection Avancée',
    description:
      'Notre formule exclusive crée une barrière protectrice contre les rayons UVA et UVB tout en permettant à la peau de respirer.',
  },
  {
    icon: Droplets,
    title: 'Technologie Hydratation',
    description:
      'Utilisant des ingrédients avancés de liaison à humidité qui maintiennent des niveaux hydratation optimaux pendant 24 heures..',
  },
  {
    icon: Beaker,
    title: 'Études Cliniques',
    description:
      'Résultats prouvés grâce à des tests cliniques approfondis et des études dermatologiques.',
  },
  {
    icon: Sun,
    title: 'Défense Environnement',
    description:
      'Ingrédients actifs qui neutralisent les polluants environnementaux et les radicaux libres.',
  },
];

export default function Science() {
  return (
    <section id="science" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            La Science derrière NADERMA
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez notre approche innovante de la protection de la peau.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80"
              alt="Scientific research"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">
              Formule basée sur la recherche
            </h3>
            <p className="text-gray-600 mb-6">
              Notre équipe de scientifiques et de dermatologues a développé une
              formule unique qui combine des ingrédients protecteurs puissants
              avec des composés nourrissants pour la peau. Grâce à des années de
              recherche et d'études cliniques, nous avons perfectionné
              l'équilibre entre protection et soin.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {scientificFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <feature.icon className="h-6 w-6 text-amber-500 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Résultats de clinique
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">98%</div>
              <p className="text-gray-600">
                Les utilisateurs ont signalé une amélioration de la protection
                de la peau.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">24h</div>
              <p className="text-gray-600">
                Une hydratation protégée en continue
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">95%</div>
              <p className="text-gray-600">
                Réduction des marqueurs de dommages causés par les UV
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
