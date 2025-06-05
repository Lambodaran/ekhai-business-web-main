import { motion } from 'framer-motion';

// Variants for section content
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Variants for mission and vision cards
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.2,
      ease: "easeOut",
    },
  }),
};

const MissionVision = () => {
  return (
    <motion.section
      className="py-16 bg-gradient-to-b from-purple-900 to-purple-700"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            Our Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0}
              variants={cardVariants}
            >
              <h3 className="text-2xl font-semibold text-purple-100 mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-white leading-relaxed">
                To empower communities and organizations by delivering integrated, ethical, and innovative services that create measurable impact.
              </p>
              <div className="mt-6 h-1 w-16 bg-purple-600 mx-auto"></div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={1}
              variants={cardVariants}
            >
              <h3 className="text-2xl font-semibold text-purple-100 mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-white leading-relaxed">
                To be a trusted leader in technology, legal, and social solutions—bridging human values with digital transformation to shape a better future for all.
              </p>
              <div className="mt-6 h-1 w-16 bg-purple-600 mx-auto"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default MissionVision;