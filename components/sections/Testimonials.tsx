"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Quote } from "lucide-react";

const testimonials = [
    {
        text: "Exceptional attention to detail. The animation work significantly increased our conversion rate.",
        author: "Sarah Johnson",
        role: "CTO",
        company: "FutureScale"
    },
    {
        text: "A true master of their craft. Delivered a complex dashboard ahead of schedule.",
        author: "Mike Chen",
        role: "Product Manager",
        company: "DataFlow"
    },
    {
        text: "The best developer experience I've had. Clean code, great communication.",
        author: "Emily Davis",
        role: "Founder",
        company: "StartUp Inc"
    },
    {
        text: "Visually stunning work that perfectly captured our brand identity.",
        author: "Alex Rivera",
        role: "Design Director",
        company: "Studio 54"
    }
];

export default function Testimonials() {
    return (
        <section className="py-32 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto mb-12">
                <h2 className="text-3xl font-bold text-white mb-2">What Clients Say</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </div>

            {/* Carousel / Grid */}
            <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] max-w-full">
                {[...testimonials, ...testimonials].map((t, i) => (
                    <div key={i} className="min-w-[350px] md:min-w-[450px]">
                        <GlassCard className="h-full p-8 relative group">
                            <Quote className="text-blue-500/20 w-12 h-12 mb-6" />
                            <p className="text-lg text-white/80 italic mb-8">"{t.text}"</p>
                            <div>
                                <div className="font-bold text-white">{t.author}</div>
                                <div className="text-sm text-white/50">{t.role}, {t.company}</div>
                            </div>
                        </GlassCard>
                    </div>
                ))}
            </div>
        </section>
    )
}
