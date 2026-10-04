import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
    ArrowRight, CheckCircle, Truck, ShieldCheck, Activity, Zap, 
    Layers, Star, Download, Globe, Anchor, Award, Sparkles, ChevronRight 
} from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/common/SEO';
import FAQAccordion, { faqs } from '../components/common/FAQAccordion';
import GoogleReviews from '../components/home/GoogleReviews';
import FRPComparisonMatrix from '../components/home/FRPComparisonMatrix';

// Slide show data for Hero section with detailed engineering specs
const heroSlides = [
    {
        id: "d400-40t",
        title: "D400 Heavy Duty Square Cover",
        shortTitle: "D400 40T",
        type: "Square Cover",
        loadClass: "D400 (Extra Heavy)",
        loadBadge: "Up to 40T",
        loadTons: "40T",
        loadCapacity: "40 Tons (400 kN)",
        size: "600 × 600 mm",
        idealFor: "Highways & Heavy Transit",
        image: "/images/FRP-600x600-D400-FLORTEK.jpg",
        highlight: true
    },
    {
        id: "c250-25t",
        title: "C250 Heavy Duty Chamber Cover",
        shortTitle: "C250 25T",
        type: "Main Road Cover",
        loadClass: "C250 (Heavy Duty)",
        loadBadge: "25T",
        loadTons: "25T",
        loadCapacity: "25 Tons (250 kN)",
        size: "900 × 900 mm",
        idealFor: "City Arterials & Petrol Pumps",
        image: "/images/900 X 900_124_C250.PNG",
        highlight: false
    },
    {
        id: "b125-12.5t",
        title: "Circular B125 Inspection Cover",
        shortTitle: "B125 12.5T",
        type: "Round Cover",
        loadClass: "B125 (Medium Duty)",
        loadBadge: "12.5T",
        loadTons: "12.5T",
        loadCapacity: "12.5 Tons (125 kN)",
        size: "600 mm Dia (24\")",
        idealFor: "Car Parking & Sidewalks",
        image: "/images/circular/FRP 600 BS EN_124_B125.png",
        highlight: false
    },
    {
        id: "gully-5t",
        title: "Water Gully Grating Cover",
        shortTitle: "Gully 5T",
        type: "Gulley Cover",
        loadClass: "5T Gully Grate",
        loadBadge: "5T",
        loadTons: "5T",
        loadCapacity: "5 Tons (50 kN)",
        size: "300 × 600 mm",
        idealFor: "Kerbside & Storm Drainage",
        image: "/images/watergully/GULLY COVER _300X600_5T_GRAY.png",
        highlight: false
    },
    {
        id: "square-2.5t",
        title: "Square Chamber Cover (A15)",
        shortTitle: "Square 2.5T",
        type: "Square Cover",
        loadClass: "A15 (Light Duty)",
        loadBadge: "2.5T",
        loadTons: "2.5T",
        loadCapacity: "2.5 Tons (25 kN)",
        size: "600 × 600 mm (24×24\")",
        idealFor: "Walkways & Residential Parks",
        image: "/images/square/FRP-24x24-2.5T-FW.png",
        highlight: false
    },
    {
        id: "recessed-2.5t",
        title: "Recessed Architectural Paver Cover",
        shortTitle: "Recessed 2.5T",
        type: "Recessed Cover",
        loadClass: "2.5T Recessed",
        loadBadge: "2.5T",
        loadTons: "2.5T",
        loadCapacity: "2.5 Tons (25 kN)",
        size: "450 × 450 mm",
        idealFor: "Tile Infill & Aesthetic Paving",
        image: "/images/recessed/RECESS COVER _ 450X450_2.5T_GRAY.jpg",
        highlight: false
    }
];

