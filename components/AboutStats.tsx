
import React from 'react';
import { STATS } from '../constants';

const AboutStats: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Left Side: Visuals */}
        <div className="relative">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute top-0 left-0 w-[80%] h-full z-10 translate-x-4">
              <div className="oval-mask w-full h-full shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover" 
                  alt="Destination" 
                />
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-[60%] h-[70%] z-0 translate-x-12 translate-y-8">
              <div className="oval-mask w-full h-full shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover" 
                  alt="Vacation" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Content & Stats */}
        <div>
          <span className="text-orange-500 font-semibold uppercase tracking-widest text-[10px] mb-2 block">Travel Point</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-8">
            We Helping You Find Your <br /> Dream Vacation 😍
          </h2>
          <p className="text-gray-500 leading-relaxed mb-12 text-sm font-medium">
            Discover the perfect getaway with our personalized holiday planning. We curate high-quality experiences across the globe, ensuring every trip is as unique as you are. From luxury hotels to elite travel services, your dream journey starts here.
          </p>

          <div className="grid grid-cols-2 gap-y-12 gap-x-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className={`relative ${idx % 2 === 0 ? 'pr-8 border-r border-gray-100' : 'pl-4'}`}>
                <div className="text-3xl font-extrabold text-orange-500 mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
