
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-24 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-orange-500 font-semibold uppercase tracking-widest text-[10px] mb-4 block">Happy Travellers</span>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-16">
          What Our Travellers Say 😁
        </h2>

        <div className="relative px-8 pt-16 pb-8 bg-gray-50/50 rounded-[40px] border border-gray-100">
           {/* Profile Picture */}
           <div className="absolute -top-12 left-1/2 -translate-x-1/2">
             <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
               <img src="https://picsum.photos/200" alt="Reviewer" className="w-full h-full object-cover" />
             </div>
           </div>

           <div className="flex justify-center gap-1 mb-6 mt-4">
             {[1, 2, 3, 4, 5].map((_, i) => (
               <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
             ))}
           </div>

           <blockquote className="text-xl font-bold text-gray-800 mb-8 italic leading-relaxed">
             "The best travel agency I've ever booked with. The attention to detail in our Kullu Manali trip was extraordinary. Highly recommended for anyone seeking premium experiences!"
           </blockquote>

           <div className="text-center">
             <div className="font-extrabold text-gray-900 text-lg">Mark Anthony</div>
             <div className="text-orange-500 font-semibold text-sm">Adventure Enthusiast</div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
