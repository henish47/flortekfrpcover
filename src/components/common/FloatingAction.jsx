import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, X, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingAction = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex flex-col gap-3"
                    >
                        {/* Email Button */}
                        <a
                            href="mailto:flortekindustries@gmail.com"
                            className="bg-gradient-to-tr from-[#EA4335] via-[#FBBC05]- to-[#4285F4] text-white p-3.5 rounded-full shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:-translate-y-1 transition-all flex items-center justify-center group relative overflow-hidden"
                            aria-label="Send Email"
                        >
                            <span className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
                            <Mail size={24} className="relative z-10" />
                            <div className="absolute inset-0 bg-red-500 animate-ping opacity-20 group-hover:opacity-0 transition-opacity" />
                            <span className="absolute right-full mr-3 bg-white text-slate-700 text-xs font-bold py-1 px-2 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden lg:block">
                                Mail via Gmail
                            </span>
                        </a>

                        {/* WhatsApp Button */}
                        <a
                            href="https://wa.me/918000888620"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25D366] text-white p-3.5 rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-1 transition-all flex items-center justify-center group relative overflow-hidden"
                            aria-label="Chat on WhatsApp"
                        >
                            <span className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
                            <MessageCircle size={24} fill="currentColor" className="relative z-10" />
                            {/* Tooltip for desktop */}
                            <span className="absolute right-full mr-3 bg-white text-slate-700 text-xs font-bold py-1 px-2 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden lg:block">
                                Chat with us
                            </span>
                        </a>

                        {/* Phone Button */}
                        <a
                            href="tel:+918000888620"
                            className="bg-accent text-white p-3.5 rounded-full shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-1 transition-all flex items-center justify-center group relative"
                            aria-label="Call Now"
                        >
                            <Phone size={24} className="relative z-10 animate-pulse" />
                            <span className="absolute right-full mr-3 bg-white text-slate-700 text-xs font-bold py-1 px-2 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden lg:block">
                                Call Now
                            </span>
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FloatingAction;
