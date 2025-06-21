
import React, { useState } from 'react';
import { Bed, MapPin, Star, Users, Calendar } from 'lucide-react';

const AccommodationSection = () => {
  const [filters, setFilters] = useState({
    type: '',
    city: '',
    priceRange: '',
    guests: ''
  });

  const accommodations = [
    {
      id: 1,
      name: 'Riad Luxe Marrakech',
      type: 'Riad',
      city: 'Marrakech',
      price: 120,
      rating: 4.8,
      guests: 4,
      image: '/placeholder.svg',
      amenities: ['Piscine', 'Wifi', 'Petit-déjeuner']
    },
    {
      id: 2,
      name: 'Appartement Moderne Casablanca',
      type: 'Appartement',
      city: 'Casablanca',
      price: 80,
      rating: 4.5,
      guests: 6,
      image: '/placeholder.svg',
      amenities: ['Wifi', 'Cuisine', 'Parking']
    },
    {
      id: 3,
      name: 'Villa Vue Mer Agadir',
      type: 'Villa',
      city: 'Agadir',
      price: 200,
      rating: 4.9,
      guests: 8,
      image: '/placeholder.svg',
      amenities: ['Piscine', 'Vue mer', 'Jardin']
    }
  ];

  return (
    <section id="hebergements" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Hébergements
          </h2>
          <p className="text-xl text-gray-600">
            Trouvez le logement parfait pour votre séjour
          </p>
        </div>

        {/* Filtres */}
        <div className="bg-gray-50 rounded-xl p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Type</label>
              <select 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={filters.type}
                onChange={(e) => setFilters({...filters, type: e.target.value})}
              >
                <option value="">Tous les types</option>
                <option value="hotel">Hôtel</option>
                <option value="riad">Riad</option>
                <option value="appartement">Appartement</option>
                <option value="villa">Villa</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Ville</label>
              <select 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={filters.city}
                onChange={(e) => setFilters({...filters, city: e.target.value})}
              >
                <option value="">Toutes les villes</option>
                <option value="casablanca">Casablanca</option>
                <option value="marrakech">Marrakech</option>
                <option value="fes">Fès</option>
                <option value="agadir">Agadir</option>
                <option value="rabat">Rabat</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Prix par nuit</label>
              <select 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={filters.priceRange}
                onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
              >
                <option value="">Tous les prix</option>
                <option value="0-50">0-50 €</option>
                <option value="50-100">50-100 €</option>
                <option value="100-200">100-200 €</option>
                <option value="200+">200+ €</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Voyageurs</label>
              <select 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={filters.guests}
                onChange={(e) => setFilters({...filters, guests: e.target.value})}
              >
                <option value="">Nombre de personnes</option>
                <option value="1">1 personne</option>
                <option value="2">2 personnes</option>
                <option value="4">4 personnes</option>
                <option value="6+">6+ personnes</option>
              </select>
            </div>
          </div>
        </div>

        {/* Liste des hébergements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation) => (
            <div key={accommodation.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="relative">
                <img 
                  src={accommodation.image} 
                  alt={accommodation.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
                  {accommodation.price}€/nuit
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{accommodation.name}</h3>
                
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{accommodation.city}</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold ml-1">{accommodation.rating}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-1" />
                    <span className="text-sm">{accommodation.guests} pers.</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {accommodation.amenities.map((amenity, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {amenity}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105">
                  Réserver maintenant
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;
