import { motion } from 'framer-motion';
import { CheckCircle, Users, Leaf, Heart, Briefcase, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const CSREventPlanners = () => {
  const services = [
    {
      title: 'Educational & Health Awareness Camps',
      description: 'Comprehensive programs to educate communities about health and wellness',
      icon: <Users className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Environmental Drives',
      description: 'Environmental conservation initiatives and sustainability programs',
      icon: <Leaf className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Women Empowerment Programs',
      description: 'Programs focused on empowering women and promoting gender equality',
      icon: <Heart className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Youth Skills Development',
      description: 'Skill development programs for youth to enhance employability',
      icon: <Briefcase className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'NGO & Corporate CSR Partnerships',
      description: 'Strategic partnerships between NGOs and corporations for social impact',
      icon: <Globe className="w-8 h-8 text-purple-600" />
    }
  ];

  const advantages = [
    {
      number: '01',
      title: 'Community Support and License to Operate',
      description: 'CSR initiatives address community needs, earning goodwill and securing the "license to operate" in local areas.',
      icon: <Users className="w-8 h-8 text-purple-600" />
    },
    {
      number: '02',
      title: 'Employee Attraction and Retention',
      description: 'Strong CSR commitments attract and retain talent, boosting morale, job satisfaction, and loyalty.',
      icon: <Heart className="w-8 h-8 text-purple-600" />
    },
    {
      number: '03',
      title: 'Innovative Supply Chain Integration',
      description: 'CSR integrates local communities into the supply chain, fostering sustainable relationships and ensuring reliable sourcing.',
      icon: <Briefcase className="w-8 h-8 text-purple-600" />
    },
    {
      number: '04',
      title: 'Environmental Sustainability',
      description: 'Implementing practices to reduce carbon footprint, conserve resources, promote renewable energy, and minimize pollution and waste.',
      icon: <Leaf className="w-8 h-8 text-purple-600" />
    },
    {
      number: '05',
      title: 'Ethical Labor Practices',
      description: 'Ensuring fair and safe working conditions, adhering to labor laws, and promoting diversity, equality, and inclusion.',
      icon: <Shield className="w-8 h-8 text-purple-600" />
    },
    {
      number: '06',
      title: 'Community Engagement',
      description: 'Supporting local communities through initiatives such as donations, volunteering, education programs, and infrastructure development.',
      icon: <Globe className="w-8 h-8 text-purple-600" />
    }
  ];

  const programs = [
    'School Programs',
    'Social Media Campaigns',
    'Partnerships with Local Businesses',
    'Educational Materials and Resources',
    'Public Talks or Workshops',
    'Corporate Engagement',
    'Feed a bird',
    'Marathon',
    'Care an animal',
    'School Health Program',
    'Outreach Health Program',
    'Computer Education',
    'Empowering Government Schools Project',
    'Expert Speaker or Panel Discussion',
    'Recycling Workshops',
    'Recycling Challenges or Competitions',
    'Art or Design Exhibitions',
    'Community Clean-up Events'
  ];

  // Animation variants for sections (unchanged)
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const serviceCardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' }
    })
  };

  const advantageCardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' }
    })
  };

  const programCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: i * 0.05, ease: 'easeOut' }
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
        className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={heroVariants}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              CSR Event Planners
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Creating meaningful corporate social responsibility initiatives that drive positive change in communities
            </p>
          </div>
        </div>
      </motion.section>

      {/* CSR Events Section */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Our CSR Events
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={serviceCardVariants}
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                A robust CSR program offers businesses key advantages
              </h2>
              <p className="text-xl text-gray-600">
                Explore the range of services we offer to elevate your business.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={advantageCardVariants}
                >
                  <div className="flex items-start mb-4">
                    <span className="text-3xl font-bold text-purple-600 mr-4">
                      {advantage.number}
                    </span>
                    <div className="flex-1">
                      <div className="mb-3">{advantage.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {advantage.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Partnership Programs Section */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Corporate Social Responsibility Partnership Programs
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-4 text-center hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={programCardVariants}
                >
                  <span className="font-medium">{program}</span>
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
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Partner with us to create impactful CSR initiatives that benefit your business and community
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

export default CSREventPlanners;