
import React from 'react';

const Partners: React.FC = () => {
  const partners = [
    { name: 'JET AIRWAYS', logo: '✈️' },
    { name: 'AirAsia', logo: '✈️' },
    { name: 'AIR INDIA', logo: '✈️' },
    { name: 'IndiGo', logo: '✈️' },
    { name: 'spiceJet', logo: '✈️' }
  ];

  return (
    <section className="py-20 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
        <span className="text-2xl font-black italic text-gray-500 tracking-tighter">JET AIRWAYS</span>
        <span className="text-3xl font-bold text-gray-600 tracking-tight">AirAsia</span>
        <span className="text-xl font-bold text-gray-700 flex flex-col items-center">
          <span className="text-[10px] -mb-1 tracking-widest">एअर इंडिया</span>
          <span>AIR INDIA</span>
        </span>
        <span className="text-3xl font-extrabold text-blue-900 flex items-center gap-1">
          IndiGo <span className="text-orange-500 text-4xl">·</span>
        </span>
        <span className="text-3xl font-bold text-orange-600 flex items-center">
          spice<span className="text-gray-800">jet</span>
        </span>
      </div>
    </section>
  );
};

export default Partners;
