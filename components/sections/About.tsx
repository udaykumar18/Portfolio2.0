"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import Image from "next/image";

const stats = [
    { label: "Years Exp.", value: "5+" },
    { label: "Projects", value: "50+" },
    { label: "Clients", value: "30+" },
    { label: "Coffee", value: "∞" },
];

const techStack = [
    "React", "Next.js", "TypeScript", "Node.js", "Python", "AWS", "Docker", "Tailwind", "Framer Motion", "PostgreSQL",
    "React", "Next.js", "TypeScript", "Node.js", "Python", "AWS", "Docker", "Tailwind", "Framer Motion", "PostgreSQL"
];

export default function About() {
    return (
        <section id="about" className="relative py-32 px-6 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center lg:justify-start"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            {/* Animated Ring */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-orange-500 blur-2xl opacity-40 animate-pulse" />
                            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-orange-500 p-1">
                                <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                                    {/* Placeholder for Profile Image - Replace with real path */}
                                    <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-white/20">
                                        Profile Photo
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-blue-400 font-mono text-sm tracking-wider uppercase mb-4 block">About Me</span>
                        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-8">
                            Building the future directly on the metal of the web.
                        </h2>
                        <p className="text-white/60 text-lg leading-relaxed mb-6">
                            I'm a full-stack developer obsessed with performance and design details. I bridge the gap between engineering and aesthetics, creating software that feels as good as it looks.
                        </p>
                        <p className="text-white/60 text-lg leading-relaxed mb-10">
                            Specializing in scalable React applications, robust Node.js backends, and immersive interactive experiences using WebGL and Framer Motion.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {stats.map((stat, idx) => (
                                <GlassCard key={idx} className="p-4 flex flex-col items-center justify-center text-center">
                                    <span className="text-3xl font-bold text-white mb-1">{stat.value}</span>
                                    <span className="text-sm text-white/50">{stat.label}</span>
                                </GlassCard>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Tech Stack Marquee */}
                <div className="mt-32">
                    <h3 className="text-center text-white/40 mb-8 text-sm uppercase tracking-widest">Technologies</h3>
                    <div className="relative flex overflow-x-hidden group">
                        <div className="animate-marquee whitespace-nowrap flex gap-16 py-4">
                            {techStack.map((tech, i) => (
                                <span key={i} className="text-2xl md:text-4xl font-bold text-white/20 hover:text-white/80 transition-colors mx-4">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16 py-4">
                            {techStack.map((tech, i) => (
                                <span key={i} className="text-2xl md:text-4xl font-bold text-white/20 hover:text-white/80 transition-colors mx-4">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
