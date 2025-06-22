
import React, { useState } from 'react';
import { Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-yellow-500 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Plane className="h-8 w-8 text-yellow-500" />
            <h1 className="text-2xl font-bold text-yellow-500">nsafro.ma</h1>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            {isSignUp ? 'Créer un compte' : 'Connexion'}
          </h2>
          <p className="text-gray-600 mt-2">
            {isSignUp 
              ? 'Rejoignez-nous pour découvrir le Maroc' 
              : 'Connectez-vous à votre compte'
            }
          </p>
        </div>

        <form className="space-y-6">
          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom complet
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Votre nom complet"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mot de passe
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>

          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>
          )}

          <Button 
            type="submit"
            className="w-full bg-gradient-to-r from-black to-yellow-500 hover:from-gray-800 hover:to-yellow-600 text-white py-2 px-4 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            {isSignUp ? 'Créer le compte' : 'Se connecter'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            {isSignUp ? 'Vous avez déjà un compte ?' : "Vous n'avez pas de compte ?"}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="ml-2 text-yellow-600 hover:text-yellow-700 font-semibold"
            >
              {isSignUp ? 'Se connecter' : 'Créer un compte'}
            </button>
          </p>
        </div>

        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-gray-500 hover:text-gray-700 text-sm"
          >
            ← Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
};

export default Auth;
