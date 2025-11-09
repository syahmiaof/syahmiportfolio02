import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 opacity-50 z-0"></div>
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-6 md:px-12 overflow-hidden">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;