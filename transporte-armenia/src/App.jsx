import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; // El de usuarios
import Steps from './components/Steps'; // Los pasos de usuarios
import DriverHero from './components/DriverHero'; // El NUEVO de conductores

function App() {
  // Estado para controlar qué vista mostramos ('user' o 'driver')
  const [view, setView] = useState('user');

  return (
    <div className="min-h-screen">
      
      {/* Navbar recibe 'view' y 'setView' para saber qué botón mostrar y cómo cambiar */}
      <Navbar currentView={view} setView={setView} />

      {/* RENDERIZADO CONDICIONAL */}
      {view === 'user' ? (
        // --- VISTA DE USUARIOS ---
        <>
          <Hero />
          <Steps />
          {/* Footer sencillo o banner final */}
          <div className="py-8 bg-gray-50 text-center text-gray-400 text-sm">
            <p>© 2025 UberQuin. El transporte inteligente del Quindío.</p>
          </div>
        </>
      ) : (
        // --- VISTA DE CONDUCTORES (NUEVA) ---
        <>
          <DriverHero />
          {/* Aquí podrías añadir más secciones para conductores si quisieras */}
          <div className="py-8 bg-gray-900 text-center text-gray-600 text-sm border-t border-gray-800">
            <p>© 2025 UberQuin Drivers. Plataforma exclusiva para socios.</p>
          </div>
        </>
      )}

    </div>
  );
}

export default App;