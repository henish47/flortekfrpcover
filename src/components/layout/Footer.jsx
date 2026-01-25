import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Youtube, MessageCircle, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white pt-20 pb-10 relative overflow-hidden">
            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Company Info */}
                    <div>
                        <div className="mb-6 bg-white w-fit p-3 rounded-xl">
                            <img
                                src="/images/logo.png"
                                alt="Flortek Industries"
                                className="h-12 w-auto object-contain"
                            />
                        </div>
                        <p className="text-slate-400 leading-relaxed mb-8 text-sm">
                            Leading manufacturer of high-quality FRP, BMC, and Steel covers. Engineering infrastructure solutions for a safer tomorrow.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4">
                            <a
                                href="https://www.youtube.com/@flortekindustries7143"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#FF0000] hover:text-white transition-all duration-300"
                                aria-label="YouTube Channel"
                            >
                                <Youtube size={20} />
                            </a>
                            <a
                                href="https://wa.me/919724035200"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#25D366] hover:text-white transition-all duration-300"
                                aria-label="WhatsApp"
                            >
                                <MessageCircle size={20} />
                            </a>
                            <a
                                href="https://www.instagram.com/flortek_frp_manhole_cover?igsh=bTV6dDkzandraTgy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-accent after:rounded-full">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Our Products', path: '/products' },
                                { name: 'Applications', path: '/applications' },
                                { name: 'Contact Us', path: '/contact' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-slate-400 hover:text-accent transition-colors flex items-center gap-2 text-sm group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-accent transition-colors" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-accent after:rounded-full">
                            Our Products
                        </h3>
                        <ul className="space-y-3">
                            {[
                                'FRP Manhole Covers',
                                'BMC Manhole Covers',
                                'Recessed Covers',
                                'Drainage Gratings',
                                'Gully Gratings'
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        to="/products"
                                        className="text-slate-400 hover:text-accent transition-colors flex items-center gap-2 text-sm group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-accent transition-colors" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-accent after:rounded-full">
                            Contact Info
                        </h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3 text-slate-400 group">
                                <MapPin className="shrink-0 text-primary group-hover:text-accent transition-colors" size={20} />
                                <span className="group-hover:text-slate-300 transition-colors">
                                    Radhe Industrial Zone, Survey No.99/1-2, Plot No.4/37, Veraval Shapar, Rajkot - 360024
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400 group">
                                <Phone className="shrink-0 text-primary group-hover:text-accent transition-colors" size={20} />
                                <a href="tel:+918000888620" className="group-hover:text-slate-300 transition-colors">+91 80008 88620</a>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400 group">
                                <Mail className="shrink-0 text-primary group-hover:text-accent transition-colors" size={20} />
                                <a href="mailto:flortekindustries@gmail.com" className="group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">flortekindustries@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Flortek Industries. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
