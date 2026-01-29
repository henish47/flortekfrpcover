import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Truck, ShieldCheck, Activity, Zap, Layers, Star } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';

const Home = () => {
    const { openModal } = useModal();

    const homeSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Flortek Industries",
        "image": "https://flortekfrpcover.vercel.app/images/logo.png", // Assuming this exists or will exist
        "@id": "https://flortekfrpcover.vercel.app",
        "url": "https://flortekfrpcover.vercel.app",
        "telephone": "+919876543210", // Placeholder, user can update
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Radhe Industrial Zone, Survey No.99/1-2, Plot No.4/37, Veraval Shapar",
            "addressLocality": "Rajkot",
            "addressRegion": "Gujarat",
            "postalCode": "360024",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 22.3039,
            "longitude": 70.8022
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        },
        "priceRange": "₹₹",
        "sameAs": [
            "https://www.facebook.com/flortek",
            "https://www.instagram.com/flortek"
        ]
    };

    return (
        <div className="bg-white min-h-screen font-sans">
            <SEO
                title="Best FRP Manhole Cover Manufacturer & Supplier in India | Flortek Industries"
                description="Flortek Industries: India's top manufacturer of heavy-duty FRP, BMC, and Steel Manhole Covers in Rajkot. Certified quality, theft-proof, and durable drainage solutions for infrastructure projects."
                keywords="FRP manhole cover manufacturer, BMC manhole cover suppliers, steel manhole covers Rajkot, drainage gratings India, heavy duty manhole covers, composite manhole covers, fiber reinforced plastic covers, Flortek Industries, Recessed Manhole Covers, Water Gully Gratings, Tank Covers, SFRC Covers, Industrial Drainage Solutions, Municipal Manhole Covers, Smart City Infrastructure, EN 124 Standard Covers, D400 Manhole Cover, B125 Manhole Cover, A15 Manhole Cover, Best FRP Cover India"
                schema={homeSchema}
                canonicalUrl="https://flortekfrpcover.vercel.app"
            />

            {/* --- HERO SECTION (GREEN THEME) --- */}
            <div className="bg-gradient-to-br from-[#109148] to-[#0c7539] text-white py-16 lg:py-24 relative overflow-hidden">
                {/* Abstract Shapes */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 right-0 w-96 h-96 bg-[#FFC107]/20 rounded-full blur-[100px] pointer-events-none -mr-20 -mt-20"
                />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/20 rounded-full blur-[80px] pointer-events-none -ml-10 -mb-10"></div>

                <div className="max-w-7xl mx-auto  px-4 md:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-center lg:text-left"
                        >
                            <span className="inline-block py-2 px-4 rounded-full bg-[#FFC107] text-slate-900 text-xs font-black tracking-widest uppercase mb-8 shadow-lg shadow-yellow-500/20">
                                Est. 2017 | Rajkot, India
                            </span>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight">
                                Built For The <span className="text-[#FFC107]">Heavy Loads.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-green-50 mb-10 leading-relaxed font-medium">
                               High-strength, corrosion-resistant FRP manhole covers engineered for industrial, municipal, and infrastructure applications.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                                <Link to="/products" className="inline-flex items-center justify-center px-8 py-4 bg-[#FFC107] hover:bg-yellow-300 text-slate-900 font-bold rounded-xl transition-all shadow-[0_10px_20px_rgba(255,193,7,0.3)] hover:-translate-y-1">
                                    View Products <ArrowRight size={18} className="ml-2" />
                                </Link>
                                <button
                                    onClick={openModal}
                                    className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold rounded-xl transition-all backdrop-blur-sm"
                                >
                                    Get Quote
                                </button>
                            </div>
                        </motion.div>

                        {/* Right: Product Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="relative flex justify-center lg:justify-end"
                        >
                            <div className="relative w-full max-w-lg aspect-square">
                                <div className="absolute inset-0 bg-[#FFC107]/20 rounded-full blur-3xl scale-90 animate-pulse"></div>
                                <img
                                    src="images/heroimage.png"
                                    alt="Flortek Heavy "
                                    className="relative z-10 w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700 object-contain"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* --- PRODUCT CATEGORIES (WHITE & GREEN/YELLOW ACCENTS) --- */}
            <div className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Our Product Range</h2>
                        <div className="w-20 h-1.5 bg-[#FFC107] mx-auto rounded-full mb-4"></div>
                        <p className="text-slate-500 max-w-2xl mx-auto font-medium">
                            From residential walkways to heavy industrial highways, we have a certified solution for every load class.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {categories.map((cat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <Link to="/products" className="group block bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-[#FFC107] hover:shadow-xl hover:shadow-yellow-100 transition-all duration-300 relative overflow-hidden h-full">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFC107]/10 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:bg-[#FFC107]/20"></div>

                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#109148] mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform relative z-10">
                                        <cat.icon size={32} className="text-[#109148] group-hover:text-[#FFC107] transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#109148] transition-colors">{cat.title}</h3>
                                    <p className="text-sm text-slate-500 mb-4 font-medium">{cat.desc}</p>
                                    <span className="text-xs font-black text-[#FFC107] uppercase tracking-wider group-hover:text-[#109148] transition-colors flex items-center gap-1">
                                        View Series <ArrowRight size={12} />
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- WHY CHOOSE US (GREEN & YELLOW) --- */}
            <div className="py-24 bg-green-50/50">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[#109148] font-black uppercase tracking-widest text-xs mb-2 block">Material Superiority</span>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Why Professionals <br />Choose <span className="text-[#109148]">Flortek</span></h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                                Traditional cast iron and concrete covers are heavy, brittle, and prone to theft. Our <span className="text-slate-900 font-bold">FRP composite technology</span> offers a superior alternative that solves these problems permanently.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: "Zero Theft Value", desc: "No scrap value means no theft, ensuring safety and saving replacement costs." },
                                    { title: "High Load Capacity", desc: "Tested to withstand heavy traffic loads up to 40 tons (D400)." },
                                    { title: "Corrosion Resistant", desc: "Immune to water, chemicals, and extreme weather conditions." },
                                    { title: "Easy Handling", desc: "Lightweight design allows for easy installation and maintenance." }
                                ].map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (i * 0.1) }}
                                        className="flex gap-4"
                                    >
                                        <div className="mt-1 flex-shrink-0">
                                            <div className="w-6 h-6 rounded-full bg-[#FFC107] flex items-center justify-center text-slate-900">
                                                <CheckCircle size={14} strokeWidth={4} />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{feature.title}</h4>
                                            <p className="text-sm text-slate-500 font-medium">{feature.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-square bg-white rounded-[3rem] overflow-hidden flex items-center justify-center relative shadow-2xl shadow-green-900/10 border-8 border-white">
                                {/* Abstract decorative circles */}
                                <div className="absolute top-10 right-10 w-32 h-32 bg-[#FFC107] rounded-full opacity-20 blur-xl"></div>
                                <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#109148] rounded-full opacity-10 blur-xl"></div>

                                <img
                                    src="images/frp-450x450-b125-hero.png"
                                    alt="Flortek Manhole Cover"
                                    className="w-3/4 h-auto drop-shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                            </div>
                            {/* Floating Badge */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, type: "spring" }}
                                className="absolute -bottom-6 -right-6 bg-[#FFC107] text-slate-900 p-6 rounded-[2rem] shadow-xl border-4 border-white"
                            >
                                <p className="text-xs font-black uppercase tracking-widest mb-1">Guaranteed</p>
                                <p className="text-2xl font-black">5+ Years</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* --- REVIEWS / TESTIMONIALS (NEW SECTION) --- */}
            <div className="bg-white py-24 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <span className="text-[#109148] font-black uppercase tracking-widest text-xs mb-3 block">Trusted By Industry Leaders</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">What Our Clients Say</h2>
                        <div className="w-20 h-1.5 bg-[#FFC107] mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Rajesh Kumar",
                                role: "Project Manager, L&T Construction",
                                text: "The quality of Flortek's FRP covers is exceptional. We used them for a large township project in Gujarat, and the ease of installation saved us significant time. Highly recommended for heavy-duty applications.",
                                rating: 5
                            },
                            {
                                name: "Amit Shah",
                                role: "Civil Contractor, Ahmedabad",
                                text: "Best substitute for cast iron covers. No theft issues, and they look much better aesthetically. The load capacity is exactly as certified. Great service from the team.",
                                rating: 5
                            },
                            {
                                name: "Suresh Patel",
                                role: "Infrastructure Consultant",
                                text: "We have been specifying Flortek for our municipal projects for over 2 years now. Their consistency in quality and timely delivery makes them our preferred vendor for drainage solutions.",
                                rating: 5
                            }
                        ].map((review, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 text-left hover:shadow-xl hover:shadow-green-900/5 transition-all duration-300 group"
                            >
                                <div className="flex gap-1 mb-6 text-[#FFC107]">
                                    {[...Array(review.rating)].map((_, r) => (
                                        <Star key={r} size={18} fill="currentColor" className="drop-shadow-sm" />
                                    ))}
                                </div>
                                <p className="text-slate-600 mb-8 font-medium leading-relaxed italic">"{review.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#109148] to-[#0c7539] flex items-center justify-center text-white font-bold text-lg">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{review.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- CTA SECTION (YELLOW THEME) --- */}
            <div className="bg-[#FFC107] py-24 text-center px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 opacity-50 pattern-grid-lg"></div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto relative z-10"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Ready to upgrade?</h2>
                    <p className="text-slate-800 text-xl mb-10 max-w-2xl mx-auto font-bold opacity-80">
                        Get in touch with our team for technical specifications, bulk pricing, or custom size requirements.
                    </p>
                    <button
                        onClick={openModal}
                        className="inline-block px-12 py-6 bg-slate-900 hover:bg-slate-800 text-white text-lg font-bold rounded-2xl transition-all shadow-xl hover:scale-105 hover:shadow-2xl"
                    >
                        Get a Quote Today
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

const categories = [
    {
        title: "Light Duty (2.5T - 5T)",
        desc: "Perfect for pedestrian areas, gardens, and residential pathways.",
        icon: Zap
    },
    {
        title: "Medium Duty (12.5T)",
        desc: "Ideal for car parking, residential driveways, and light traffic.",
        icon: Activity
    },
    {
        title: "Heavy Duty (25T)",
        desc: "Designed for main roads, industrial areas, and commercial zones.",
        icon: Truck
    },
    {
        title: "Extra Heavy (40T)",
        desc: "For highways, airports, and extreme load environments.",
        icon: Layers
    }
];

export default Home;
