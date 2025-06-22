
import React from 'react';
import { Plane, Car, Bed, ChefHat } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleConnexionClick = () => {
    navigate('/auth');
  };

  return (
    <header className="bg-gradient-to-r from-gray-900 via-black to-yellow-500 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Plane className="h-6 w-6 text-yellow-500" />
            <h1 className="text-xl font-bold text-white">nsafro.ma</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#hebergements" className="hover:text-yellow-200 transition-colors flex items-center gap-2 text-sm">
              <Bed className="h-4 w-4" />
              Hébergements
            </a>
            <a href="#transport" className="hover:text-yellow-200 transition-colors flex items-center gap-2 text-sm">
              <Car className="h-4 w-4" />
              Transport
            </a>
            <a href="#restaurants" className="hover:text-yellow-200 transition-colors flex items-center gap-2 text-sm">
              <ChefHat className="h-4 w-4" />
              Restaurants
            </a>
            <a href="#voyages" className="hover:text-yellow-200 transition-colors flex items-center gap-2 text-sm">
              <Plane className="h-4 w-4" />
              Voyages
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={handleConnexionClick}
              className="bg-white text-black px-3 py-1.5 rounded-lg font-semibold hover:bg-yellow-50 transition-colors text-sm"
            >
              Connexion
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
