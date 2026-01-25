import React from 'react';
import Section from '../components/common/Section';
import SEO from '../components/common/SEO';
import { motion } from 'framer-motion';
import { Hammer, AlertTriangle, ShieldCheck, Ruler, Clock } from 'lucide-react';

const Installation = () => {
    return (
        <div className=" bg-background min-h-screen">
            <SEO
                title="Installation Guide & Load Testing | Flortek Industries"
                description="Technical guide on correct installation procedures and load testing standards (BS EN 124) for Flortek FRP/GRP manhole covers."
                keywords="manhole cover installation, BS EN 124 testing, FRP cover installation guide, load testing manhole covers"
            />

            {/* Hero Section */}
            <div className="relative py-20 px-4 bg-gradient-to-br from-[#109148] to-[#0c7539] text-center overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FFC107] rounded-full blur-[100px] -ml-40 -mt-40"></div>
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#000] rounded-full blur-[100px] -mr-40 -mb-40"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
                            Installation & <br /> <span className="text-[#FFC107]">Technical Data</span>
                        </h1>
                        <p className="text-green-50 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
                            Ensuring structural integrity through proper load testing and installation protocols.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content Container */}
            <Section className="py-20 bg-slate-50">
                <div className="max-w-5xl mx-auto px-4 space-y-16">

                    {/* 1. Load Testing Standards (Text provided by user) */}
                    <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-[#FFC107]/20 flex items-center justify-center text-[#d4a007]">
                                <ShieldCheck size={28} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-black text-slate-900">Load Testing Standards</h2>
                        </div>

                        <div className="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed space-y-6">
                            <p>
                                <strong>FLORTEK FRP</strong> products are tested for <strong>2.5 tons, 5 tons, B125 (12.5 tons), and C250 (25 tons)</strong> class load bearing and permanent set as per <strong>BS EN 124-1-2015</strong>.
                            </p>
                            <p>
                                BS EN 124 is a testing code worldwide for Manhole Covers in Cast iron, Ductile Iron and other materials also. Permanent Set is a multiple loading test to determine the permanent deformation in cover after multiple loading within a short time as specified in the code.
                            </p>

                            <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-[#109148] my-6">
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

                    {/* 2. Installation Procedure (Text provided by user) */}
                    <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden">
                        <div className="flex items-center gap-4 mb-10 relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-[#109148]/10 flex items-center justify-center text-[#109148]">
                                <Hammer size={28} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-black text-slate-900">Installation Procedure</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 relative z-10 mb-12">
                            <ul className="space-y-6 text-slate-600 font-medium leading-relaxed list-none">
                                <li className="flex gap-4">
                                    <span className="shrink-0 w-8 h-8 rounded-full bg-[#109148]/10 text-[#109148] flex items-center justify-center font-bold text-sm">1</span>
                                    <span>
                                        Clear opening of the frame should not be smaller than that of the chamber. Make sure the top level of the frame should match the ground level.
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="shrink-0 w-8 h-8 rounded-full bg-[#109148]/10 text-[#109148] flex items-center justify-center font-bold text-sm">2</span>
                                    <span>
                                        Prepare concrete bed considering height of the frame.
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="shrink-0 w-8 h-8 rounded-full bg-[#109148]/10 text-[#109148] flex items-center justify-center font-bold text-sm">3</span>
                                    <span>
                                        Frame should be embedded in minimum <strong>M-20 grade concrete</strong>.
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="shrink-0 w-8 h-8 rounded-full bg-[#109148]/10 text-[#109148] flex items-center justify-center font-bold text-sm">4</span>
                                    <span>
                                        In case a section of frame is not supported with solid ground, a RCC beam (Min M-20 grade) not less than 100mm in height must be installed for resting bellow unsupported section.
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="shrink-0 w-8 h-8 rounded-full bg-[#FFC107]/20 text-[#d4a007] flex items-center justify-center font-bold text-sm">!</span>
                                    <span>
                                        A frame should be allowed to set in concrete for a minimum time of <strong>48 hrs</strong> before its use.
                                    </span>
                                </li>
                            </ul>

                            {/* Alert Box */}
                            <div className="bg-[#FFC107]/5 p-6 rounded-3xl border border-[#FFC107]/20 flex flex-col justify-center text-center">
                                <AlertTriangle className="mx-auto text-[#d4a007] mb-4" size={40} />
                                <h4 className="font-bold text-slate-800 mb-2">Critical Warning</h4>
                                <p className="text-sm text-slate-600">
                                    Improper installation is the leading cause of premature failure. Ensure concrete bed provides full support to the frame flange.
                                </p>
                            </div>
                        </div>

                        {/* Visual Diagrams Section */}
                        <div className="mt-12 relative z-10 border-t border-slate-100 pt-10">
                            <h3 className="font-bold text-slate-800 mb-8 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#109148]"></span> Technical Diagrams
                            </h3>

                            <div className="space-y-12">
                                {/* Diagram 1 */}
                                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                                    <img
                                        src="/images/technical/installation-fig1.png"
                                        alt="Frame Leveling Diagram"
                                        className="w-full h-auto object-contain mix-blend-multiply"
                                    />
                                    <p className="text-center text-xs font-bold text-slate-400 mt-4 uppercase tracking-widest">
                                        Fig 1: Frame Leveling with Ground
                                    </p>
                                </div>

                                {/* Diagram 2 */}
                                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                                    <img
                                        src="/images/technical/installation-fig2.png"
                                        alt="Concrete Bedding Diagram"
                                        className="w-full h-auto object-contain mix-blend-multiply"
                                    />
                                    <p className="text-center text-xs font-bold text-slate-400 mt-4 uppercase tracking-widest">
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
