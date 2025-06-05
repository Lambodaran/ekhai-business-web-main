import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    { name: 'IT Solutions', path: '/services/it-solutions' },
    { name: 'Legal Services', path: '/services/legal' },
    { name: 'CSR Event Planners', path: '/services/csr' },
    { name: 'Recruitment', path: '/services/recruitment' },
    { name: 'Internships', path: '/services/internships' },
    { name: 'Souvenir', path: '/services/souvenir' },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Section animation
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

  // Heading animation
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

  // Card animation with 3D flip effect
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
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.3 },
    },
  });

  // Icon animation
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

  // Handle scroll to top on link click
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.section
      className="relative py-20 overflow-hidden bg-white text-purple-900"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={sectionVariants}
    >
      {/* Background decorative elements */}
      {!prefersReducedMotion && (
        <motion.div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-16 h-16 bg-purple-300 rounded-full opacity-20 blur-xl"
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-purple-200 opacity-20 blur-xl"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>
      )}

      <motion.div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800"
            variants={headingVariants}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-lg text-purple-700 max-w-2xl mx-auto"
            variants={headingVariants}
            transition={{ delay: 0.2 }}
          >
            Discover our wide range of professional and innovative solutions tailored to your needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Link
              to={service.path}
              key={index}
              onClick={scrollToTop} // Added to ensure page starts at top
            >
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-200 hover:border-purple-400 transition-all"
                variants={cardVariants(index)}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                whileHover={prefersReducedMotion ? {} : 'hover'}
                viewport={{ once: true, margin: '-50px' }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="flex-shrink-0 mt-1"
                    variants={iconVariants}
                  >
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </motion.div>
                  <h3 className="text-lg font-medium text-purple-900">{service.name}</h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Services;