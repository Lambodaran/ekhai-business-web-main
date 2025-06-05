
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import ClientsSection from '../components/ClientsSection';
import AboutSection from '../components/AboutSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Banner />
      <ClientsSection />
      <AboutSection />
      <WhyChooseUsSection />
      <Footer />
    </div>
  );
};

export default Index;
