
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

      <div className="container relative z-10 mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">

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
          className="relative hidden lg:flex justify-end items-center h-full w-full"
        >
          <div className="relative w-full max-w-lg h-[500px]">
            {/* Main Dashboard Card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-0 w-3/4 z-10"
            >
              <GlassCard gradient className="w-full border-white/20 p-6 shadow-2xl bg-card/40 backdrop-blur-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  </div>
                  <div className="text-[10px] md:text-xs text-muted-foreground font-mono bg-background/50 px-2 py-1 rounded">dashboard.tsx</div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-primary/20 rounded w-1/3"></div>
                  <div className="flex gap-4">
                    <div className="h-28 w-1/2 bg-primary/10 rounded-lg border border-primary/20 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-primary">98%</span>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">Optimization</span>
                    </div>
                    <div className="h-28 w-1/2 flex flex-col gap-2">
                      <div className="h-1/2 w-full bg-muted/40 rounded-lg border border-border/50"></div>
                      <div className="h-1/2 w-full bg-muted/20 rounded-lg border border-border/50"></div>
                    </div>
                  </div>
                  <div className="h-2 bg-muted/50 rounded w-3/4"></div>
                  <div className="h-2 bg-muted/50 rounded w-1/2"></div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Overlapping AI Component Card */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-0 w-2/3 z-20"
            >
              <GlassCard className="w-full backdrop-blur-md bg-black/60 dark:bg-black/80 border-white/10 p-5 shadow-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-blue-500 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-primary/30">IS </div>
                  <div>
                    <div className="text-sm font-medium text-black">Analyzing</div>
                    <div className="text-xs text-blue-300">Running operations...</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-blue-500 w-[70%]"></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-white/50">
                    <span>Processing Data Matrix</span>
                    <span>70%</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 blur-[80px] -z-10 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}