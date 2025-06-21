
import React, { useState } from 'react';
import { ChefHat, MapPin, Star, Clock } from 'lucide-react';

const RestaurantSection = () => {
  const [selectedCity, setSelectedCity] = useState('marrakech');

  const restaurants = [
    {
      id: 1,
      name: 'Dar Yacout',
      city: 'marrakech',
      cuisine: 'Marocaine',
      rating: 4.8,
      priceRange: '€€€',
      image: '/placeholder.svg',
      description: 'Restaurant traditionnel dans un cadre somptueux',
      specialties: ['Tajine', 'Couscous', 'Pastilla']
    },
    {
      id: 2,
      name: 'La Sqala',
      city: 'casablanca',
      cuisine: 'Marocaine/Française',
      rating: 4.6,
      priceRange: '€€',
      image: '/placeholder.svg',
      description: 'Cuisine fusion dans un jardin historique',
      specialties: ['Poisson', 'Grillades', 'Salades']
    },
    {
      id: 3,
      name: 'Il Giardino',
      city: 'marrakech',
      cuisine: 'Italienne',
      rating: 4.7,
      priceRange: '€€€',
      image: '/placeholder.svg',
      description: 'Authentique cuisine italienne en plein cœur de Marrakech',
      specialties: ['Pizza', 'Pasta', 'Risotto']
    },
    {
      id: 4,
      name: 'Pure Passion Restaurant',
      city: 'agadir',
      cuisine: 'Fruits de mer',
      rating: 4.9,
      priceRange: '€€€€',
      image: '/placeholder.svg',
      description: 'Spécialités de fruits de mer avec vue sur océan',
      specialties: ['Homard', 'Dorade', 'Paella']
    }
  ];

  const cities = [
    { id: 'marrakech', name: 'Marrakech' },
    { id: 'casablanca', name: 'Casablanca' },
    { id: 'fes', name: 'Fès' },
    { id: 'agadir', name: 'Agadir' },
    { id: 'rabat', name: 'Rabat' }
  ];

  const filteredRestaurants = restaurants.filter(restaurant => 
    selectedCity === 'all' || restaurant.city === selectedCity
  );

  return (
    <section id="restaurants" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Restaurants
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez les saveurs authentiques du Maroc
          </p>
        </div>

        {/* Filtres par ville */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCity('all')}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              selectedCity === 'all' 
                ? 'bg-yellow-500 text-black' 
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
            }`}
          >
            Toutes les villes
          </button>
          {cities.map((city) => (
            <button
              key={city.id}
              onClick={() => setSelectedCity(city.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCity === city.id 
                  ? 'bg-yellow-500 text-black' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              {city.name}
            </button>
          ))}
        </div>

        {/* Liste des restaurants */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="relative">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {restaurant.cuisine}
                </div>
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
                  {restaurant.priceRange}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{restaurant.name}</h3>
                
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm capitalize">{restaurant.city}</span>
                </div>
                
                <div className="flex items-center mb-4">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold ml-1">{restaurant.rating}</span>
                  <span className="text-gray-500 text-sm ml-2">({Math.floor(Math.random() * 100) + 50} avis)</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{restaurant.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {restaurant.specialties.map((specialty, index) => (
                    <span key={index} className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full">
                      {specialty}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all text-sm">
                    Réserver une table
                  </button>
                  <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded-lg font-semibold hover:bg-orange-50 transition-all text-sm">
                    <MapPin className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantSection;
