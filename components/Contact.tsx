import React from 'react';
import { GitHubIcon } from './icons/GitHubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
    {children}
  </h2>
);

const Contact: React.FC = () => {
  const whatsappLink = `https://wa.me/60107965236?text=${encodeURIComponent("Hello Syahmi, I saw your portfolio and would like to connect.")}`;
  const [ref, isVisible] = useScrollAnimation({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="contact" className="py-20 md:py-32 text-center" ref={ref}>
      <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <SectionTitle>Get In Touch</SectionTitle>
        <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out to me.
        </p>
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:scale-105 transform transition-transform duration-300 shadow-lg shadow-purple-500/30"
        >
          <WhatsAppIcon className="w-6 h-6" />
          <span>Chat on WhatsApp</span>
        </a>
        <div className="mt-12 flex justify-center space-x-6">
          <a href="https://github.com/syahmiaof-dev" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">
            <GitHubIcon className="w-8 h-8" />
          </a>
          <a href="https://linkedin.com/in/syahmiaof" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">
            <LinkedInIcon className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;