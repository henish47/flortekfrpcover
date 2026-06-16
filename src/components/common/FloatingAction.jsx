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
                            className="bg-black text-white p-3.5 rounded-full border border-[#333333] shadow-md hover:-translate-y-1 transition-all flex items-center justify-center group relative"
                            aria-label="Send Email"
                        >
                            <Mail size={20} className="relative z-10" />
                            <span className="absolute right-full mr-3 bg-white text-black text-xs font-bold py-1 px-2 rounded border border-[#D9D9D9] shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden lg:block">
                                Mail via Gmail
                            </span>
                        </a>

                        {/* WhatsApp Button */}
                        <a
                            href="https://wa.me/918000888620"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#333333] text-white p-3.5 rounded-full border border-[#333333] shadow-md hover:-translate-y-1 transition-all flex items-center justify-center group relative"
                            aria-label="Chat on WhatsApp"
                        >
                            <MessageCircle size={20} fill="currentColor" className="relative z-10" />
                            <span className="absolute right-full mr-3 bg-white text-black text-xs font-bold py-1 px-2 rounded border border-[#D9D9D9] shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden lg:block">
                                Chat with us
                            </span>
                        </a>

                        {/* Phone Button */}
                        <a
                            href="tel:+918000888620"
                            className="bg-[#F5F5F5] text-black p-3.5 rounded-full border border-[#D9D9D9] shadow-md hover:-translate-y-1 transition-all flex items-center justify-center group relative"
                            aria-label="Call Now"
                        >
                            <Phone size={20} className="relative z-10" />
                            <span className="absolute right-full mr-3 bg-white text-black text-xs font-bold py-1 px-2 rounded border border-[#D9D9D9] shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden lg:block">
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
