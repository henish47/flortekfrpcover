import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { squareSizes, rectSizes, roundSizes, heavySizes, gulleySizes, recessedSizes } from '../../data/dimensions';

const SizeChart = () => {
    const [activeTab, setActiveTab] = useState('light');

    const tabs = [
        { id: 'light', label: 'Light & Medium Duty' },
        { id: 'heavy', label: 'Heavy Duty Range' },
        { id: 'gully', label: 'Water Gully Covers' },
        { id: 'recessed', label: 'Recessed Covers' },
    ];

    const SimpleTable = ({ headers, subHeaders, children, minWidth = "600px" }) => (
        <div className="rounded-xl overflow-hidden border border-black/10 shadow-sm mb-8 bg-white">
            <div className="overflow-x-auto">
                <table className="w-full text-sm" style={{ minWidth: minWidth }}>
                    <thead>
                        <tr className="bg-black text-white">
                            {headers.map((h, i) => (
                                <th key={i} colSpan={h.colSpan || 1} rowSpan={h.rowSpan || 1} className="py-4 px-2 md:px-4 font-bold text-center border-r border-white/10 last:border-r-0 uppercase tracking-wider whitespace-nowrap text-xs md:text-sm">
                                    {h.text}
                                </th>
                            ))}
                        </tr>
                        {subHeaders && (
                            <tr className="bg-[#F5F5F5] text-black">
                                {subHeaders.map((h, i) => (
                                    <th key={i} className="py-2 px-1 md:px-2 font-bold text-center border-r border-[#D9D9D9] last:border-r-0 text-[10px] md:text-xs whitespace-nowrap">
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        )}
                    </thead>
                    <tbody className="divide-y divide-[#D9D9D9]/50">
                        {children}
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <div className="space-y-8">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 p-1 bg-[#F5F5F5] rounded-2xl max-w-4xl mx-auto">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-3 rounded-xl text-sm font-bold transition-all flex-1 min-w-[150px] ${activeTab === tab.id
                            ? 'bg-white text-black shadow-sm'
                            : 'text-[#333333]/70 hover:text-black hover:bg-[#D9D9D9]/50'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                >
                    {/* 1. Light & Medium Duty Section */}
                    {activeTab === 'light' && (
                        <div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* Square */}
                                <div className="space-y-4">
                                    <div className="text-center">
                                        <h4 className="font-bold text-[#333333] uppercase tracking-wide">Square</h4>
                                        <p className="text-xs font-bold text-black uppercase tracking-wider">Load Capacity: 2.5 / 5.0 T</p>
                                    </div>
                                    <SimpleTable
                                        minWidth="0"
                                        headers={[{ text: "Outer Size", colSpan: 2 }, { text: "Clear Opening", colSpan: 2 }]}
                                        subHeaders={["MM", "Inch", "MM", "Inch"]}
                                    >
                                        {squareSizes.map((item, i) => (
                                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]/50"}>
                                                <td className="py-3 px-1 md:px-2 text-center font-semibold text-[#333333] text-xs md:text-sm">{item.mm}</td>
                                                <td className="py-3 px-1 md:px-2 text-center text-[#333333]/80 text-xs md:text-sm">{item.inch}</td>
                                                <td className="py-3 px-1 md:px-2 text-center font-semibold text-[#333333] border-l border-[#D9D9D9]/50 text-xs md:text-sm">{item.clearMm}</td>
                                                <td className="py-3 px-1 md:px-2 text-center text-[#333333]/80 text-xs md:text-sm">{item.clearInch}</td>
                                            </tr>
                                        ))}
                                    </SimpleTable>
                                </div>

                                {/* Rectangle */}
                                <div className="space-y-4">
                                    <div className="text-center">
                                        <h4 className="font-bold text-[#333333] uppercase tracking-wide">Rectangle</h4>
                                        <p className="text-xs font-bold text-black uppercase tracking-wider">Load Capacity: 2.5 / 5.0 T</p>
                                    </div>
                                    <SimpleTable
                                        minWidth="0"
                                        headers={[{ text: "Outer Size", colSpan: 2 }, { text: "Clear Opening", colSpan: 2 }]}
                                        subHeaders={["MM", "Inch", "MM", "Inch"]}
                                    >
                                        {rectSizes.map((item, i) => (
                                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]/50"}>
                                                <td className="py-3 px-1 md:px-2 text-center font-semibold text-[#333333] text-xs md:text-sm">{item.mm}</td>
                                                <td className="py-3 px-1 md:px-2 text-center text-[#333333]/80 text-xs md:text-sm">{item.inch}</td>
                                                <td className="py-3 px-1 md:px-2 text-center font-semibold text-[#333333] border-l border-[#D9D9D9]/50 text-xs md:text-sm">{item.clearMm}</td>
                                                <td className="py-3 px-1 md:px-2 text-center text-[#333333]/80 text-xs md:text-sm">{item.clearInch}</td>
                                            </tr>
                                        ))}
                                    </SimpleTable>
                                </div>

                                {/* Round */}
                                <div className="space-y-4">
                                    <div className="text-center">
                                        <h4 className="font-bold text-[#333333] uppercase tracking-wide">Round</h4>
                                        <p className="text-xs font-bold text-black uppercase tracking-wider">Load Capacity: 2.5 / 5.0 T</p>
                                    </div>
                                    <SimpleTable
                                        minWidth="0"
                                        headers={[{ text: "Outer Size", colSpan: 2 }, { text: "Clear Opening", colSpan: 2 }]}
                                        subHeaders={["MM", "Inch", "MM", "Inch"]}
                                    >
                                        {roundSizes.map((item, i) => (
                                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]/50"}>
                                                <td className="py-3 px-1 md:px-2 text-center font-semibold text-[#333333] text-xs md:text-sm">{item.mm}</td>
                                                <td className="py-3 px-1 md:px-2 text-center text-[#333333]/80 text-xs md:text-sm">{item.inch}</td>
                                                <td className="py-3 px-1 md:px-2 text-center font-semibold text-[#333333] border-l border-[#D9D9D9]/50 text-xs md:text-sm">{item.clearMm}</td>
                                                <td className="py-3 px-1 md:px-2 text-center text-[#333333]/80 text-xs md:text-sm">{item.clearInch}</td>
                                            </tr>
                                        ))}
                                    </SimpleTable>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 2. Heavy Duty SECTION */}
                    {activeTab === 'heavy' && (
                        <div className="max-w-4xl mx-auto">
                            <SimpleTable
                                headers={[{ text: "Frame Clear Opening Size", colSpan: 2 }, { text: "Load Capacity", rowSpan: 2 }]}
                                subHeaders={["MM", "Inch"]}
                            >
                                {heavySizes.map((item, i) => (
                                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]/50"}>
                                        <td className="py-3 px-4 text-center font-bold text-[#333333]">{item.mm}</td>
                                        <td className="py-3 px-4 text-center text-[#333333]/80">{item.inch}</td>
                                        {i === 0 && (
                                            <td rowSpan={heavySizes.length} className="py-3 px-4 text-center font-bold text-black border-l border-[#D9D9D9]/50 bg-[#F5F5F5]/50 align-middle">
                                                <div className="flex flex-col items-center gap-1">
                                                    <span>12.5 T</span>
                                                    <span>25 T</span>
                                                    <span>40 T</span>
                                                </div>
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </SimpleTable>
                        </div>
                    )}

                    {/* 3. Water Gulley SECTION */}
                    {activeTab === 'gully' && (
                        <div className="max-w-5xl mx-auto">
                            <div className="overflow-x-auto">
                                <SimpleTable
                                    headers={[
                                        { text: "Shape", rowSpan: 2 },
                                        { text: "Outer Frame", colSpan: 2 },
                                        { text: "Opening Size", colSpan: 2 },
                                        { text: "Cover Dimension", colSpan: 2 },
                                        { text: "Load", rowSpan: 2 }
                                    ]}
                                    subHeaders={["MM", "Inch", "MM", "Inch", "MM", "Inch"]}
                                >
                                    {gulleySizes.map((item, i) => (
                                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]/50"}>
                                            <td className="py-3 px-4 text-center font-bold text-black">{item.shape}</td>
                                            <td className="py-3 px-4 text-center text-[#333333] font-medium border-l border-[#D9D9D9]/50">{item.mm}</td>
                                            <td className="py-3 px-4 text-center text-[#333333]/80">{item.inch}</td>
                                            <td className="py-3 px-4 text-center text-[#333333] font-medium border-l border-[#D9D9D9]/50">{item.openMm}</td>
                                            <td className="py-3 px-4 text-center text-[#333333]/80">{item.openInch}</td>
                                            <td className="py-3 px-4 text-center text-[#333333] font-medium border-l border-[#D9D9D9]/50">{item.coverMm}</td>
                                            <td className="py-3 px-4 text-center text-[#333333]/80">{item.coverInch}</td>
                                            {i === 0 && (
                                                <td rowSpan={gulleySizes.length} className="py-3 px-4 text-center font-bold text-black border-l border-[#D9D9D9]/50 bg-[#F5F5F5]/50 align-middle">
                                                    2.5/5 T
                                                </td>
                                            )}
                                        </tr>
                                    ))}
                                </SimpleTable>
                            </div>
                        </div>
                    )}

                    {/* 4. Recessed SECTION */}
                    {activeTab === 'recessed' && (
                        <div className="max-w-3xl mx-auto">
                            <SimpleTable
                                headers={[
                                    { text: "Load Capacity", rowSpan: 2 },
                                    { text: "Frame Clear Opening", colSpan: 2 },
                                    { text: "Recess Depth", rowSpan: 2 }
                                ]}
                                subHeaders={["MM", "Inch"]}
                            >
                                {recessedSizes.map((item, i) => (
                                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]/50"}>
                                        {i === 0 && (
                                            <td rowSpan={recessedSizes.length} className="py-4 px-4 text-center font-bold text-black border-r border-[#D9D9D9]/50 bg-[#F5F5F5]">
                                                2.5 & 5.0 Tonnes
                                            </td>
                                        )}
                                        <td className="py-4 px-4 text-center font-medium text-[#333333]">{item.clearMm}</td>
                                        <td className="py-4 px-4 text-center text-[#333333]/80">{item.inch}</td>
                                        {i === 0 && (
                                            <td rowSpan={recessedSizes.length} className="py-4 px-4 text-center font-bold text-black border-l border-[#D9D9D9]/50 bg-[#F5F5F5]">
                                                35 MM & 65 MM
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </SimpleTable>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default SizeChart;
