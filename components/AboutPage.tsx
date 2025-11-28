import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutPage: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], ['30%', '0%', '-30%']);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={targetRef} id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div style={{ opacity: textOpacity, y: textY }}>
          <h2 className="font-display text-4xl md:text-5xl mb-4 text-[#FF2400]">About Me</h2>
          <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            I'm a passionate and creative designer with over a decade of experience, dedicated to crafting visually compelling stories that resonate with audiences. My journey began in 2022, and since then, I've been exploring the intersection of art and technology.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            From crafting memorable logos to developing intuitive web experiences and dynamic digital marketing campaigns, I thrive on turning complex ideas into simple, beautiful, and effective designs. I believe great design is not just about aesthetics, but about creating connections and solving problems.
          </p>
        </motion.div>
        <div className="flex justify-center items-center">
          <motion.div 
            className="w-80 h-[450px] md:w-96 md:h-[600px] rounded-lg overflow-hidden shadow-2xl shadow-red-500/10"
            style={{ scale: imageScale, y: imageY }}
          >
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiq9LX4Rt0Zx2bPK1ExFnfcDYk4ZkPXMlsGkjVfFu3Dh9i4b25CwNyxDHG3eg-B_tOPcH8cGChe6wMjjfP5g1POWNf2bYD_Hc9RnjUyD7pgyg21bTf4W99fnBO1Eha4o66unhwTR1m5qfjuMUku7pqN5D9jhgOE9K-G3a9jTp6LBp1Uu59lYTkz131HjEhY/s1089/Gemini_Generated_Image_dgcdktdgcdktdgcd.png" 
              alt="Selvam M S" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;