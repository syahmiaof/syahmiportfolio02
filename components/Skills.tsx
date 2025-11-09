import React from 'react';
import SkillBadge from './SkillBadge';
import { CloudIcon, AiIcon, DevOpsIcon } from './icons/TechIcons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
    {children}
  </h2>
);

const skillsData = {
  cloud: {
    title: 'Cloud & Infrastructure',
    icon: <CloudIcon />,
    skills: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Serverless', 'VPC Networking']
  },
  ai: {
    title: 'AI & Machine Learning',
    icon: <AiIcon />,
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision']
  },
  devops: {
    title: 'DevOps & Tools',
    icon: <DevOpsIcon />,
    skills: ['Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'Git', 'Prometheus']
  }
};

type SkillCategory = typeof skillsData.cloud;

const SkillCategoryCard: React.FC<{ category: SkillCategory; delay: number }> = ({ category, delay }) => {
  const [ref, isVisible] = useScrollAnimation({ triggerOnce: true, threshold: 0.2 });

  return (
    <div 
      ref={ref}
      className={`bg-slate-800/50 p-8 rounded-xl border border-purple-500/20 shadow-lg hover:border-purple-500/50 transition-all duration-500 ease-out hover:!opacity-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-center mb-6 gap-4">
        <div className="text-purple-400">{category.icon}</div>
        <h3 className="text-2xl font-bold text-white">{category.title}</h3>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {category.skills.map(skill => <SkillBadge key={skill} name={skill} />)}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-slate-900/50 rounded-2xl">
      <SectionTitle>My Expertise</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {Object.values(skillsData).map((category, index) => (
          <SkillCategoryCard key={category.title} category={category} delay={index * 150} />
        ))}
      </div>
    </section>
  );
};

export default Skills;