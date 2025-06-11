import { useState, useEffect, useMemo } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  const getTextColor = () => {
    if (isMenuOpen) return 'text-white';
    if (isScrolled) return 'text-white';
    if (location.pathname === '/') return 'text-black';
    return 'text-gray-900';
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    let throttleTimeout: NodeJS.Timeout | null = null;
    const throttleScroll = () => {
      if (!throttleTimeout) {
        throttleTimeout = setTimeout(() => {
          handleScroll();
          throttleTimeout = null;
        }, 100);
      }
    };

    window.addEventListener('scroll', throttleScroll);
    return () => window.removeEventListener('scroll', throttleScroll);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsServicesOpen(!isServicesOpen);
    }
  };

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: 'spring', 
        stiffness: 100,
        damping: 10,
        when: "beforeChildren"
      }
    }
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1 + i * 0.05,
        ease: "easeOut"
      }
    })
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.05,
        when: "beforeChildren"
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      height: 0,
      opacity: 0,
      y: "-100%",
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: { 
      height: "auto",
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        type: "spring",
        stiffness: 120,
        damping: 15,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out backdrop-blur-md ${
        isScrolled ? 'bg-gray-900/80 border-b border-gray-700/50' : 'bg-transparent border-b border-gray-700/30'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
  custom={0}
  variants={navItemVariants}
>
  <Link 
    to="/" 
    className={`text-2xl font-bold ${getTextColor()} flex items-center`} 
    aria-label="Ekhai Business Solutions Home"
  >
    <motion.img 
      src={Logo} 
      alt="Ekhai Business Solutions Logo" 
      className="h-12 w-32"
      style={{ boxShadow: '0 0 10px 2px rgba(128, 0, 128, 0.8)' }}
      loading="eager"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    />
  </Link>
</motion.div>

          <motion.button
            custom={1}
            variants={navItemVariants}
            className={`md:hidden p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded ${isMenuOpen ? 'fixed top-4 right-4 z-50' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? (
              <X size={28} className="text-black" />
            ) : (
              <Menu size={28} className={getTextColor()} />
            )}
          </motion.button>

          <nav className="hidden md:flex items-center space-x-8" role="navigation">
            <motion.div custom={1} variants={navItemVariants}>
              <Link
                to="/"
                className={`${getTextColor()} hover:text-blue-400 transition-colors duration-300 font-medium`}
              >
                <motion.div whileHover={{ scale: 1.05 }}>
                  Home
                </motion.div>
              </Link>
            </motion.div>

            <motion.div custom={2} variants={navItemVariants} className="relative group">
              <motion.button
                className={`${getTextColor()} hover:text-blue-400 transition-colors duration-300 font-medium flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                onKeyDown={handleKeyDown}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                whileHover={{ scale: 1.05 }}
              >
                Services
                <motion.span
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className={`w-4 h-4 ${getTextColor()}`} />
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    className={`absolute top-full left-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-700/50`}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="py-2">
                      {services.map((service, index) => (
                        <motion.div
                          key={service.path}
                          variants={{
                            hidden: { x: -10, opacity: 0 },
                            visible: { 
                              x: 0, 
                              opacity: 1,
                              transition: { delay: index * 0.05 }
                            }
                          }}
                        >
                          <Link
                            to={service.path}
                            className="block px-4 py-2.5 text-gray-200 hover:bg-blue-800/50 hover:text-blue-400 transition-colors duration-200"
                          >
                            {service.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div custom={3} variants={navItemVariants}>
              <Link
                to="/contact"
                className={`${getTextColor()} hover:text-blue-400 transition-colors duration-300 font-medium`}
              >
                <motion.div whileHover={{ scale: 1.05 }}>
                  Contact
                </motion.div>
              </Link>
            </motion.div>
          </nav>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className={`md:hidden flex justify-center items-center w-full bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50 px-4`}
            >
              <nav className="w-full py-6" role="navigation">
                <div className="flex flex-col space-y-3">
                  <motion.div
                    variants={{
                      hidden: { x: -20, opacity: 0, scale: 0.95 },
                      visible: { 
                        x: 0, 
                        opacity: 1, 
                        scale: 1,
                        transition: { 
                          type: "spring",
                          stiffness: 150,
                          damping: 12
                        }
                      }
                    }}
                  >
                    <Link
                      to="/"
                      className={`text-lg ${getTextColor()} hover:text-blue-400 transition-colors duration-300 font-medium block px-3 py-2`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </motion.div>

                  <motion.div
                    variants={{
                      hidden: { x: -20, opacity: 0, scale: 0.95 },
                      visible: { 
                        x: 0, 
                        opacity: 1, 
                        scale: 1,
                        transition: { 
                          type: "spring",
                          stiffness: 150,
                          damping: 12
                        }
                      }
                    }}
                  >
                    <button
                      className={`text-lg ${getTextColor()} hover:text-blue-400 transition-colors duration-300 font-medium flex items-center gap-2 w-full text-left px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded`}
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      onKeyDown={handleKeyDown}
                      aria-expanded={isServicesOpen}
                      aria-haspopup="true"
                    >
                      Services
                      <motion.span
                        animate={{ rotate: isServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className={`w-5 h-5 ${getTextColor()}`} />
                      </motion.span>
                    </button>
<AnimatePresence>
  {isServicesOpen && (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: { height: 0, opacity: 0 },
        visible: { 
          height: "auto", 
          opacity: 1,
          transition: { staggerChildren: 0.05 }
        }
      }}
      className="ml-4 space-y-3"
    >
      {services.map((service, index) => (
        <motion.div
          key={service.path}
          variants={{
            hidden: { x: -20, opacity: 0, scale: 0.95 },
            visible: { 
              x: 0, 
              opacity: 1, 
              scale: 1,
              transition: { 
                type: "spring",
                stiffness: 150,
                damping: 12,
                delay: index * 0.1 
              }
            }
          }}
        >
          <Link
            to={service.path}
            className={`block text-base text-gray-200 hover:text-blue-400 transition-colors duration-300 px-3 py-2`}
            onClick={() => setIsMenuOpen(false)}
          >
            {service.name}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )}
</AnimatePresence>
                  </motion.div>

                  <motion.div
                    variants={{
                      hidden: { x: -20, opacity: 0, scale: 0.95 },
                      visible: { 
                        x: 0, 
                        opacity: 1, 
                        scale: 1,
                        transition: { 
                          type: "spring",
                          stiffness: 150,
                          damping: 12
                        }
                      }
                    }}
                  >
                    <Link
                      to="/contact"
                      className={`text-lg ${getTextColor()} hover:text-blue-400 transition-colors duration-300 font-medium block px-3 py-2`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </motion.div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;