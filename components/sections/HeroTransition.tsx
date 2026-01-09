"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroTransition() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 bg-black z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6">
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Uday</span>
                </h2>
                <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-12 font-light">
                    Full-Stack Developer & AI Enthusiast building the next generation of web experiences.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute bottom-12"
            >
                <ArrowDown className="text-white/50 w-8 h-8" />
            </motion.div>
        </section>
    );
}
