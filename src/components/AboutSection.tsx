import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3, margin: '-100px' }); // Adjusted for earlier trigger

  // Detect mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile breakpoint (md in Tailwind)
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Parallax effect for stats container and individual cards
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const statsParallaxY = useTransform(scrollYProgress, [0, 1], ['0%', isMobile ? '4%' : '8%']);
  // Define parallax transformations for each card at the top level
  const cardParallaxYs = [
    useTransform(scrollYProgress, [0, 1], ['0%', isMobile ? '2%' : '3%']),
    useTransform(scrollYProgress, [0, 1], ['0%', isMobile ? '2.5%' : '4%']),
    useTransform(scrollYProgress, [0, 1], ['0%', isMobile ? '3%' : '5%']),
    useTransform(scrollYProgress, [0, 1], ['0%', isMobile ? '3.5%' : '6%']),
  ];
  const cardParallaxRotates = [
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 1]),
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -1]),
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 1]),
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -1]),
  ];

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Section variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 1.2,
        ease: 'easeOut',
        staggerChildren: prefersReducedMotion ? 0 : 0.3,
      },
    },
  };

  // Heading letter-by-letter animation
  const headingText = 'About Ekhai Business Solutions'.split('');
  const headingVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.9, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: prefersReducedMotion ? 0 : 1, ease: 'easeOut' },
    },
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: isMobile ? 1 : [0.9, 1.1, 1],
      transition: {
        duration: prefersReducedMotion ? 0 : isMobile ? 0.6 : 0.8,
        delay: prefersReducedMotion ? 0 : i * 0.05,
        scale: { duration: prefersReducedMotion ? 0 : 0.6 },
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
      x: index === 0 ? -20 : 0,
      y: index === 1 ? 20 : 0,
      scale: 0.9,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: prefersReducedMotion ? 0 : isMobile ? 0.6 : 0.8,
        ease: 'easeOut',
        delay: prefersReducedMotion ? 0 : index * 0.5 + wordIndex * 0.06,
      },
    },
  });

  // Stats container variants
  const statsContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : isMobile ? 0.8 : 1.2,
        type: 'spring',
        stiffness: isMobile ? 120 : 100,
        damping: 20,
        staggerChildren: prefersReducedMotion ? 0 : isMobile ? 0.2 : 0.4,
        delayChildren: prefersReducedMotion ? 0 : isMobile ? 0.5 : 0.8,
      },
    },
  };

  // Stat item variants with mobile-optimized animations
  const statItemVariants = (index: number) => ({
    hidden: {
      opacity: 0,
      scale: isMobile ? 0.8 : 0.7,
      x: index === 0 ? (isMobile ? -50 : -80) : index === 1 ? (isMobile ? 50 : 80) : 0, // Left for 0, right for 1
      y: index === 2 ? (isMobile ? 50 : 80) : index === 3 ? (isMobile ? -50 : -80) : 0, // Bottom for 2, top for 3
      filter: 'blur(4px)',
      boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      filter: 'blur(0px)',
      boxShadow: isMobile
        ? '0 0 15px rgba(147, 51, 234, 0.3)'
        : [
            '0 0 0 rgba(0, 0, 0, 0)',
            '0 0 25px rgba(147, 51, 234, 0.5)',
            '0 0 10px rgba(147, 51, 234, 0.3)',
          ],
      transition: {
        duration: prefersReducedMotion ? 0 : isMobile ? 1.2 : 1.8,
        ease: 'easeOut',
        delay: prefersReducedMotion ? 0 : index * (isMobile ? 0.3 : 0.5),
        boxShadow: { duration: prefersReducedMotion ? 0 : isMobile ? 1.2 : 2.4, times: [0, 0.5, 1] },
      },
    },
    pulse: {
      scale: isMobile ? [1, 1.03, 1] : [1, 1.05, 1],
      boxShadow: isMobile
        ? [
            '0 0 10px rgba(147, 51, 234, 0.2)',
            '0 0 15px rgba(147, 51, 234, 0.3)',
            '0 0 10px rgba(147, 51, 234, 0.2)',
          ]
        : [
            '0 0 10px rgba(147, 51, 234, 0.3)',
            '0 0 20px rgba(147, 51, 234, 0.5)',
            '0 0 10px rgba(147, 51, 234, 0.3)',
          ],
      transition: {
        duration: prefersReducedMotion ? 0 : isMobile ? 3 : 4,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: prefersReducedMotion ? 0 : index * (isMobile ? 0.3 : 0.6) + 1,
      },
    },
  });

  return (
    <motion.section
      id="more"
      className="py-16 bg-white overflow-hidden relative"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={sectionVariants}
      role="region"
      aria-label="About Section"
    >
      {/* Background decorative elements */}
      {!prefersReducedMotion && !isMobile && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-10 left-10 w-48 h-48 rounded-full mix-blend-multiply blur-2xl opacity-25"
            style={{ background: 'radial-gradient(circle, #9333ea, #6b21a8)' }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.25, 0.4, 0.25],
              rotate: [0, 60, 0],
              x: [0, 15, 0],
              y: [0, -15, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          ></motion.div>
          <motion.div
            className="absolute bottom-10 right-10 w-48 h-48 rounded-full mix-blend-multiply blur-2xl opacity-25"
            style={{ background: 'radial-gradient(circle, #9333ea, #6b21a8)' }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.25, 0.4, 0.25],
              rotate: [0, -60, 0],
              x: [0, -15, 0],
              y: [0, 15, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          ></motion.div>
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-12" variants={sectionVariants}>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-700 mb-6 flex justify-center whitespace-normal break-words max-w-4xl mx-auto"
              variants={headingVariants}
              style={{ overflowWrap: 'break-word', width: '100%' }}
            >
              {headingText.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  custom={index}
                  style={{ display: 'inline-block', minWidth: '0' }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-800 mx-auto"
              variants={headingVariants}
              animate={{ scaleX: [0, 1], originX: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 1, ease: 'easeOut' }}
            ></motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div variants={sectionVariants}>
              {paragraphWords.map((words, index) => (
                <motion.p
                  key={index}
                  className="text-base sm:text-lg text-purple-600 leading-relaxed mb-6"
                  variants={sectionVariants}
                  whileHover={
                    prefersReducedMotion || isMobile
                      ? {}
                      : {
                          y: -3,
                          color: '#7e22ce',
                          textShadow: '0 0 8px rgba(147, 51, 234, 0.4)',
                          transition: { duration: 0.5 },
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
                          className="font-semibold text-purple-700"
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
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 sm:p-8 rounded-2xl shadow-md"
              style={{ y: statsParallaxY }}
              variants={statsContainerVariants}
            >
              <div className="grid grid-cols-2 gap-4 sm:gap-6 text-center">
                {[
                  { value: '15+', label: 'Years of Service' },
                  { value: '80%', label: 'Repeat Business' },
                  { value: '5', label: 'Service Regions' },
                  { value: '6', label: 'Core Sectors' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-4 sm:p-6 rounded-xl shadow-md relative overflow-hidden"
                    style={{ y: cardParallaxYs[index], rotate: cardParallaxRotates[index] }}
                    variants={statItemVariants(index)}
                    custom={index}
                    initial="hidden" // Explicitly set initial state
                    animate={isInView && !prefersReducedMotion ? 'visible' : 'hidden'} // Simplified animate logic
                    whileHover={
                      prefersReducedMotion || isMobile
                        ? {}
                        : {
                            scale: 1.05,
                            y: -5,
                            rotate: index % 2 === 0 ? 1 : -1,
                            backgroundColor: '#f3e8ff',
                            boxShadow: '0 0 20px rgba(147, 51, 234, 0.4)',
                            transition: { duration: 0.5 },
                          }
                    }
                  >
                    {!prefersReducedMotion && !isMobile && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-purple-200/20 to-purple-400/20"
                        animate={{
                          opacity: [0.2, 0.3, 0.2],
                          scale: [1, 1.03, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: index * 0.3,
                        }}
                      />
                    )}
                    <div className="relative z-10">
                      <motion.div
                        className="text-2xl sm:text-3xl font-bold text-purple-800 mb-2 sm:mb-3"
                        animate={
                          !prefersReducedMotion && !isMobile
                            ? { color: ['#7e22ce', '#6b21a8', '#7e22ce'] }
                            : {}
                        }
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: index * 0.3,
                        }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-purple-600 font-medium text-sm sm:text-base">{stat.label}</div>
                    </div>
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