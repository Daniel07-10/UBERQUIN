import React, { useState } from 'react';
import { CheckCircle, DollarSign, Smartphone, Shield, MousePointerClick, X } from 'lucide-react';

const DriverHero = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="relative bg-gray-900 pt-28 pb-12 lg:pt-36 lg:pb-24 overflow-hidden min-h-screen">
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500 rounded-full blur-[150px] opacity-10"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-500 rounded-full blur-[150px] opacity-10"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* TEXTO (IZQUIERDA) */}
          <div className="w-full lg:w-1/2 text-center lg:text-left text-white">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-wide text-yellow-400 bg-yellow-900/30 rounded-full border border-yellow-700/50">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
              </span>
              CONVOCATORIA ABIERTA ARMENIA
            </div>

            <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-6">
              Quédate con el <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                100% de tus carreras
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Olvídate de pagar porcentajes abusivos por servicio. 
              En UberQuin pagas una tarifa plana mensual y todo lo que hagas es tuyo.
            </p>

            {/* PRECIO DESTACADO */}
            <div className="mb-8 inline-block bg-gray-800 p-4 rounded-xl border border-yellow-500/30">
                <p className="text-gray-400 text-sm uppercase font-bold">Membresía Mensual</p>
                <p className="text-4xl font-black text-white">$50.000 <span className="text-sm font-normal text-gray-400">COP</span></p>
                <p className="text-xs text-green-400 font-bold mt-1">¡Sin comisiones extra!</p>
            </div>

            {/* BOTÓN REGISTRO */}
            <button 
              onClick={() => setShowForm(true)}
              className="group relative flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-black bg-yellow-400 rounded-2xl hover:bg-yellow-300 transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:-translate-y-1 w-full sm:w-auto mx-auto lg:mx-0"
            >
              <span>REGISTRAR MI VEHÍCULO</span>
              <Smartphone size={24} />
            </button>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-colors">
                <DollarSign className="text-green-400 mb-2" size={28} />
                <h3 className="font-bold text-lg">Mayor Ganancia</h3>
                <p className="text-sm text-gray-400">Al no pagar comisión por carrera, tus ingresos diarios aumentan drásticamente.</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-colors">
                <MousePointerClick className="text-yellow-400 mb-2" size={28} />
                <h3 className="font-bold text-lg">Botones en Telegram</h3>
                <p className="text-sm text-gray-400">Sistema automatizado. Toca "Tomar Servicio" y recibe al cliente al instante.</p>
              </div>
            </div>
          </div>

          {/* SIMULACIÓN DE CELULAR (DERECHA) */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
             <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden ring-1 ring-gray-700">
                <div className="w-full h-full bg-gray-900 relative p-4 flex flex-col">
                  {/* Header Chat */}
                  <div className="flex items-center gap-3 pb-4 border-b border-gray-800">
                    <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">UQ</div>
                    <div>
                      <p className="text-white font-bold">UberQuin Bot 🤖</p>
                      <p className="text-xs text-green-400">En línea</p>
                    </div>
                  </div>

                  {/* Mensajes simulados */}
                  <div className="flex-1 mt-4 space-y-4">
                    <div className="bg-gray-800 p-3 rounded-2xl rounded-tl-none max-w-[90%]">
                      <p className="text-gray-300 text-xs mb-1">Nuevo servicio disponible 🔔</p>
                      <p className="text-white font-bold text-sm">📍 Origen: Centro Comercial Portal</p>
                      <p className="text-white font-bold text-sm">🏁 Destino: Barrio La Castellana</p>
                      
                      {/* CAMBIO: Cobro por App */}
                      <p className="text-yellow-400 font-bold mt-1 text-xs">💰 Cobro: App / Taxímetro</p>
                      
                      <div className="grid grid-cols-2 gap-2 mt-3">
                        <div className="bg-green-600 text-white text-center py-2 rounded-lg font-bold text-sm cursor-pointer hover:bg-green-500 transition-colors animate-pulse">
                          ✅ TOMAR
                        </div>
                        <div className="bg-gray-700 text-gray-400 text-center py-2 rounded-lg font-bold text-sm">
                          ❌ RECHAZAR
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center my-4">
                      <p className="text-xs text-gray-500">Solo un conductor puede tomarlo...</p>
                    </div>

                    <div className="bg-blue-900/30 border border-blue-500/30 p-3 rounded-2xl max-w-[90%] mx-auto text-center">
                      <p className="text-blue-200 text-xs">🚀 ¡Servicio Asignado a ti!</p>
                      <p className="text-white font-bold text-sm mt-1">Usuario: Carlos Perez</p>
                      <p className="text-gray-400 text-xs mt-1">Recuerda activar tu App para calcular el precio.</p>
                      <a href="#" className="text-blue-400 text-xs underline mt-1 block">Click para ir al WhatsApp del cliente</a>
                    </div>
                  </div>
                </div>
             </div>
             <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-gradient-to-tr from-yellow-400 to-green-500 rounded-[4rem] blur-2xl opacity-20"></div>
          </div>

        </div>
      </div>

      {/* MODAL (Se mantiene igual, solo pon tu link de Google Forms) */}
      {showForm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-gray-900 w-full max-w-lg rounded-3xl border border-gray-700 shadow-2xl overflow-hidden animate-scale-up relative">
            <button onClick={() => setShowForm(false)} className="absolute top-4 right-4 p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"><X size={20} /></button>
            <div className="p-8 text-center">
              <div className="bg-yellow-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><Shield size={32} className="text-yellow-400" /></div>
              <h2 className="text-2xl font-black text-white mb-2">Únete al equipo UberQuin</h2>
              <p className="text-gray-400 mb-6">Suscripción mensual: <span className="text-white font-bold">$50.000 COP</span>.<br/>Completa el formulario y te contactaremos para activarte.</p>
              <a href="https://forms.google.com" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-4 rounded-xl hover:from-yellow-300 hover:to-yellow-400 transition-all transform hover:scale-[1.02]"><span>IR AL FORMULARIO DE REGISTRO</span><Smartphone size={20} /></a>
              <p className="text-xs text-gray-500 mt-4">*No pedimos pagos en este formulario. El pago se coordina una vez verificados tus documentos.</p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default DriverHero;