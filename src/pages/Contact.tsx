import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const faqs = [
    {
      question: "What is EKHAI Foundation?",
      answer: "EKHAI Foundation is a leading force in CSR, addressing healthcare challenges and promoting sustainable development."
    },
    {
      question: "Who can benefit from EKHAI Foundation's initiatives?",
      answer: "EKHAI Foundation serves marginalized and underprivileged sections of society, irrespective of caste, creed, or origin."
    },
    {
      question: "What are the benefits of supporting EKHAI Foundation?",
      answer: "Supporting EKHAI Foundation enhances brand reputation, fosters positive government relations, and creates meaningful change."
    },
    {
      question: "Are donations to EKHAI Foundation tax-deductible?",
      answer: "Yes, donations made to EKHAI Foundation are eligible for Income Tax benefits under Section 12A, 80G(5) (vi) of the Income Tax Act, 1961."
    }
  ];

  // Animation variants to match ITSolutions
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' }
    })
  };

  const mapVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const faqVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' }
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.section
            className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20 bg-cover bg-center bg-no-repeat relative"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://static.vecteezy.com/system/resources/thumbnails/007/067/602/small_2x/businessman-shows-outstretched-hand-with-social-icon-on-virtual-screen-contact-us-free-photo.jpg')`
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={heroVariants}
          >
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h1 className="text-5xl font-bold mb-6">
                Get in Touch
              </h1>
              <p className="text-xl mb-8 text-purple-100">
                We would love to hear from you
              </p>
            </div>
          </motion.section>

          <motion.section
            className="py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Contact Information */}
              <motion.div
                className="space-y-8"
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <Card className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-800">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">General Enquiries</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-purple-600" />
                          <span className="text-gray-600">9894482228</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-purple-600" />
                          <span className="text-gray-600">lal@ekhai.org</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Office Address</h3>
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-purple-600 mt-1" />
                        <span className="text-gray-600">
                          4/8/A7, Ground Floor, John Square, Marthandam, Kanyakumari,<br />
                          Tamilnadu, India – 629165.
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Social Media</h3>
                      <div className="flex space-x-4">
                        <Facebook className="h-6 w-6 text-purple-600 hover:text-purple-800 cursor-pointer transition-all duration-300 transform hover:scale-110" />
                        <Twitter className="h-6 w-6 text-purple-600 hover:text-purple-800 cursor-pointer transition-all duration-300 transform hover:scale-110" />
                        <Linkedin className="h-6 w-6 text-purple-600 hover:text-purple-800 cursor-pointer transition-all duration-300 transform hover:scale-110" />
                        <Instagram className="h-6 w-6 text-purple-600 hover:text-purple-800 cursor-pointer transition-all duration-300 transform hover:scale-110" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <Card className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-800">Send us a Message</CardTitle>
                    <CardDescription className="text-gray-600">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-gray-800">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="rounded-md focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-800">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="rounded-md focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject" className="text-gray-800">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="rounded-md focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <Label htmlFor="message" className="text-gray-800">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          className="rounded-md focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.section>

          {/* Google Maps */}
          <motion.section
            className="py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={mapVariants}
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Find Us</h2>
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.9895678!2d77.3227!3d8.2917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f0d8c1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2s4%2F8%2FA7%2C%20John%20Square%2C%20Marthandam%2C%20Kanyakumari%2C%20Tamil%20Nadu%20629165%2C%20India!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section
            className="py-16 bg-gray-50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                Frequently Asked Questions
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Find answers to common inquiries
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={faqVariants}
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;