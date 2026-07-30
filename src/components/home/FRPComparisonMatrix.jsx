import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ShieldAlert, Zap, Feather, ShieldCheck, Clock, Radio, ArrowRight } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

const comparisonData = [
    {
        category: "theft",
        feature: "Scrap Resale Value & Theft Risk",
        icon: ShieldAlert,
        frp: {
            text: "Zero Scrap Value (100% Anti-Theft Security)",
            detail: "FRP has no scrap metal resale value. Zero risk of cover theft or open chamber accidents.",
            status: true
        },
        castIron: {
            text: "High Scrap Value (Stolen Frequently)",
            detail: "Ductile/Cast iron covers are stolen repeatedly for scrap metal resale.",
            status: false
        },
        concrete: {
            text: "Zero Scrap Value (Low Theft Risk)",
            detail: "Not stolen for scrap, but frequently damaged by vandals.",
            status: false
        }
    },
    {
        category: "weight",
        feature: "Weight & Installation Ergonomics",
        icon: Feather,
        frp: {
            text: "70% Lighter (Single-Person Operation)",
            detail: "Lightweight polymer matrix allows easy 1-person opening & zero worker injury risks.",
            status: true
        },
        castIron: {
            text: "Extremely Heavy (Requires Crane / 3-4 Workers)",
            detail: "Heavy metal covers require specialized lifting tools and multiple workers.",
            status: false
        },
        concrete: {
            text: "Heavy & Brittle (Chipping Hazard)",
            detail: "Difficult to lift manually, prone to edge chipping during maintenance.",
            status: false
        }
    },
    {
        category: "corrosion",
        feature: "Chemical & Sewer Gas Corrosion",
        icon: Zap,
        frp: {
            text: "100% Acid, H2S & Saltwater Immune",
            detail: "Thermosetting resin is immune to sewer H2S gas, coastal saltwater, and industrial acids.",
            status: true
        },
        castIron: {
            text: "Severe Rusting & Pitting",
            detail: "Corrodes rapidly in sewer environments, locking covers in frames or rusting shut.",
            status: false
        },
        concrete: {
            text: "Crumbles Under Acidic H2S Gas",
            detail: "Sewer hydrogen sulfide gas converts into sulfuric acid, eating away concrete.",
            status: false
        }
    },
    {
        category: "lifespan",
        feature: "Expected Lifespan & UV Stability",
        icon: Clock,
        frp: {
            text: "30+ Years (UV-Stabilized Matrix)",
            detail: "Formulated with anti-UV additives for 30+ years of maintenance-free service.",
            status: true
        },
        castIron: {
            text: "3 to 5 Years in Coastal / Sewer Zones",
            detail: "Rusting and mechanical wear reduce effective operational life significantly.",
            status: false
        },
        concrete: {
            text: "2 to 4 Years (Prone to Structural Cracks)",
            detail: "Repeated vehicular impact causes micro-fractures and total slab collapse.",
            status: false
        }
    },
    {
        category: "rf",
        feature: "Smart City & RF Signal Transmission",
        icon: Radio,
        frp: {
            text: "100% RF Transparent (Smart City Ready)",
            detail: "Allows AMR water meters, IoT sensors & telecom signals to pass through cleanly.",
            status: true
        },
        castIron: {
            text: "Blocks Wireless & Cellular Signals",
            detail: "Dense iron acts as a Faraday cage, blocking wireless meter data transmission.",
            status: false
        },
        concrete: {
            text: "Attenuates High-Frequency Signals",
            detail: "Steel reinforcement rebar inside concrete disrupts smart meter antennas.",
            status: false
        }
    }
];

