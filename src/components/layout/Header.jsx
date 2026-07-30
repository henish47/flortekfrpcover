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

            <div className="bg-[#1B8036] text-white py-2.5 text-[10px] font-extrabold tracking-wider uppercase hidden md:block border-b border-black/10">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="flex gap-6">
                        <div className="flex items-center gap-3">
                            <a href="tel:+918000888620" className="flex items-center gap-2 hover:text-[#FFC700] transition-colors duration-300">
                                <Phone size={12} className="text-white" /> +91 80008 88620
                            </a>
                            <span className="opacity-40">|</span>
                            <a href="tel:+919724035200" className="hover:text-[#FFC700] transition-colors duration-300">
                                +91 97240 35200
                            </a>
                        </div>
                        <a href="mailto:flortekindustries@gmail.com" className="flex items-center gap-2 hover:text-[#FFC700] transition-colors duration-300">
                            <Mail size={12} className="text-white" /> flortekindustries@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center gap-6">
                        <a
                            href="/brochure.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-[#FFC700] transition-colors duration-300 group font-extrabold"
                        >
                            <Download size={12} className="text-white group-hover:translate-y-0.5 transition-transform" />
                            <span>Download Brochure</span>
                        </a>
                        <div className="flex items-center gap-2 text-white">
                            <MapPin size={12} className="text-white" /> Rajkot, Gujarat
                        </div>
                    </div>
                </div>
            </div>

            <header
                className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#FFC700]/95 backdrop-blur-md border-b border-[#0B1B3D]/10 py-2 shadow-lg shadow-[#0B1B3D]/5' : 'bg-[#FFC700] border-b border-[#0B1B3D]/10 py-3.5 shadow-sm'}`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 group relative z-50">
                            <img
                                src="/flortek_logo_2.webp"
                                alt="FLORTEK INDUSTRIES PVT. LTD. - FRP Manhole Cover Logo"
                                title="FLORTEK INDUSTRIES PVT. LTD. - FRP Manhole Cover Logo"
                                decoding="async"
                                className={`w-auto object-contain transition-all duration-300 drop-shadow-sm ${scrolled ? 'h-10 sm:h-12 md:h-[64px]' : 'h-11 sm:h-14 md:h-[74px]'}`}
                            />
                        </Link>

                        {/* Desktop Nav Container with Glassmorphism */}
                        <nav className="hidden md:flex items-center gap-1 bg-white/40 backdrop-blur-md p-1.5 rounded-full border border-white/60 shadow-sm">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="relative px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300"
                                >
                                    {location.pathname === link.path && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-[#1B8036] rounded-full shadow-md shadow-[#1B8036]/30"
                                            transition={{ type: "spring", stiffness: 350, damping: 32 }}
                                        />
                                    )}
                                    <span className={`relative z-10 transition-colors duration-300 ${location.pathname === link.path ? 'text-white font-extrabold' : 'text-[#0B1B3D] hover:text-[#1B8036]'}`}>
                                        {link.name}
                                    </span>
                                </Link>
                            ))}
                        </nav>

                        {/* Actions */}
                        <div className="hidden md:flex items-center gap-4">
                            <Button
                                onClick={() => setIsModalOpen(true)}
                                className={`transition-all duration-300 bg-[#1B8036] hover:bg-[#15803D] text-white rounded-full font-extrabold uppercase tracking-wider text-xs shadow-md shadow-[#1B8036]/25 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 ${scrolled ? 'py-2.5 px-5' : 'py-3 px-6'}`}
                            >
                                Get Quote
                            </Button>
                        </div>

                        {/* Mobile Menu Button & Language */}
                        <div className="flex items-center gap-2 md:hidden">
                            <button
                                className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-[#0B1B3D] relative z-50 bg-white/50 backdrop-blur-md rounded-2xl border border-white/70 shadow-sm hover:border-[#1B8036] active:scale-95 transition-all outline-none"
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
                            className="md:hidden absolute top-full left-0 w-full bg-[#FFC700] shadow-2xl border-t border-[#0B1B3D]/15 overflow-hidden"
                        >
                            <div className="p-4 sm:p-5 flex flex-col gap-2 max-h-[80vh] overflow-y-auto no-scrollbar">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={`text-sm font-bold p-4 rounded-xl flex items-center justify-between transition-all ${location.pathname === link.path ? 'bg-[#1B8036] text-white pl-6' : 'text-black hover:bg-[#F5F5F5]'}`}
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
                                        className="w-full justify-center bg-[#1B8036] hover:bg-[#15803D] text-white py-4 rounded-xl font-bold uppercase tracking-wider text-xs"
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
