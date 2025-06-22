
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
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Plane className="h-8 w-8 text-yellow-500" />
            <h1 className="text-2xl font-bold text-yellow-500">nsafro.ma</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#hebergements" className="hover:text-yellow-200 transition-colors flex items-center gap-2">
              <Bed className="h-5 w-5" />
              Hébergements
            </a>
            <a href="#transport" className="hover:text-yellow-200 transition-colors flex items-center gap-2">
              <Car className="h-5 w-5" />
              Transport
            </a>
            <a href="#restaurants" className="hover:text-yellow-200 transition-colors flex items-center gap-2">
              <ChefHat className="h-5 w-5" />
              Restaurants
            </a>
            <a href="#voyages" className="hover:text-yellow-200 transition-colors flex items-center gap-2">
              <Plane className="h-5 w-5" />
              Voyages
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={handleConnexionClick}
              className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-50 transition-colors"
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
