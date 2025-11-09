import React from 'react';
import { GitHubIcon } from './icons/GitHubIcon';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tags, liveUrl, repoUrl, delay }) => {
  const [ref, isVisible] = useScrollAnimation({ triggerOnce: true, threshold: 0.2 });

  return (
    <div 
      ref={ref}
      className={`bg-slate-800/50 rounded-lg overflow-hidden border border-purple-500/20 group transform hover:-translate-y-2 shadow-lg transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover group-hover:opacity-75 transition-opacity" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 mb-4 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span key={tag} className="bg-indigo-900/50 text-indigo-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        <div className="mt-4 flex justify-between items-center">
           <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors">View Live</a>
           <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
             <GitHubIcon className="w-6 h-6" />
           </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;