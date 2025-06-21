
import React from 'react';
import { Plane, Calendar, Users, Clock } from 'lucide-react';

const TravelSection = () => {
  const travelPackages = [
    {
      id: 1,
      title: 'Circuit Impérial',
      description: '8 jours à travers les villes impériales du Maroc',
      duration: '8 jours / 7 nuits',
      price: 890,
      image: '/placeholder.svg',
      cities: ['Casablanca', 'Rabat', 'Meknès', 'Fès', 'Marrakech'],
      includes: ['Hébergement', 'Transport', 'Guide', 'Petit-déjeuner'],
      maxPersons: 15,
      nextDeparture: '2024-02-15'
    },
    {
      id: 2,
      title: 'Désert et Oasis',
      description: 'Aventure dans le Sahara et les oasis du Sud',
      duration: '5 jours / 4 nuits',
      price: 650,
      image: '/placeholder.svg',
      cities: ['Marrakech', 'Ouarzazate', 'Merzouga', 'Boumalne Dadès'],
      includes: ['Hébergement', 'Transport 4x4', 'Bivouac', 'Repas'],
      maxPersons: 12,
      nextDeparture: '2024-02-20'
    },
    {
      id: 3,
      title: 'Côte Atlantique',
      description: 'Découverte de la côte atlantique et ses trésors',
      duration: '6 jours / 5 nuits',
      price: 720,
      image: '/placeholder.svg',
      cities: ['Casablanca', 'El Jadida', 'Essaouira', 'Agadir'],
      includes: ['Hébergement', 'Transport', 'Activités nautiques', 'Demi-pension'],
      maxPersons: 20,
      nextDeparture: '2024-02-25'
    }
  ];

  const bonsPlan = [
    {
      title: 'Week-end à Marrakech',
      originalPrice: 299,
      discountPrice: 199,
      discount: 33,
      validUntil: '2024-02-29'
    },
    {
      title: 'Escapade à Chefchaouen',
      originalPrice: 180,
      discountPrice: 135,
      discount: 25,
      validUntil: '2024-03-15'
    }
  ];

  return (
    <section id="voyages" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Voyages Organisés
          </h2>
          <p className="text-xl text-gray-600">
            Circuits et bons plans pour découvrir le Maroc
          </p>
        </div>

        {/* Circuits organisés */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Nos Circuits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelPackages.map((travel) => (
              <div key={travel.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="relative">
                  <img 
                    src={travel.image} 
                    alt={travel.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {travel.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{travel.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{travel.description}</p>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">Prochain départ: {new Date(travel.nextDeparture).toLocaleDateString('fr-FR')}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <Users className="h-4 w-4 mr-2" />
                    <span className="text-sm">Max {travel.maxPersons} personnes</span>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Villes visitées:</h5>
                    <div className="flex flex-wrap gap-1">
                      {travel.cities.map((city, index) => (
                        <span key={index} className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Inclus:</h5>
                    <div className="grid grid-cols-2 gap-1 text-sm text-gray-600">
                      {travel.includes.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-purple-600">
                      {travel.price}€
                      <span className="text-sm text-gray-500 font-normal">/pers</span>
                    </div>
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
                      Réserver
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bons plans */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Bons Plans du Moment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bonsPlan.map((plan, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold">{plan.title}</h4>
                  <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                    -{plan.discount}%
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl font-bold">{plan.discountPrice}€</span>
                  <span className="text-lg line-through opacity-70">{plan.originalPrice}€</span>
                </div>
                
                <div className="flex items-center text-sm mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Valable jusqu'au {new Date(plan.validUntil).toLocaleDateString('fr-FR')}</span>
                </div>
                
                <button className="w-full bg-white text-orange-500 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Profiter de l'offre
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelSection;
