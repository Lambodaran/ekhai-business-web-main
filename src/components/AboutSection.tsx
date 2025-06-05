import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2, margin: '-50px' });

  // Parallax effect for stats container and individual cards
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const statsParallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const cardParallaxY = (index: number) =>
    useTransform(scrollYProgress, [0, 1], ['0%', `${5 + index * 2}%`]);
  const cardParallaxRotate = (index: number) =>
    useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? 2 : -2]); // Slight rotation

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

  // Heading letter-by-letter animation (unchanged as per feedback)
  const headingText = 'About Ekhai Business Solutions'.split('');
  const headingVariants = {
    hidden: { opacity: 0, y: -20, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: prefersReducedMotion ? 0 : 0.6, ease: 'easeOut' },
    },
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.4,
        delay: prefersReducedMotion ? 0 : i * 0.05,
      },
    }),
  };

  // Word-by-word animation for paragraphs
  const paragraphWords = [
    'EKHAI Business Solutions, headquartered in Kanyakumari, is a renowned firm offering comprehensive recruitment, legal, and CSR event organization services across Andhra Pradesh, Telangana, Tamil Nadu, Kerala, and Dubai.'.split(' '),
    'With a decade-long legacy, they specialize in providing tailored manpower solutions, particularly in IT, Engineering, Manufacturing, Power, Oil & Gas, and Consulting sectors.'.split(' '),
    'Their remarkable 80% repeat business rate underscores their commitment to client satisfaction.'.split(' '),
  ];

  const wordVariants = (index: number, wordIndex: number) => ({
    hidden: {
      opacity: 0,
      x: index === 0 ? -20 : 0, // First paragraph words slide from left
      y: index === 1 ? 20 : 0, // Second paragraph words slide up
      scale: index === 2 ? 0.9 : 1, // Third paragraph words zoom in
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: prefersReducedMotion ? 0 : 0.5,
        ease: 'easeOut',
        delay: prefersReducedMotion ? 0 : index * 0.3 + wordIndex * 0.05,
        scale: { yoyo: prefersReducedMotion ? 0 : 1, repeat: 1, duration: 0.6 }, // Pulse effect
      },
    },
  });

  // Stats container variants with bounce
  const statsContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: [20, -10, 0], // Bounce effect
      transition: {
        duration: prefersReducedMotion ? 0 : 0.8,
        ease: 'easeOut',
        y: { duration: prefersReducedMotion ? 0 : 0.8, times: [0, 0.5, 1] },
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
        delayChildren: prefersReducedMotion ? 0 : 0.3,
      },
    },
  };

  // Stat item variants with glow and float
  const statItemVariants = (index: number) => ({
    hidden: {
      opacity: 0,
      rotateX: index % 2 === 0 ? 90 : 0, // Even indices flip
      scale: index % 2 === 1 ? 0.8 : 1, // Odd indices zoom
      filter: 'blur(4px)',
      boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      scale: 1,
      filter: 'blur(0px)',
      boxShadow: [
        '0 0 0 rgba(0, 0, 255, 0)',
        '0 0 15px rgba(0, 0, 255, 0.3)',
        '0 0 0 rgba(0, 0, 255, 0)',
      ], // Glow effect
      transition: {
        duration: prefersReducedMotion ? 0 : 0.5,
        ease: 'easeOut',
        delay: prefersReducedMotion ? 0 : index * 0.15,
        boxShadow: { duration: prefersReducedMotion ? 0 : 0.8, times: [0, 0.5, 1] },
      },
    },
    float: {
      y: [0, -5, 0], // Floating animation after entrance
      transition: {
        duration: prefersReducedMotion ? 0 : 2,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: prefersReducedMotion ? 0 : index * 0.2 + 1,
      },
    },
  });

  return (
    <motion.section
      id="more"
      className="py-20 bg-white overflow-hidden relative"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={sectionVariants}
      role="region"
      aria-label="About Section"
    >
      {/* Background decorative elements */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-10 left-10 w-48 h-48 bg-blue-100 rounded-full mix-blend-multiply blur-xl opacity-20"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2], rotate: [0, 45, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          ></motion.div>
          <motion.div
            className="absolute bottom-10 right-10 w-48 h-48 bg-purple-100 rounded-full mix-blend-multiply blur-xl opacity-20"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2], rotate: [0, -45, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          ></motion.div>
          <motion.div
            className="absolute top-1/3 left-1/4 w-32 h-32 bg-pink-100 rounded-lg mix-blend-multiply blur-lg opacity-15"
            animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          ></motion.div>
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={sectionVariants}>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 inline-flex"
              variants={headingVariants}
            >
              {headingText.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  custom={index}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-blue-600 mx-auto"
              variants={headingVariants}
            ></motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={sectionVariants}>
              {paragraphWords.map((words, index) => (
                <motion.p
                  key={index}
                  className="text-lg text-gray-600 leading-relaxed mb-6"
                  variants={sectionVariants}
                  whileHover={
                    prefersReducedMotion
                      ? {}
                      : {
                          y: -3,
                          color: '#2563eb', // Blue-600
                          textShadow: '0 0 10px rgba(0, 0, 255, 0.4)',
                          transition: { duration: 0.3 },
                        }
                  }
                >
                  {words.map((word, wordIndex) => (
                    <motion.span
                      key={`${index}-${wordIndex}`}
                      variants={wordVariants(index, wordIndex)}
                      custom={wordIndex}
                      style={{ display: 'inline-block', marginRight: '0.25rem' }}
                    >
                      {word === '80%' ? (
                        <span
                          className="font-semibold text-blue-600"
                          dangerouslySetInnerHTML={{ __html: word }}
                        />
                      ) : (
                        word
                      )}{' '}
                    </motion.span>
                  ))}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl"
              style={{ y: statsParallaxY }}
              variants={statsContainerVariants}
            >
              <div className="grid grid-cols-2 gap-6 text-center">
                {[
                  { value: '15+', label: 'Years of Service' },
                  { value: '80%', label: 'Repeat Business' },
                  { value: '5', label: 'Service Regions' },
                  { value: '6', label: 'Core Sectors' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg"
                    style={{ y: cardParallaxY(index), rotate: cardParallaxRotate(index) }}
                    variants={statItemVariants(index)}
                    custom={index}
                    animate={isInView && !prefersReducedMotion ? ['visible', 'float'] : 'visible'}
                    whileHover={
                      prefersReducedMotion
                        ? {}
                        : {
                            scale: 1.1,
                            rotate: index % 2 === 0 ? 3 : -3,
                            y: -5,
                            backgroundColor: '#e0f2fe',
                            boxShadow: '0 0 15px rgba(0, 0, 255, 0.3)',
                            transition: { duration: 0.3 },
                          }
                    }
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <div className="text-gray-700 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;