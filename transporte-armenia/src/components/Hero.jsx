import React, { useState } from 'react';
import logo from '../assets/logo.jpeg'; 
import { MessageCircle, ShieldCheck, Zap, X, ArrowRight, Hash, Activity } from 'lucide-react';

const Hero = () => {
  const [showCards, setShowCards] = useState(false);

  // DATOS DE LOS GRUPOS (Placeholder)
  const grupos = [
    { 
      id: 1, 
      nombre: "UberQuin Oficial #1", 
      miembros: 980, 
      capacidad: 1024, 
      estado: "🔥 Muy Activo",
      link: "#", 
      color: "bg-green-500", 
      mensaje: "Alta demanda ahora"
    },
    { 
      id: 2, 
      nombre: "UberQuin Respaldo #2", 
      miembros: 450, 
      capacidad: 1024,
      estado: "⚡ Rápido",
      link: "#", 
      color: "bg-blue-500",
      mensaje: "Conductores disponibles"
    },
    { 
      id: 3, 
      nombre: "UberQuin Grupo #3", 
      miembros: 120, 
      capacidad: 1024,
      estado: "🆕 Nuevo",
      link: "#", 
      color: "bg-yellow-500",
      mensaje: "Únete para inaugurar"
    },
  ];

  return (
    <section className="relative bg-white pt-28 pb-12 lg:pt-36 lg:pb-24 overflow-hidden">
      
      {/* Fondo decorativo */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-green-50 blur-3xl opacity-50"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* TEXTO (IZQUIERDA) */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-wide text-green-800 bg-green-100 rounded-full border border-green-200">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              SERVICIO ACTIVO 24/7 EN ARMENIA
            </div>

            <div className="flex flex-col items-center lg:items-start gap-2 mb-6">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Bienvenido a</p>
                <div className="flex items-center gap-4">
                    <div className="bg-black p-3 rounded-2xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                        <img src={logo} alt="UberQuin Logo" className="w-12 h-12 object-contain" />
                    </div>
                    <h2 className="text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter">
                        Uber<span className="text-green-600">Quin</span>
                    </h2>
                </div>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-600 leading-tight mb-6">
              Viaja seguro con <br className="hidden lg:block"/>
              <span className="text-gray-900">tarifas justas por App</span>
            </h1>
            
            <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Conectamos pasajeros y conductores directamente por WhatsApp. 
              El precio lo define el taxímetro digital, sin sorpresas ni peleas.
            </p>

            <button 
              onClick={() => setShowCards(true)}
              className="group relative flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white bg-gray-900 rounded-2xl hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto mx-auto lg:mx-0 overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <MessageCircle size={24} className="text-green-400" />
              <span>VER GRUPOS DISPONIBLES</span>
            </button>

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-green-600" />
                <span>Conductores Verificados</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={18} className="text-yellow-500" />
                <span>Cobro Exacto por App</span>
              </div>
            </div>
          </div>

          {/* IMAGEN (DERECHA) - Tarjeta Flotante Actualizada */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-gray-100 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1000&auto=format&fit=crop" 
                alt="Uber Armenia" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-6 right-6 bg-white p-4 rounded-2xl shadow-lg max-w-xs animate-bounce-slow hidden sm:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <MessageCircle size={16} className="text-green-600" />
                  </div>
                  <p className="text-xs font-bold text-gray-800">Solicitando servicio...</p>
                </div>
                {/* YA NO DICE "OFREZCO", AHORA DICE DESTINO */}
                <p className="text-sm text-gray-600">"Hola, necesito un móvil para el Parque de la Vida."</p>
                <p className="text-[10px] text-green-600 font-bold mt-1">🚕 Se cobrará según App/Taxímetro</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL (Se mantiene igual, solo copio la estructura base para que no se rompa) */}
      {showCards && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-scale-up relative">
            <div className="bg-white px-6 pt-6 pb-4 border-b border-gray-100 text-center relative">
              <button onClick={() => setShowCards(false)} className="absolute top-4 right-4 p-2 bg-gray-50 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors"><X size={20} /></button>
              <div className="mb-2"><p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Bienvenido a</p></div>
              <div className="flex justify-center items-center gap-3 mb-2"><div className="bg-black p-1.5 rounded-lg shadow-md"><img src={logo} alt="Logo" className="w-8 h-8 object-contain" /></div><h2 className="text-3xl font-black text-gray-900 tracking-tight">Uber<span className="text-green-600">Quin</span></h2></div>
              <p className="text-sm text-gray-500">Selecciona tu grupo preferido y viaja seguro.</p>
            </div>
            <div className="p-4 grid gap-3 max-h-[50vh] overflow-y-auto custom-scrollbar bg-gray-50/50">
              {grupos.map((grupo) => (
                <a key={grupo.id} href={grupo.link} target="_blank" rel="noreferrer" className="group relative bg-white border border-gray-200 rounded-2xl p-4 hover:border-green-500 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-green-100 transition-colors"><Hash size={20} className="text-gray-600 group-hover:text-green-600" /></div><div><h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors">{grupo.nombre}</h3><span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1"><Activity size={10} />{grupo.mensaje}</span></div></div>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-lg border border-gray-200">{grupo.estado}</span>
                  </div>
                  <div className="mt-3"><div className="flex justify-between text-xs mb-1"><span className="text-gray-500">Miembros</span><span className="font-medium text-gray-700">{grupo.miembros} / {grupo.capacidad}</span></div><div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden"><div className={`h-full rounded-full ${grupo.color}`} style={{ width: `${(grupo.miembros / grupo.capacidad) * 100}%` }}></div></div></div>
                  <div className="mt-4 flex items-center justify-end gap-2 text-sm font-bold text-gray-400 group-hover:text-green-600 transition-colors"><span>UNIRME AL GRUPO</span><ArrowRight size={16} /></div>
                </a>
              ))}
            </div>
            <div className="bg-white p-3 border-t border-gray-100 text-center"><p className="text-[10px] text-gray-400">Al unirte aceptas las normas de convivencia de UberQuin.</p></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;