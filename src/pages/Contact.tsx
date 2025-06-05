import React, { useState, useEffect } from 'react'; // Import useEffect
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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

  // State to control the visibility of sections for staggered animations
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isContactInfoFormVisible, setIsContactInfoFormVisible] = useState(false);
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [isFaqVisible, setIsFaqVisible] = useState(false);

  // Use useEffect to trigger animations after component mounts
  useEffect(() => {
    // Add a slight delay to allow the page to render before starting animations
    const timer1 = setTimeout(() => setIsHeroVisible(true), 100);
    const timer2 = setTimeout(() => setIsContactInfoFormVisible(true), 300);
    const timer3 = setTimeout(() => setIsMapVisible(true), 500);
    const timer4 = setTimeout(() => setIsFaqVisible(true), 700);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
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

  // Helper classes for transitions
  const transitionClasses = "transition-all duration-700 ease-in-out transform";
  const fadeInSlideUp = (isVisible) =>
    `${transitionClasses} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`;
  const fadeIn = (isVisible) =>
    `${transitionClasses} ${isVisible ? 'opacity-100' : 'opacity-0'}`;

  return (
    <div className="min-h-screen bg-gray-50 font-inter"> {/* Added font-inter */}
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className={`text-center mb-16 ${fadeInSlideUp(isHeroVisible)}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600">
              We would love to hear from you
            </p>
          </div>

          <div className={`grid lg:grid-cols-2 gap-12 mb-16 ${fadeInSlideUp(isContactInfoFormVisible)}`}>
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">General Enquiries</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-700">9894482228</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-700">lal@ekhai.org</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Office Address</h3>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                      <span className="text-gray-700">
                        4/8/A7, Ground Floor, John Square, Marthandam, Kanyakumari,<br />
                        Tamilnadu, India – 629165.
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Social Media</h3>
                    <div className="flex space-x-4">
                      {/* Added hover effects for social icons */}
                      <Facebook className="h-6 w-6 text-blue-600 hover:text-blue-800 cursor-pointer transition-all duration-300 transform hover:scale-110" />
                      <Twitter className="h-6 w-6 text-blue-400 hover:text-blue-600 cursor-pointer transition-all duration-300 transform hover:scale-110" />
                      <Linkedin className="h-6 w-6 text-blue-700 hover:text-blue-900 cursor-pointer transition-all duration-300 transform hover:scale-110" />
                      <Instagram className="h-6 w-6 text-pink-600 hover:text-pink-800 cursor-pointer transition-all duration-300 transform hover:scale-110" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="rounded-md focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="rounded-md focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="rounded-md focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="rounded-md focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Google Maps */}
          <div className={`mb-16 ${fadeIn(isMapVisible)}`}>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Find Us</h2>
            <div className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.9895678!2d77.3247!3d8.2917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f0d8c1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2sMarthandam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
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

          {/* FAQ Section */}
          <div className={`${fadeInSlideUp(isFaqVisible)}`}>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Find answers to common inquiries
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-900">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
