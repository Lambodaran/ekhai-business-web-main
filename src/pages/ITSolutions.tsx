import { motion } from 'framer-motion';
import { Code, Database, Brain, Map, Video, Settings, FileText, Building, Cpu, Cloud, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ITSolutions = () => {
  const solutions = [
    {
      title: 'Artificial Intelligence (AI)',
      description: 'Advanced AI solutions for automation, machine learning, and intelligent data processing.',
      icon: <Brain className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Geospatial Services (GIS & Mapping)',
      description: 'Geographic information systems and mapping solutions for spatial data analysis.',
      icon: <Map className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Multimedia & E-learning Development',
      description: 'Interactive multimedia content and comprehensive e-learning platform development.',
      icon: <Video className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Business Process Management (BPM)',
      description: 'Streamline and optimize business processes for enhanced efficiency and productivity.',
      icon: <Settings className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Data Entry & Processing',
      description: 'Accurate and efficient data entry, processing, and management services.',
      icon: <Database className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Genealogy & Historical Archives',
      description: 'Digital preservation and management of genealogical and historical records.',
      icon: <FileText className="w-8 h-8 text-purple-600" />
    }
  ];

  const specializedServices = [
    'Banking & Financial Data',
    'Agriculture Records',
    'Healthcare & Insurance Data',
    'Education & Student Information',
    'KPO (Knowledge Process Outsourcing)',
    'Digitization & Data Conversion',
    'BIM (Building Information Modeling)',
    'Custom Software Development'
  ];

  const features = [
    {
      title: 'Cutting-Edge Technology',
      description: 'Leveraging the latest technologies and industry best practices'
    },
    {
      title: 'Scalable Solutions',
      description: 'Flexible and scalable IT solutions that grow with your business'
    },
    {
      title: 'Expert Team',
      description: 'Experienced professionals with deep domain expertise'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance services'
    }
  ];

  // Animation variants for sections (unchanged)
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const solutionCardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' }
    })
  };

  const serviceCardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' }
    })
  };

  const featureCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' }
    })
  };

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Hero Section */}
       <motion.section
    className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20 bg-cover bg-center bg-no-repeat relative"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://media.gettyimages.com/id/155392965/photo/hand-pointing-with-pen-on-a-computer-chart-document.jpg?s=612x612&w=0&k=20&c=hqvR4yKJJHdUKI3vLRDEgTuKQXoi18i9dtfYtroLQ-s=')`
    }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={heroVariants}
  >
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl font-bold mb-6">
          IT Solutions
        </h1>
        <p className="text-xl mb-8 text-purple-100">
          Empowering Your Business with Innovative Technology Solutions
        </p>
        <div className="flex items-center justify-center gap-2 text-purple-200">
          <Cpu className="w-6 h-6" />
          <span className="text-lg">Advanced Technology • Expert Solutions • Future-Ready</span>
        </div>
      </div>
    </div>
  </motion.section>

      {/* Main Solutions Section */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Our IT Solutions Portfolio
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={solutionCardVariants}
                >
                  <div className="mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Specialized Services Section */}
      <motion.section
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Specialized Data Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specializedServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={serviceCardVariants}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800">{service}</h3>
                    <ChevronRight className="w-5 h-5 text-purple-600" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Why Choose Our IT Solutions?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={featureCardVariants}
                >
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Cloud className="w-8 h-8 text-purple-600" />
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
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={ctaVariants}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
      <p className="text-xl mb-8 text-purple-100">
                    Let's discuss how our IT solutions can drive your business forward
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block bg-white text-purple-600 font-semibold px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors duration-300"
                  >
                    Get Started Today
                  </Link>
                </div>
              </div>
            </motion.section>
    </div>
  );
};

export default ITSolutions;