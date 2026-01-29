
import React from 'react';
import { ChevronLeft, ChevronRight, Send } from 'lucide-react';
import { DESTINATIONS } from '../constants';

const Destinations: React.FC = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-6 lg:px-24 bg-gray-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <div>
            <span className="text-orange-500 font-semibold uppercase tracking-widest text-[10px] mb-2">Top Destination</span>
            <h2 className="text-4xl font-extrabold text-gray-900">
              Discover Top Destination ✈️
            </h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-white text-gray-400 hover:bg-orange-500 hover:text-white transition-all shadow-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200 transition-transform hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-12 scrollbar-hide no-scrollbar"
          style={{ scrollbarWidth: 'none' }}
        >
          {DESTINATIONS.map((item) => (
            <div key={item.id} className="min-w-[300px] bg-white p-4 rounded-[40px] shadow-xl shadow-gray-100/50 hover:shadow-2xl transition-all group flex-shrink-0">
              <div className="relative h-56 w-full rounded-[30px] overflow-hidden mb-6">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-wider">
                   {item.location}
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-lg font-extrabold text-gray-900 mb-2 truncate">{item.name}</h3>
                <div className="flex items-center justify-between mt-4">
                   <div className="flex flex-col">
                      <span className="text-orange-500 font-bold text-lg">{item.price}</span>
                   </div>
                   <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                      <Send className="w-4 h-4 text-orange-400 rotate-45" />
                      {item.duration}
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
