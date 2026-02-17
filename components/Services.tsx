"use client";

import React from 'react';
import { Cloud, Database, Laptop, Users, ArrowRight, Activity, Server, Code } from 'lucide-react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <div className="min-h-screen bg-background pt-16 overflow-hidden">

      {/* Services Hero */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-primary/5 -skew-y-1 transform origin-top-right scale-110"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Qualified Development <br />
                <span className="text-gradient">Resources.</span> At a Click!
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Developing innovative and revolutionary business solutions is our passion! From data modernization to IT staffing, you can depend on Insightsoftware for the most valued solutions.
              </p>
              <Button size="lg" variant="glow" asChild>
                <Link href='/contact'>Get in touch</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <GlassCard className="p-8 backdrop-blur-md bg-white/5 border-white/10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20 hover:bg-blue-500/20 transition-colors">
                    <Database className="h-8 w-8 mb-3 text-blue-500" />
                    <div className="font-semibold text-foreground">Data Solutions</div>
                  </div>
                  <div className="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20 hover:bg-purple-500/20 transition-colors">
                    <Cloud className="h-8 w-8 mb-3 text-purple-500" />
                    <div className="font-semibold text-foreground">Cloud Services</div>
                  </div>
                  <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20 hover:bg-green-500/20 transition-colors">
                    <Laptop className="h-8 w-8 mb-3 text-green-500" />
                    <div className="font-semibold text-foreground">Development</div>
                  </div>
                  <div className="bg-orange-500/10 p-4 rounded-xl border border-orange-500/20 hover:bg-orange-500/20 transition-colors">
                    <Users className="h-8 w-8 mb-3 text-orange-500" />
                    <div className="font-semibold text-foreground">Consulting</div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Services Sections */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">

        {/* Data Asset Modernization */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <Database className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold">Data Asset Modernization</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We help organizations modernize their data infrastructure and analytics capabilities.
                Our expert consultants implement secure, scalable, and effectively managed data assets, ensuring democratization of data to create
                a trusted resource available to the right people at the right time.
              </p>
              <Button variant="outline" className="group" asChild>
                <Link href='/data-asset-modernization'>
                  Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <GlassCard className="p-8 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 border-blue-500/10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-background/50 border border-white/5">
                    <Activity className="w-8 h-8 text-blue-500 mb-2" />
                    <div className="font-bold">Analytics</div>
                  </div>
                  <div className="p-4 rounded-lg bg-background/50 border border-white/5">
                    <Database className="w-8 h-8 text-indigo-500 mb-2" />
                    <div className="font-bold">Warehousing</div>
                  </div>
                </div>
                <div className="mt-4 p-4 rounded-lg bg-background/50 border border-white/5">
                  <div className="h-2 w-full bg-blue-500/20 rounded-full mb-2 overflow-hidden">
                    <div className="h-full w-3/4 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-muted-foreground">Data Processing Efficiency</div>
                </div>
              </GlassCard>
            </div>
          </div>
        </motion.section>

        {/* Cloud Migration */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 space-y-6">
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <Cloud className="w-6 h-6 text-purple-500" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold">Cloud Migration</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Migration to the cloud has become a key enabler for companies looking to achieve digital
                transformations. We collaborate with you, understand your requirements, and create the
                perfect cloud strategy by leveraging our rich experience with latest technologies.
              </p>
              <Button variant="outline" className="group" asChild>
                <Link href='/cloud-migration'>
                  Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="lg:order-1 relative">
              <GlassCard className="p-8 bg-gradient-to-br from-purple-500/5 to-pink-500/5 border-purple-500/10 flex justify-center items-center py-20">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500 blur-2xl opacity-20 animate-pulse"></div>
                  <Cloud className="w-32 h-32 text-purple-500 relative z-10" />
                </div>
              </GlassCard>
            </div>
          </div>
        </motion.section>

        {/* Application Modernization */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                <Laptop className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold">Application Modernization</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Migrate your applications to a cloud and standards-based infrastructure with minimal
                disruption. Our team will assist you in reducing capital spends
                for cloud strategy and managing governance through enhanced modernization technology.
              </p>
              <Button variant="outline" className="group" asChild>
                <Link href='/application-modernization'>
                  Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <GlassCard className="p-8 bg-gradient-to-br from-green-500/5 to-emerald-500/5 border-green-500/10">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-white/5">
                    <Server className="w-6 h-6 text-green-500" />
                    <div className="flex-1 h-2 bg-green-500/20 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-green-500 rounded-full animate-[loading_2s_ease-in-out_infinite]"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-white/5">
                    <Code className="w-6 h-6 text-emerald-500" />
                    <div className="flex-1 space-y-2">
                      <div className="h-2 w-full bg-emerald-500/20 rounded-full"></div>
                      <div className="h-2 w-1/2 bg-emerald-500/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </motion.section>

        {/* Professional Services */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 space-y-6">
              <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold">Professional Services</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Standing out in the talent market can be challenging. Whether you are
                developing new products or need consulting on how to optimize your current processes,
                we are more than capable of providing comprehensive services to meet your needs.
              </p>
              <Button variant="outline" className="group" asChild>
                <Link href='/professional-services'>
                  Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="lg:order-1 relative">
              <GlassCard className="p-8 bg-gradient-to-br from-orange-500/5 to-amber-500/5 border-orange-500/10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Experts</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-amber-500 mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction</div>
                  </div>
                  <div className="text-center p-4 col-span-2">
                    <div className="text-4xl font-bold text-foreground mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Support & Maintenance</div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
