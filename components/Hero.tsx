
import React from 'react';
import { Search, MapPin, Calendar, Camera, Send, Tent, Anchor } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="relative z-10">
          <span className="inline-block text-orange-500 font-semibold mb-6 tracking-wide uppercase text-sm">
            The vacation you deserve is closer than you think 😍
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-8">
            Life is short <br />
            and the world <br />
            is <span className="text-gray-900 relative">Wide! <span className="absolute left-0 bottom-1 w-full h-4 bg-orange-100 -z-10 rounded-full"></span></span> 🏝️
          </h1>
          
          <div className="flex items-center gap-3 mb-12 text-gray-500 font-medium italic">
            <span>🌍 Adventure awaits in every corner of the world ✈️</span>
          </div>

          {/* Search Box */}
          <div className="bg-white p-2 rounded-full shadow-2xl shadow-blue-100 border border-gray-100 flex flex-col md:flex-row items-center gap-2 max-w-2xl">
            <div className="flex-1 flex items-center px-6 border-b md:border-b-0 md:border-r border-gray-100 py-3 w-full">
              <MapPin className="text-orange-400 w-5 h-5 mr-3" />
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Location</span>
                <input type="text" placeholder="Manali, India" className="text-sm font-semibold text-gray-900 focus:outline-none w-full bg-transparent" />
              </div>
            </div>
            
            <div className="flex-1 flex items-center px-6 border-b md:border-b-0 md:border-r border-gray-100 py-3 w-full">
              <Calendar className="text-orange-400 w-5 h-5 mr-3" />
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Date</span>
                <input type="text" placeholder="26 Oct 2022" className="text-sm font-semibold text-gray-900 focus:outline-none w-full bg-transparent" />
              </div>
            </div>

            <div className="flex-1 flex items-center px-6 py-3 w-full">
              <Calendar className="text-orange-400 w-5 h-5 mr-3" />
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Return</span>
                <input type="text" placeholder="12 Nov 2022" className="text-sm font-semibold text-gray-900 focus:outline-none w-full bg-transparent" />
              </div>
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 p-4 rounded-full text-white transition-all shadow-lg shadow-orange-200">
              <Search className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Right Content - Visuals */}
        <div className="relative">
          <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
            {/* Overlapping Oval Images */}
            <div className="absolute top-0 right-0 w-[80%] h-[90%] z-0 translate-x-12 -translate-y-8">
               <div className="oval-mask w-full h-full shadow-2xl border-4 border-white">
                 <img 
                   src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1000" 
                   className="w-full h-full object-cover" 
                   alt="Traveler" 
                 />
               </div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-[75%] h-[85%] z-10 -translate-x-8 translate-y-8">
               <div className="oval-mask w-full h-full shadow-2xl border-4 border-white">
                 <img 
                   src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1000" 
                   className="w-full h-full object-cover" 
                   alt="Nature Adventure" 
                 />
               </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-1/4 -right-10 z-20 floating bg-white p-3 rounded-2xl shadow-xl flex items-center justify-center">
              <Camera className="w-6 h-6 text-pink-500" />
            </div>
            <div className="absolute top-10 left-10 z-20 floating bg-white p-3 rounded-2xl shadow-xl flex items-center justify-center" style={{ animationDelay: '0.5s' }}>
               <div className="text-2xl">🚁</div>
            </div>
            <div className="absolute -bottom-5 right-20 z-20 floating bg-white p-3 rounded-2xl shadow-xl flex items-center justify-center" style={{ animationDelay: '1s' }}>
              <Anchor className="w-6 h-6 text-blue-500" />
            </div>
            <div className="absolute top-1/2 -left-16 z-20 floating bg-white p-3 rounded-2xl shadow-xl flex items-center justify-center" style={{ animationDelay: '1.5s' }}>
              <Tent className="w-6 h-6 text-green-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
