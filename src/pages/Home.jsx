import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Truck, ShieldCheck, Activity, Zap, Layers, Star, Download } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/common/SEO';
import FAQAccordion, { faqs } from '../components/common/FAQAccordion';

// Slide show data for Hero section
const heroSlides = [
    {
        title: "D400 Heavy Duty",
        type: "Square Cover",
        load: "Tested Load Cap: 40 Tons",
        image: "/images/FRP 600x600 BS En 124_D400.png"
    },
    {
        title: "Circular B125",
        type: "Round Cover",
        load: "Tested Load Cap: 12.5 Tons",
        image: "/images/circular/FRP 600 BS EN_124_B125.png"
    },
    {
        title: "Water Gulley 5T",
        type: "Gulley Cover",
        load: "Tested Load Cap: 5 Tons",
        image: "/images/watergully/GULLY COVER _300X600_5T_GRAY.png"
    },
    {
        title: "Recessed Cover 2.5T",
        type: "Recessed Cover",
        load: "Tested Load Cap: 2.5 Tons",
        image: "/images/recessed/RECESS COVER _ 450X450_2.5T_GRAY.jpg"
    },
    {
        title: "Square Cover 2.5T",
        type: "Square Cover",
        load: "Tested Load Cap: 2.5 Tons",
        image: "/images/square/FRP-24x24-2.5T-FW.png"
    },
    {
        title: "Rectangle Cover 2.5T",
        type: "Rectangle Cover",
        load: "Tested Load Cap: 2.5 Tons",
        image: "/images/rectangular/FRP-18x24-2.5T-FW.png"
    }
];

