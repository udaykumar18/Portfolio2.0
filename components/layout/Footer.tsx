import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-black border-t border-white/10 pt-16 pb-8 px-6 md:px-12 mt-32">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold tracking-tighter text-white mb-4">
                        PORTFOLIO<span className="text-blue-500">.</span>
                    </h2>
                    <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                        Building the future with code and creativity.
                        Crafting premium digital experiences that scale.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-6">Quick Links</h3>
                    <ul className="space-y-4 text-sm text-white/60">
                        <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
                        <li><a href="#work" className="hover:text-blue-400 transition-colors">Work</a></li>
                        <li><a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a></li>
                        <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="text-white font-semibold mb-6">Connect</h3>
                    <div className="flex gap-4">
                        <SocialLink href="#" icon={<Github size={20} />} />
                        <SocialLink href="#" icon={<Twitter size={20} />} />
                        <SocialLink href="#" icon={<Linkedin size={20} />} />
                        <SocialLink href="mailto:hello@example.com" icon={<Mail size={20} />} />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/30">
                <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
                <p className="mt-2 md:mt-0">Built with Next.js 14, Framer Motion & Tailwind</p>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
        >
            {icon}
        </a>
    );
}
