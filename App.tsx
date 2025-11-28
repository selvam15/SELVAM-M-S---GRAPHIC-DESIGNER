
import React from 'react';
import CoverPage from './components/CoverPage';
import AboutPage from './components/AboutPage';
import SkillsPage from './components/SkillsPage';
import ProjectsPage from './components/ProjectsPage';
import FeedbacksPage from './components/FeedbacksPage';
import ContactPage from './components/ContactPage';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-[#0a0a0a] text-[#F5F5F5] antialiased relative">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#FF2400] origin-left z-50" 
        style={{ scaleX }} 
      />
      <main>
        <CoverPage />
        <AboutPage />
        <SkillsPage />
        <ProjectsPage />
        <FeedbacksPage />
        <ContactPage />
      </main>
    </div>
  );
};

export default App;
