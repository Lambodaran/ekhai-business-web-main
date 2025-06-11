import { motion, useInView } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const Services = () => {
  const services = useMemo(
    () => [
      { name: 'IT Solutions', path: '/services/it-solutions' },
      { name: 'Legal Services', path: '/services/legal' },
      { name: 'CSR Event Planners', path: '/services/csr' },
      { name: 'Recruitment', path: '/services/recruitment' },
      { name: 'Internships', path: '/services/internships' },
      { name: 'Souvenir', path: '/services/souvenir' },
    ],
    []
  );

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3, margin: '0px 0px -100px 0px' });

  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Section animation
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.8,
        ease: 'easeInOut',
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
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  // Card animation
  const cardVariants = (index: number) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: 'easeInOut',
      },
    },
    hover: {
      scale: prefersReducedMotion ? 1 : 1.02,
      transition: { duration: 0.3 },
    },
  });

  // Icon animation
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
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
      {/* Background decorative element */}
      {!prefersReducedMotion && (
        <motion.div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/3 left-1/2 w-20 h-20 bg-purple-300 rounded-full opacity-20 blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
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
              onClick={scrollToTop}
              aria-label={`Navigate to ${service.name} page`}
            >
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-200 hover:border-purple-400 transition-colors"
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