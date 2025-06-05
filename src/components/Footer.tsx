import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.footer 
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      ref={ref}
      className="bg-gray-900 text-white py-12"
    >
      <div className="container mx-auto px-4">
        {/* Grid container for footer sections */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left"
        >
          {/* Section 1: Company Info */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-1"
          >
            <motion.h3 
              whileHover={{ scale: 1.02 }}
              className="text-2xl font-bold mb-4"
            >
              <span className="text-blue-400">Ekhai</span> Business Solutions
            </motion.h3>
            <motion.p 
              whileHover={{ x: 2 }}
              className="text-gray-300 leading-relaxed mx-auto md:mx-0 max-w-xs"
            >
              Your trusted partner for comprehensive recruitment, legal, and CSR event organization services across multiple regions.
            </motion.p>
          </motion.div>
          
          {/* Section 2: Quick Links */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-1"
          >
            <motion.h3 
              whileHover={{ scale: 1.02 }}
              className="text-lg font-semibold mb-4"
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }}>
                <a 
                  href="/" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Home
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a 
                  href="/contact" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </motion.li>
            </ul>
          </motion.div>
          
          {/* Section 3: Contact Info */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-1"
          >
            <motion.h4 
              whileHover={{ scale: 1.02 }}
              className="text-lg font-semibold mb-4"
            >
              Contact Info
            </motion.h4>
            <motion.div 
              className="text-gray-300 space-y-2"
            >
              <motion.p whileHover={{ x: 2 }}>Headquarters: Kanyakumari</motion.p>
              <motion.p whileHover={{ x: 2 }}>Service Areas: Andhra Pradesh, Telangana, Tamil Nadu, Kerala, Dubai</motion.p>
              <motion.p whileHover={{ x: 2 }}>15+ Years of Excellence</motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Bottom Bar: Copyright notice */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: inView ? 1 : 0, 
            y: inView ? 0 : 20,
            transition: { delay: 0.4 }
          }}
          className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400"
        >
          <p>&copy; 2024 Ekhai Business Solutions. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;