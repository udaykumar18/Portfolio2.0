"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { ExternalLink, Github } from "lucide-react";

interface Project {
    id: number;
    title: string;
    desc: string;
    category: "web" | "ai" | "open-source";
    tech: string[];
    featured?: boolean;
}

const projects: Project[] = [
    {
        id: 1,
        title: "AI Image Generator",
        desc: "A powerful SaaS platform using Stable Diffusion to generate custom artwork. Features include text-to-image, inpainting, and community gallery.",
        category: "ai",
        tech: ["Next.js", "Python", "PyTorch", "Stripe"],
        featured: true,
    },
    {
        id: 2,
        title: "E-Commerce Dashboard",
        desc: "Real-time analytics dashboard for online retailers. Visualize sales data, track inventory, and manage orders.",
        category: "web",
        tech: ["React", "D3.js", "Supabase"],
    },
    {
        id: 3,
        title: "Open UI Library",
        desc: "An open-source component library focused on accessibility and performance. Used by 1000+ developers.",
        category: "open-source",
        tech: ["TypeScript", "React", "Storybook"],
    },
    {
        id: 4,
        title: "Healthcare App",
        desc: "Patient management system compliant with HIPAA regulations. Secure messaging and video consultations.",
        category: "web",
        tech: ["Next.js", "WebRTC", "PostgreSQL"],
    },
    {
        id: 5,
        title: "Smart Home Controller",
        desc: "IoT interface for controlling smart home devices. Supports voice commands and automation routines.",
        category: "web",
        tech: ["React Native", "MQTT", "Node.js"],
    },
    {
        id: 6,
        title: "Sentiment Analyzer",
        desc: "NLP tool that analyzes social media sentiment for brands. Provides real-time alerts and improved reporting.",
        category: "ai",
        tech: ["Python", "FastAPI", "Transformers"],
    },
];

const filters = [
    { id: "all", label: "All Work" },
    { id: "web", label: "Web Apps" },
    { id: "ai", label: "AI Tools" },
    { id: "open-source", label: "Open Source" },
];

export default function Projects() {
    const [filter, setFilter] = useState("all");

    const filteredProjects = projects.filter(p => filter === "all" || p.category === filter);

    return (
        <section id="work" className="py-32 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div>
                        <span className="text-blue-400 font-mono text-sm tracking-wider uppercase mb-2 block">Selected Work</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">Projects That Push Boundaries</h2>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex gap-2 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                        {filters.map(f => (
                            <button
                                key={f.id}
                                onClick={() => setFilter(f.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === f.id ? 'bg-white text-black' : 'text-white/60 hover:text-white'}`}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className={project.featured ? "md:col-span-2 lg:col-span-2 row-span-2" : ""}
                            >
                                <GlassCard hoverEffect className="h-full flex flex-col justify-between group p-8">
                                    <div className="mb-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex gap-2">
                                                {project.tech.map(t => (
                                                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 text-white/70">{t}</span>
                                                ))}
                                            </div>
                                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="p-2 rounded-full bg-white/10 hover:bg-white hover:text-black transition-colors"><Github size={18} /></button>
                                                <button className="p-2 rounded-full bg-white/10 hover:bg-white hover:text-black transition-colors"><ExternalLink size={18} /></button>
                                            </div>
                                        </div>
                                        <h3 className={`font-bold text-white mb-2 ${project.featured ? 'text-3xl' : 'text-xl'}`}>{project.title}</h3>
                                        <p className="text-white/60 leading-relaxed">{project.desc}</p>
                                    </div>

                                    {project.featured && (
                                        <div className="mt-4 w-full h-64 rounded-xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 flex items-center justify-center font-mono text-white/30 text-sm">
                                            [Interactive Preview / Video Placeholder]
                                        </div>
                                    )}

                                    {!project.featured && (
                                        <div className="mt-4 text-sm font-semibold text-blue-400 group-hover:translate-x-2 transition-transform flex items-center gap-1">
                                            View Case Study &rarr;
                                        </div>
                                    )}
                                </GlassCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
