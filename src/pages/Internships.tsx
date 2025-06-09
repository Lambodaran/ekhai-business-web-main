import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, Target, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Internships = () => {
  const benefits = [
    {
      title: 'AICTE-Recognized Programs',
      description: 'Our internship programs are officially recognized by AICTE, ensuring quality and credibility.',
      icon: <Award className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Industry Exposure',
      description: 'Real-world experience across IT, Engineering, Manufacturing, and other sectors.',
      icon: <Target className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Skill Development',
      description: 'Comprehensive training programs to enhance technical and soft skills.',
      icon: <Users className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Flexible Duration',
      description: 'Programs ranging from short-term projects to semester-long internships.',
      icon: <Clock className="w-8 h-8 text-purple-600" />
    }
  ];

  const features = [
    {
      title: 'Hands-on Experience',
      description: 'Hands-on project experience',
      icon: <Target className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Expert Mentorship',
      description: 'Mentorship from industry experts',
      icon: <Users className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Certification',
      description: 'Certificate of completion',
      icon: <Award className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Career Opportunities',
      description: 'Potential for full-time offers',
      icon: <GraduationCap className="w-8 h-8 text-purple-600" />
    }
  ];

  const additionalFeatures = [
    'Performance evaluation reports',
    'Networking opportunities',
    'Real-world project experience',
    'Industry best practices training'
  ];

  // Animation variants for sections (unchanged)
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const benefitCardVariants = {
    hidden: { opacity: 0, x: -50 },
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

  const additionalFeatureCardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
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
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://149818895.v2.pressablecdn.com/wp-content/uploads/2013/08/Internships.jpg')`
    }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={heroVariants}
  >
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl font-bold mb-6">
          Internship Programs
        </h1>
        <p className="text-xl mb-8 text-purple-100">
          AICTE-Recognized Internship Programs for Future Professionals
        </p>
      </div>
    </div>
  </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Why Choose Our Internship Programs?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={benefitCardVariants}
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              What You'll Get
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
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {additionalFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={additionalFeatureCardVariants}
                >
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <p className="text-gray-700 font-medium">{feature}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
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
              Ready to Kickstart Your Career?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Join our AICTE-recognized internship programs and gain valuable industry experience
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-purple-600 font-semibold px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors duration-300"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Internships;