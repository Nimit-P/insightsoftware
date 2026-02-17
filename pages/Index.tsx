
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustedBy from "@/components/TrustedBy";
import MidPageCTA from "@/components/MidPageCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-primary/20">
      <HeroSection />
      <TrustedBy />
      <ServicesSection />
      <MidPageCTA />
      <WhyChooseUs />
      <CaseStudiesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
