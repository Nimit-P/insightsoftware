"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { ArrowRight, Code, Globe, Bot, Layout, ShoppingCart, Headset } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored software solutions built to address your unique business challenges and scale with your growth.",
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
    href: "/services/custom-software"
  },
  {
    title: "Web Development",
    description: "High-performance, responsive websites and web applications designed to engage users and drive conversions.",
    icon: Globe,
    gradient: "from-purple-500 to-pink-500",
    href: "/services/web-development"
  },
  {
    title: "AI Solutions",
    description: "Leverage the power of artificial intelligence and machine learning to automate processes and gain predictive insights.",
    icon: Bot,
    gradient: "from-amber-500 to-orange-500",
    href: "/services/ai-solutions"
  },
  {
    title: "UI/UX Design",
    description: "User-centric design that creates intuitive, engaging, and beautiful digital experiences for your customers.",
    icon: Layout,
    gradient: "from-green-500 to-emerald-500",
    href: "/services/ui-ux"
  },
  {
    title: "E-commerce Development",
    description: "Scalable online stores with seamless payment integration, inventory management, and superior user experience.",
    icon: ShoppingCart,
    gradient: "from-indigo-500 to-violet-500",
    href: "/services/ecommerce"
  },
  {
    title: "Maintenance & Support",
    description: "Dedicated support teams ensuring your software remains secure, up-to-date, and performing at optimal levels.",
    icon: Headset,
    gradient: "from-rose-500 to-red-500",
    href: "/services/support"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
          >
            Our Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Comprehensive <span className="text-gradient">Tech Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            We combine technical expertise with creative innovation to deliver products that transform businesses.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full group hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.gradient} opacity-10 blur-2xl rounded-bl-full transition-opacity group-hover:opacity-20`}></div>

                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-background/90 backdrop-blur-sm rounded-[14px] flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-foreground" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {service.description}
                </p>

                <Link href={service.href} className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;