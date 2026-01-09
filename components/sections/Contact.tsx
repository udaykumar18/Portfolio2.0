"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Mail, ArrowRight, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-32 px-6 md:px-12">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16">
                {/* Text Side */}
                <div className="flex-1">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8">
                        Let's Build Something <span className="text-blue-500">Amazing</span>
                    </h2>
                    <p className="text-xl text-white/60 mb-12 max-w-md">
                        Have a project in mind? I'm currently available for freelance work and new opportunities.
                    </p>

                    <div className="space-y-6">
                        <a href="mailto:hello@example.com" className="flex items-center gap-4 text-white hover:text-blue-400 update-colors group">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-blue-400 transition-colors">
                                <Mail size={20} />
                            </div>
                            <span className="text-lg">hello@example.com</span>
                        </a>
                    </div>
                </div>

                {/* Form Side */}
                <div className="flex-1">
                    <GlassCard className="p-8 md:p-10">
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-white/50 uppercase tracking-wider">Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-white/50 uppercase tracking-wider">Email</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-white/50 uppercase tracking-wider">Subject</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors">
                                    <option className="bg-neutral-900">Project Inquiry</option>
                                    <option className="bg-neutral-900">Job Opportunity</option>
                                    <option className="bg-neutral-900">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-white/50 uppercase tracking-wider">Message</label>
                                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Tell me about your project..."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </GlassCard>
                </div>
            </div>
        </section>
    )
}
