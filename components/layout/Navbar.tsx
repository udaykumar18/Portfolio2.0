"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const [lastScrollY, setLastScrollY] = useState(0);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = lastScrollY;
        setLastScrollY(latest);

        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-colors duration-300",
                    isScrolled || isMobileMenuOpen ? "backdrop-blur-md bg-black/50 border-b border-white/10" : "bg-transparent"
                )}
            >
                <a href="#" onClick={(e) => scrollToSection(e, "#top")} className="text-xl font-bold tracking-tighter text-white z-50 relative">
                    PORTFOLIO<span className="text-blue-500">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="text-sm font-medium text-white/70 hover:text-white transition-colors capitalize"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a
                        href="#contact"
                        onClick={(e) => scrollToSection(e, "#contact")}
                        className="px-5 py-2 text-sm font-semibold bg-white text-black rounded-full hover:bg-blue-50 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    >
                        Let's Talk
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-white z-50 relative p-2"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </motion.nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        <ul className="flex flex-col items-center gap-6">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        className="text-3xl font-light text-white transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <a
                            href="#contact"
                            onClick={(e) => scrollToSection(e, "#contact")}
                            className="px-8 py-3 text-lg font-semibold bg-white text-black rounded-full hover:bg-blue-50 transition-colors mt-8"
                        >
                            Let's Talk
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
