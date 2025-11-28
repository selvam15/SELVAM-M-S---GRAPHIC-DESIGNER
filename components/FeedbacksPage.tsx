
import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { FEEDBACKS } from '../constants';
import { Feedback } from '../types';

const FeedbackCard: React.FC<{ feedback: Feedback }> = ({ feedback }) => {
  return (
    <div className="flex-shrink-0 w-80 md:w-96 bg-gray-900/50 p-8 rounded-lg mx-4 flex flex-col justify-between h-56 border border-gray-800 hover:border-[#D4B996] transition-colors">
      <p className="text-gray-300 italic">"{feedback.feedback}"</p>
      <div>
        <div className="flex mt-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} className={i < feedback.rating ? 'text-yellow-400' : 'text-gray-600'} />
          ))}
        </div>
        <p className="text-right font-bold text-[#D4B996] mt-2">- {feedback.clientInitials}</p>
      </div>
    </div>
  );
};

const FeedbacksPage: React.FC = () => {
  const duplicatedFeedbacks = [...FEEDBACKS, ...FEEDBACKS];

  return (
    <section id="feedbacks" className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto text-center">
        <motion.h2 
            className="font-display text-4xl md:text-5xl mb-12 text-[#FF2400]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            Client Feedbacks
        </motion.h2>
      </div>
      <div className="relative">
        <motion.div
          className="flex"
          animate={{
            x: ['0%', '-100%'],
            transition: {
              ease: 'linear',
              duration: 40,
              repeat: Infinity,
            },
          }}
        >
          {duplicatedFeedbacks.map((feedback, index) => (
            <FeedbackCard key={`${feedback.id}-${index}`} feedback={feedback} />
          ))}
        </motion.div>
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-black to-transparent"></div>
      </div>
    </section>
  );
};

export default FeedbacksPage;
