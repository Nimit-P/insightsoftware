
"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const caseStudies = [
    {
        title: "FinTech Evolution",
        category: "Cloud Migration & AI",
        description: "Migrating a legacy banking platform to a microservices architecture while integrating real-time fraud detection AI.",
        metrics: [
            { label: "Performance", value: "40%", icon: TrendingUp },
            { label: "Uptime", value: "99.99%", icon: Clock },
            { label: "Cost Reduced", value: "30%", icon: CheckCircle },
        ],
        gradient: "from-blue-600 to-indigo-600",
    },
    {
        title: "HealthConnect",
        category: "Custom Software",
        description: "Building a HIPAA-compliant telemedicine platform connecting 10k+ patients with specialists globally.",
        metrics: [
            { label: "Engagement", value: "2x", icon: TrendingUp },
            { label: "Processing", value: "-50%", icon: Clock },
            { label: "Patients", value: "10k+", icon: CheckCircle },
        ],
        gradient: "from-emerald-500 to-teal-600",
    },
    {
        title: "LogiSmart AI",
        category: "AI & Data Analytics",
        description: "Optimizing supply chain routes using predictive modeling to reduce fuel consumption and delivery times.",
        metrics: [
            { label: "Efficiency", value: "+25%", icon: TrendingUp },
            { label: "Faster Delivery", value: "35%", icon: Clock },
            { label: "Accuracy", value: "99%", icon: CheckCircle },
        ],
        gradient: "from-orange-500 to-amber-600",
    }
];

const CaseStudiesSection = () => {
    return (
        <section id="work" className="py-24 relative">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 w-full h-1/2 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.2))] -z-10 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-4 max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
                        >
                            Case Studies
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-bold"
                        >
                            Real Results for <span className="text-gradient">Real Business</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-muted-foreground text-lg"
                        >
                            See how we've helped leading companies transform their digital capability.
                        </motion.p>
                    </div>
                    <Button variant="outline" className="hidden md:flex" asChild>
                        <Link href="/services">
                            View All Projects <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                                {/* Image Placeholder area */}
                                <div className={`h-48 w-full bg-gradient-to-br ${study.gradient} relative overflow-hidden group-hover:scale-105 transition-transform duration-700`}>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                                    <div className="absolute bottom-4 left-4">
                                        <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                                            {study.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{study.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                                        {study.description}
                                    </p>

                                    <div className="grid grid-cols-3 gap-2 py-4 border-t border-border/50">
                                        {study.metrics.map((metric, idx) => (
                                            <div key={idx} className="text-center">
                                                <div className="text-lg font-bold text-foreground">{metric.value}</div>
                                                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{metric.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6">
                                        <Link href="#" className="flex items-center text-sm font-semibold text-primary/80 hover:text-primary transition-colors">
                                            Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Button variant="outline" className="w-full" asChild>
                        <Link href="/case-studies">
                            View All Projects <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CaseStudiesSection;
