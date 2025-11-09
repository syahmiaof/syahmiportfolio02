import React from 'react';
import ProjectCard from './ProjectCard';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
    {children}
  </h2>
);

const projects = [
  {
    title: 'AI-Powered Cloud Cost Optimizer',
    description: 'A serverless application using machine learning to predict cloud resource usage and recommend cost-saving strategies on AWS.',
    image: 'https://picsum.photos/seed/project1/500/300',
    tags: ['Python', 'AWS Lambda', 'TensorFlow', 'Serverless'],
    liveUrl: '#',
    repoUrl: 'https://github.com/syahmiaof-dev/cloud-cost-optimizer',
  },
  {
    title: 'Scalable Microservices Platform',
    description: 'A Kubernetes-based platform for deploying and managing high-traffic microservices with automated CI/CD pipelines on GCP.',
    image: 'https://picsum.photos/seed/project2/500/300',
    tags: ['Go', 'Kubernetes', 'Docker', 'Jenkins', 'GCP'],
    liveUrl: '#',
    repoUrl: 'https://github.com/syahmiaof-dev/microservices-platform',
  },
  {
    title: 'Real-time Data Analytics Dashboard',
    description: 'A web app that visualizes real-time data streams using serverless architecture and AI-driven anomaly detection.',
    image: 'https://picsum.photos/seed/project3/500/300',
    tags: ['React', 'TypeScript', 'AWS Kinesis', 'Gemini API'],
    liveUrl: '#',
    repoUrl: 'https://github.com/syahmiaof-dev/real-time-dashboard',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <SectionTitle>Featured Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} delay={index * 150} />
        ))}
      </div>
    </section>
  );
};

export default Projects;