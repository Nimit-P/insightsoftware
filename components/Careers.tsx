"use client";

import React from 'react';
import { Cloud, ArrowRight, Zap, Trophy, Users, Heart } from 'lucide-react';
import PageCarrerSection from './PageCarrerSection';
import Footer from '@/components/Footer';
import FilterJobs from './FilterJobs';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Careers = () => {
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
                Associate. Empower. <br /> <span className="text-gradient">Nurture. Grow.</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our strong workforce is our biggest strength! Join us and help in building a tech-empowered community for the world.
              </p>
              <div className="flex gap-4">
                <Button size="lg" variant="glow" asChild>
                  <Link href="#openings">View Openings</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <GlassCard className="p-8 relative bg-white/5 border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20">
                    <Zap className="h-8 w-8 mb-2 text-purple-500" />
                    <div className="font-bold">Innovation</div>
                  </div>
                  <div className="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
                    <Users className="h-8 w-8 mb-2 text-blue-500" />
                    <div className="font-bold">Community</div>
                  </div>
                  <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
                    <Trophy className="h-8 w-8 mb-2 text-green-500" />
                    <div className="font-bold">Growth</div>
                  </div>
                  <div className="bg-pink-500/10 p-4 rounded-xl border border-pink-500/20">
                    <Heart className="h-8 w-8 mb-2 text-pink-500" />
                    <div className="font-bold">Benefits</div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 relative" id="openings">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8 md:p-12">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Current Openings</h2>
                <p className="text-muted-foreground">Find your next role at Insightsoftware</p>
              </div>
              <FilterJobs />
            </GlassCard>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