const Home = () => {
    const { openModal } = useModal();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    // Auto rotate slide every 5.5 seconds unless user hovers
    useEffect(() => {
        if (isHovering) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5500);
        return () => clearInterval(timer);
    }, [isHovering]);

    const homeSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Who is the leading FRP manhole cover manufacturer in Rajkot, Gujarat?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "FLORTEK INDUSTRIES PVT. LTD., situated in Radhe Industrial Zone, Shapar Veraval, Rajkot, is a premier B2B manufacturer and exporter of BS EN 124 certified FRP, BMC, and composite manhole covers."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are the main advantages of Flortek FRP covers over cast iron covers?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Flortek FRP covers have zero scrap value (100% theft-proof), are 70% lighter than cast iron for ergonomic handling, will never corrode or rust from sewer gases, and support heavy vehicular loads up to 40 Tons (Class D400)."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are Flortek FRP manhole covers tested according to BS EN 124 standards?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, our composite covers are tested in-house on a calibrated 100-ton computerized hydraulic load testing machine across BS EN 124 load classes: A15 (1.5T), B125 (12.5T), C250 (25T), and D400 (40T)."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What dimensions and load ratings are available?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We provide square covers (12x12, 18x18, 24x24, 600x600, 900x900mm), rectangular trench covers (18x24, 24x36\"), and circular covers (18\", 24\", 600mm) with custom load capacities tailored to your engineering project."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen font-sans">
            <SEO
                title="FLORTEK INDUSTRIES PVT. LTD. | FRP Manhole Cover Manufacturer in India | BMC & Steel Covers"
                description="FLORTEK INDUSTRIES PVT. LTD. is a leading FRP manhole cover manufacturer in India, offering heavy-duty, corrosion-resistant covers for municipal and industrial drainage projects."
                keywords="FLORTEK INDUSTRIES PVT. LTD., Flortek FRP Cover, Flortek FRP, India's No. 1 FRP manhole cover manufacturer, best FRP manhole cover manufacturer in India, composite manhole cover exporter Rajkot, heavy duty chamber covers Gujarat, EN 124 certified drainage covers, D400 B125 C250 A15, industrial road drain covers, municipal sewer inspection covers, anti theft chamber covers"
                schema={homeSchema}
                canonicalUrl="https://www.flortekfrpcover.com"
            />            {/* --- HERO SECTION WITH INTERACTIVE 40T LOAD CAPACITY SHOWCASE --- */}
            <div 
                className="bg-white text-black min-h-[88vh] flex items-center relative overflow-hidden border-b border-[#F5F5F5]"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                {/* Background decorative ambient glow */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                    <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-[#1B8036] rounded-full blur-[140px] -mr-40 -mt-40"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFC700] rounded-full blur-[130px] -ml-32 -mb-32"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 w-full py-10 sm:py-16 md:py-20 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        {/* Left Column: Text & Value Proposition */}
                        <div className="lg:col-span-7 text-left space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 25 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className="space-y-5 sm:space-y-6"
                            >
                                {/* Badge Row */}
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="inline-block py-1 px-3 rounded-full bg-[#FFC700]/25 text-black text-[10px] font-black tracking-widest uppercase border border-[#FFC700]">
                                        Est. 2017 | Rajkot, India
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-[#1B8036]/10 text-[#1B8036] text-[10px] font-black tracking-wider uppercase border border-[#1B8036]/30">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#1B8036] animate-pulse"></span>
                                        BS EN 124 Certified • Up to 40T
                                    </span>
                                </div>

                                {/* Main Headline */}
                                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] sm:leading-[0.98] text-black uppercase">
                                    Engineering <br />
                                    <span className="text-[#1B8036]">Structural Strength.</span> <br />
                                    <span className="text-xl sm:text-3xl md:text-4xl text-neutral-800 font-extrabold tracking-tight normal-case block mt-2">
                                        Heavy-duty composite covers tested <span className="text-black font-black underline decoration-[#FFC700] decoration-4 underline-offset-4">up to 40T</span>
                                    </span>
                                </h1>

                                <p className="text-xs sm:text-base md:text-lg text-neutral-700 font-medium leading-relaxed max-w-2xl">
                                    High-performance, corrosion-resistant FRP manhole covers engineered with absolute precision. Certified to <strong className="text-black">BS EN 124 standards</strong> across 2.5T, 5T, 12.5T, 25T, and heavy-duty 40T load ratings for municipal and industrial infrastructure.
                                </p>

                                {/* Interactive Load Capacity Spectrum / Quick Selector */}
                                <div className="space-y-2 pt-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-black uppercase tracking-wider text-neutral-500">
                                            Select Tested Load Class:
                                        </span>
                                        <span className="text-[10px] font-bold text-[#1B8036] bg-[#1B8036]/10 px-2 py-0.5 rounded-full">
                                            {heroSlides[currentSlide].loadCapacity}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                        {heroSlides.map((slide, idx) => {
                                            const isActive = currentSlide === idx;
                                            return (
                                                <button
                                                    key={slide.id}
                                                    onClick={() => setCurrentSlide(idx)}
                                                    className={`px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all border cursor-pointer ${
                                                        isActive
                                                            ? 'bg-[#1B8036] text-white border-[#1B8036] shadow-sm scale-105'
                                                            : slide.loadBadge.includes('40T')
                                                            ? 'bg-[#FFC700]/30 hover:bg-[#FFC700] text-black border-[#FFC700] font-black'
                                                            : 'bg-white hover:bg-neutral-100 text-neutral-800 border-[#D9D9D9]'
                                                    }`}
                                                >
                                                    {slide.loadBadge.includes('40T') ? '🔥 Up to 40T (D400)' : slide.loadBadge}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Call to Action Buttons */}
                                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2">
                                    <Link 
                                        to="/products" 
                                        className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-[#1B8036] hover:bg-[#145C27] text-white font-bold uppercase tracking-wider text-xs rounded-xl transition-all border border-[#1B8036] shadow-sm hover:shadow-md"
                                    >
                                        View Products <ArrowRight size={14} className="ml-2" />
                                    </Link>
                                    <button
                                        onClick={openModal}
                                        className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-[#FFC700] hover:bg-[#E6B200] text-[#0B1B3D] font-extrabold uppercase tracking-wider text-xs rounded-xl transition-all border border-[#FFC700] shadow-sm hover:shadow-md"
                                    >
                                        Get Quote
                                    </button>
                                    <a
                                        href="/brochure.pdf"
                                        download="Flortek_Brochure.pdf"
                                        className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-[#F5F5F5] hover:bg-[#EBEBEB] text-black font-bold uppercase tracking-wider text-xs rounded-xl transition-all border border-[#D9D9D9]"
                                    >
                                        <Download size={14} className="mr-2" /> Brochure
                                    </a>
                                </div>

                                {/* Trust Badges Strip */}
                                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-[11px] sm:text-xs text-[#333333] font-semibold border-t border-[#F0F0F0]">
                                    <span className="flex items-center gap-1.5">
                                        <CheckCircle size={15} className="text-[#1B8036] shrink-0" />
                                        <span>BS EN 124 Certified</span>
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <ShieldCheck size={15} className="text-[#1B8036] shrink-0" />
                                        <span>100% Anti-Theft (Zero Scrap)</span>
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Truck size={15} className="text-[#1B8036] shrink-0" />
                                        <span>Direct Factory Rates</span>
                                    </span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: High-Impact Product Showcase Deck */}
                        <div className="lg:col-span-5 relative w-full flex flex-col items-center">
                            {/* Ambient Glow */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-[#1B8036]/10 via-[#FFC700]/10 to-transparent blur-3xl pointer-events-none rounded-3xl" />

                            {/* Main Showcase Card */}
                            <div className="relative w-full bg-white rounded-3xl border border-[#D9D9D9] p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-300 hover:border-[#1B8036]/50">
                                
                                {/* Subtle Engineering Grid Background */}
                                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-70 pointer-events-none" />
                                <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFC700]/10 rounded-full blur-2xl pointer-events-none" />

                                {/* Top Badges Row */}
                                <div className="relative z-10 flex items-center justify-between gap-2 mb-4">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1B8036]/10 border border-[#1B8036]/30 text-[#1B8036] text-[11px] font-black uppercase tracking-wider">
                                        <span className="w-2 h-2 rounded-full bg-[#1B8036] animate-pulse"></span>
                                        BS EN 124 Certified
                                    </span>

                                    {/* UP TO 40T HIGHLIGHT BADGE */}
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFC700] text-[#0B1B3D] text-[11px] font-black uppercase tracking-wider shadow-sm">
                                        <ShieldCheck size={13} className="shrink-0" />
                                        {heroSlides[currentSlide].loadBadge.includes('40T') ? 'Tested Up to 40T' : `Load: ${heroSlides[currentSlide].loadBadge}`}
                                    </span>
                                </div>

                                {/* Center Product Image Container with Framer Motion */}
                                <div className="relative z-10 h-64 sm:h-72 md:h-80 flex items-center justify-center p-2">
                                    {/* Subtle Circular Radial Glow behind Cover */}
                                    <div className="absolute w-56 h-56 rounded-full bg-neutral-100 border border-neutral-200/80 shadow-inner flex items-center justify-center pointer-events-none" />

                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={currentSlide}
                                            src={heroSlides[currentSlide].image}
                                            alt={`${heroSlides[currentSlide].title} - FRP Composite Manhole Cover`}
                                            title={`${heroSlides[currentSlide].title} - FRP Composite Manhole Cover`}
                                            decoding="async"
                                            initial={{ opacity: 0, scale: 0.88, y: 10 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.92, y: -10 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className="relative max-h-full max-w-[85%] object-contain drop-shadow-[0_18px_25px_rgba(0,0,0,0.18)] z-10 hover:scale-105 transition-transform duration-500 cursor-pointer"
                                            onClick={openModal}
                                        />
                                    </AnimatePresence>

                                    {/* Quick Floating Pill: Anti-Theft / Zero Scrap */}
                                    <div className="absolute bottom-1 left-2 z-20 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-[#D9D9D9] shadow-sm text-[10px] font-bold text-neutral-800">
                                        <CheckCircle size={12} className="text-[#1B8036]" />
                                        Zero Scrap (Theft-Proof)
                                    </div>
                                    
                                    {/* Quick Floating Pill: Hydraulic Load Rig */}
                                    <div className="absolute bottom-1 right-2 z-20 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-[#D9D9D9] shadow-sm text-[10px] font-bold text-neutral-800">
                                        <Activity size={12} className="text-[#1B8036]" />
                                        100T Rig Tested
                                    </div>
                                </div>

                                {/* Live Active Product Info Strip */}
                                <div className="relative z-10 mt-4 pt-4 border-t border-[#E5E7EB]">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                        <div>
                                            <h3 className="text-sm sm:text-base font-black uppercase text-black tracking-tight leading-snug">
                                                {heroSlides[currentSlide].title}
                                            </h3>
                                            <p className="text-xs text-[#555555] font-medium mt-0.5">
                                                Ideal for: <span className="font-semibold text-black">{heroSlides[currentSlide].idealFor}</span>
                                            </p>
                                        </div>
                                        <button
                                            onClick={openModal}
                                            className="self-start sm:self-auto px-3.5 py-1.5 bg-[#1B8036] hover:bg-[#145C27] text-white text-[10px] font-extrabold uppercase tracking-wider rounded-lg transition-colors shrink-0 shadow-sm cursor-pointer"
                                        >
                                            Get Rate
                                        </button>
                                    </div>

                                    {/* Micro Specs Grid */}
                                    <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-neutral-100 text-center">
                                        <div className="bg-[#F8F9FA] rounded-xl py-1.5 px-2 border border-neutral-200/60">
                                            <span className="block text-[9px] font-bold uppercase tracking-wider text-neutral-500">Outer Size</span>
                                            <span className="text-[11px] font-black text-black">{heroSlides[currentSlide].size}</span>
                                        </div>
                                        <div className="bg-[#F8F9FA] rounded-xl py-1.5 px-2 border border-neutral-200/60">
                                            <span className="block text-[9px] font-bold uppercase tracking-wider text-neutral-500">Tested Force</span>
                                            <span className="text-[11px] font-black text-[#1B8036]">{heroSlides[currentSlide].loadCapacity}</span>
                                        </div>
                                        <div className="bg-[#F8F9FA] rounded-xl py-1.5 px-2 border border-neutral-200/60">
                                            <span className="block text-[9px] font-bold uppercase tracking-wider text-neutral-500">Class Rating</span>
                                            <span className="text-[11px] font-black text-black">{heroSlides[currentSlide].loadClass.split(' ')[0]}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Interactive Thumbnails Strip to Switch Models */}
                            <div className="w-full mt-4 flex items-center justify-between gap-1.5 sm:gap-2 overflow-x-auto pb-1 no-scrollbar">
                                {heroSlides.map((slide, idx) => {
                                    const isActive = currentSlide === idx;
                                    return (
                                        <button
                                            key={slide.id}
                                            onClick={() => setCurrentSlide(idx)}
                                            className={`flex-1 min-w-[54px] sm:min-w-[64px] flex flex-col items-center gap-1 p-1.5 sm:p-2 rounded-2xl border transition-all duration-200 cursor-pointer ${
                                                isActive
                                                    ? 'bg-white border-[#1B8036] shadow-md ring-2 ring-[#1B8036]/20 scale-105'
                                                    : 'bg-white/80 border-[#D9D9D9] hover:border-black/40 hover:bg-white'
                                            }`}
                                        >
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                                                <img
                                                    src={slide.image}
                                                    alt={slide.shortTitle}
                                                    className="max-h-full max-w-full object-contain"
                                                />
                                            </div>
                                            <span className={`text-[9px] sm:text-[10px] font-black uppercase tracking-tight ${isActive ? 'text-[#1B8036]' : 'text-neutral-700'}`}>
                                                {slide.loadTons}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Full-Width Key Metrics Strip: 40T Proof Load, Anti-Theft, 70% Lighter, 100T Rig */}
                    <div className="mt-12 sm:mt-16 pt-8 border-t border-[#E5E7EB]">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                            <div className="bg-[#F9FAFB] rounded-2xl p-4 sm:p-5 border border-[#E5E7EB] hover:border-[#1B8036] transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-[#1B8036]/10 text-[#1B8036] flex items-center justify-center shrink-0">
                                        <ShieldCheck size={22} />
                                    </div>
                                    <div>
                                        <div className="text-xl sm:text-2xl font-black text-black tracking-tight">Up to 40T</div>
                                        <div className="text-[11px] text-[#555555] font-semibold leading-tight mt-0.5">Heavy Duty Class D400</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#F9FAFB] rounded-2xl p-4 sm:p-5 border border-[#E5E7EB] hover:border-[#1B8036] transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-[#FFC700]/25 text-[#0B1B3D] flex items-center justify-center shrink-0">
                                        <Zap size={22} />
                                    </div>
                                    <div>
                                        <div className="text-xl sm:text-2xl font-black text-black tracking-tight">100%</div>
                                        <div className="text-[11px] text-[#555555] font-semibold leading-tight mt-0.5">Anti-Theft Zero Scrap</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#F9FAFB] rounded-2xl p-4 sm:p-5 border border-[#E5E7EB] hover:border-[#1B8036] transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-[#1B8036]/10 text-[#1B8036] flex items-center justify-center shrink-0">
                                        <Truck size={22} />
                                    </div>
                                    <div>
                                        <div className="text-xl sm:text-2xl font-black text-black tracking-tight">70% Lighter</div>
                                        <div className="text-[11px] text-[#555555] font-semibold leading-tight mt-0.5">Than Cast & Ductile Iron</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#F9FAFB] rounded-2xl p-4 sm:p-5 border border-[#E5E7EB] hover:border-[#1B8036] transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-neutral-200/80 text-black flex items-center justify-center shrink-0">
                                        <Activity size={22} />
                                    </div>
                                    <div>
                                        <div className="text-xl sm:text-2xl font-black text-black tracking-tight">100-Ton</div>
                                        <div className="text-[11px] text-[#555555] font-semibold leading-tight mt-0.5">In-House Testing Rig</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* --- PRODUCT SHOWCASE GALLERY --- */}
            <div className="bg-[#F5F5F5] py-32 border-b border-[#D9D9D9]/50">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <span className="text-[#1B8036] font-black uppercase tracking-widest text-xs mb-3 block">Visual Portfolio</span>
                        <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tight mb-4">Product Gallery</h2>
                        <div className="w-16 h-1 bg-[#1B8036] mx-auto rounded-full mb-6"></div>
                        <p className="text-[#333333] max-w-xl mx-auto font-medium text-lg leading-relaxed">
                            Take a closer look at our high-quality composite builds, designed for absolute safety, strength, and durability.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
                        {galleryProducts.map((prod, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.08 }}
                                className="group bg-white rounded-2xl sm:rounded-3xl border border-[#D9D9D9] hover:border-[#1B8036] overflow-hidden hover:shadow-glow transition-all duration-300 flex flex-col h-full"
                            >
                                {/* Image container */}
                                <div className="relative aspect-square overflow-hidden bg-white flex items-center justify-center p-4 sm:p-8 border-b border-[#D9D9D9]/50">
                                    <img
                                        src={prod.image}
                                        alt={`${prod.title} - Flortek Composite Drainage Grating`}
                                        title={`${prod.title} - Flortek Composite Drainage Grating`}
                                        loading="lazy"
                                        decoding="async"
                                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                {/* Content */}
                                <div className="p-3 sm:p-8 flex flex-col flex-grow justify-between">
                                    <div className="space-y-1.5 sm:space-y-3">
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
                                            <h3 className="text-xs sm:text-xl font-bold text-black uppercase tracking-tight leading-tight min-h-[2rem] sm:min-h-0">{prod.title}</h3>
                                            <span className="shrink-0 w-fit px-1.5 py-0.5 sm:px-2.5 sm:py-1 bg-[#1B8036] text-white text-[8px] sm:text-[9px] font-black uppercase tracking-wider rounded">
                                                {prod.load}
                                            </span>
                                        </div>
                                        <p className="text-[10px] sm:text-sm text-black leading-relaxed font-medium line-clamp-3 sm:line-clamp-none">{prod.desc}</p>
                                    </div>
                                    <div className="flex gap-2 sm:gap-4 pt-3 sm:pt-6 mt-auto">
                                        <Link
                                            to="/sizes"
                                            className="flex-grow py-2 sm:py-3 text-center border border-[#0B1B3D] text-[#0B1B3D] font-bold uppercase tracking-wider text-[9px] sm:text-[10px] rounded-lg sm:rounded-xl hover:bg-[#F5F5F5] transition-all"
                                        >
                                            Sizes
                                        </Link>
                                        <button
                                            onClick={openModal}
                                            className="flex-grow py-2 sm:py-3 bg-[#1B8036] hover:bg-[#145C27] text-white font-bold uppercase tracking-wider text-[9px] sm:text-[10px] rounded-lg sm:rounded-xl transition-all border border-[#1B8036] active:scale-95 shadow-sm"
                                        >
                                            get best Price
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
                            className="inline-flex items-center justify-center px-10 py-4 bg-[#1B8036] hover:bg-[#145C27] text-white font-bold uppercase tracking-wider text-xs rounded-xl transition-all border border-[#1B8036] shadow-sm"
                        >
                            View All Products <ArrowRight size={14} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* --- PRODUCT RANGE (WHITE & MONOCHROME) --- */}
            <div className="bg-white py-32 border-b border-[#D9D9D9]/50">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tight mb-4">Our Product Range</h2>
                        <div className="w-16 h-1 bg-[#1B8036] mx-auto rounded-full mb-6"></div>
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
                                <Link to="/products" className="group block bg-[#F5F5F5]/40 p-10 rounded-3xl border border-[#D9D9D9] hover:border-[#1B8036] hover:shadow-glow transition-all duration-300 h-full relative">
                                    <div className="w-12 h-12 bg-[#1B8036]/10 rounded-xl flex items-center justify-center text-[#1B8036] mb-8 group-hover:bg-[#1B8036] group-hover:text-white transition-colors duration-300 shadow-sm">
                                        <cat.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-black mb-3 transition-colors uppercase tracking-tight">{cat.title}</h3>
                                    <p className="text-sm text-[#333333] mb-6 leading-relaxed font-medium">{cat.desc}</p>
                                    <span className="text-xs font-black text-[#1B8036] uppercase tracking-wider transition-colors flex items-center gap-1.5 border-b border-[#1B8036] group-hover:text-[#145C27] group-hover:border-[#145C27] w-fit pb-0.5">
                                        Explore <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- WHY CHOOSE US (MONOCHROME GRID) --- */}
            <div className="py-32 bg-[#F5F5F5] border-b border-[#D9D9D9]/50">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-5"
                        >
                            <span className="text-[#1B8036] font-black uppercase tracking-widest text-xs mb-3 block">Material Superiority</span>
                            <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter leading-none mb-6">Why Professionals Choose <span className="text-[#1B8036]">Flortek</span></h2>
                            <p className="text-lg text-[#333333] leading-relaxed font-medium mb-8">
                                Traditional cast iron and concrete covers are heavy, brittle, and prone to theft. Our FRP composite technology offers a superior alternative that solves these problems permanently.
                            </p>
                            <Link to="/contact">
                                <button className="bg-[#1B8036] hover:bg-[#145C27] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-xs border border-[#1B8036] shadow-sm hover:shadow-md transition-all active:scale-95 duration-300">
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
                                    className="bg-white p-8 rounded-3xl border border-[#D9D9D9] flex flex-col justify-between hover:border-[#1B8036] hover:shadow-glow transition-all duration-300"
                                >
                                    <div>
                                        <div className="w-8 h-8 rounded-full bg-[#1B8036]/10 border border-[#1B8036]/20 flex items-center justify-center text-[#1B8036] mb-6 shadow-sm">
                                            <CheckCircle size={16} />
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

            {/* --- BS EN 124 LOAD CLASSIFICATION MATRIX --- */}
            <div className="bg-white py-14 md:py-24 border-b border-[#D9D9D9]/50">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10 md:mb-16"
                    >
                        <span className="inline-block py-1.5 px-4 rounded-full bg-[#FFC700] text-[#0B1B3D] text-[10px] font-black uppercase tracking-widest mb-3 md:mb-4">
                            BS EN 124 Load Rating Guide
                        </span>
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-black uppercase tracking-tight mb-3 md:mb-4">
                            Certified Load Classes for Every Application
                        </h2>
                        <div className="w-12 md:w-16 h-1 bg-[#1B8036] mx-auto rounded-full mb-4 md:mb-6"></div>
                        <p className="text-xs sm:text-base text-black max-w-2xl mx-auto font-medium leading-relaxed">
                            Our composite FRP manhole covers are engineered to meet international load testing standards, ensuring safe installation from residential lawns to heavy industrial highways.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                class: "Class A15",
                                capacity: "1.5 Tons Load",
                                target: "Pedestrian & Garden Zones",
                                desc: "Designed for footpaths, residential lawns, swimming pool decks, and private garden inspection chambers.",
                                color: "border-[#1B8036]/30"
                            },
                            {
                                class: "Class B125",
                                capacity: "12.5 Tons Load",
                                target: "Car Parking & Driveways",
                                desc: "Ideal for residential driveways, commercial parking spaces, footways, and light vehicular traffic zones.",
                                color: "border-[#1B8036]/50"
                            },
                            {
                                class: "Class C250",
                                capacity: "25 Tons Load",
                                target: "Petrol Stations & Service Roads",
                                desc: "Engineered for commercial gas stations, side gutters, industrial plant walkways, and service roads.",
                                color: "border-[#1B8036]/70"
                            },
                            {
                                class: "Class D400",
                                capacity: "40 Tons Load",
                                target: "Highways & Logistics Docks",
                                desc: "Heavy-duty rating certified for arterial highways, container freight stations, airport terminals, and docks.",
                                color: "border-[#1B8036]"
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`bg-[#F5F5F5] p-8 rounded-3xl border ${item.color} flex flex-col justify-between hover:border-[#1B8036] hover:shadow-lg transition-all duration-300`}
                            >
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="px-3 py-1 bg-[#1B8036] text-white text-[10px] font-black uppercase tracking-wider rounded-lg">
                                            {item.class}
                                        </span>
                                        <span className="text-xs font-black text-black">
                                            {item.capacity}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-black text-black uppercase tracking-tight mb-2">
                                        {item.target}
                                    </h3>
                                    <p className="text-xs text-black leading-relaxed font-medium">
                                        {item.desc}
                                    </p>
                                </div>
                                <button
                                    onClick={openModal}
                                    className="mt-6 w-full py-2.5 bg-white border border-[#1B8036] text-[#1B8036] hover:bg-[#1B8036] hover:text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all"
                                >
                                    Get Pricing
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- INTERACTIVE MATERIAL COMPARISON MATRIX --- */}
            <FRPComparisonMatrix />

            {/* --- GLOBAL EXPORT & SHIPPING SECTION --- */}
            <div className="bg-[#F5F5F5] py-14 md:py-24 border-b border-[#D9D9D9]/50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-6 space-y-6"
                        >
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFC700] text-[#0B1B3D] text-[10px] font-black uppercase tracking-wider">
                                <Globe size={12} /> International Export Hub
                            </span>
                            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-black uppercase tracking-tighter leading-tight">
                                FRP Cover Exporter & Global Supplier
                            </h2>
                            <p className="text-xs sm:text-base md:text-lg text-black leading-relaxed font-medium">
                                FLORTEK INDUSTRIES PVT. LTD. manufactures premium, export-grade composite covers tailored for harsh global climates. From our location in Rajkot, India, we arrange seaworthy shipping containers to primary ports worldwide.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                <div className="flex gap-3 items-start">
                                    <div className="p-3 bg-[#1B8036]/10 border border-[#1B8036]/20 rounded-xl text-[#1B8036] shrink-0">
                                        <Anchor size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-black uppercase tracking-tight text-sm">Seaworthy Palletizing</h4>
                                        <p className="text-xs text-black mt-0.5 font-medium leading-relaxed">Heavy shrink wrapping, steel-strapping, and edge protection to ensure zero transit damage.</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <div className="p-3 bg-[#1B8036]/10 border border-[#1B8036]/20 rounded-xl text-[#1B8036] shrink-0">
                                        <Truck size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-black uppercase tracking-tight text-sm">Fast Maritime Dispatch</h4>
                                        <p className="text-xs text-black mt-0.5 font-medium leading-relaxed">Direct FCL container routing via Mundra Port to Jebel Ali (UAE), Houston (USA), and European ports.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-6">
                                <Link to="/frp-cover-exporter" className="inline-flex items-center justify-center px-8 py-4 bg-[#1B8036] hover:bg-[#145C27] text-white font-black uppercase tracking-wider text-xs rounded-xl transition-all border border-[#1B8036] shadow-md">
                                    Request Export Quote <ArrowRight size={14} className="ml-2" />
                                </Link>
                                <a
                                    href="/brochure.pdf"
                                    download="Flortek_Export_Brochure.pdf"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-[#FFC700] hover:bg-[#E6B200] text-[#0B1B3D] font-extrabold uppercase tracking-wider text-xs rounded-xl transition-all border border-[#FFC700] shadow-md"
                                >
                                    <Download size={14} className="mr-2" /> Export Catalog
                                </a>
                            </div>
                        </motion.div>

                        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { title: "BS EN 124 Certified", desc: "Covers conform strictly to European load standards with full certification reports.", detail: "A15 to D400 Rating" },
                                { title: "SGS / TUV Inspection Ready", desc: "Third-party quality auditing is welcomed pre-shipment at our factory.", detail: "100% Quality Guaranteed" },
                                { title: "UV Stabilized Resilience", desc: "Specialized polymers built to withstand intense desert heat & UV rays.", detail: "Temp: -40°C to +80°C" },
                                { title: "OEM & ODM Services", desc: "Custom municipal logos, brand lettering, and custom sizing molds.", detail: "Tailored to Order" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white p-8 rounded-3xl border border-[#D9D9D9] flex flex-col justify-between hover:border-[#1B8036] shadow-sm transition-all"
                                >
                                    <div>
                                        <span className="text-[9px] font-black uppercase tracking-wider text-[#1B8036] block mb-3">{item.detail}</span>
                                        <h4 className="font-black text-black text-base mb-2 uppercase tracking-tight">{item.title}</h4>
                                        <p className="text-xs text-black leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* --- GOOGLE BUSINESS REVIEWS COMPONENT --- */}
            <GoogleReviews />

            {/* --- FAQ SECTION (BLACK & WHITE) --- */}
            <div className="bg-[#F5F5F5] py-24 border-t border-[#D9D9D9]/50">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFC700] text-[#0B1B3D] text-[10px] font-black uppercase tracking-[0.2em] mb-4">
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

            {/* --- CTA SECTION (BROCHURE GREEN) --- */}
            <div className="bg-[#1B8036] py-32 text-center px-6 relative overflow-hidden border-t border-[#145C27]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto relative z-10"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">Ready to upgrade?</h2>
                    <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                        Get in touch with our team for technical specifications, bulk pricing, or custom size requirements.
                    </p>
                    <button
                        onClick={openModal}
                        className="inline-block px-12 py-5 bg-white hover:bg-[#F5F5F5] text-[#0B1B3D] text-xs font-extrabold uppercase tracking-widest rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
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
    title: "FRP Square Manhole Covers",
    desc: "Premium-quality FRP square manhole covers designed for residential, commercial, municipal, and landscaping applications. Lightweight, corrosion-resistant, weatherproof, and engineered for long-lasting durability with excellent load-bearing performance.",
    load: "2.5 T / 5 T",
    image: "/images/square/FRP-24x24-2.5T-FW.png"
},
    {
        title: "Heavy Duty FRP Manhole Cover",
        desc: "High-strength FRP heavy-duty manhole cover engineered for municipal roads, industrial areas, commercial projects, and infrastructure applications. Corrosion-resistant, lightweight, and compliant with BS EN 124 standards.",
        load: "C250 / 25 T",
        image: "/images/900 X 900_124_C250.PNG"
    },
   {
    title: "FRP Round Manhole Covers",
    desc: "Premium-quality FRP round manhole covers designed for municipal, residential, commercial, and utility applications. Engineered for superior strength, corrosion resistance, weather protection, and long-lasting performance while ensuring safe and easy access to underground utility chambers.",
    load: "B125 / 12.5 T",
    image: "/images/circular/FRP 600 BS EN_124_B125.png"
},
    {
        title: "Heavy Duty FRP Traffic Manhole Covers",
        desc: "Premium heavy-duty FRP traffic manhole covers engineered for highways, industrial roads, cargo terminals, and high-load infrastructure. Designed for superior durability, corrosion resistance, and BS EN 124 D400 compliance.",
        load: "D400 / 40 T",
        image: "/images/FRP-600x600-D400-FLORTEK.jpg"
    },
    {
        title: "FRP Water Gully Grating Covers",
        desc: "High-performance FRP water gully grating covers designed for efficient stormwater drainage, road gutters, commercial complexes, and municipal infrastructure. Lightweight, corrosion-resistant, and built for long-lasting performance.",
        load: "2.5 T / 5 T / B125",
        image: "/images/GULLY COVER-5T-500x500-GRAY.png"
    },
   {
    title: "FRP Recessed Manhole Covers",
    desc: "Premium-quality FRP recessed manhole covers featuring a deep tray design for paving blocks, tiles, and stone infills. Ideal for residential, commercial, landscaping, and pedestrian areas, offering a seamless finish, corrosion resistance, and long-lasting durability.",
    load: "2.5 T / 5 T",
    image: "/images/recessed/RECESS COVER _ 450X450_2.5T_GRAY.jpg"
},
];

export default Home;
