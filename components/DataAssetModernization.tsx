"use client";

import React from 'react';
import { Database, BarChart3, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { motion } from 'framer-motion';

const DataAssetModernization = () => {
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
                Data Asset <br /> <span className="text-gradient">Modernization</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We visualize building a next-gen powerful data asset to offer a robust and faster tomorrow for the stakeholders!
              </p>
              <Button size="lg" variant="glow" asChild>
                <Link href='/contact'>Start Your Transformation</Link>
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
                  <Database className="w-40 h-40 text-blue-500 relative z-10" />

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-8 bg-background p-2 rounded-lg shadow-lg animate-bounce">
                    <BarChart3 className="w-6 h-6 text-purple-500" />
                  </div>
                  <div className="absolute -bottom-4 -left-8 bg-background p-2 rounded-lg shadow-lg animate-bounce delay-150">
                    <Shield className="w-6 h-6 text-green-500" />
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
              <h2 className="text-3xl font-bold">Why Modernize Your Data?</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    In today’s era, data is really the new oil! Infinite amount of data is generated every minute in countless formats.
                    With so much data scattered all over, many companies are unable to utilize the data in a proper manner.
                  </p>
                  <p>
                    Modernizing data is all about extending, retaining, and reusing the information under these layers.
                    It involves creating a scalable and flexible data stack without much complexities and restrictions.
                  </p>
                  <p className="font-semibold text-foreground">
                    Data asset modernization is the key to enable enhanced compliance, cost-efficiency, and revolutionary analytics capabilities.
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Key Advantages</h3>
                  <ul className="space-y-4">
                    {[
                      "Extend, retain, and reuse information effectively",
                      "Create a scalable and flexible data stack",
                      "Enable enhanced compliance and security",
                      "Drive revolutionary analytics capabilities",
                      "Adapt quickly to the rapidly changing market"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" asChild className="mt-4">
                    <Link href="/contact">Unlock Insights</Link>
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
            <h2 className="text-3xl font-bold mb-4">Data Modernization Benefits</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transform your data infrastructure for better insights and competitive advantage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Database, title: "Centralized Data", desc: "Unified data repository for better accessibility and management", color: "text-blue-500", bg: "bg-blue-500/10" },
              { icon: BarChart3, title: "Advanced Analytics", desc: "Real-time insights and predictive analytics capabilities", color: "text-green-500", bg: "bg-green-500/10" },
              { icon: Shield, title: "Data Security", desc: "Enhanced data protection and compliance standards", color: "text-purple-500", bg: "bg-purple-500/10" },
              { icon: Zap, title: "Faster Processing", desc: "Improved data processing speed and performance", color: "text-orange-500", bg: "bg-orange-500/10" }
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

export default DataAssetModernization;
