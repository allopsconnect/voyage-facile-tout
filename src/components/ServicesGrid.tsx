
import React from 'react';
import { Bed, Car, ChefHat, Plane, MapPin, Calendar } from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      icon: Bed,
      title: 'Hébergements',
      description: 'Appartements, villas, hôtels et chambres dans tout le Maroc',
      color: 'from-blue-500 to-cyan-500',
      href: '#hebergements'
    },
    {
      icon: Car,
      title: 'Transport',
      description: 'Taxis de luxe, voitures avec chauffeur et location',
      color: 'from-green-500 to-emerald-500',
      href: '#transport'
    },
    {
      icon: ChefHat,
      title: 'Restaurants',
      description: 'Découvrez les meilleurs restaurants par ville',
      color: 'from-orange-500 to-red-500',
      href: '#restaurants'
    },
    {
      icon: Plane,
      title: 'Voyages Organisés',
      description: 'Circuits et bons plans à travers le royaume',
      color: 'from-purple-500 to-pink-500',
      href: '#voyages'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une plateforme complète pour organiser votre séjour au Maroc
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <a
                key={index}
                href={service.href}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <Icon className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{service.description}</p>
                  <div className="mt-4 text-orange-500 font-semibold group-hover:text-orange-600 transition-colors">
                    Découvrir →
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