const FRPComparisonMatrix = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const { openModal } = useModal();

    const filteredData = selectedCategory === 'all'
        ? comparisonData
        : comparisonData.filter(item => item.category === selectedCategory);

    return (
        <section className="bg-[#F5F5F5] py-14 md:py-24 border-b border-[#D9D9D9]/50 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-16"
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-[#FFC700] text-[#0B1B3D] text-[10px] font-black uppercase tracking-widest mb-3 md:mb-4">
                        Material Comparison Matrix
                    </span>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-black uppercase tracking-tighter mb-3 md:mb-4">
                        Why Flortek FRP Beats Cast Iron & Concrete
                    </h2>
                    <div className="w-12 md:w-16 h-1 bg-[#1B8036] mx-auto rounded-full mb-4 md:mb-6"></div>
                    <p className="text-xs sm:text-base text-black max-w-2xl mx-auto font-medium leading-relaxed">
                        Compare structural performance, zero theft safety, weight ergonomics, and lifespan durability against traditional materials.
                    </p>
                </motion.div>

                {/* Category Filter Pills (Mobile Horizontal Scrollable Strip) */}
                <div className="flex overflow-x-auto no-scrollbar sm:flex-wrap justify-start sm:justify-center gap-2 mb-8 md:mb-12 pb-2 px-1 -mx-4 sm:mx-0 snap-x">
                    {[
                        { id: 'all', label: 'View All Metrics' },
                        { id: 'theft', label: '100% Anti-Theft' },
                        { id: 'weight', label: '70% Lighter Weight' },
                        { id: 'corrosion', label: 'Chemical & Rust Proof' },
                        { id: 'lifespan', label: '30+ Years Lifespan' },
                        { id: 'rf', label: 'Smart City RF Ready' }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setSelectedCategory(tab.id)}
                            className={`shrink-0 snap-start px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all border whitespace-nowrap ${selectedCategory === tab.id
                                ? 'bg-[#1B8036] text-white border-[#1B8036] shadow-sm'
                                : 'bg-white text-black border-[#D9D9D9] hover:border-[#1B8036] hover:text-[#1B8036]'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* COMPARISON CARDS / GRID */}
                <div className="space-y-6">
                    {filteredData.map((item, idx) => {
                        const IconComponent = item.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="bg-white rounded-3xl border border-[#D9D9D9] overflow-hidden shadow-sm hover:shadow-md transition-all"
                            >
                                {/* Metric Title Bar */}
                                <div className="bg-[#F5F5F5] px-6 py-4 border-b border-[#D9D9D9]/50 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-xl bg-[#1B8036]/10 text-[#1B8036] flex items-center justify-center border border-[#1B8036]/20">
                                        <IconComponent size={18} />
                                    </div>
                                    <h3 className="text-base font-black text-black uppercase tracking-tight">
                                        {item.feature}
                                    </h3>
                                </div>

                                {/* 3 Column Comparison Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#D9D9D9]/50">
                                    
                                    {/* COLUMN 1: FLORTEK FRP (HIGHLIGHTED RECOMMENDED) */}
                                    <div className="p-6 bg-[#1B8036]/5 relative flex flex-col justify-between">
                                        <div className="absolute top-3 right-3 px-2.5 py-0.5 bg-[#FFC700] text-[#0B1B3D] text-[9px] font-black uppercase tracking-wider rounded-md">
                                            RECOMMENDED
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-5 h-5 rounded-full bg-[#1B8036] text-white flex items-center justify-center shrink-0">
                                                    <Check size={12} strokeWidth={3} />
                                                </div>
                                                <h4 className="text-xs font-black uppercase tracking-wider text-[#1B8036]">
                                                    FLORTEK FRP COMPOSITE
                                                </h4>
                                            </div>
                                            <p className="text-sm font-black text-black mb-2">
                                                {item.frp.text}
                                            </p>
                                            <p className="text-xs text-black/80 font-medium leading-relaxed">
                                                {item.frp.detail}
                                            </p>
                                        </div>

                                        <div className="mt-4 pt-3 border-t border-[#1B8036]/20 flex items-center justify-between text-[10px] font-black uppercase text-[#1B8036]">
                                            <span>Superior Engineering</span>
                                            <ShieldCheck size={14} />
                                        </div>
                                    </div>

                                    {/* COLUMN 2: TRADITIONAL CAST IRON */}
                                    <div className="p-6 flex flex-col justify-between bg-white">
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                                                    <X size={12} strokeWidth={3} />
                                                </div>
                                                <h4 className="text-xs font-bold uppercase tracking-wider text-black/70">
                                                    CAST IRON / DUCTILE IRON
                                                </h4>
                                            </div>
                                            <p className="text-sm font-bold text-black mb-2">
                                                {item.castIron.text}
                                            </p>
                                            <p className="text-xs text-black/70 font-medium leading-relaxed">
                                                {item.castIron.detail}
                                            </p>
                                        </div>
                                        <div className="mt-4 pt-3 border-t border-[#D9D9D9]/40 text-[10px] font-bold uppercase text-red-600">
                                            High Lifetime Expense
                                        </div>
                                    </div>

                                    {/* COLUMN 3: PRECAST CONCRETE */}
                                    <div className="p-6 flex flex-col justify-between bg-white">
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                                                    <X size={12} strokeWidth={3} />
                                                </div>
                                                <h4 className="text-xs font-bold uppercase tracking-wider text-black/70">
                                                    PRECAST CONCRETE COVERS
                                                </h4>
                                            </div>
                                            <p className="text-sm font-bold text-black mb-2">
                                                {item.concrete.text}
                                            </p>
                                            <p className="text-xs text-black/70 font-medium leading-relaxed">
                                                {item.concrete.detail}
                                            </p>
                                        </div>
                                        <div className="mt-4 pt-3 border-t border-[#D9D9D9]/40 text-[10px] font-bold uppercase text-amber-700">
                                            Frequent Replacement Needed
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* BOTTOM CTA BANNER */}
                <div className="mt-12 p-8 bg-[#1B8036] rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg border border-[#145C27]">
                    <div>
                        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-2">
                            Ready to Replace Stolen or Rusted Covers?
                        </h3>
                        <p className="text-white/90 text-xs md:text-sm font-medium">
                            Contact Flortek for custom size molds, municipal branding, and bulk wholesale pricing.
                        </p>
                    </div>
                    <button
                        onClick={openModal}
                        className="px-8 py-4 bg-[#FFC700] hover:bg-[#E6B200] text-[#0B1B3D] font-extrabold uppercase tracking-wider text-xs rounded-xl transition-all shadow-md shrink-0 flex items-center gap-2 active:scale-95"
                    >
                        Get Instant Factory Quote <ArrowRight size={16} />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default FRPComparisonMatrix;
