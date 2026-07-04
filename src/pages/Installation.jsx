import React from 'react';
import Section from '../components/common/Section';
import SEO from '../components/common/SEO';
import { motion } from 'framer-motion';
import { Hammer, AlertTriangle, ShieldCheck, Ruler, Clock } from 'lucide-react';

const Installation = () => {
    return (
        <div className="bg-white min-h-screen font-sans">
            <SEO
                title="How to Install FRP Manhole Covers | BS EN 124 Technical Guide"
                description="Technical step-by-step guide for proper seating and concrete embedding of composite FRP and GRP manhole covers to ensure BS EN 124 load test capacity."
                keywords="manhole cover installation guide, how to install FRP cover, sewage chamber frame embedding, BS EN 124 load testing, M-20 concrete frame backing, Flortek installation guidelines"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "HowTo",
                    "name": "How to Install FRP Manhole Covers properly",
                    "description": "Step-by-step technical guide for civil contractors to install Fiber Reinforced Plastic (FRP) manhole covers conforming to BS EN 124 standards.",
                    "image": "https://www.flortekfrpcover.com/images/technical/installation-fig2.png",
                    "totalTime": "PT48H",
                    "step": [
                        {
                            "@type": "HowToStep",
                            "position": 1,
                            "name": "Check Clear Opening & Ground Level",
                            "text": "Ensure the clear opening of the frame is not smaller than that of the chamber. Verify the top level of the frame matches the final ground or road level.",
                            "image": "https://www.flortekfrpcover.com/images/technical/installation-fig1.png",
                            "url": "https://www.flortekfrpcover.com/installation#step-1"
                        },
                        {
                            "@type": "HowToStep",
                            "position": 2,
                            "name": "Prepare Concrete Bedding",
                            "text": "Prepare a solid concrete bedding taking into consideration the height of the frame flange.",
                            "url": "https://www.flortekfrpcover.com/installation#step-2"
                        },
                        {
                            "@type": "HowToStep",
                            "position": 3,
                            "name": "Embed Frame in M-20 Concrete",
                            "text": "The frame must be embedded in a minimum of M-20 grade concrete. Ensure the bedding offers full support to the frame's load-bearing flange.",
                            "image": "https://www.flortekfrpcover.com/images/technical/installation-fig2.png",
                            "url": "https://www.flortekfrpcover.com/installation#step-3"
                        },
                        {
                            "@type": "HowToStep",
                            "position": 4,
                            "name": "Reinforce Unsupported Sections",
                            "text": "If a section of the frame is not supported by solid ground, install a reinforced concrete (RCC) beam of minimum M-20 grade and at least 100mm height under the unsupported section.",
                            "url": "https://www.flortekfrpcover.com/installation#step-4"
                        },
                        {
                            "@type": "HowToStep",
                            "position": 5,
                            "name": "Curing / Concrete Setting Time",
                            "text": "Allow the concrete to set and cure for a minimum of 48 hours before exposing the manhole cover to vehicular or pedestrian traffic.",
                            "url": "https://www.flortekfrpcover.com/installation#step-5"
                        }
                    ]
                }}
                canonicalUrl="https://www.flortekfrpcover.com/installation"
            />

            {/* Hero Section */}
            <div className="relative py-20 px-4 bg-black text-center overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] -ml-40 -mt-40"></div>
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] -mr-40 -mb-40"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
                            Installation & <br /> <span className="text-[#D9D9D9]">Technical Data</span>
                        </h1>
                        <p className="text-[#D9D9D9] text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
                            Ensuring structural integrity through proper load testing and installation protocols.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content Container */}
            <Section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 space-y-16">

                    {/* 1. Load Testing Standards */}
                    <div className="bg-[#F5F5F5] rounded-[3rem] p-8 md:p-12 border border-[#D9D9D9]">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-white border border-[#D9D9D9]/50 flex items-center justify-center text-black shadow-sm">
                                <ShieldCheck size={28} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-black text-black">Load Testing Standards</h2>
                        </div>

                        <div className="prose prose-slate max-w-none text-[#333333] font-medium leading-relaxed space-y-6">
                            <p>
                                <strong>FLORTEK FRP</strong> products are tested for <strong>2.5 tons, 5 tons, B125 (12.5 tons), and C250 (25 tons)</strong> class load bearing and permanent set as per <strong>BS EN 124-1-2015</strong>.
                            </p>
                            <p>
                                BS EN 124 is a testing code worldwide for Manhole Covers in Cast iron, Ductile Iron and other materials also. Permanent Set is a multiple loading test to determine the permanent deformation in cover after multiple loading within a short time as specified in the code.
                            </p>

                            <div className="bg-white p-6 rounded-2xl border-l-4 border-black my-6 shadow-sm">
                                <p className="mb-4">
                                    The selection of the appropriate class is the <strong>responsibility of the Engineer and Designer</strong>. Where there is any doubt of load bearing capacity, the stronger class should be selected.
                                </p>
                                <p className="mb-4">
                                    Manhole covers and gulley grates installed should meet the requirements of the Standard BS EN 124. This applies to all situations, on and off-road and to all materials.
                                </p>
                                <p>
                                    Products designed to BS EN 124 are grouped and classified depending on their place of installation. It is the responsibility of the engineer to ensure that the correct product is specified. The appropriate class of manhole cover or gully cover to be used depends upon the place of installation.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 2. Installation Procedure */}
                    <div className="bg-[#F5F5F5] rounded-[3rem] p-8 md:p-12 border border-[#D9D9D9] relative overflow-hidden">
                        <div className="flex items-center gap-4 mb-10 relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-white border border-[#D9D9D9]/50 flex items-center justify-center text-black shadow-sm">
                                <Hammer size={28} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-black text-black">Installation Procedure</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 relative z-10 mb-12">
                            <ul className="space-y-6 text-[#333333] font-medium leading-relaxed list-none">
                                <li className="flex gap-4">
                                    <span className="shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">1</span>
                                    <span>
                                        Clear opening of the frame should not be smaller than that of the chamber. Make sure the top level of the frame should match the ground level.
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">2</span>
                                    <span>
                                        Prepare concrete bed considering height of the frame.
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">3</span>
                                    <span>
                                        Frame should be embedded in minimum <strong>M-20 grade concrete</strong>.
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">4</span>
                                    <span>
                                        In case a section of frame is not supported with solid ground, a RCC beam (Min M-20 grade) not less than 100mm in height must be installed for resting bellow unsupported section.
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">!</span>
                                    <span>
                                        A frame should be allowed to set in concrete for a minimum time of <strong>48 hrs</strong> before its use.
                                    </span>
                                </li>
                            </ul>

                            {/* Alert Box */}
                            <div className="bg-white p-6 rounded-3xl border border-[#D9D9D9]/50 flex flex-col justify-center text-center shadow-sm">
                                <AlertTriangle className="mx-auto text-black mb-4" size={40} />
                                <h4 className="font-bold text-black mb-2">Critical Warning</h4>
                                <p className="text-sm text-[#333333]">
                                    Improper installation is the leading cause of premature failure. Ensure concrete bed provides full support to the frame flange.
                                </p>
                            </div>
                        </div>

                        {/* Visual Diagrams Section */}
                        <div className="mt-12 relative z-10 border-t border-[#D9D9D9]/50 pt-10">
                            <h3 className="font-bold text-black mb-8 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-black"></span> Technical Diagrams
                            </h3>

                            <div className="space-y-12">
                                {/* Diagram 1 */}
                                <div className="bg-white rounded-2xl p-4 border border-[#D9D9D9]/50 shadow-sm">
                                    <img
                                        src="/images/technical/installation-fig1.png"
                                        alt="Frame Leveling Diagram for FRP Composite Manhole Cover Installation"
                                        className="w-full h-auto object-contain mix-blend-multiply"
                                    />
                                    <p className="text-center text-xs font-bold text-[#333333]/80 mt-4 uppercase tracking-widest">
                                        Fig 1: Frame Leveling with Ground
                                    </p>
                                </div>

                                {/* Diagram 2 */}
                                <div className="bg-white rounded-2xl p-4 border border-[#D9D9D9]/50 shadow-sm">
                                    <img
                                        src="/images/technical/installation-fig2.png"
                                        alt="Proper Concrete Bedding for Heavy Duty FRP Frame Seating"
                                        className="w-full h-auto object-contain mix-blend-multiply"
                                    />
                                    <p className="text-center text-xs font-bold text-[#333333]/80 mt-4 uppercase tracking-widest">
                                        Fig 2: Proper Concrete Bedding
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Section>
        </div>
    );
};

export default Installation;
