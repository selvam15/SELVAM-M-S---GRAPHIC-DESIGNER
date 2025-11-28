
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, COLORS } from '../constants';
import { ProjectCategory, Project } from '../types';

const ProjectCard: React.FC<{ project: Project; onSelect: (project: Project) => void }> = ({ project, onSelect }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      onClick={() => onSelect(project)}
      className="relative rounded-lg overflow-hidden cursor-pointer group"
    >
      <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="font-bold text-lg text-white">{project.title}</h3>
        <p className="text-sm text-[#D4B996]">{project.category}</p>
      </div>
    </motion.div>
  );
};

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
    return (
      <AnimatePresence>
        <motion.div
          onClick={onClose}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900 rounded-lg max-w-3xl w-full grid md:grid-cols-2 gap-4 overflow-hidden"
            initial={{ scale: 0.7, y: 50 }}
            animate={{ scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 25 } }}
            exit={{ scale: 0.7, opacity: 0 }}
          >
            <img src={project.imageUrl} alt={project.title} className="w-full h-64 md:h-full object-cover" />
            <div className="p-6 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-2 text-[#FF2400]">{project.title}</h2>
              <span className="text-sm font-semibold text-[#D4B996] mb-4">{project.category}</span>
              <p className="text-gray-300">{project.description}</p>
              <button onClick={onClose} className="mt-6 self-start bg-[#FF2400] text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">Close</button>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };
  

const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ('All' | ProjectCategory)[] = ['All', ...Object.values(ProjectCategory)];
  const filteredProjects = activeCategory === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h2 
            className="font-display text-4xl md:text-5xl mb-12 text-center text-[#FF2400]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            Projects
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm md:text-base rounded-full transition-colors relative ${activeCategory === category ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-[#FF2400] rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsPage;
