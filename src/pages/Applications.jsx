import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import { Building2, Factory, Home as HomeIcon, Truck, Zap, ArrowRight, HardHat, CheckCircle } from 'lucide-react';
import SEO from '../components/common/SEO';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { useModal } from '../context/ModalContext';



const loadClasses = [
    {
        id: "A15",
        load: "2.5 / 5 TONNE",
        title: "Pedestrian Areas",
        desc: "Ideal for footpaths, gardens, and residential courtyards with zero vehicular traffic.",
        color: "emerald"
    },
    {
        id: "B125",
        load: "12.5 TONNE",
        title: "Medium Duty Roads",
        desc: "Footways, car parks or parking decks with occasional vehicle access.",
        color: "blue"
    },
    {
        id: "C250",
        load: "25 TONNE",
        title: "Heavy Traffic",
        desc: "Kerb side channels of roads, petrol pumps, and parking areas for heavy vehicles.",
        color: "orange"
    },
    {
        id: "D400",
        load: "40 TONNE",
        title: "Industrial Grade",
        desc: "Main carriage ways, highways, and industrial estates with heavy moving loads.",
        color: "red"
    }
];

const Applications = () => {
    const { openModal } = useModal();
    return (
        <div className=" bg-background overflow-hidden">
            <SEO
                title="Industrial & Municipal Applications | Flortek Industries"
                description="Explore versatile application areas of Flortek FRP manhole covers. From high-speed highways to premium residential complexes."
                keywords="highway manhole covers, industrial drainage solutions, residential manhole covers, FRP applications"
            />

            {/* Premium Hero Section - GREEN/YELLOW Themed */}
            <div className="relative min-h-[60vh] flex items-center justify-center py-24 px-4 overflow-hidden bg-gradient-to-br from-[#109148] to-[#0c7539]">
                <div className="absolute inset-0 z-0 opacity-20 hidden md:block">
                    {/* Optional: Pattern Overlay */}
                    <div className="absolute inset-0 bg-[#000000] opacity-10" style={{ backgroundImage: 'radial-gradient(#FFC107 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFC107]/20 border border-[#FFC107]/30 text-[#FFC107] text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                            Engineering the Future
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
                            Built For <br /><span className="text-[#FFC107] italic">Every Purpose.</span>
                        </h1>
                        <p className="text-green-50 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed mb-10">
                            From the chemical rigor of industrial plants to the aesthetic demands of luxury townships, Flortek solutions are engineered to outperform.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <Link to="/products">
                                <Button className="bg-[#FFC107] hover:bg-yellow-300 text-slate-900 px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-2xl shadow-yellow-500/20 active:scale-95 transition-all">
                                    View Product Range
                                </Button>
                            </Link>
                            <Button onClick={openModal} variant="outline" className="text-white border-white/20 hover:bg-white/10 px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest active:scale-95">
                                Contact Experts
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFC107]/10 rounded-full blur-[120px]" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#109148]/30 rounded-full blur-[120px]" />
            </div>



            {/* Load Classifications - Visual Comparison - WHITE THEME */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#109148]/5 rounded-full blur-[100px] -mr-40 -mt-40"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <h4 className="text-[#109148] font-black uppercase tracking-[0.4em] text-[10px] mb-6">Load Classifications</h4>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">Strength for Every Drive</h2>
                        <p className="text-slate-500 max-w-xl mx-auto font-medium text-lg">We strictly adhere to IS 1726 & BS EN 124 standards to ensure structural integrity across four primary load grades.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {loadClasses.map((item, id) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: id * 0.1 }}
                                key={id}
                                className="relative bg-slate-50/50 border border-slate-100 rounded-[2.5rem] p-8 group hover:border-[#FFC107] hover:shadow-xl hover:shadow-[#FFC107]/10 hover:bg-white transition-all duration-300"
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-white border border-slate-100 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                    <span className="text-[#109148] font-black text-lg">{item.id}</span>
                                </div>
                                <h4 className="text-[#FFC107] font-black text-[10px] uppercase tracking-widest mb-3 shadow-sm drop-shadow-sm brightness-95">{item.load}</h4>
                                <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-[#109148] transition-colors">{item.title}</h3>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Installation - High Technical Experience - LIGHT THEME */}
            <section className="py-40 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <span className="inline-flex items-center gap-3 bg-slate-100 text-slate-800 px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest mb-10 border border-slate-200">
                                <HardHat size={14} className="text-[#109148]" /> Technical Guide
                            </span>
                            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-10 tracking-tighter leading-none">Precision <br />Installation Matters</h2>
                            <p className="text-slate-500 text-lg font-medium mb-12 leading-relaxed">
                                Proper frame seating is critical for the long-term performance and safety of FRP manhole covers. Follow our engineered protocol for maximum durability.
                            </p>

                            <div className="space-y-10">
                                {[
                                    { id: "01", text: "Match the top frame level precisely with the final road or pavement level." },
                                    { id: "02", text: "Prepare a high-grade concrete bed (M-30 Grade) considering the frame height." },
                                    { id: "03", text: "Allow the frame to set undisturbed for at least 48 hours before opening to traffic." },
                                    { id: "04", text: "Ensure full radial support. The frame itself is not load-bearing without concrete backing." }
                                ].map((step, sIdx) => (
                                    <div key={sIdx} className="flex gap-8 group">
                                        <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 text-[#109148] font-black flex items-center justify-center shrink-0 group-hover:bg-[#109148] group-hover:text-white group-hover:shadow-xl group-hover:shadow-[#109148]/20 transition-all duration-300">
                                            {step.id}
                                        </div>
                                        <p className="text-lg text-slate-700 font-bold leading-relaxed pt-2">
                                            {step.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="relative z-10 bg-slate-50 p-6 rounded-[4rem] border border-slate-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden"
                            >
                                <img
                                    src="/images/technical/installation.png"
                                    alt="Installation Diagram"
                                    className="w-full h-auto rounded-[3rem] shadow-sm mix-blend-multiply"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#109148]/5 to-transparent pointer-events-none" />
                            </motion.div>
                            {/* Visual Decorators */}
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#109148]/5 rounded-full blur-3xl z-0" />
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#FFC107]/5 rounded-full blur-3xl z-0" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA Banner - YELLOW THEME */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="relative bg-[#FFC107] rounded-[4rem] p-12 md:p-24 overflow-hidden shadow-2xl">
                        {/* Decorative Patterns */}
                        <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
                            <div className="absolute inset-0 bg-white/10 opacity-50 pattern-grid-lg"></div>
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                            <div className="max-w-2xl">
                                <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">Ready to Implement Flortek Excellence?</h3>
                                <p className="text-slate-800 text-lg font-bold mb-0 opacity-80">Contact our technical department for custom application designs and loading grade consultations.</p>
                            </div>
                            <div className="flex gap-6 shrink-0">
                                <Button onClick={openModal} className="bg-slate-900 text-white hover:bg-slate-800 px-12 py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl hover:scale-105 transition-transform">
                                    Get Technical Support
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Applications;
