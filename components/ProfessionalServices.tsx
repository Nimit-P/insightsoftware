"use client";

import React from 'react';
import { Users, Clock, Award, Target, CheckCircle, ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { motion } from 'framer-motion';

const ProfessionalServices = () => {
  return (
    <div className="min-h-screen bg-background pt-16 overflow-hidden">

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-primary/5 -skew-y-2 transform origin-top-left scale-110"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Professional <br /> <span className="text-gradient">Services</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With flexible partnership models, recruiting the perfect individuals for you is a cakewalk for us!
              </p>
              <Button size="lg" variant="glow" asChild>
                <Link href='/contact'>Build Your Team</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <GlassCard className="p-12 relative bg-white/5 border-white/10 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 animate-pulse"></div>
                  <Users className="w-40 h-40 text-blue-500 relative z-10" />

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-8 bg-background p-2 rounded-lg shadow-lg animate-bounce">
                    <Award className="w-6 h-6 text-purple-500" />
                  </div>
                  <div className="absolute -bottom-4 -left-8 bg-background p-2 rounded-lg shadow-lg animate-bounce delay-150">
                    <Target className="w-6 h-6 text-green-500" />
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8 md:p-12 space-y-8">
              <h2 className="text-3xl font-bold">Empower Your Organization</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    The demand for skilled IT labor has multiplied rapidly over the years. Staffing demands continue to change at an accelerated pace. It is difficult for any company to keep up with the ever-evolving staffing demand.
                  </p>
                  <p>
                    This is where professional IT staffing solutions come into the picture. Many employers are turning towards IT staffing solution providers as the process is time-consuming and complex for them.
                  </p>
                  <p>
                    When you, as an employer, hire through an IT staffing company, be assured about the candidates. You pay them for the skills that are required and it also reduces the chances of a ‘bad hire’, eventually leading to high savings.
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Why Choose Insightsoftware?</h3>
                  <ul className="space-y-4">
                    {[
                      "Access to a vast pool of talented individuals",
                      "Systematic approach for candidate selection",
                      "Reduce hiring risks and save on operational costs",
                      "Flexible partnership models tailored for you",
                      "Fill in the void of IT support staffing specialists"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" asChild className="mt-4">
                    <Link href="/contact">Consult with Experts</Link>
                  </Button>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Professional Services Benefits</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expert consulting and development services to accelerate your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Expert Team", desc: "Skilled professionals with industry expertise", color: "text-blue-500", bg: "bg-blue-500/10" },
              { icon: Clock, title: "Time Efficient", desc: "Faster project delivery with proven methodologies", color: "text-green-500", bg: "bg-green-500/10" },
              { icon: Award, title: "Quality Assured", desc: "High-quality deliverables with rigorous testing", color: "text-purple-500", bg: "bg-purple-500/10" },
              { icon: Target, title: "Targeted Solutions", desc: "Customized solutions aligned with business goals", color: "text-orange-500", bg: "bg-orange-500/10" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full text-center hover:border-primary/50 transition-colors p-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${item.bg}`}>
                    <item.icon className={`h-8 w-8 ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProfessionalServices;
