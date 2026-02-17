
"use client";

import { motion } from "framer-motion";

const brands = [
    "Acme Corp",
    "GlobalBank",
    "TechFlow",
    "NextGen",
    "Starlight",
    "BlueWave"
];

const TrustedBy = () => {
    return (
        <section className="py-10 border-b border-white/5 bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 md:px-6">
                <p className="text-center text-sm text-muted-foreground mb-6 font-medium tracking-widest uppercase">Trusted by innovative teams at</p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {brands.map((brand, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-xl md:text-2xl font-bold font-sans text-foreground/50 hover:text-foreground transition-colors cursor-default"
                        >
                            {brand}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
