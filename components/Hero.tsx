import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded to true after a short delay to trigger the animation
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center -mt-16">
      <div className="max-w-4xl">
        <h1 className={`text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
          Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">Syahmi Aof</span>
        </h1>
        <h2 className={`text-2xl md:text-3xl font-semibold text-slate-300 mb-6 transition-all duration-700 ease-out delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
          Cloud Computing & AI Specialist
        </h2>
        <p className={`text-lg md:text-xl text-slate-400 mb-8 transition-all duration-700 ease-out delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
          A passionate Cloud & AI Specialist dedicated to architecting scalable, intelligent systems. I transform complex problems into elegant solutions, driving innovation and shaping the future of technology.
        </p>
        <a 
          href="#projects" 
          className={`inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:scale-105 transform transition-transform duration-300 shadow-lg shadow-purple-500/30 transition-all ease-out delay-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;