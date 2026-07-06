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
        { name: 'About Us', path: '/about' },
        { name: 'Product Gallery', path: '/products' },
        { name: 'Sizes', path: '/sizes' },
        { name: 'Install', path: '/installation' },
        // { name: 'Export', path: '/frp-cover-exporter' },
        { name: 'Applications', path: '/applications' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <div className="bg-black text-white py-2.5 text-[10px] font-bold tracking-wider uppercase hidden md:block border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="flex gap-6">
                        <div className="flex items-center gap-3">
                            <a href="tel:+918000888620" className="flex items-center gap-2 hover:text-[#D9D9D9] transition-colors duration-300">
                                <Phone size={12} className="text-[#D9D9D9]" /> +91 80008 88620
                            </a>
                            <span className="opacity-20">|</span>
                            <a href="tel:+919724035200" className="hover:text-white transition-colors duration-300">
                                +91 97240 35200
                            </a>
                        </div>
                        <a href="mailto:flortekindustries@gmail.com" className="flex items-center gap-2 hover:text-[#D9D9D9] transition-colors duration-300">
                            <Mail size={12} className="text-[#D9D9D9]" /> flortekindustries@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center gap-6">
                        <a
                            href="/brochure.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-[#D9D9D9] transition-colors duration-300 group"
                        >
                            <Download size={12} className="text-[#D9D9D9] group-hover:translate-y-0.5 transition-transform" />
                            <span>Download Brochure</span>
                        </a>
                        <div className="flex items-center gap-2 text-[#D9D9D9]">
                            <MapPin size={12} className="text-[#D9D9D9]" /> Rajkot, Gujarat
                        </div>
                    </div>
                </div>
            </div>

            <header
                className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-[#F5F5F5] py-2' : 'bg-white border-b border-[#F5F5F5] py-4'}`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 group relative z-50">
                            <img
                                src="/images/logo.png"
                                alt="Flortek Industries Private Limited - FRP Manhole Cover Logo"
                                title="Flortek Industries Private Limited - FRP Manhole Cover Logo"
                                decoding="async"
                                className={`w-auto object-contain transition-all duration-300 ${scrolled ? 'h-14 md:h-[72px]' : 'h-16 md:h-[84px]'}`}
                            />
                        </Link>
                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-1 bg-[#F5F5F5] p-1 rounded-full border border-[#D9D9D9]/50">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="relative px-5 py-2 rounded-full text-xs font-bold transition-all duration-300"
                                >
                                    {location.pathname === link.path && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-black rounded-full"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className={`relative z-10 transition-colors duration-300 ${location.pathname === link.path ? 'text-white' : 'text-[#333333] hover:text-black'}`}>
                                        {link.name}
                                    </span>
                                </Link>
                            ))}
                        </nav>

                        {/* Actions */}
                        <div className="hidden md:flex items-center gap-4">
                            <Button
                                onClick={() => setIsModalOpen(true)}
                                className={`transition-all duration-300 bg-black hover:bg-[#333333] text-white rounded-xl font-bold uppercase tracking-wider text-xs ${scrolled ? 'py-2 px-5' : 'py-2.5 px-6'}`}
                            >
                                Get Quote
                            </Button>
                        </div>

                        {/* Mobile Menu Button & Language */}
                        <div className="flex items-center gap-2 md:hidden">
                            <button
                                className="w-11 h-11 flex items-center justify-center text-black relative z-50 bg-[#F5F5F5] rounded-xl border border-[#D9D9D9] hover:border-black active:scale-95 transition-all outline-none"
                                onClick={() => setIsOpen(!isOpen)}
                                aria-label="Toggle Navigation Menu"
                            >
                                {isOpen ? <X size={20} /> : <Menu size={20} />}
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
                            className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-[#F5F5F5] overflow-hidden"
                        >
                            <div className="p-5 flex flex-col gap-2 max-h-[85vh] overflow-y-auto">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={`text-sm font-bold p-4 rounded-xl flex items-center justify-between transition-all ${location.pathname === link.path ? 'bg-black text-white pl-6' : 'text-black hover:bg-[#F5F5F5]'}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                        {location.pathname === link.path && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                                    </Link>
                                ))}
                                
                                <div className="w-full mt-2">
                                    <Button
                                        onClick={() => {
                                            setIsOpen(false);
                                            setIsModalOpen(true);
                                        }}
                                        className="w-full justify-center bg-black hover:bg-[#333333] text-white py-4 rounded-xl font-bold uppercase tracking-wider text-xs"
                                    >
                                        Get Quote
                                    </Button>
                                </div>

                                {/* Quick Contact Details inside Mobile Menu */}
                                <div className="mt-4 pt-5 border-t border-[#D9D9D9]/50 space-y-4">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-[#333333]/50 px-2">
                                        Quick Contacts
                                    </p>
                                    <div className="grid grid-cols-2 gap-2">
                                        <a 
                                            href="tel:+918000888620" 
                                            className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F5F5F5] border border-[#D9D9D9]/30 hover:border-black transition-all text-xs font-bold text-black"
                                        >
                                            <Phone size={14} className="text-[#333333]" />
                                            <span>Call Us</span>
                                        </a>
                                        <a 
                                            href="mailto:flortekindustries@gmail.com" 
                                            className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F5F5F5] border border-[#D9D9D9]/30 hover:border-black transition-all text-xs font-bold text-black"
                                        >
                                            <Mail size={14} className="text-[#333333]" />
                                            <span>Email</span>
                                        </a>
                                    </div>
                                    <a
                                        href="/brochure.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white border border-[#D9D9D9]/85 text-xs font-bold text-black hover:bg-[#F5F5F5]"
                                    >
                                        <Download size={14} className="text-[#333333]" />
                                        <span>Download Brochure</span>
                                    </a>
                                    <div className="flex items-center justify-center gap-2 text-[10px] text-[#333333]/65 font-bold uppercase py-1">
                                        <MapPin size={12} /> Rajkot, Gujarat, India
                                    </div>
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
