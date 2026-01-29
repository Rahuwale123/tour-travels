
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-200">
            T
          </div>
          <span className="text-2xl font-extrabold text-gray-900 tracking-tight">Travel</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          <a href="#" className="relative text-orange-500 font-semibold after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-4 after:h-[2px] after:bg-orange-500">Home</a>
          <a href="#" className="text-gray-600 font-medium hover:text-orange-500 transition-colors">Our Tours</a>
          <a href="#" className="text-gray-600 font-medium hover:text-orange-500 transition-colors">Reviews</a>
        </nav>

        {/* Action Button */}
        <button className="px-6 py-2.5 border-2 border-gray-900 rounded-full text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300">
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Header;
