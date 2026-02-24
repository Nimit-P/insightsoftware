
"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Star } from "lucide-react";

const testimonials = [
    {
        // name: "Alex Rivera",
        // role: "CTO, FinEdge",
        content: "Insightsoftware delivered a banking platform that exceeds our wildest expectations. The AI integration works flawlessly.",
        stars: 5,
    },
    {
        // name: "Sarah Chen",
        // role: "Product Lead, HealthNov",
        content: "Their team understands the nuances of modern web performance. Our patient portal loads instantly and looks stunning.",
        stars: 5,
    },
    {
        // name: "James Wilson",
        // role: "Founder, EcoLogistics",
        content: "Scalable, secure, and beautiful software. They didn't just build what we asked for, they built what we needed.",
        stars: 5,
    },
];

const TestimonialsSection = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Trusted by Industry Leaders</h2>
                    <p className="text-muted-foreground text-lg">Don't just take our word for it.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <GlassCard className="h-full flex flex-col justify-between hover:border-primary/30 transition-colors">
                                <div className="mb-4 flex text-amber-500">
                                    {[...Array(t.stars)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                                <blockquote className="text-lg leading-relaxed mb-6">
                                    "{t.content}"
                                </blockquote>
                                <div className="flex items-center gap-3">
                                    {/* <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-500"></div> */}
                                    {/* <div>
                                        <div className="font-bold text-sm">{t.name}</div>
                                        <div className="text-xs text-muted-foreground">{t.role}</div>
                                    </div> */}
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
