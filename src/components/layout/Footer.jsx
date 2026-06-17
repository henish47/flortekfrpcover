import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Youtube, MessageCircle, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-10 relative border-t border-[#333333]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Company Info */}
                    <div>
                        <div className="mb-6">
                            <img
                                src="/images/logo.png"
                                alt="Flortek Industries Private Limited"
                                className="h-10 w-auto object-contain brightness-0 invert"
                            />
                        </div>
                        <p className="text-[#D9D9D9] leading-relaxed mb-8 text-sm">
                            Leading manufacturer of high-quality FRP, BMC, and Steel covers. Engineering infrastructure solutions for a safer tomorrow.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4">
                            <a
                                href="https://www.youtube.com/@flortekindustries7143"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-[#333333] flex items-center justify-center text-[#D9D9D9] hover:bg-white hover:text-black transition-all duration-300"
                                aria-label="YouTube Channel"
                            >
                                <Youtube size={18} />
                            </a>
                            <a
                                href="https://wa.me/919724035200?text=Hello%20Flortek%2C%20I%20visited%20your%20website%20and%20am%20interested%20in%20your%20FRP%20products.%20Please%20provide%20more%20details."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-[#333333] flex items-center justify-center text-[#D9D9D9] hover:bg-white hover:text-black transition-all duration-300"
                                aria-label="WhatsApp"
                            >
                                <MessageCircle size={18} />
                            </a>
                            <a
                                href="https://www.instagram.com/flortek_frp_manhole_cover?igsh=bTV6dDkzandraTgy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-[#333333] flex items-center justify-center text-[#D9D9D9] hover:bg-white hover:text-black transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-black uppercase tracking-wider mb-6 text-white inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-white after:rounded-full">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Our Products', path: '/products' },
                                { name: 'Applications', path: '/applications' },
                                { name: 'FAQ Support', path: '/faq' },
                                { name: 'Contact Us', path: '/contact' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-[#D9D9D9] hover:text-white transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-wider group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-[#333333] group-hover:bg-white transition-colors" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-sm font-black uppercase tracking-wider mb-6 text-white inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-white after:rounded-full">
                            Our Range
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'FRP Manhole Covers', path: '/frp-manhole-covers' },
                                { name: 'FRP Drain Covers', path: '/frp-drain-covers' },
                                { name: 'Cable Trench Covers', path: '/frp-cable-trench-covers' },
                                { name: 'Heavy Duty FRP Covers', path: '/heavy-duty-frp-covers' },
                                { name: 'Standard Sizing List', path: '/sizes' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className="text-[#D9D9D9] hover:text-white transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-wider group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-[#333333] group-hover:bg-white transition-colors" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-black uppercase tracking-wider mb-6 text-white inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-white after:rounded-full">
                            Contact
                        </h3>
                        <ul className="space-y-4 text-xs font-bold uppercase tracking-wider">
                            <li className="flex items-start gap-3 text-[#D9D9D9] group">
                                <MapPin className="shrink-0 text-white" size={16} />
                                <span className="group-hover:text-white transition-colors normal-case font-medium text-sm leading-relaxed">
                                    Radhe Industrial Zone, Survey No.99/1-2, Plot No.4/37, Veraval Shapar, Rajkot - 360024
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-[#D9D9D9] group">
                                <Phone className="shrink-0 text-white" size={16} />
                                <a href="tel:+918000888620" className="group-hover:text-white transition-colors">+91 80008 88620</a>
                            </li>
                            <li className="flex items-center gap-3 text-[#D9D9D9] group">
                                <Mail className="shrink-0 text-white" size={16} />
                                <a href="mailto:flortekindustries@gmail.com" className="group-hover:text-white transition-all normal-case font-medium">flortekindustries@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[#333333] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-wider text-[#D9D9D9]/70">
                    <p>&copy; {new Date().getFullYear()} Flortek Industries Private Limited. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
