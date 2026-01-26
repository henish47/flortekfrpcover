import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Download } from 'lucide-react';
import Button from '../common/Button';
import { motion, AnimatePresence } from 'framer-motion';
import InquiryModal from '../common/InquiryModal';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => setIsOpen(false), [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'Sizes', path: '/sizes' },
        { name: 'Install', path: '/installation' },
        { name: 'About', path: '/about' },
        { name: 'Applications', path: '/applications' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <div className="bg-secondary text-slate-300 py-2.5 text-xs font-medium hidden md:block border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="flex gap-6">
                        <div className="flex items-center gap-3">
                            <a href="tel:+918000888620" className="flex items-center gap-2 hover:text-white transition-colors duration-300">
                                <Phone size={14} className="text-accent" /> +91 80008 88620
                            </a>
                            <span className="opacity-20">|</span>
                            <a href="tel:+919724035200" className="hover:text-white transition-colors duration-300">
                                +91 97240 35200
                            </a>

                        </div>
                        <a href="mailto:flortekindustries@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors duration-300">
                            <Mail size={14} className="text-accent" /> flortekindustries@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center gap-6">
                        <a
                            href="public/brochure.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-accent transition-colors duration-300 group"
                        >
                            <Download size={14} className="text-accent group-hover:animate-bounce" />
                            <span>Download Brochure</span>
                        </a>
                        <div className="flex items-center gap-2">
                            <MapPin size={14} className="text-accent" /> Rajkot, Gujarat
                        </div>
                    </div>
                </div>
            </div>

            <header
                className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-accent/95 backdrop-blur-md shadow-2xl py-2' : 'bg-accent py-3'
                    }`}
            >
                {/* Gradient Border Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary/0 via-secondary/20 to-secondary/0" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 group relative z-50">
                            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm border border-white/30 transition-transform duration-300 group-hover:scale-105">
                                <img
                                    src="/images/logo.png"
                                    alt="Flortek"
                                    className={`w-auto object-contain transition-all duration-300 ${scrolled ? 'h-10' : 'h-14'}`}
                                />
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-1 bg-white/10 p-1.5 rounded-full border border-white/20 backdrop-blur-md shadow-inner">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="relative px-5 py-2 rounded-full text-sm font-bold transition-all duration-300"
                                >
                                    {location.pathname === link.path && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-secondary shadow-lg rounded-full"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className={`relative z-10 transition-colors duration-300 ${location.pathname === link.path ? 'text-accent' : 'text-secondary hover:text-secondary/70'
                                        }`}>
                                        {link.name}
                                    </span>
                                </Link>
                            ))}
                        </nav>

                        {/* Actions */}
                        <div className="hidden md:flex items-center gap-4">
                            <Button
                                onClick={() => setIsModalOpen(true)}
                                variant="secondary"
                                className={`shadow-xl transition-all duration-300 border border-secondary hover:bg-secondary/90 ${scrolled ? 'py-2 px-5 text-sm' : 'py-2.5 px-6'}`}
                            >
                                Get Quote
                            </Button>
                        </div>

                        {/* Mobile Menu Button & Language */}
                        <div className="flex items-center gap-2 md:hidden">
                            <button
                                className="p-2 text-secondary relative z-50 bg-white/10 rounded-lg backdrop-blur-sm border border-secondary/10"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {isOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden absolute top-full left-0 w-full bg-accent shadow-2xl border-t border-secondary/10 overflow-hidden"
                        >
                            <div className="p-4 flex flex-col gap-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={`text-lg font-bold p-4 rounded-xl flex items-center justify-between transition-all ${location.pathname === link.path ? 'bg-secondary text-accent pl-6' : 'text-secondary hover:bg-secondary/5'
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                        {location.pathname === link.path && <div className="h-2 w-2 rounded-full bg-accent" />}
                                    </Link>
                                ))}
                                <div className="w-full mt-4">
                                    <Button
                                        onClick={() => {
                                            setIsOpen(false);
                                            setIsModalOpen(true);
                                        }}
                                        variant="secondary"
                                        className="w-full justify-center py-4 text-lg"
                                    >
                                        Get Quote
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
};

export default Header;
