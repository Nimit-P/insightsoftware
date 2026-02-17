"use client";

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { GlassCard } from '@/components/ui/glass-card'
import Footer from '@/components/Footer'
import { Mail, MapPin, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ContactSection() {
    return (
        <div className="min-h-screen pt-16 bg-background overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

            <section className="py-20 lg:py-32 container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Contact <br /><span className="text-gradient">Insightsoftware</span></h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Ready to transform your business with AI and modern software? We're here to help you find the right plan and solution for your needs.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <GlassCard className="p-6 md:p-8 space-y-6">
                                <h2 className="text-xl font-bold">Get in touch directly</h2>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <Mail className="w-5 h-5 text-primary mt-1" />
                                        <div>
                                            <div className="font-medium">Email Us</div>
                                            <Link href="mailto:hello@insightsoftware.digital" className="text-sm text-muted-foreground hover:text-primary">hello@insightsoftware.digital</Link>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Phone className="w-5 h-5 text-primary mt-1" />
                                        <div>
                                            <div className="font-medium">Call Us</div>
                                            <Link href="tel:+15551234567" className="text-sm text-muted-foreground hover:text-primary">+1 (555) 123-4567</Link>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <MapPin className="w-5 h-5 text-primary mt-1" />
                                        <div>
                                            <div className="font-medium">Visit Us</div>
                                            <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        </div>
                    </motion.div>

                    {/* Right Content - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <GlassCard className="p-8 shadow-2xl border-primary/10">
                            <div>
                                <h2 className="text-2xl font-bold mb-2">Send us a message</h2>
                                <p className="text-sm text-muted-foreground mb-8">Reach out to our sales team about your project.</p>
                            </div>

                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input id="name" placeholder="John Doe" required className="bg-background/50 border-input/50 focus:border-primary" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Work Email</Label>
                                    <Input id="email" type="email" placeholder="john@company.com" required className="bg-background/50 border-input/50 focus:border-primary" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="country">Country</Label>
                                        <Select>
                                            <SelectTrigger className="bg-background/50 border-input/50">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="us">United States</SelectItem>
                                                <SelectItem value="uk">United Kingdom</SelectItem>
                                                <SelectItem value="ca">Canada</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="job">Job Function</Label>
                                        <Select>
                                            <SelectTrigger className="bg-background/50 border-input/50">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="engineering">Engineering</SelectItem>
                                                <SelectItem value="product">Product</SelectItem>
                                                <SelectItem value="executive">Executive</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="website">Company Website</Label>
                                    <Input id="website" type="url" placeholder="https://example.com" className="bg-background/50 border-input/50 focus:border-primary" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="msg">Message</Label>
                                    <Textarea id="msg" rows={4} placeholder="Tell us about your project..." className="bg-background/50 border-input/50 focus:border-primary resize-none" />
                                </div>

                                <Button type="submit" size="lg" className="w-full" variant="glow">Submit Request</Button>
                            </form>
                        </GlassCard>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
