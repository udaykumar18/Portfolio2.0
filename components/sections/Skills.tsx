"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import {
    Code2, Database, Layout, Server, Cpu, Globe, Terminal, Cloud,
    Workflow, Layers, Monitor, Box, Smartphone
} from "lucide-react";

const categories = [
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "tools", label: "Tools & Cloud" },
    { id: "ai", label: "AI & Data" }
];

const skills = {
    frontend: [
        { name: "React", icon: Code2, level: 95 },
        { name: "Next.js", icon: Globe, level: 90 },
        { name: "TypeScript", icon: Code2, level: 90 },
        { name: "Tailwind", icon: Layout, level: 95 },
        { name: "Framer Motion", icon: Layers, level: 85 },
        { name: "Three.js", icon: Box, level: 75 },
        { name: "Svelte", icon: Code2, level: 70 },
        { name: "React Native", icon: Smartphone, level: 80 },
    ],
    backend: [
        { name: "Node.js", icon: Server, level: 90 },
        { name: "Python", icon: Code2, level: 85 },
        { name: "PostgreSQL", icon: Database, level: 80 },
        { name: "GraphQL", icon: Workflow, level: 75 },
        { name: "Redis", icon: Database, level: 70 },
        { name: "FastAPI", icon: Code2, level: 80 },
    ],
    tools: [
        { name: "AWS", icon: Cloud, level: 75 },
        { name: "Docker", icon: Box, level: 80 },
        { name: "Git", icon: Terminal, level: 95 },
        { name: "Linux", icon: Terminal, level: 80 },
        { name: "Figma", icon: Layout, level: 70 },
        { name: "Vercel", icon: Cloud, level: 90 },
    ],
    ai: [
        { name: "PyTorch", icon: Cpu, level: 70 },
        { name: "LangChain", icon: Workflow, level: 80 },
        { name: "OpenAI API", icon: Cpu, level: 90 },
        { name: "HuggingFace", icon: Monitor, level: 75 },
    ]
};

export default function Skills() {
    const [activeTab, setActiveTab] = useState("frontend");

    return (
        <section id="skills" className="py-32 px-6 md:px-12 bg-black/50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Expertise</h2>
                    <p className="text-white/50">Technologies I work with to build scalable solutions.</p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center flex-wrap gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === cat.id ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-6"
                        >
                            {skills[activeTab as keyof typeof skills].map((skill, idx) => (
                                <GlassCard key={idx} hoverEffect className="group flex flex-col items-center justify-center p-8 text-center aspect-square">
                                    <div className="relative w-16 h-16 mb-6 flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110 text-white">
                                        {/* Circular Progress - Decorative */}
                                        <svg className="absolute inset-0 w-full h-full -rotate-90">
                                            <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" fill="none" className="text-white/10" />
                                            <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" fill="none" className="text-blue-500" strokeDasharray="188" strokeDashoffset={188 - (188 * skill.level) / 100} strokeLinecap="round" />
                                        </svg>
                                        <skill.icon size={32} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{skill.name}</h3>
                                    <span className="text-xs text-white/40 mt-1">{skill.level}% Proficiency</span>
                                </GlassCard>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
