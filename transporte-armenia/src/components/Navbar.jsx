import React from 'react';
import logo from '../assets/logo.jpeg'; 

// Recibimos las "instrucciones" (props) desde App.jsx para saber en qué modo estamos
const Navbar = ({ currentView, setView }) => {
  
  const isDriverView = currentView === 'driver';

  return (
    <nav className="bg-black shadow-lg fixed w-full top-0 z-50 border-b border-gray-800 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO (Al dar click vuelve al inicio) */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => setView('user')}
          >
            <img 
              src={logo} 
              alt="UberQuin Logo" 
              className="h-16 object-contain"
            />
          </div>

          {/* BOTÓN CAMBIANTE */}
          <div>
            <button 
              onClick={() => setView(isDriverView ? 'user' : 'driver')}
              className={`px-6 py-3 text-sm font-bold rounded-full transition-all shadow-md transform hover:scale-105 ${
                isDriverView 
                  ? 'bg-white text-black hover:bg-gray-200' // Estilo para volver a Pasajero
                  : 'bg-yellow-400 text-black hover:bg-yellow-300' // Estilo para ir a Conductor
              }`}
            >
              {isDriverView ? '👤 Soy Pasajero' : '🚖 Quiero ser Conductor'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;