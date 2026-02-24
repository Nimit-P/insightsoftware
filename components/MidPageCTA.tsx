
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const MidPageCTA = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 -skew-y-1"></div>
            <div className="container mx-auto px-4 md:px-6 relative text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Ready to <span className="text-gradient">Accelerate?</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                    Join the forward-thinking companies that are leveraging AI and modern engineering to dominate their markets.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button variant="glow" size="lg" className="h-12 px-8 text-base" asChild>
                        <Link href="/contact">
                            Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" className="h-12 px-8 text-base bg-background/50 backdrop-blur-sm" asChild>
                        <Link href="/services">
                            Explore Services
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default MidPageCTA;
