"use client";

import React from 'react';
import { Cloud, Server, Database, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { motion } from 'framer-motion';

const CloudMigration = () => {
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
                Seamless <br /> <span className="text-gradient">Cloud Migration</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We understand your requirements and create the perfect cloud strategy by blending our rich experience with the latest technology!
              </p>
              <Button size="lg" variant="glow" asChild>
                <Link href='/contact'>Start Your Journey</Link>
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
                  <Cloud className="w-40 h-40 text-blue-500 relative z-10" />

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-8 bg-background p-2 rounded-lg shadow-lg animate-bounce">
                    <Server className="w-6 h-6 text-purple-500" />
                  </div>
                  <div className="absolute -bottom-4 -left-8 bg-background p-2 rounded-lg shadow-lg animate-bounce delay-150">
                    <Database className="w-6 h-6 text-green-500" />
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
              <h2 className="text-3xl font-bold">Why Migrate to the Cloud?</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Cloud migration is a process through which a company's digital resources, services, and assets are
                    deployed in the cloud. With excellent features and an array of benefits for a business, the cloud
                    computing trend has seen exponential growth in the recent years.
                  </p>
                  <p>
                    Through our outstanding cloud migration services, we help you in determining the approach that work
                    best for your organization to meet the business goals.
                  </p>
                  <p>
                    Furthermore, COVID-19 has prompted many companies to evolve from just a 'business' to a cloud business
                    at an accelerated pace. With the emergence of the pandemic, companies shifted to a remote working
                    environment, which necessitated the use of cloud to a great extent.
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Why choose Insightsoftware?</h3>
                  <ul className="space-y-4">
                    {[
                      "Robust security compared to traditional data centers",
                      "Built-in security features and periodic updates",
                      "Security analytics and cross-enterprise visibility",
                      "Seamless scalability for growing businesses",
                      "Cost-efficient infrastructure management"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" asChild className="mt-4">
                    <Link href="/contact">Have a question?</Link>
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
            <h2 className="text-3xl font-bold mb-4">Cloud Migration Benefits</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the advantages of migrating your infrastructure to the cloud
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Enhanced Security", desc: "Robust security features and compliance standards", color: "text-purple-500", bg: "bg-purple-500/10" },
              { icon: Server, title: "Scalability", desc: "Scale resources up or down based on demand", color: "text-blue-500", bg: "bg-blue-500/10" },
              { icon: Database, title: "Cost Efficiency", desc: "Reduce infrastructure costs and maintenance", color: "text-green-500", bg: "bg-green-500/10" },
              { icon: Cloud, title: "Accessibility", desc: "Access data and applications from anywhere", color: "text-orange-500", bg: "bg-orange-500/10" }
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

export default CloudMigration;
