import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Optional for type checking
import TypewriterEffect from './TypewriterEffect';
import DashboardVideo from '/dashboard.mp4'; // Imported video
import ImgBanner from '../assets/banner.png';

// Constants for animation durations
const ANIMATION_DURATION = 0.8;
const CHILD_ANIMATION_DURATION = 0.6;
const CIRCLE_ANIMATION_DURATION = 4;
const GRADIENT_OVERLAY_DURATION = 2;

const Banner = () => {
  // Memoized services array
  const services = useMemo(
    () => [
      'IT SOLUTIONS',
      'LEGAL SERVICES',
      'CSR EVENT PLANNERS',
      'RECRUITMENT',
      'INTERNSHIPS',
      'SOUVENIR',
    ],
    []
  );

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2, margin: '-50px' });

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  // Check for reduced motion preference
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll to top on mount (only for homepage)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    }
  }, [prefersReducedMotion]); // Added prefersReducedMotion to dependency array

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : ANIMATION_DURATION,
        ease: 'easeOut',
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: prefersReducedMotion ? 0 : CHILD_ANIMATION_DURATION, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -50, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: { duration: prefersReducedMotion ? 0 : CHILD_ANIMATION_DURATION, ease: 'easeOut' },
    },
  };

  const secondButtonVariants = {
    hidden: { opacity: 0, x: 50, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: { duration: prefersReducedMotion ? 0 : CHILD_ANIMATION_DURATION, ease: 'easeOut' },
    },
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
      aria-label="Ekhai Business Solutions Banner"
      aria-describedby="banner-description"
    >
      {/* Background video with parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: backgroundY, willChange: 'transform' }}
        layout
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={ImgBanner}
          aria-hidden="true"
        >
          <source src={DashboardVideo} type="video/mp4" />
          <img src={ImgBanner} alt="Ekhai Business Solutions banner fallback" className="w-full h-full object-cover" />
        </video>
      </motion.div>

      {/* Main content */}
      <div className="container mx-auto px-4 text-center relative z-10 mt-20">
        <motion.div variants={sectionVariants}>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight drop-shadow-lg"
            variants={childVariants}
          >
            <span className="text-blue-600">Ekhai</span> Business
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </motion.h1>
          <motion.div
            className="text-lg sm:text-xl md:text-2xl text-navy-900 font-bold shadow-md mb-8 h-16 flex items-center justify-center"
            variants={childVariants}
          >
            <span className="mr-3">We provide</span>
            <TypewriterEffect
              texts={services}
              speed={80}
              deleteSpeed={40}
              pauseTime={1500}
              className="text-black font-bold shadow-md"
            />
          </motion.div>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-navy-900 font-semibold shadow-sm mb-10 max-w-3xl mx-auto leading-relaxed"
            variants={childVariants}
            id="banner-description"
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
                className="bg-blue-600 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-lg text-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-blue-400/50"
                aria-label="Contact Ekhai Business Solutions for recruitment, legal, IT, and CSR services"
                variants={buttonVariants}
                whileHover={prefersReducedMotion ? {} : { scale: 1.05, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                layout
              >
                Contact Us
              </motion.button>
            </Link>
            <a href="#more">
              <motion.button
                className="bg-blue-600 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-lg text-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-blue-400/50"
                aria-label="Explore recruitment, legal, IT, and CSR services offered by Ekhai Business Solutions"
                variants={secondButtonVariants}
                whileHover={prefersReducedMotion ? {} : { scale: 1.05, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                layout
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

// Optional PropTypes for type checking
Banner.propTypes = {
  services: PropTypes.arrayOf(PropTypes.string),
  videoSrc: PropTypes.string,
  fallbackImg: PropTypes.string,
};

export default Banner;