
import React from 'react';
import { Plane, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Plane className="h-8 w-8 text-yellow-500" />
              <h3 className="text-2xl font-bold">nsafro.ma</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Votre partenaire de confiance pour découvrir le Maroc. Hébergements, transport, restaurants et voyages organisés.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#hebergements" className="hover:text-white transition-colors">Hébergements</a></li>
              <li><a href="#transport" className="hover:text-white transition-colors">Transport</a></li>
              <li><a href="#restaurants" className="hover:text-white transition-colors">Restaurants</a></li>
              <li><a href="#voyages" className="hover:text-white transition-colors">Voyages organisés</a></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Destinations Populaires</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Marrakech</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Casablanca</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fès</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Agadir</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chefchaouen</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-yellow-500" />
                <span>Casablanca, Maroc</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-yellow-500" />
                <span>+212 5 22 XX XX XX</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-yellow-500" />
                <span>contact@nsafro.ma</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 nsafro.ma. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
