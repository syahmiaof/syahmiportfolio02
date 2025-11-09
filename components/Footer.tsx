
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 py-6">
      <div className="container mx-auto px-6 md:px-12 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} Syahmi Aof. All Rights Reserved.</p>
        <p className="text-sm mt-2">Built with passion using React & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
