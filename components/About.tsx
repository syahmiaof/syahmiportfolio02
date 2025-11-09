import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
    {children}
  </h2>
);

const About: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation({ triggerOnce: true, threshold: 0.25 });

  return (
    <section id="about" className="py-20 md:py-32" ref={ref}>
      <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <SectionTitle>About Me</SectionTitle>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className={`md:w-1/3 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <img 
              src="https://picsum.photos/seed/syahmiaof/400/400" 
              alt="Syahmi Aof" 
              className="rounded-full w-64 h-64 md:w-80 md:h-80 mx-auto object-cover border-4 border-purple-500 shadow-2xl shadow-purple-500/20"
            />
          </div>
          <div className={`md:w-2/3 text-center md:text-left transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              I am a passionate and results-driven IT professional with deep expertise in Cloud Computing and Artificial Intelligence. My journey in technology is fueled by a relentless curiosity and a desire to build innovative solutions that solve real-world problems.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              From architecting scalable cloud infrastructures on AWS and Azure to developing intelligent AI models, I thrive on tackling complex challenges. I believe in the power of automation, robust DevOps practices, and clean code to create efficient and resilient systems.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I am constantly exploring new technologies and methodologies to stay at the forefront of the industry. Let's connect and build something amazing together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;