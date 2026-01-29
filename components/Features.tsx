
import React from 'react';
import { SERVICES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Header Column */}
          <div className="flex flex-col justify-center">
            <span className="text-orange-500 font-semibold uppercase tracking-widest text-[10px] mb-2">What we serve</span>
            <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
              Top Values <br /> For You 🔥
            </h2>
            <p className="mt-4 text-gray-500 text-sm font-medium">
              Try a variety of benefits when using our services.
            </p>
          </div>

          {/* Service Cards */}
          {SERVICES.slice(1).map((service) => (
            <div key={service.id} className="group p-8 rounded-3xl bg-white/40 hover:bg-white hover:shadow-2xl hover:shadow-gray-100 transition-all duration-300">
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
