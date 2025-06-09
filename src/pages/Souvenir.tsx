import { motion } from 'framer-motion';
import { Gift, Heart, Star, Truck, Leaf, Calendar } from 'lucide-react';
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

// Variants for section content
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
};

// Variants for service, feature, and occasion cards
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

// Variants for button
const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } }
};

// Enhanced icon animation variant
const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Souvenir = () => {
  const features = [
    {
      title: 'Premium Quality Products',
      description: 'Handpicked gifts that resonate with thoughtfulness and care.',
      icon: <Star className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Customizable Solutions',
      description: 'Tailored to suit your corporate identity and occasion.',
      icon: <Gift className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Reliable Delivery',
      description: 'On-time and hassle-free gifting experiences across locations.',
      icon: <Truck className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Wide Range of Options',
      description: 'From personalized gifts to elegant hampers, we cover it all.',
      icon: <Heart className="w-8 h-8 text-purple-600" />
    }
  ];

  const services = [
    {
      title: 'Corporate Gifting',
      description: 'Corporate gifting for clients, employees, and partners',
      icon: <Gift className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Festive Gifting',
      description: 'Festive and seasonal gifting',
      icon: <Calendar className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Event Mementos',
      description: 'Event-specific mementos and souvenirs',
      icon: <Star className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Eco-Friendly Options',
      description: 'Eco-friendly and sustainable gift options',
      icon: <Leaf className="w-8 h-8 text-purple-600" />
    }
  ];

  const occasions = [
    'Customised Corporate T-Shirts',
    'New Year Corporate Gifts For Employees',
    'Corporate Gifts For Women\'s Day',
    'Corporate Diwali Gifts',
    'Corporate Laptop Bags',
    'Corporate Certificate Frames'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Hero Section */}
      <motion.section
    className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20 bg-cover bg-center bg-no-repeat relative"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://greenopromo.com/wp-content/uploads/2025/04/Gadgets.jpg')`
    }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={heroVariants}
  >
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl font-bold mb-6">
          EKHAI Souvenir
        </h1>
        <p className="text-2xl mb-8 text-purple-100">
          Crafting Gratitude, Delivering Smiles
        </p>
        <p className="text-lg text-purple-200">
          A dedicated unit of EKHAI BUSINESS SOLUTIONS
        </p>
      </div>
    </div>
  </motion.section>

      {/* Introduction Section */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Corporate Gifting Services
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Welcome to EKHAI SOUVENIR, a dedicated unit of EKHAI BUSINESS SOLUTIONS
              Powered by SONA SCREENS MEDIA PRODUCTION COMPANY (Since 2005) offering complete corporate gifting solutions that help you express gratitude, foster relationships, and leave a lasting impression.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Our Services Include:
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  custom={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    className="mb-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={iconVariants}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <motion.section
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Why Choose EKHAI Souvenir?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  custom={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={iconVariants}
                  >
                    {feature.icon}
                  </motion.div>
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

      {/* Value Proposition Section */}
      <motion.section
        className="py-16 bg-gradient-to-r from-purple-100 to-purple-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              How We Add Value
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At EKHAI Souvenir, we don't just offer gifts; we curate moments of joy and connection. With attention to detail, innovative designs, and unmatched service, we ensure your gestures of gratitude stand out.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Occasions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Corporate Gifting Solutions For Every Occasion
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {occasions.map((occasion, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-6 text-center hover:from-purple-600 hover:to-purple-700 transition-all duration-300"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  custom={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    className="w-8 h-8 mx-auto mb-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={iconVariants}
                  >
                    <Calendar className="w-8 h-8" />
                  </motion.div>
                  <span className="font-medium">{occasion}</span>
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
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Create Memorable Moments?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Let us help you express gratitude and strengthen relationships through thoughtful corporate gifting
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
                Explore Our Collection
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Souvenir;