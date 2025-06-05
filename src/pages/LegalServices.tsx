import { motion } from 'framer-motion';
import { Scale, FileText, Users, Building, Shield, Gavel } from 'lucide-react';

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

// Variants for practice area cards
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

// Variants for about section
const aboutVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 1, 
      ease: "easeOut" 
    }
  }
};

const LegalServices = () => {
  const practiceAreas = [
    {
      title: "Labour & Employment",
      icon: Users,
      services: [
        "Company Policies",
        "Prevention Of Sexual harassment (PoSH)",
        "Employment Strategy and Documentation",
        "Third-Party Agreements",
        "Employee Benefits & Compensation",
        "Labour Law Advisory",
        "Conduct HR Compliance audits",
        "Employment Litigation",
        "Non-Disclosure Agreements / Confidentiality Agreements"
      ]
    },
    {
      title: "IT, E-commerce & Outsourcing",
      icon: Building,
      services: [
        "Online gaming and gambling",
        "e-commerce – advice on B2B/ B2C",
        "Structuring of investment and commercial agreements",
        "Equipment procurement, outsourcing and facility management agreements",
        "Service provider and re-seller arrangements",
        "Information Technology Act and rules framed thereunder",
        "Advisory in corporate commercial issues"
      ]
    },
    {
      title: "Criminal Litigation",
      icon: Gavel,
      services: [
        "Bail",
        "Cyber crimes",
        "Appeal & revision",
        "Banks/financial institutions frauds",
        "Economic offences",
        "Women Harassment"
      ]
    },
    {
      title: "Real Estate & Construction Law",
      icon: Building,
      services: [
        "Investors & funds, Government entities",
        "Agencies, corporate houses, warehousing & logistics companies",
        "Property owners, contractors, landlords, and tenants",
        "Acquisition or disposal of real estate & joint ventures"
      ]
    },
    {
      title: "Reform and Insolvency",
      icon: FileText,
      services: [
        "Contingency planning/ Pre Insolvency/ Distress Advisory",
        "Mergers/Amalgamation",
        "Acting as Lawyers/Advisors to RP/COC/Liquidator",
        "Identifying strategic investors",
        "Prospective Resolution Applicants",
        "Handling Debt Recovery Tribunal (DRT)",
        "Legal & Transactional Due Diligence"
      ]
    },
    {
      title: "Media Litigation",
      icon: FileText,
      services: [
        "Represent studios, sports associations, television and film production houses",
        "Independent players, new media companies, music companies and television networks",
        "Advertising, media & broadcasting laws",
        "IPR, guidelines, rules & regulations, registrations, licenses & compliances"
      ]
    },
    {
      title: "Consumer Laws",
      icon: Shield,
      services: [
        "Consumer agreements",
        "Dispute analysis and opinion",
        "Defense and lawsuits over consumer damages disputes",
        "Consumer protection, product liability issues, Warranty claims",
        "Mediation & litigation",
        "Consumer Disputes Redressal"
      ]
    },
    {
      title: "Family Counselling",
      icon: Users,
      services: [
        "Adoption",
        "Domestic violence",
        "Counselling on divorce",
        "Conflict resolution, and problem-solving",
        "Child Abuse",
        "Parental rights",
        "Siblings Abuse",
        "Women Empowerment"
      ]
    },
    {
      title: "Intellectual Property",
      icon: Scale,
      services: [
        "Protection and prosecution of IP rights",
        "Drafting and negotiating various IP agreements",
        "Representing before various authorities, courts and forums"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Hero Section */}
      <motion.section
        className="py-20 px-4"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Scale className="w-16 h-16 text-purple-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            EKHAI Legal Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Providing tailored legal guidance and support for your organisation's needs
          </p>
        </div>
      </motion.section>

      {/* Practice Areas */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our Areas of Practice
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={area.title}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                initial="hidden"
                animate="visible"
                custom={index}
                variants={cardVariants}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center mb-4">
                  <area.icon className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{area.title}</h3>
                </div>
                <ul className="space-y-2">
                  {area.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="text-gray-600 text-sm flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Our Legal Services */}
      <motion.section
        className="py-16 px-4 bg-gray-50"
        initial="hidden"
        animate="visible"
        variants={aboutVariants}
      >
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              About EKHAI Legal Services
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
              <p className="mb-6">
                EKHAI Legal specializes in providing top-tier legal support services to clients, alleviating their burdens across various legal domains. Our comprehensive offerings encompass Document Review, Legal Research and Drafting, Contract Management and Review, Litigation Support Services, Title Search Services, Para Legal services, and Legal Data Entry.
              </p>
              <p className="mb-6">
                We prioritize building strong client relationships, valuing meaningful connections over mere transactions. By closely collaborating with clients, we gain insights into their strategic legal issues, streamlining processes and addressing challenges effectively.
              </p>
              <p className="mb-6">
                Our proactive approach extends to managing internal procedures and navigating external disputes, including regulatory compliance and corporate structure matters. At EKHAI, we cultivate a positive and approachable working environment, fostering trust, transparency, and clear communication.
              </p>
              <p>
                Our commitment to excellence ensures enduring partnerships with clients, marked by mutual respect and shared success. With a focus on quality, integrity, and professionalism, we stand ready to support clients in achieving their legal objectives with confidence.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default LegalServices;