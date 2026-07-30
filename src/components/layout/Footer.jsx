import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Youtube, MessageCircle, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#FFC700] text-[#0B1B3D] pt-16 pb-10 relative border-t border-[#0B1B3D]/15">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-14">
                    {/* Company Info */}
                    <div>
                        <div className="mb-6">
                            <img
                                src="/flortek_logo_2.webp"
                                alt="FLORTEK INDUSTRIES PVT. LTD. - FRP Manhole Cover Manufacturer Logo"
                                title="FLORTEK INDUSTRIES PVT. LTD. - FRP Manhole Cover Manufacturer Logo"
                                loading="lazy"
                                decoding="async"
                                className="h-12 w-auto object-contain"
                            />
                        </div>
                        <p className="text-[#0B1B3D]/85 leading-relaxed mb-8 text-sm font-medium">
                            Leading manufacturer of high-quality FRP, BMC, and Steel covers. Engineering infrastructure solutions for a safer tomorrow.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4">
                            <a
                                href="https://www.youtube.com/@flortekindustries7143"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-[#0B1B3D] flex items-center justify-center text-white hover:bg-[#1B8036] transition-all duration-300 shadow-sm"
                                aria-label="YouTube Channel"
                            >
                                <Youtube size={18} />
                            </a>
                            <a
                                href="https://wa.me/919724035200?text=Hello%20Flortek%2C%20I%20visited%20your%20website%20and%20am%20interested%20in%20your%20FRP%20products.%20Please%20provide%20more%20details."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-[#0B1B3D] flex items-center justify-center text-white hover:bg-[#1B8036] transition-all duration-300 shadow-sm"
                                aria-label="WhatsApp"
                            >
                                <MessageCircle size={18} />
                            </a>
                            <a
                                href="https://www.instagram.com/flortek_frp_manhole_cover?igsh=bTV6dDkzandraTgy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-[#0B1B3D] flex items-center justify-center text-white hover:bg-[#1B8036] transition-all duration-300 shadow-sm"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-black uppercase tracking-wider mb-6 text-[#0B1B3D] inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-[#1B8036] after:rounded-full">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Our Products', path: '/products' },
                                { name: 'Applications', path: '/applications' },
                                { name: 'Installation', path: '/installation' },
                                { name: 'Reviews', path: '/reviews' },
                                { name: 'FAQ Support', path: '/faq' },
                                { name: 'Sitemap', path: '/sitemap' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-[#0B1B3D]/85 hover:text-[#1B8036] transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-wider group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#1B8036] group-hover:bg-[#0B1B3D] transition-colors" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products & Solutions */}
                    <div>
                        <h3 className="text-sm font-black uppercase tracking-wider mb-6 text-[#0B1B3D] inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-[#1B8036] after:rounded-full">
                            Solutions
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'FRP Manhole Covers', path: '/frp-manhole-covers' },
                                { name: 'FRP Drain Covers', path: '/frp-drain-covers' },
                                { name: 'Cable Trench Covers', path: '/frp-cable-trench-covers' },
                                { name: 'Heavy Duty Covers', path: '/heavy-duty-frp-covers' },
                                { name: 'FRP Cover Exporter', path: '/frp-cover-exporter' },
                                { name: 'Manufacturer India', path: '/frp-cover-manufacturer-india' },
                                { name: 'Manufacturer Gujarat', path: '/frp-cover-manufacturer-gujarat' },
                                { name: 'Industrial Covers', path: '/industrial-frp-covers' },
                                { name: 'Municipal Covers', path: '/municipal-frp-covers' },
                                { name: 'FRP vs Cast Iron', path: '/frp-vs-cast-iron-covers' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className="text-[#0B1B3D]/85 hover:text-[#1B8036] transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-wider group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#1B8036] group-hover:bg-[#0B1B3D] transition-colors" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Blog & Resources */}
                    <div>
                        <h3 className="text-sm font-black uppercase tracking-wider mb-6 text-[#0B1B3D] inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-[#1B8036] after:rounded-full">
                            Insights
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Blog Hub', path: '/blog' },
                                { name: 'Top Manufacturers', path: '/blog/top-10-frp-manhole-cover-manufacturers-india' },
                                { name: 'Industrial Access', path: '/blog/best-frp-manhole-covers-industrial-applications' },
                                { name: 'FRP vs Cast Iron Guide', path: '/blog/frp-vs-cast-iron-manhole-covers-comparison' },
                                { name: 'Sizing Guide', path: '/blog/how-to-choose-right-frp-manhole-cover' },
                                { name: 'Municipal Benefits', path: '/blog/benefits-frp-covers-municipal-projects' },
                                { name: 'FRP Cover Prices', path: '/blog/frp-cover-price-guide-india' },
                                { name: 'Heavy Duty Features', path: '/blog/heavy-duty-frp-covers-features-applications' },
                                { name: 'Replacing Cast Iron', path: '/blog/why-frp-covers-replacing-cast-iron' }
                            ].map((blog) => (
                                <li key={blog.name}>
                                    <Link
                                        to={blog.path}
                                        className="text-[#0B1B3D]/85 hover:text-[#1B8036] transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-wider group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#1B8036] group-hover:bg-[#0B1B3D] transition-colors" />
                                        {blog.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-black uppercase tracking-wider mb-6 text-[#0B1B3D] inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-[#1B8036] after:rounded-full">
                            Contact
                        </h3>
                        <ul className="space-y-4 text-xs font-bold uppercase tracking-wider">
                            <li className="flex items-start gap-3 text-[#0B1B3D]/85 group">
                                <MapPin className="shrink-0 text-[#0B1B3D]" size={16} />
                                <span className="group-hover:text-[#1B8036] transition-colors normal-case font-medium text-sm leading-relaxed">
                                    Radhe Industrial Zone, Survey No.99/1-2, Plot No.4/37, Veraval Shapar, Rajkot - 360024
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-[#0B1B3D]/85 group">
                                <Phone className="shrink-0 text-[#0B1B3D]" size={16} />
                                <a href="tel:+918000888620" className="group-hover:text-[#1B8036] transition-colors">+91 80008 88620</a>
                            </li>
                            <li className="flex items-center gap-3 text-[#0B1B3D]/85 group">
                                <Mail className="shrink-0 text-[#0B1B3D]" size={16} />
                                <a href="mailto:flortekindustries@gmail.com" className="group-hover:text-[#1B8036] transition-all normal-case font-medium">flortekindustries@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[#0B1B3D]/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-extrabold uppercase tracking-wider text-[#0B1B3D]/80">
                    <p>&copy; {new Date().getFullYear()} FLORTEK INDUSTRIES PVT. LTD. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-[#1B8036] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#1B8036] transition-colors">Terms of Service</a>
                        <Link to="/sitemap" className="hover:text-[#1B8036] transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
