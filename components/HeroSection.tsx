
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import Link from "next/link";
import { ArrowRight, Code, Cpu, Globe } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>

      {/* Floating Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>

      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            AI-Powered Development
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Building <span className="text-gradient hover:scale-105 inline-block transition-transform cursor-default">Intelligent</span> Digital Products for the Future
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
            We design and develop scalable AI-powered web and software solutions for modern businesses. Transform your ideas into reality with our cutting-edge expertise.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="glow" size="lg" className="text-lg h-14" asChild>
              <Link href="/contact">
                Get a Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" className="text-lg h-14" asChild>
              <Link href="#work">
                View Our Work
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-full text-primary"><Code size={16} /></div>
              <span>Scalable Code</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-full text-primary"><Cpu size={16} /></div>
              <span>AI Integration</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-full text-primary"><Globe size={16} /></div>
              <span>Global Reach</span>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Floating Mockups */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <GlassCard gradient className="w-full max-w-md ml-auto border-white/20">
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-xs text-muted-foreground font-mono">dashboard.tsx</div>
              </div>
              <div className="space-y-4">
                <div className="h-8 bg-white/5 rounded w-1/3 animate-pulse"></div>
                <div className="flex gap-4">
                  <div className="h-32 w-full bg-primary/10 rounded-lg border border-primary/20 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-primary">98%</span>
                    <span className="text-xs text-muted-foreground">Optimization</span>
                  </div>
                  <div className="h-32 w-full bg-white/5 rounded-lg border border-white/10"></div>
                </div>
                <div className="h-4 bg-white/5 rounded w-3/4"></div>
                <div className="h-4 bg-white/5 rounded w-1/2"></div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-20 -left-10 z-0"
          >
            <GlassCard className="w-64 backdrop-blur-md bg-black/40 border-white/10 p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-blue-500 flex items-center justify-center text-white text-xs font-bold">AI</div>
                <div>
                  <div className="text-sm font-medium">AI Analysis</div>
                  <div className="text-xs text-muted-foreground">Running...</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[70%]"></div>
                </div>
                <div className="flex justify-between text-[10px] text-muted-foreground">
                  <span>Processing Data</span>
                  <span>70%</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
}