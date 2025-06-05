import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react'; // Added useEffect
import { Link } from 'react-router-dom';
import TypewriterEffect from './TypewriterEffect';
import ImgBanner from '../assets/banner.png';

const Banner = () => {
  const services = [
    'IT SOLUTIONS',
    'LEGAL SERVICES',
    'CSR EVENT PLANNERS',
    'RECRUITMENT',
    'INTERNSHIPS',
    'SOUVENIR'
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2, margin: '-50px' });

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll to top on page refresh
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  }, []); // Empty dependency array ensures this runs only on mount

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.8,
        ease: 'easeOut',
        staggerChildren: prefersReducedMotion ? 0 : 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: prefersReducedMotion ? 0 : 0.6, ease: 'easeOut' }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -50, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: { duration: prefersReducedMotion ? 0 : 0.6, ease: 'easeOut' }
    }
  };

  const secondButtonVariants = {
    hidden: { opacity: 0, x: 50, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: { duration: prefersReducedMotion ? 0 : 0.6, ease: 'easeOut' }
    }
  };

  return (
    <motion.section
  id="home"
  className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden pt-16 md:pt-20"
  ref={sectionRef}
  initial="hidden"
  animate={isInView ? 'visible' : 'hidden'}
  variants={sectionVariants}
  role="region"
  aria-label="Banner Section"
>
  {/* Brightened background image */}
  <motion.div 
    className="absolute inset-0 w-full h-full"
    style={{ 
      y: backgroundY,
      backgroundImage: `url(${ImgBanner})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'brightness(1.1) contrast(1.1)'
    }}
  />

  {/* Optional very light overlay (10% opacity) */}
  <div className="absolute inset-0 bg-white/10"></div>

  {!prefersReducedMotion && (
    <div className="absolute inset-0">
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply blur-lg opacity-30 md:w-72 md:h-72"
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        className="absolute top-40 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply blur-lg opacity-30 md:w-72 md:h-72"
        animate={{ y: [0, 20, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      ></motion.div>
      <motion.div
        className="absolute -bottom-32 left-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply blur-lg opacity-30 md:w-72 md:h-72"
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      ></motion.div>
    </div>
  )}

  <div className="container mx-auto px-4 text-center relative z-10 mt-20">
    <motion.div variants={sectionVariants}>
      <motion.h1
        className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight"
        variants={childVariants}
      >
        <span className="text-blue-600">Ekhai</span> Business
        <br />
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Solutions
        </span>
      </motion.h1>
      <motion.div
        className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 h-16 flex items-center justify-center"
        variants={childVariants}
      >
        <span className="mr-3">We provide</span>
        <TypewriterEffect texts={services} speed={80} deleteSpeed={40} pauseTime={1500} />
      </motion.div>
      <motion.p
        className="text-base sm:text-lg text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed"
        variants={childVariants}
      >
        Your trusted partner for comprehensive recruitment, legal, IT solutions, and CSR event organization services
        across Andhra Pradesh, Telangana, Tamil Nadu, Kerala, and Dubai.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        variants={sectionVariants}
      >
        <Link to="/contact">
          <motion.button
            className="bg-blue-600 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-lg text-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Contact Ekhai Business Solutions for services"
            variants={buttonVariants}
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </Link>
        <a href="#more">
          <motion.button
            className="border-2 border-blue-600 text-blue-600 px-8 py-4 sm:px-10 sm:py-5 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white focus:ring-2 focus:ring-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Explore Ekhai Business Solutions services"
            variants={secondButtonVariants}
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          >
            Explore Services
          </motion.button>
        </a>
      </motion.div>
    </motion.div>
  </div>
</motion.section>
  );
};

export default Banner;