"use client";

import { Cloud, Shield, ArrowRight, Truck, Building2, Heart } from 'lucide-react';
import PageCarrerSection from './PageCarrerSection'; // Retaining existing component
import Footer from '@/components/Footer'; // Updated to use the new Footer
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';

const AboutUS = () => {
  const industries = [
    {
      id: 1,
      icon: Truck,
      title: "Transportation & Logistics",
      description: "Cost-efficient solutions for great operational efficiency!",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      icon: Building2,
      title: "Financial Services",
      description: "Better data management and advanced scalability",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      icon: Heart,
      title: "Healthcare",
      description: "Integrating health with technology!",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      id: 4,
      icon: Shield,
      title: "Public sector",
      description: "Accommodate community needs through better operability!",
      gradient: "from-orange-500 to-amber-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden pt-16">

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-2 transform origin-top-left scale-110"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Connectors of <span className="text-gradient">Innovation</span> and Technology!
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our customer-centric approach and experience in adopting and transforming modernization programs for enterprises makes us one of the pioneers in the technology modernization sector!
              </p>
              <Button size="lg" variant="glow" asChild>
                <Link href='/contact'>Get In Touch</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <GlassCard className="p-8 relative transform rotate-3 hover:rotate-0 transition-all duration-500 bg-white/5 border-white/10">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Cloud className="text-blue-500 w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">Cloud Native</div>
                      <div className="text-xs text-muted-foreground">Scalable Infrastructure</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <Shield className="text-purple-500 w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">Secure by Design</div>
                      <div className="text-xs text-muted-foreground">Enterprise Grade Security</div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction & Vision */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4 md:px-6 space-y-12">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-center">Exceptional Services. <span className="text-gradient">Outstanding Performance!</span></h2>
              <p className="text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed text-lg">
                Our talented workforce always strives to deliver superior and excellent technical solutions through a customer-centric approach! With rich experience in technology development, we are always committed to offer complete satisfaction to our clients. We also provide customized solutions according to the requirement of the clients!
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard className="p-8 md:p-12 border-primary/20 bg-primary/5">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Vision</h2>
              <p className="text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed text-lg">
                We envision a world where technology is accessible to all and void of any barriers. We have a vision of creating a community of intelligent like-minded individuals who will empower numerous stakeholders in various industries to adopt latest technological innovations!
              </p>
            </GlassCard>
          </motion.div>

        </div>
      </section>

      {/* Clients Industries */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Industries We Serve</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full text-center hover:border-primary/50 transition-colors group">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${industry.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform`}>
                    <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                      <industry.icon className="w-8 h-8 text-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{industry.title}</h3>
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCarrerSection />
      <Footer />
    </div>
  );
};

export default AboutUS;
