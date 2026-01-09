"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        company: "Tech Corp Inc.",
        role: "Senior Frontend Engineer",
        date: "2023 - Present",
        desc: [
            "Led migration to Next.js 14, improving LCP by 40%.",
            "Architected design system used by 5+ internal products.",
            "Mentored junior developers and conducted code reviews."
        ],
        tech: ["Next.js", "TypeScript", "GraphQL"]
    },
    {
        company: "Creative Agency",
        role: "Full Stack Developer",
        date: "2021 - 2023",
        desc: [
            "Built award-winning marketing sites for Fortune 500 clients.",
            "Implemented complex WebGL animations using Three.js.",
            "Optimized backend logic for high-traffic campaigns."
        ],
        tech: ["React", "Node.js", "WebGL"]
    },
    {
        company: "Startup X",
        role: "Frontend Developer",
        date: "2019 - 2021",
        desc: [
            "Employee #3. Built MVP from scratch in 3 months.",
            "Collaborated directly with founders on product roadmap.",
            "Implemented real-time features using WebSockets."
        ],
        tech: ["Vue.js", "Firebase", "D3.js"]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-32 px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-16 text-center"
                >
                    Professional Journey
                </motion.h2>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: idx * 0.2 }}
                                className={`flex flex-col md:flex-row gap-8 items-start relative ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-0 md:left-1/2 w-14 h-14 flex items-center justify-center -translate-x-1/2 md:translate-x-[-50%] z-10">
                                    <div className="w-14 h-14 rounded-full bg-black border border-white/20 flex items-center justify-center text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                                        <Briefcase size={20} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="w-full md:w-[calc(50%-40px)] ml-16 md:ml-0">
                                    <GlassCard hoverEffect className="p-8">
                                        <span className="text-sm font-mono text-blue-400 mb-2 block">{exp.date}</span>
                                        <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                        <p className="text-white/60 text-sm mb-4">{exp.company}</p>

                                        <ul className="space-y-2 mb-6">
                                            {exp.desc.map((item, i) => (
                                                <li key={i} className="text-sm text-white/70 leading-relaxed flex items-start">
                                                    <span className="mr-2 text-blue-500">•</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.tech.map((t) => (
                                                <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/50">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </GlassCard>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
