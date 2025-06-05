import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const WhyChooseUsSection = () => {
  const reasons = [
    '15+ Years of Service & Trust',
    'Cross-Sector Expertise',
    'Customizable, Scalable Solutions',
    'Strong Social Responsibility Focus',
    'AICTE-Recognized Internship Programs',
    'Trusted by Enterprises, Startups & Institutions',
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Enhanced parallax effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  
  // Background layer parallax (moves slower)
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  // Foreground content parallax (moves faster)
  const yFg = useTransform(scrollYProgress, [0, 1], ['0%', '5%']);

  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Section variants with smoother transitions
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 1,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    },
  };

  // Modern text reveal with gradient mask
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.5, 0.99],
      },
    },
  };

  // 3D flip animation for cards
  const cardVariants = (index: number) => ({
    hidden: { 
      opacity: 0,
      rotateY: 90,
      x: index % 2 === 0 ? -50 : 50,
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      x: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    },
    hover: {
      y: -5,
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
      transition: { duration: 0.3 },
    },
  });

  // Enhanced icon animation
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
      },
    },
  };

  // Magnetic button effect
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.5, 0.99],
      },
    },
    hover: {
      scale: 1.05,
      x: [0, 4, -4, 0],
      transition: {
        x: { duration: 0.8, repeat: Infinity },
        scale: { duration: 0.3 },
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.section
      className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      {/* Enhanced background elements */}
      {!prefersReducedMotion && (
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{ y: yBg }}
        >
          <motion.div
            className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-400 rounded-full opacity-10 blur-xl"
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-purple-400 opacity-10 blur-xl"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      )}

      <motion.div 
        className="container mx-auto px-6 relative z-10"
        style={{ y: yFg }}
      >
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500"
            variants={headingVariants}
          >
            Why Choose Us?
          </motion.h2>
          
          <motion.p 
            className="text-lg text-blue-100 max-w-2xl mx-auto"
            variants={headingVariants}
            transition={{ delay: 0.2 }}
          >
            We bring unmatched expertise, reliability, and innovation to every partnership
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all"
              variants={cardVariants(index)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={prefersReducedMotion ? {} : "hover"}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-start space-x-4">
                <motion.div
                  className="flex-shrink-0 mt-1"
                  variants={iconVariants}
                >
                  <CheckCircle className="w-6 h-6 text-yellow-400" />
                </motion.div>
                <h3 className="text-lg font-medium text-white">{reason}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          variants={headingVariants}
          transition={{ delay: 0.4 }}
        >
          <Link to="/contact">
            <motion.button
              className="px-8 py-4 rounded-xl font-semibold text-lg bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 shadow-lg"
              variants={buttonVariants}
              whileHover={prefersReducedMotion ? {} : "hover"}
              whileTap={prefersReducedMotion ? {} : "tap"}
            >
              Partner With Us Today
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default WhyChooseUsSection;
