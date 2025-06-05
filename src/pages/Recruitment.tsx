import { motion } from 'framer-motion';
import { Users, Search, Building, FileText, Target, Network, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

// Variants for hero section
const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Variants for service and feature cards
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      ease: "easeOut"
    }
  })
};

// Variants for call to action section
const ctaVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
};

// Variants for button
const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } }
};

const Recruitment = () => {
  const services = [
    {
      title: 'Permanent Staffing',
      description: 'Long-term talent acquisition solutions for your core business needs',
      icon: <Users className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Contract Staffing',
      description: 'Flexible workforce solutions for project-based requirements',
      icon: <FileText className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Onsite Recruitment',
      description: 'Direct recruitment services at your location for immediate needs',
      icon: <Building className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Payroll Management',
      description: 'Comprehensive payroll processing and management services',
      icon: <FileText className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Executive Search',
      description: 'Specialized search for senior-level and executive positions',
      icon: <Search className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Recruitment Process Outsourcing (RPO)',
      description: 'Complete recruitment process management and optimization',
      icon: <Network className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Campus Recruitment',
      description: 'Direct talent acquisition from educational institutions',
      icon: <GraduationCap className="w-8 h-8 text-purple-600" />
    }
  ];

  const features = [
    {
      title: 'Targeted Approach',
      description: 'We understand your specific requirements and match candidates accordingly',
      icon: <Target className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Extensive Network',
      description: 'Access to a vast pool of qualified candidates across various industries',
      icon: <Users className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Industry Expertise',
      description: 'Deep understanding of various industries and their unique requirements',
      icon: <Building className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous screening and assessment processes to ensure quality matches',
      icon: <Search className="w-8 h-8 text-purple-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Recruitment Services
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Connecting talent with opportunity through comprehensive recruitment solutions
            </p>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Our Recruitment Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Why Choose Our Recruitment Services?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white"
        initial="hidden"
        animate="visible"
        variants={ctaVariants}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Find Your Perfect Match?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Let us help you find the right talent for your organization
            </p>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              initial="rest"
            >
              <Link
                to="/contact"
                className="inline-block bg-white text-purple-600 font-semibold px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors duration-300"
              >
                Get Started Today
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Recruitment;