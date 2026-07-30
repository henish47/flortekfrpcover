import React from 'react';
import Section from '../components/common/Section';
import SEO from '../components/common/SEO';
import SizeChart from '../components/products/SizeChart';
import { motion } from 'framer-motion';

const SizeChartPage = () => {
    return (
        <div className="pt-0 bg-white min-h-screen font-sans">
            <SEO
                title="Standard Sizes, Weights & Dimensions | FLORTEK INDUSTRIES PVT. LTD."
                description="View our complete range of standard sizes, load capacity, and weights for FRP/BMC/SMC manhole covers, gully covers, and recessed covers."
                keywords="FRP manhole cover dimensions, composite cover clear opening chart, GRP cover load class specs, 10x10, 12x12, 18x18, 24x24, 24x36, 600x600, 450x450, EN 124 load test sizes, chamber cover weight chart"
            />

            {/* Hero Section */}
            <div className="relative py-20 px-4 bg-[#1B8036] text-center overflow-hidden border-b border-[#145C27]">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] -mr-40 -mt-40"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] -ml-40 -mb-40"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
                            Technical Data & <br /> <span className="text-[#FFC700]">Specifications</span>
                        </h1>
                        <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                            Comprehensive sizing charts, product weights, and load capacity for our entire range of Light, Medium, and Heavy Duty covers.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Size Chart Container */}
            <Section className="py-16 bg-[#F5F5F5]/30">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-[#F5F5F5] rounded-[2rem] md:rounded-[3rem] p-4 sm:p-8 md:p-12 border border-[#D9D9D9]">
                        <SizeChart />
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default SizeChartPage;
