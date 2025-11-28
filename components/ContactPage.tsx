import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaBehance, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

const title = "Let’s Work Together";

const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: {
    y: [-5, 0, 5, 0, -5],
    color: '#FF2400',
    transition: { duration: 0.5, yoyo: Infinity }
  }
};

const socialIcons = [
  { icon: FaLinkedin, href: '#' },
  { icon: FaInstagram, href: '#' },
];

const ContactPage: React.FC = () => {
  return (
    <footer id="contact" className="min-h-[70vh] py-20 px-4 flex flex-col justify-center items-center text-center bg-gray-900/30">
      <div className="container mx-auto">
        <motion.h2
          className="font-display text-4xl sm:text-5xl md:text-7xl mb-12"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
        >
          {title.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants} className="inline-block cursor-pointer">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>

        <motion.div 
            className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 text-lg text-[#D4B996]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
        >
          <a href="mailto:msselvam@gmail.com" className="flex items-center gap-2 hover:text-[#FF2400] transition-colors">
            <MdEmail />
            <span>msselvam2005@gmail.com</span>
          </a>
          <a href="tel:+918015213825" className="flex items-center gap-2 hover:text-[#FF2400] transition-colors">
            <MdPhone />
            <span>+91 801 521 3825</span>
          </a>
        </motion.div>

        <motion.div 
            className="flex justify-center gap-8 text-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: true }}
        >
          {socialIcons.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#39FF14] transition-colors"
              whileHover={{ scale: 1.2, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <social.icon />
            </motion.a>
          ))}
        </motion.div>

        <motion.p 
            className="mt-16 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            viewport={{ once: true }}
        >
            © {new Date().getFullYear()} Selvam M S. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default ContactPage;