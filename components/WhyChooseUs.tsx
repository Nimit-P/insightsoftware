
"use client";

import { CheckCircle2, Zap, LayoutGrid, BrainCircuit, Users } from "lucide-react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";

const features = [
    {
        title: "AI-First Approach",
        description: "We integrate artificial intelligence into every layer of development for smarter, adaptive solutions.",
        icon: BrainCircuit,
    },
    {
        title: "Scalable Architecture",
        description: "Systems designed to handle massive growth without compromising performance or stability.",
        icon: Zap,
    },
    {
        title: "Clean Modern UI",
        description: "Interfaces that balance aesthetic beauty with functional simplicity and user delight.",
        icon: LayoutGrid,
    },
    {
        title: "Dedicated Support",
        description: "A committed team of experts ready to assist you at every stage of your product lifecycle.",
        icon: Users,
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-background">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-background to-background opacity-50 animate-pulse"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                            Why Partner With Us?
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            Engineering Excellence Meets <span className="text-gradient">Visionary Design</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We go beyond traditional development. Our multidisciplinary team combines deep technical expertise with creative problem-solving to build products that stand out in crowded markets.
                        </p>

                        <GlassCard className="mt-8 border-l-4 border-l-primary p-6 bg-primary/5">
                            <blockquote className="text-xl font-medium italic text-foreground/80">
                                "Insightsoftware transformed our outdated system into a modern, AI-powered platform that doubled our efficiency in just 3 months."
                            </blockquote>
                            <div className="mt-4 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                                <div>
                                    <div className="font-bold text-sm">Sarah Jenkins</div>
                                    <div className="text-xs text-muted-foreground">CTO, TechFlow Inc.</div>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Right Content - Feature List */}
                    <div className="grid gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <GlassCard className="flex items-start gap-4 p-5 hover:bg-primary/5 transition-colors border-l-4 border-l-transparent hover:border-l-primary">
                                    <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                        <feature.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{feature.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