const Home = () => {
    const { openModal } = useModal();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [radius, setRadius] = useState(150);
    const [centerSize, setCenterSize] = useState(200);
    const [thumbSize, setThumbSize] = useState(96);
    const [containerSize, setContainerSize] = useState(450);

    // Auto rotate slide every 5 seconds unless manually hovered/clicked
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    // Responsive scaling resize listener for circular layout coordinates
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 400) {
                setRadius(90);
                setCenterSize(110);
                setThumbSize(52);
                setContainerSize(260);
            } else if (window.innerWidth < 480) {
                setRadius(105);
                setCenterSize(130);
                setThumbSize(58);
                setContainerSize(290);
            } else if (window.innerWidth < 640) {
                setRadius(120);
                setCenterSize(150);
                setThumbSize(68);
                setContainerSize(340);
            } else if (window.innerWidth < 1024) {
                setRadius(145);
                setCenterSize(180);
                setThumbSize(80);
                setContainerSize(400);
            } else {
                setRadius(155);
                setCenterSize(200);
                setThumbSize(96);
                setContainerSize(440);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const homeSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://flortekfrpcover.vercel.app/#organization",
                "name": "Flortek Industries Private Limited",
                "url": "https://flortekfrpcover.vercel.app",
                "logo": "https://flortekfrpcover.vercel.app/images/logo.png",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-8000888620",
                    "contactType": "sales",
                    "areaServed": "IN",
                    "availableLanguage": ["en", "hi", "gu"]
                }
            },
            {
                "@type": "LocalBusiness",
                "@id": "https://flortekfrpcover.vercel.app/#localbusiness",
                "name": "Flortek Industries Private Limited",
                "image": "https://flortekfrpcover.vercel.app/images/logo.png",
                "url": "https://flortekfrpcover.vercel.app",
                "telephone": "+91-8000888620",
                "priceRange": "₹₹",
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
                    "latitude": 22.1509,
                    "longitude": 70.7969
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
                "sameAs": [
                    "https://www.facebook.com/flortek",
                    "https://www.instagram.com/flortek"
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://flortekfrpcover.vercel.app/#faq",
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen font-sans">
            <SEO
                title="Best FRP Manhole Cover Manufacturer & Supplier in India | Flortek Industries Private Limited"
                description="Flortek Industries Private Limited is a leading FRP manhole cover manufacturer in India, offering heavy-duty, corrosion-resistant covers for municipal and industrial drainage projects."
               keywords="FRP manhole cover manufacturer India, FRP manhole cover supplier Gujarat, heavy duty FRP manhole covers, corrosion resistant manhole covers, EN 124 certified manhole covers, D400 B125 A15 manhole covers, industrial drainage solutions India, municipal manhole covers, composite manhole covers, anti theft FRP covers, Flortek Industries Private Limited, Simtex private limited, Simtex frp cover"
                schema={homeSchema}
                canonicalUrl="https://flortekfrpcover.vercel.app"
            />            {/* --- HERO SECTION (TWO-COLUMN WITH PRODUCT IMAGE) --- */}
            <div className="bg-white text-black min-h-[85vh] flex items-center relative overflow-hidden border-b border-[#F5F5F5]">
                {/* Background decorative blobs */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-black rounded-full blur-[120px] -mr-40 -mt-40"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-8 w-full py-16 md:py-24 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                        {/* Left Column: Text Content */}
                        <div className="lg:col-span-7 text-left space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="space-y-8"
                            >
                                <span className="inline-block py-1.5 px-4 rounded-full bg-[#F5F5F5] text-black text-[10px] font-black tracking-widest uppercase border border-[#D9D9D9]">
                                    Est. 2017 | Rajkot, India
                                </span>
                                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] text-black uppercase">
                                    Engineering <br />
                                    <span className="text-[#333333]">Structural Strength.</span>
                                </h1>
                                <p className="text-base md:text-xl text-[#333333] font-medium leading-relaxed max-w-2xl">
                                    High-performance, corrosion-resistant FRP manhole covers engineered with absolute precision for modern infrastructure, commercial hubs, and industrial applications.
                                </p>
                                <div className="flex flex-wrap gap-4 pt-2">
                                    <Link to="/products" className="inline-flex items-center justify-center px-8 py-4 bg-black hover:bg-[#333333] text-white font-bold uppercase tracking-wider text-xs rounded-xl transition-all border border-black shadow-sm">
                                        View Products <ArrowRight size={14} className="ml-2" />
                                    </Link>
                                    <button
                                        onClick={openModal}
                                        className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-black hover:bg-[#F5F5F5] text-black font-bold uppercase tracking-wider text-xs rounded-xl transition-all"
                                    >
                                        Get Quote
                                    </button>
                                    <a
                                        href="/brochure.pdf"
                                        download="Flortek_Brochure.pdf"
                                        className="inline-flex items-center justify-center px-8 py-4 bg-[#F5F5F5] hover:bg-[#D9D9D9] text-black font-bold uppercase tracking-wider text-xs rounded-xl transition-all border border-[#D9D9D9]"
                                    >
                                        <Download size={14} className="mr-2" /> Brochure
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Circular Orbit Product Showcase (matching user schema drawing) */}
                        <div className="lg:col-span-5 relative w-full flex flex-col items-center justify-center gap-8 py-6">
                            {/* Orbiting Wheel Container */}
                            <div 
                                className="relative flex items-center justify-center select-none"
                                style={{ width: containerSize, height: containerSize }}
                            >
                                {/* Orbit Path Ring Line */}
                                <div 
                                    className="absolute rounded-full border border-dashed border-[#D9D9D9] pointer-events-none" 
                                    style={{ width: radius * 2, height: radius * 2 }}
                                />

                                {/* Central Focus Product Card */}
                                <motion.div
                                    className="absolute rounded-full bg-[#F5F5F5] border border-[#D9D9D9] p-6 flex items-center justify-center shadow-lg group overflow-hidden z-10"
                                    style={{ width: centerSize, height: centerSize }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[#D9D9D9]/20 via-transparent to-transparent opacity-50 pointer-events-none" />
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={currentSlide}
                                            src={heroSlides[currentSlide].image}
                                            alt={heroSlides[currentSlide].title}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.85 }}
                                            transition={{ duration: 0.35 }}
                                            className="w-[85%] h-[85%] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)] group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </AnimatePresence>
                                </motion.div>

                                {/* 6 Orbiting Product Thumbnails */}
                                {heroSlides.map((slide, idx) => {
                                    const angle = (idx * 60 - 90) * Math.PI / 180;
                                    const x = Math.cos(angle) * radius;
                                    const y = Math.sin(angle) * radius;
                                    const isActive = currentSlide === idx;

                                    return (
                                        <button
                                            key={idx}
                                            onMouseEnter={() => setCurrentSlide(idx)}
                                            onClick={() => setCurrentSlide(idx)}
                                            className={`absolute rounded-full bg-white border flex items-center justify-center p-1.5 shadow-md cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300 z-20 ${
                                                isActive ? 'border-black ring-4 ring-black/5' : 'border-[#D9D9D9] hover:border-black/60'
                                            }`}
                                            style={{
                                                width: thumbSize,
                                                height: thumbSize,
                                                left: `calc(50% + ${x}px)`,
                                                top: `calc(50% + ${y}px)`,
                                                transform: 'translate(-50%, -50%)',
                                            }}
                                            aria-label={`Showcase product ${slide.title}`}
                                        >
                                            <img
                                                src={slide.image}
                                                alt={slide.title}
                                                className="w-4/5 h-4/5 object-contain"
                                            />
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Specs Float Badge overlay */}
                            <div className="bg-black text-white px-5 py-3 rounded-2xl shadow-xl border border-white/10 max-w-[240px] text-center z-10">
                                <p className="text-[9px] font-black uppercase tracking-widest text-[#D9D9D9]">{heroSlides[currentSlide].type}</p>
                                <p className="text-xs font-bold uppercase mt-1">{heroSlides[currentSlide].title}</p>
                                <p className="text-[10px] text-[#D9D9D9]/80 mt-0.5">{heroSlides[currentSlide].load}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- PRODUCT RANGE (WHITE & MONOCHROME) --- */}
            <div className="bg-[#F5F5F5] py-32 border-b border-[#D9D9D9]/50">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tight mb-4">Our Product Range</h2>
                        <div className="w-16 h-1 bg-black mx-auto rounded-full mb-6"></div>
                        <p className="text-[#333333] max-w-xl mx-auto font-medium text-lg leading-relaxed">
                            From residential walkways to heavy industrial highways, we provide certified, engineered load class solutions.
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
                                <Link to="/products" className="group block bg-white p-10 rounded-3xl border border-[#D9D9D9] hover:border-black hover:shadow-xl transition-all duration-300 h-full relative">
                                    <div className="w-12 h-12 bg-[#F5F5F5] rounded-xl flex items-center justify-center text-black mb-8 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                        <cat.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black transition-colors uppercase tracking-tight">{cat.title}</h3>
                                    <p className="text-sm text-[#333333] mb-6 leading-relaxed font-medium">{cat.desc}</p>
                                    <span className="text-xs font-black text-black uppercase tracking-wider transition-colors flex items-center gap-1.5 border-b border-black w-fit pb-0.5">
                                        Explore <ArrowRight size={12} />
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- PRODUCT SHOWCASE GALLERY --- */}
            <div className="bg-white py-32 border-b border-[#D9D9D9]/50">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <span className="text-black font-black uppercase tracking-widest text-xs mb-3 block">Visual Portfolio</span>
                        <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tight mb-4">Product Gallery</h2>
                        <div className="w-16 h-1 bg-black mx-auto rounded-full mb-6"></div>
                        <p className="text-[#333333] max-w-xl mx-auto font-medium text-lg leading-relaxed">
                            Take a closer look at our high-quality composite builds, designed for absolute safety, strength, and durability.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {galleryProducts.map((prod, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.08 }}
                                className="group bg-[#F5F5F5] rounded-3xl border border-[#D9D9D9] hover:border-black overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                            >
                                {/* Image container */}
                                <div className="relative aspect-square overflow-hidden bg-white flex items-center justify-center p-8 border-b border-[#D9D9D9]/50">
                                    <img
                                        src={prod.image}
                                        alt={prod.title}
                                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow justify-between">
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-start gap-4">
                                            <h3 className="text-xl font-bold text-black uppercase tracking-tight leading-tight">{prod.title}</h3>
                                            <span className="shrink-0 px-2.5 py-1 bg-black text-white text-[9px] font-black uppercase tracking-wider rounded">
                                                {prod.load}
                                            </span>
                                        </div>
                                        <p className="text-sm text-[#333333] leading-relaxed font-medium">{prod.desc}</p>
                                    </div>
                                    <div className="flex gap-4 pt-6 mt-auto">
                                        <Link
                                            to="/sizes"
                                            className="flex-grow py-3 text-center border border-black text-black font-bold uppercase tracking-wider text-[10px] rounded-xl hover:bg-[#F5F5F5] transition-all"
                                        >
                                            View Sizes
                                        </Link>
                                        <button
                                            onClick={openModal}
                                            className="flex-grow py-3 bg-black hover:bg-[#333333] text-white font-bold uppercase tracking-wider text-[10px] rounded-xl transition-all border border-black"
                                        >
                                            Get Price
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* View All Products Button */}
                    <div className="mt-16 text-center">
                        <Link
                            to="/products"
                            className="inline-flex items-center justify-center px-10 py-4 bg-black hover:bg-[#333333] text-white font-bold uppercase tracking-wider text-xs rounded-xl transition-all border border-black shadow-sm"
                        >
                            View All Products <ArrowRight size={14} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* --- WHY CHOOSE US (MONOCHROME GRID) --- */}
            <div className="py-32 bg-white border-b border-[#D9D9D9]/50">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-5"
                        >
                            <span className="text-black font-black uppercase tracking-widest text-xs mb-3 block">Material Superiority</span>
                            <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter leading-none mb-6">Why Professionals Choose Flortek</h2>
                            <p className="text-lg text-[#333333] leading-relaxed font-medium mb-8">
                                Traditional cast iron and concrete covers are heavy, brittle, and prone to theft. Our FRP composite technology offers a superior alternative that solves these problems permanently.
                            </p>
                            <Link to="/contact">
                                <button className="bg-black hover:bg-[#333333] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-xs">
                                    Request Technical Datasheet
                                </button>
                            </Link>
                        </motion.div>

                        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { title: "Zero Theft Value", desc: "No scrap value means no theft, ensuring safety and saving replacement costs." },
                                { title: "High Load Capacity", desc: "Tested to withstand heavy traffic loads up to 40 tons (D400)." },
                                { title: "Corrosion Resistant", desc: "Immune to water, chemicals, and extreme weather conditions." },
                                { title: "Easy Handling", desc: "Lightweight design allows for easy installation and maintenance." }
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-[#F5F5F5] p-8 rounded-3xl border border-[#D9D9D9] flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white mb-6">
                                            <CheckCircle size={14} />
                                        </div>
                                        <h4 className="font-bold text-black text-lg mb-2 uppercase tracking-tight">{feature.title}</h4>
                                        <p className="text-sm text-[#333333] leading-relaxed font-medium">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* --- REVIEWS / TESTIMONIALS --- */}
            <div className="bg-[#F5F5F5] py-32 border-b border-[#D9D9D9]/50" >
                <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-20"
                    >
                        <span className="text-black font-black uppercase tracking-widest text-xs mb-3 block">Trusted By Industry Leaders</span>
                        <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter mb-4">What Our Clients Say</h2>
                        <div className="w-16 h-1 bg-black mx-auto rounded-full"></div>
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
                                className="bg-white p-8 rounded-3xl border border-[#D9D9D9] text-left hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="flex gap-1 mb-6 text-black">
                                    {[...Array(review.rating)].map((_, r) => (
                                        <Star key={r} size={16} fill="currentColor" className="drop-shadow-sm" />
                                    ))}
                                </div>
                                <p className="text-[#333333] mb-8 font-medium leading-relaxed italic text-sm">"{review.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold text-sm">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-black text-sm">{review.name}</h4>
                                        <p className="text-[10px] text-[#333333]/80 font-bold uppercase tracking-wider">{review.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- FAQ SECTION (BLACK & WHITE) --- */}
            <div className="bg-white py-24 border-t border-[#F5F5F5]">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F5F5] border border-[#D9D9D9] text-black text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                            FAQ
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter mb-4">Frequently Asked Questions</h2>
                        <p className="text-[#333333] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                            Have questions about our FRP manhole covers, load capacities, or custom designs? Explore our standard answers below.
                        </p>
                    </div>
                    <FAQAccordion />
                </div>
            </div>

            {/* --- CTA SECTION (BLACK & WHITE) --- */}
            <div className="bg-black py-32 text-center px-6 relative overflow-hidden border-t border-[#333333]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto relative z-10"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">Ready to upgrade?</h2>
                    <p className="text-[#D9D9D9] text-lg mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                        Get in touch with our team for technical specifications, bulk pricing, or custom size requirements.
                    </p>
                    <button
                        onClick={openModal}
                        className="inline-block px-12 py-5 bg-white hover:bg-[#F5F5F5] text-black text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-md"
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

const galleryProducts = [
    {
        title: "Square Manhole Covers",
        desc: "Highly durable solid-top square covers for municipal chambers and gardens.",
        load: "2.5 T / 5.0 T",
        image: "/images/square/FRP-24x24-2.5T-FW.png"
    },
    {
        title: "Rectangle Manhole Covers",
        desc: "Precision-molded rectangular covers suitable for utility ducts and storm drains.",
        load: "2.5 T / 5.0 T",
        image: "/images/rectangular/FRP-18x24-2.5T-FW.png"
    },
    {
        title: "Round Circular Covers",
        desc: "Heavy-duty circular covers designed for high stability and easy access.",
        load: "B125 (12.5 T)",
        image: "/images/circular/FRP 600 BS EN_124_B125.png"
    },
    {
        title: "Heavy Duty Traffic Covers",
        desc: "Traffic-rated composite covers certified for highways and cargo bays.",
        load: "C250 / D400",
        image: "/images/FRP 600x600 BS En 124_D400.png"
    },
    {
        title: "Water Gulley Grating Covers",
        desc: "Slotted design optimized for maximum water intake and drainage flow control.",
        load: "2.5T / 5T / B125",
        image: "/images/watergully/GULLY COVER _300X600_5T_GRAY.png"
    },
    {
        title: "Recessed Manhole Covers",
        desc: "Deep tray design allowing paving stone infills to blend seamlessly with paths.",
        load: "2.5 T / 5.0 T",
        image: "/images/recessed/RECESS COVER _ 450X450_2.5T_GRAY.jpg"
    }
];

export default Home;
