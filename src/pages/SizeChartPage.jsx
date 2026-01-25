import React from 'react';
import Section from '../components/common/Section';
import SEO from '../components/common/SEO';
import SizeChart from '../components/products/SizeChart';
import { motion } from 'framer-motion';

const SizeChartPage = () => {
    return (
        <div className="pt-0 bg-background min-h-screen">
            <SEO
                title="Standard Sizes & Specifications | Flortek Industries"
                description="View our complete range of standard sizes for FRP/BMC/SMC manhole covers, gully covers, and recessed covers."
                keywords="manhole cover sizes, frp cover dimensions, gully cover sizes, recessed cover sizes"
            />

            {/* Hero Section */}
            <div className="relative py-20 px-4 bg-gradient-to-br from-[#109148] to-[#0c7539] text-center overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFC107] rounded-full blur-[100px] -mr-40 -mt-40"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#000] rounded-full blur-[100px] -ml-40 -mb-40"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
                            Technical Data & <br /> <span className="text-[#FFC107]">Dimensions</span>
                        </h1>
                        <p className="text-green-50 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                            Comprehensive size charts for our entire range of Light, Medium, and Heavy-duty manhole covers.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Size Chart Container */}
            <Section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100">
                        <SizeChart />
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default SizeChartPage;
