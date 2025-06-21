
import React, { useState } from 'react';
import { Car, Clock, MapPin, Calendar } from 'lucide-react';

const TransportSection = () => {
  const [transportType, setTransportType] = useState('taxi-luxe');

  const transportOptions = [
    {
      id: 'taxi-luxe',
      name: 'Taxi de Luxe',
      description: 'Véhicules haut de gamme avec chauffeur professionnel',
      price: '25€/h',
      features: ['Véhicule premium', 'Chauffeur expérimenté', 'Climatisation']
    },
    {
      id: 'indrive',
      name: 'Indrive',
      description: 'Service de transport partagé économique',
      price: '15€/trajet',
      features: ['Prix négociable', 'Rapide', 'Économique']
    },
    {
      id: 'avec-chauffeur',
      name: 'Voiture avec Chauffeur',
      description: 'Location de voiture avec chauffeur pour la journée',
      price: '80€/jour',
      features: ['Disponible 8h', 'Itinéraire flexible', 'Guide local']
    },
    {
      id: 'location-simple',
      name: 'Location Simple',
      description: 'Louez une voiture et conduisez vous-même',
      price: '35€/jour',
      features: ['Assurance incluse', 'Kilométrage illimité', 'GPS fourni']
    }
  ];

  return (
    <section id="transport" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Transport
          </h2>
          <p className="text-xl text-gray-600">
            Déplacez-vous facilement à travers le Maroc
          </p>
        </div>

        {/* Formulaire de réservation */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Ville de départ</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Casablanca"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Destination</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Marrakech"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input 
                  type="date"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Heure</label>
              <div className="relative">
                <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input 
                  type="time"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all transform hover:scale-105 mt-6 lg:mt-0">
              Rechercher
            </button>
          </div>
        </div>

        {/* Options de transport */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {transportOptions.map((option) => (
            <div 
              key={option.id}
              className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all hover:shadow-xl border-2 ${
                transportType === option.id ? 'border-green-500' : 'border-transparent'
              }`}
              onClick={() => setTransportType(option.id)}
            >
              <div className="flex items-center justify-between mb-4">
                <Car className="h-8 w-8 text-green-500" />
                <span className="text-2xl font-bold text-green-600">{option.price}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">{option.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{option.description}</p>
              
              <div className="space-y-2">
                {option.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                Réserver
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransportSection;
