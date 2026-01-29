
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Destinations from './components/Destinations';
import Partners from './components/Partners';
import AboutStats from './components/AboutStats';
import Testimonials from './components/Testimonials';

const App: React.FC = () => {
  return (
    <div className="min-h-screen gradient-bg selection:bg-orange-100">
      <Header />
      <main>
        <Hero />
        <Features />
        <Destinations />
        <Partners />
        <AboutStats />
        <Testimonials />
      </main>
      
      <footer className="py-12 px-6 lg:px-24 border-t border-gray-100 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">T</div>
            <span className="text-2xl font-bold text-gray-900 tracking-tight">Travel</span>
          </div>
          <div className="text-gray-500 text-sm">
            © 2024 TravelWorld. All rights reserved. Built for adventurers.
          </div>
          <div className="flex gap-6 text-gray-600 font-medium">
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
