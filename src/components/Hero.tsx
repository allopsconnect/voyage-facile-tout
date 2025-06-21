
import React from 'react';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-yellow-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Découvrez le Maroc autrement
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Réservez vos hébergements, transports et découvrez les meilleurs restaurants du royaume
        </p>
        
        <div className="bg-white rounded-xl p-6 max-w-4xl mx-auto shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="text-left">
              <label className="text-gray-700 font-semibold block mb-2">Destination</label>
              <input 
                type="text" 
                placeholder="Casablanca, Marrakech..." 
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            
            <div className="text-left">
              <label className="text-gray-700 font-semibold block mb-2">Arrivée</label>
              <input 
                type="date" 
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            
            <div className="text-left">
              <label className="text-gray-700 font-semibold block mb-2">Départ</label>
              <input 
                type="date" 
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            
            <button className="bg-gradient-to-r from-black to-yellow-500 text-white p-3 rounded-lg font-semibold hover:from-gray-800 hover:to-yellow-600 transition-all transform hover:scale-105 flex items-center justify-center">
              <Search className="h-5 w-5 mr-2" />
              Rechercher
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
