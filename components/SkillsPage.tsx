
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_AND_TOOLS, OTHER_SKILLS } from '../constants';
import { Skill } from '../types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SkillItem: React.FC<{ skill: Skill, index: number }> = ({ skill, index }) => {
  return (
    <motion.div 
      className="text-center p-4 flex flex-col items-center"
      variants={itemVariants}
    >
      <motion.div 
        className="text-5xl md:text-6xl text-[#D4B996] mb-4"
        whileHover={{ scale: 1.1, rotate: 5, color: '#39FF14' }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <skill.icon />
      </motion.div>
      <h3 className="text-lg font-semibold">{skill.name}</h3>
      <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
        <motion.div
          className="bg-gradient-to-r from-[#39FF14] to-[#D4B996] h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};

const SkillsPage: React.FC = () => {
  return (
    <section id="skills" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto text-center">
        <motion.h2 
            className="font-display text-4xl md:text-5xl mb-12 text-[#FF2400]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            Skills & Tools
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SKILLS_AND_TOOLS.map((skill, index) => (
            <SkillItem key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {OTHER_SKILLS.map((skill) => (
            <motion.div
              key={skill.name}
              className="bg-gray-900/50 p-6 rounded-lg flex flex-col md:flex-row items-center gap-4 border border-transparent hover:border-[#39FF14] transition-colors"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(57, 255, 20, 0.1), 0 4px 6px -2px rgba(57, 255, 20, 0.05)' }}
            >
              <skill.icon className="text-3xl text-[#FF2400]"/>
              <span className="text-center md:text-left">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsPage;
