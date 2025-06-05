import { motion, useInView, useAnimationFrame } from 'framer-motion';
import { useRef, useState } from 'react';
import ClientLogo1 from '../assets/clients/image1.png';
import ClientLogo2 from '../assets/clients/image2.png';
import ClientLogo3 from '../assets/clients/image3.png';
import ClientLogo4 from '../assets/clients/image4.png';
import ClientLogo5 from '../assets/clients/image5.png';
import ClientLogo6 from '../assets/clients/image6.png';
import ClientLogo7 from '../assets/clients/image7.png';
import ClientLogo8 from '../assets/clients/image8.png';
import ClientLogo9 from '../assets/clients/image9.png';
import ClientLogo10 from '../assets/clients/image10.png';
import ClientLogo11 from '../assets/clients/image11.png';
import ClientLogo12 from '../assets/clients/image12.png';
import ClientLogo13 from '../assets/clients/image13.png';

const ClientsSection = () => {
  const clients = [
    { name: 'Client 1', logo: ClientLogo1 },
    { name: 'Client 2', logo: ClientLogo2 },
    { name: 'Client 3', logo: ClientLogo3 },
    { name: 'Client 4', logo: ClientLogo4 },
    { name: 'Client 5', logo: ClientLogo5 },
    { name: 'Client 6', logo: ClientLogo6 },
    { name: 'Client 7', logo: ClientLogo7 },
    { name: 'Client 8', logo: ClientLogo8 },
    { name: 'Client 9', logo: ClientLogo9 },
    { name: 'Client 10', logo: ClientLogo10 },
    { name: 'Client 11', logo: ClientLogo11 },
    { name: 'Client 12', logo: ClientLogo12 },
    { name: 'Client 13', logo: ClientLogo13 },
  ];

  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2, margin: '-50px' });
  const [scrollX, setScrollX] = useState(0);

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Section variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.8,
        ease: 'easeOut',
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  };

  // Text variants for heading and description
  const textVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: prefersReducedMotion ? 0 : 0.6, ease: 'easeOut' },
    },
  };

  // Different logo animation variants for variety
  const logoVariants = (index: number) => ({
    hidden: {
      opacity: 0,
      y: index % 3 === 0 ? 30 : 0, // Some slide up
      x: index % 3 === 1 ? -30 : 0, // Some slide from left
      scale: index % 3 === 2 ? 0.7 : 1, // Some zoom in
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: prefersReducedMotion ? 0 : 0.5,
        ease: 'easeOut',
        delay: prefersReducedMotion ? 0 : index * 0.1,
      },
    },
  });

  // Carousel container animation with bounce effect
  const carouselVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: [20, -10, 0], // Bounce effect
      transition: {
        duration: prefersReducedMotion ? 0 : 0.8,
        ease: 'easeOut',
        y: { duration: prefersReducedMotion ? 0 : 0.8, times: [0, 0.5, 1] },
      },
    },
  };

  // Infinite scroll animation
  useAnimationFrame((time) => {
    if (!prefersReducedMotion && isInView) {
      setScrollX((prev) => {
        const containerWidth = containerRef.current?.offsetWidth || 0;
        const totalWidth = clients.length * (24 * 4 + 32); // w-24 + mx-8 in rem
        return prev <= -totalWidth ? 0 : prev - 0.5; // Reset when reaching end
      });
    }
  });

  return (
    <motion.section
      className="py-16 bg-gray-50 overflow-hidden relative"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={sectionVariants}
      role="region"
      aria-label="Clients Section"
    >
      {/* Background decorative elements */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-10 left-20 w-48 h-48 bg-blue-100 rounded-full mix-blend-multiply blur-xl opacity-20"
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          ></motion.div>
          <motion.div
            className="absolute bottom-10 right-20 w-48 h-48 bg-purple-100 rounded-full mix-blend-multiply blur-xl opacity-20"
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          ></motion.div>
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="text-center mb-12" variants={sectionVariants}>
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            variants={textVariants}
          >
            Our <span className="text-blue-600">Trusted</span> Clients
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            variants={textVariants}
          >
            We are proud to work with leading companies across various industries
          </motion.p>
        </motion.div>

        <div className="relative overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex"
            style={{ x: scrollX }}
            variants={carouselVariants}
            transition={{ ease: 'linear' }}
            onHoverStart={() => prefersReducedMotion ? null : setScrollX((prev) => prev)}
            onHoverEnd={() => prefersReducedMotion ? null : setScrollX((prev) => prev - 0.5)}
          >
            {/* First set of logos */}
            {clients.map((client, index) => (
              <motion.div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center transition-shadow duration-300"
                variants={logoVariants(index)}
                custom={index}
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : { scale: 1.1, rotate: 5, transition: { duration: 0.3 } }
                }
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain p-2"
                />
              </motion.div>
            ))}
            {/* Duplicate set for seamless scrolling */}
            {clients.map((client, index) => (
              <motion.div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center transition-shadow duration-300"
                variants={logoVariants(index)}
                custom={index}
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : { scale: 1.1, rotate: 5, transition: { duration: 0.3 } }
                }
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain p-2"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ClientsSection;