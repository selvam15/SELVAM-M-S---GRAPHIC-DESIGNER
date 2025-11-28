import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const name = "SELVAM    M S";
const roles = ["Graphic Designer", "Web Designer & Developer", "UI/UX Designer", "Digital Marketer"];

const nameVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: { type: 'spring', stiffness: 100, damping: 12 } 
  },
};

const roleVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: (i: number) => ({
      opacity: 1,
      width: 'auto',
      transition: {
        delay: 1.5 + i * 0.2,
        duration: 0.5,
        ease: 'easeInOut'
      },
    }),
  };

const CoverPage: React.FC = () => {
  return (
    <section id="home" className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF2400]/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#39FF14]/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-white/5 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="z-10 text-center">
        <motion.h1 
          className="font-display text-5xl md:text-8xl lg:text-9xl text-white tracking-widest"
          variants={nameVariants}
          initial="hidden"
          animate="visible"
        >
          {name.split("").map((char, index) => (
            <motion.span key={`${char}-${index}`} variants={letterVariants} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <div className="flex flex-wrap justify-center items-center mt-6 text-sm md:text-lg text-[#D4B996] space-x-2 md:space-x-4">
          {roles.map((role, i) => (
            <React.Fragment key={role}>
              <motion.span
                className="overflow-hidden whitespace-nowrap"
                custom={i}
                variants={roleVariants}
                initial="hidden"
                animate="visible"
              >
                {role}
              </motion.span>
              {i < roles.length - 1 && <span className="text-[#FF2400]">•</span>}
            </React.Fragment>
          ))}
        </div>
        
        <motion.p
          className="mt-8 text-sm text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          since 2022
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      >
        <FaArrowDown className="text-2xl text-white/50" />
      </motion.div>
    </section>
  );
};

export default CoverPage;
