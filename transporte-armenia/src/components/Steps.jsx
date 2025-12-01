import React, { useState } from 'react';
import { UserPlus, MessageSquare, Car, MousePointerClick } from 'lucide-react';

const Steps = () => {
  const steps = [
    {
      icon: <MousePointerClick size={40} />,
      title: "1. Mira los Grupos",
      desc: "Toca el botón 'Ver Grupos' y elige el que más te guste o tenga menos gente."
    },
    {
      icon: <UserPlus size={40} />,
      title: "2. Únete al WhatsApp",
      desc: "Ingresa al grupo. Solo los conductores verán tu número. Es privado y seguro."
    },
    {
      icon: <MessageSquare size={40} />,
      title: "3. Pide tu Móvil",
      desc: "Escribe tu origen y destino. ¡En segundos un conductor tomará tu servicio!"
    },
    {
      icon: <Car size={40} />,
      title: "4. Pago Justo",
      desc: "Al finalizar, pagas lo que marque la App o Taxímetro del conductor. Sin subastas."
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Pide tu transporte en <span className="text-green-600">4 pasos simples</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sin descargar aplicaciones pesadas. Usamos la tecnología que ya tienes en tu celular.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;