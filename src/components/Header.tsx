
import React from 'react';
import { Plane, Car, Bed, ChefHat } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Plane className="h-8 w-8" />
            <h1 className="text-2xl font-bold">MarocTravel</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#hebergements" className="hover:text-orange-200 transition-colors">
              <Bed className="h-5 w-5 inline mr-2" />
              Hébergements
            </a>
            <a href="#transport" className="hover:text-orange-200 transition-colors">
              <Car className="h-5 w-5 inline mr-2" />
              Transport
            </a>
            <a href="#restaurants" className="hover:text-orange-200 transition-colors">
              <ChefHat className="h-5 w-5 inline mr-2" />
              Restaurants
            </a>
            <a href="#voyages" className="hover:text-orange-200 transition-colors">
              <Plane className="h-5 w-5 inline mr-2" />
              Voyages
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="bg-white text-orange-500 px-4 py-2 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
              Connexion
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
