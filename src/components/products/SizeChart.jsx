import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    lightDutySquare,
    lightDutyRect,
    lightDutyRound,
    heavyDutyBCSquare,
    heavyDutyBCRect,
    heavyDutyBCRound,
    heavyDutyDSquare,
    heavyDutyDRect,
    heavyDutyDRound,
    recessedCovers,
    gulleyCovers
} from '../../data/dimensions';

const SizeChart = () => {
    const [activeTab, setActiveTab] = useState('light');
    const [subTab, setSubTab] = useState('square'); // 'square', 'rect', 'round'
    const [heavySubTab, setHeavySubTab] = useState('bc'); // 'bc' (B125 & C250), 'd400' (D400)
    const [gulleySubTab, setGulleySubTab] = useState('Pedestrian / Light Duty'); // 'Pedestrian / Light Duty', '2.5 T', '5.0 T', 'B125'

    const mainTabs = [
        { id: 'light', label: 'Light & Medium Duty' },
        { id: 'heavy', label: 'Heavy Duty Range' },
        { id: 'recessed', label: 'Recessed Covers' },
        { id: 'gulley', label: 'Water Gulley Covers' },
    ];

    const shapeTabs = [
        { id: 'square', label: 'Square Shape' },
        { id: 'rect', label: 'Rectangle Shape' },
        { id: 'round', label: 'Round Shape' },
    ];

    const TableWrapper = ({ children }) => (
        <div className="space-y-2 mb-8">
            <div className="flex md:hidden items-center justify-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-[#333333]/55 bg-[#F5F5F5] py-2 px-3 rounded-lg border border-[#D9D9D9]/40 w-fit mx-auto animate-pulse">
                <span>Swipe left / right to view dimensions</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 8 4 4-4 4"/><path d="M2 12h20"/><path d="m6 8-4 4 4 4"/></svg>
            </div>
            <div className="rounded-3xl overflow-hidden border border-[#D9D9D9] shadow-sm bg-white">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[340px] md:min-w-0">
                        {children}
                    </table>
                </div>
            </div>
        </div>
    );

    return (
        <div className="space-y-10">
            {/* Main Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-white rounded-2xl max-w-4xl mx-auto border border-[#D9D9D9]">
                {mainTabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => {
                            setActiveTab(tab.id);
                            // Reset subtabs
                            if (tab.id === 'light') setSubTab('square');
                            if (tab.id === 'heavy') {
                                setSubTab('square');
                                setHeavySubTab('bc');
                            }
                            if (tab.id === 'gulley') setGulleySubTab('Pedestrian / Light Duty');
                        }}
                        className={`px-5 py-3 rounded-xl text-xs md:text-sm font-bold transition-all flex-grow text-center ${activeTab === tab.id
                            ? 'bg-black text-white shadow-sm'
                            : 'text-[#333333] hover:text-black hover:bg-[#F5F5F5]'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                >
                    {/* Tab 1: Light & Medium Duty (2.5 T & 5.0 T) */}
                    {activeTab === 'light' && (
                        <div className="space-y-6">
                            {/* Shape Selector Sub-Tabs */}
                            <div className="flex justify-center gap-2 max-w-md mx-auto p-1 bg-[#F5F5F5] rounded-xl border border-[#D9D9D9]/60">
                                {shapeTabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setSubTab(tab.id)}
                                        className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all flex-1 text-center ${subTab === tab.id
                                            ? 'bg-white text-black shadow-sm'
                                            : 'text-[#333333]/70 hover:text-black'
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            <div className="text-center md:text-left md:flex md:justify-between md:items-end">
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#333333]/60">Manhole Covers</span>
                                    <h3 className="text-2xl font-black uppercase text-black">
                                        {subTab === 'square' ? 'Square' : subTab === 'rect' ? 'Rectangle' : 'Round'} Series (2.5T & 5.0T)
                                    </h3>
                                </div>
                                <p className="text-xs text-[#333333]/80 font-bold uppercase mt-2 md:mt-0 bg-[#F5F5F5] px-3 py-1 rounded-lg border border-[#D9D9D9]/50 w-fit mx-auto md:mx-0">
                                    Load Class: Light Duty / Medium Duty
                                </p>
                            </div>

                            <TableWrapper>
                                <thead>
                                    {/* Desktop Headers */}
                                    <tr className="hidden md:table-row bg-black text-white text-[11px] md:text-xs font-bold uppercase tracking-wider">
                                        <th className="py-4 px-4 text-center border-r border-white/10" colSpan={2}>Frame Outer Size</th>
                                        <th className="py-4 px-4 text-center border-r border-white/10" colSpan={2}>Frame Inner Size</th>
                                        <th className="py-4 px-4 text-center border-r border-white/10" rowSpan={2}>Weight / Pc</th>
                                        <th className="py-4 px-4 text-center" rowSpan={2}>Qty / Box</th>
                                    </tr>
                                    <tr className="hidden md:table-row bg-black text-white text-[10px] md:text-xs font-bold uppercase border-t border-white/10">
                                        <th className="py-2 px-3 text-center border-r border-white/10">INCH</th>
                                        <th className="py-2 px-3 text-center border-r border-white/10">MM</th>
                                        <th className="py-2 px-3 text-center border-r border-white/10">INCH</th>
                                        <th className="py-2 px-3 text-center">MM</th>
                                    </tr>
                                    {/* Mobile Headers */}
                                    <tr className="md:hidden bg-black text-white text-[10px] font-bold uppercase tracking-wider">
                                        <th className="py-3 px-2 text-center border-r border-white/10">Outer Size</th>
                                        <th className="py-3 px-2 text-center border-r border-white/10">Inner Size</th>
                                        <th className="py-3 px-2 text-center border-r border-white/10">Weight</th>
                                        <th className="py-3 px-2 text-center">Qty/Bx</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#D9D9D9]/50 text-xs md:text-sm font-semibold">
                                    {(subTab === 'square' ? lightDutySquare : subTab === 'rect' ? lightDutyRect : lightDutyRound).map((item, i) => (
                                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]/30 hover:bg-[#F5F5F5]/60 transition-colors"}>
                                            {/* Desktop dimension columns */}
                                            <td className="hidden md:table-cell py-3 px-4 text-center text-[#333333] border-r border-[#D9D9D9]/40">{item.outerInch}</td>
                                            <td className="hidden md:table-cell py-3 px-4 text-center text-black font-bold border-r border-[#D9D9D9]/40">{item.outerMm}</td>
                                            <td className="hidden md:table-cell py-3 px-4 text-center text-[#333333] border-r border-[#D9D9D9]/40">{item.innerInch}</td>
                                            <td className="hidden md:table-cell py-3 px-4 text-center text-black font-bold border-r border-[#D9D9D9]/40">{item.innerMm}</td>
                                            
                                            {/* Mobile combined Outer Size */}
                                            <td className="md:hidden py-3 px-2 text-center border-r border-[#D9D9D9]/40 text-black">
                                                <span className="block text-xs font-bold text-black">{item.outerMm}</span>
                                                <span className="block text-[9px] text-[#555555] font-normal">{item.outerInch}</span>
                                            </td>
                                            {/* Mobile combined Inner Size */}
                                            <td className="md:hidden py-3 px-2 text-center border-r border-[#D9D9D9]/40 text-black">
                                                <span className="block text-xs font-bold text-[#333333]">{item.innerMm}</span>
                                                <span className="block text-[9px] text-[#555555] font-normal">{item.innerInch}</span>
                                            </td>

                                            {/* Weight & Qty Box (Responsive Paddings) */}
                                            <td className="py-3 px-2 md:px-4 text-center text-[#333333] border-r border-[#D9D9D9]/40">
                                                {item.weight} <span className="text-[9px] text-[#555555] font-normal md:font-semibold md:text-xs">Kg</span>
                                            </td>
                                            <td className="py-3 px-2 md:px-4 text-center text-[#333333]">{item.qtyBox}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </TableWrapper>
                        </div>
                    )}

                    {/* Tab 2: Heavy Duty (B125 / C250 / D400) */}
                    {activeTab === 'heavy' && (
                        <div className="space-y-6">
                            {/* Class Sub-tabs */}
                            <div className="flex justify-center gap-4 max-w-lg mx-auto">
                                <button
                                    onClick={() => { setHeavySubTab('bc'); setSubTab('square'); }}
                                    className={`px-5 py-2.5 rounded-xl text-xs font-bold border transition-all ${heavySubTab === 'bc'
                                        ? 'bg-black text-white border-black shadow-sm'
                                        : 'bg-white text-black border-[#D9D9D9] hover:bg-[#F5F5F5]'
                                        }`}
                                >
                                    Class B125 & C250 (12.5 T & 25 T)
                                </button>
                                <button
                                    onClick={() => { setHeavySubTab('d400'); setSubTab('square'); }}
                                    className={`px-5 py-2.5 rounded-xl text-xs font-bold border transition-all ${heavySubTab === 'd400'
                                        ? 'bg-black text-white border-black shadow-sm'
                                        : 'bg-white text-black border-[#D9D9D9] hover:bg-[#F5F5F5]'
                                        }`}
                                >
                                    Class D400 (40 Tonnes)
                                </button>
                            </div>

                            {/* Shape Selector Sub-Tabs */}
                            <div className="flex justify-center gap-2 max-w-md mx-auto p-1 bg-[#F5F5F5] rounded-xl border border-[#D9D9D9]/60">
                                {shapeTabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setSubTab(tab.id)}
                                        className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all flex-1 text-center ${subTab === tab.id
                                            ? 'bg-white text-black shadow-sm'
                                            : 'text-[#333333]/70 hover:text-black'
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            <div className="text-center md:text-left md:flex md:justify-between md:items-end">
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#333333]/60">Heavy Duty Range</span>
                                    <h3 className="text-2xl font-black uppercase text-black">
                                        {subTab === 'square' ? 'Square' : subTab === 'rect' ? 'Rectangle' : 'Round'} Series (Heavy Duty)
                                    </h3>
                                </div>
                                <p className="text-xs text-[#333333]/80 font-bold uppercase mt-2 md:mt-0 bg-[#F5F5F5] px-3 py-1 rounded-lg border border-[#D9D9D9]/50 w-fit mx-auto md:mx-0">
                                    Load Class: {heavySubTab === 'bc' ? 'B125 / C250 (12.5 T / 25 T)' : 'D400 (40 T)'}
                                </p>
                            </div>

                            {heavySubTab === 'bc' ? (
                                <TableWrapper>
                                    <thead>
                                        {/* Desktop Headers */}
                                        <tr className="hidden md:table-row bg-black text-white text-[11px] md:text-xs font-bold uppercase tracking-wider">
                                            <th className="py-4 px-4 text-center border-r border-white/10" colSpan={2}>Frame Outer Size</th>
                                            <th className="py-4 px-4 text-center border-r border-white/10" colSpan={2}>Frame Inner Size</th>
                                            <th className="py-4 px-4 text-center" rowSpan={2}>Weight / Pc</th>
                                        </tr>
                                        <tr className="hidden md:table-row bg-black text-white text-[10px] md:text-xs font-bold uppercase border-t border-white/10">
                                            <th className="py-2 px-3 text-center border-r border-white/10">INCH</th>
                                            <th className="py-2 px-3 text-center border-r border-white/10">MM</th>
                                            <th className="py-2 px-3 text-center border-r border-white/10">INCH</th>
                                            <th className="py-2 px-3 text-center">MM</th>
                                        </tr>
                                        {/* Mobile Headers */}
                                        <tr className="md:hidden bg-black text-white text-[10px] font-bold uppercase tracking-wider">
                                            <th className="py-3 px-2 text-center border-r border-white/10">Outer Size</th>
                                            <th className="py-3 px-2 text-center border-r border-white/10">Inner Size</th>
                                            <th className="py-3 px-2 text-center">Weight</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#D9D9D9]/50 text-xs md:text-sm font-semibold">
                                        {(subTab === 'square' ? heavyDutyBCSquare : subTab === 'rect' ? heavyDutyBCRect : heavyDutyBCRound).map((item, i) => (
                                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]/30 hover:bg-[#F5F5F5]/60 transition-colors"}>
                                                {/* Desktop columns */}
                                                <td className="hidden md:table-cell py-3 px-4 text-center text-[#333333] border-r border-[#D9D9D9]/40">{item.outerInch}</td>
                                                <td className="hidden md:table-cell py-3 px-4 text-center text-black font-bold border-r border-[#D9D9D9]/40">{item.outerMm}</td>
                                                <td className="hidden md:table-cell py-3 px-4 text-center text-[#333333] border-r border-[#D9D9D9]/40">{item.innerInch}</td>
                                                <td className="hidden md:table-cell py-3 px-4 text-center text-black font-bold border-r border-[#D9D9D9]/40">{item.innerMm}</td>
                                                
                                                {/* Mobile combined Outer Size */}
                                                <td className="md:hidden py-3 px-2 text-center border-r border-[#D9D9D9]/40 text-black">
                                                    <span className="block text-xs font-bold text-black">{item.outerMm}</span>
                                                    <span className="block text-[9px] text-[#555555] font-normal">{item.outerInch}</span>
                                                </td>
                                                {/* Mobile combined Inner Size */}
                                                <td className="md:hidden py-3 px-2 text-center border-r border-[#D9D9D9]/40 text-black">
                                                    <span className="block text-xs font-bold text-[#333333]">{item.innerMm}</span>
                                                    <span className="block text-[9px] text-[#555555] font-normal">{item.innerInch}</span>
                                                </td>

                                                {/* Weight */}
                                                <td className="py-3 px-2 md:px-4 text-center text-[#333333]">
                                                    {item.weight} <span className="text-[9px] text-[#555555] font-normal md:font-semibold md:text-xs">Kg</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </TableWrapper>
                            ) : (
                                <TableWrapper>
                                    <thead>
                                        {/* Desktop Headers */}
                                        <tr className="hidden md:table-row bg-black text-white text-[11px] md:text-xs font-bold uppercase tracking-wider">
                                            <th className="py-4 px-4 text-center border-r border-white/10" colSpan={2}>Frame Outer Size</th>
                                            <th className="py-4 px-4 text-center border-r border-white/10" colSpan={2}>Frame Inner Size</th>
                                            <th className="py-4 px-4 text-center" rowSpan={2}>Weight / Pc</th>
                                        </tr>
                                        <tr className="hidden md:table-row bg-black text-white text-[10px] md:text-xs font-bold uppercase border-t border-white/10">
                                            <th className="py-2 px-3 text-center border-r border-white/10">INCH</th>
                                            <th className="py-2 px-3 text-center border-r border-white/10">MM</th>
                                            <th className="py-2 px-3 text-center border-r border-white/10">INCH</th>
                                            <th className="py-2 px-3 text-center">MM</th>
                                        </tr>
                                        {/* Mobile Headers */}
                                        <tr className="md:hidden bg-black text-white text-[10px] font-bold uppercase tracking-wider">
                                            <th className="py-3 px-2 text-center border-r border-white/10">Outer Size</th>
                                            <th className="py-3 px-2 text-center border-r border-white/10">Inner Size</th>
                                            <th className="py-3 px-2 text-center">Weight</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#D9D9D9]/50 text-xs md:text-sm font-semibold">
                                        {(subTab === 'square' ? heavyDutyDSquare : subTab === 'rect' ? heavyDutyDRect : heavyDutyDRound).map((item, i) => (
                                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]/30 hover:bg-[#F5F5F5]/60 transition-colors"}>
                                                {/* Desktop columns */}
                                                <td className="hidden md:table-cell py-3 px-4 text-center text-[#333333] border-r border-[#D9D9D9]/40">{item.outerInch}</td>
                                                <td className="hidden md:table-cell py-3 px-4 text-center text-black font-bold border-r border-[#D9D9D9]/40">{item.outerMm}</td>
                                                <td className="hidden md:table-cell py-3 px-4 text-center text-[#333333] border-r border-[#D9D9D9]/40">{item.innerInch}</td>
                                                <td className="hidden md:table-cell py-3 px-4 text-center text-black font-bold border-r border-[#D9D9D9]/40">{item.innerMm}</td>
                                                
                                                {/* Mobile combined Outer Size */}
                                                <td className="md:hidden py-3 px-2 text-center border-r border-[#D9D9D9]/40 text-black">
                                                    <span className="block text-xs font-bold text-black">{item.outerMm}</span>
                                                    <span className="block text-[9px] text-[#555555] font-normal">{item.outerInch}</span>
                                                </td>
                                                {/* Mobile combined Inner Size */}
                                                <td className="md:hidden py-3 px-2 text-center border-r border-[#D9D9D9]/40 text-black">
                                                    <span className="block text-xs font-bold text-[#333333]">{item.innerMm}</span>
                                                    <span className="block text-[9px] text-[#555555] font-normal">{item.innerInch}</span>
                                                </td>

                                                {/* Weight */}
                                                <td className="py-3 px-2 md:px-4 text-center text-[#333333]">
                                                    {item.weight} <span className="text-[9px] text-[#555555] font-normal md:font-semibold md:text-xs">Kg</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </TableWrapper>
                            )}
                        </div>
                    )}

                    {/* Tab 3: Recessed Covers (35 MM & 65 MM) */}
                    {activeTab === 'recessed' && (
                        <div className="space-y-6">
                            <div className="text-center md:text-left md:flex md:justify-between md:items-end">
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#333333]/60">Recessed Covers</span>
                                    <h3 className="text-2xl font-black uppercase text-black">Recessed Manhole Covers</h3>
                                </div>
                                <p className="text-xs text-[#333333]/80 font-bold uppercase mt-2 md:mt-0 bg-[#F5F5F5] px-3 py-1 rounded-lg border border-[#D9D9D9]/50 w-fit mx-auto md:mx-0">
                                    Depths: 35 MM & 65 MM
                                </p>
                            </div>

                            <TableWrapper>
                                <thead>
                                    {/* Desktop Headers */}
                                    <tr className="hidden md:table-row bg-black text-white text-[11px] md:text-xs font-bold uppercase tracking-wider">
                                        <th className="py-4 px-4 text-center border-r border-white/10" rowSpan={2}>Depth</th>
                                        <th className="py-4 px-4 text-center border-r border-white/10" colSpan={2}>Frame Outer Size</th>
                                        <th className="py-4 px-4 text-center border-r border-white/10" colSpan={2}>Frame Inner Opening</th>
                                        <th className="py-4 px-4 text-center" rowSpan={2}>Weight / Pc</th>
                                    </tr>
                                    <tr className="hidden md:table-row bg-black text-white text-[10px] md:text-xs font-bold uppercase border-t border-white/10">
                                        <th className="py-2 px-3 text-center border-r border-white/10">INCH</th>
                                        <th className="py-2 px-3 text-center border-r border-white/10">MM</th>
                                        <th className="py-2 px-3 text-center border-r border-white/10">MM</th>
                                        <th className="py-2 px-3 text-center">INCH</th>
                                    </tr>
                                    {/* Mobile Headers */}
                                    <tr className="md:hidden bg-black text-white text-[10px] font-bold uppercase tracking-wider">
                                        <th className="py-3 px-2 text-center border-r border-white/10">Depth</th>
                                        <th className="py-3 px-2 text-center border-r border-white/10">Outer Size</th>
                                        <th className="py-3 px-2 text-center border-r border-white/10">Inner Opening</th>
                                        <th className="py-3 px-2 text-center">Weight</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#D9D9D9]/50 text-xs md:text-sm font-semibold">
                                    {recessedCovers.map((item, i) => (
                                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]/30 hover:bg-[#F5F5F5]/60 transition-colors"}>
                                            {/* Shared columns */}
                                            <td className="py-3 px-2 md:px-4 text-center text-black font-bold border-r border-[#D9D9D9]/40">{item.depth}</td>
                                            
                                            {/* Desktop dimension columns */}
                                            <td className="hidden md:table-cell py-3 px-4 text-center text-[#333333] border-r border-[#D9D9D9]/40">{item.outerInch}</td>
                                            <td className="hidden md:table-cell py-3 px-4 text-center text-black font-bold border-r border-[#D9D9D9]/40">{item.outerMm}</td>
                                            <td className="hidden md:table-cell py-3 px-4 text-center text-black font-bold border-r border-[#D9D9D9]/40">{item.innerMm}</td>
                                            <td className="hidden md:table-cell py-3 px-4 text-center text-[#333333] border-r border-[#D9D9D9]/40">{item.innerInch}</td>
                                            
                                            {/* Mobile combined dimensions */}
                                            <td className="md:hidden py-3 px-2 text-center border-r border-[#D9D9D9]/40 text-black">
                                                <span className="block text-xs font-bold text-black">{item.outerMm}</span>
                                                <span className="block text-[9px] text-[#555555] font-normal">{item.outerInch}</span>
                                            </td>
                                            <td className="md:hidden py-3 px-2 text-center border-r border-[#D9D9D9]/40 text-black">
                                                <span className="block text-xs font-bold text-[#333333]">{item.innerMm}</span>
                                                <span className="block text-[9px] text-[#555555] font-normal">{item.innerInch}</span>
                                            </td>

                                            {/* Weight */}
                                            <td className="py-3 px-2 md:px-4 text-center text-[#333333]">
                                                {item.weight} <span className="text-[9px] text-[#555555] font-normal md:font-semibold md:text-xs">Kg</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </TableWrapper>
                        </div>
                    )}

                    {/* Tab 4: Water Gulley Covers */}
                    {activeTab === 'gulley' && (
                        <div className="space-y-6">
                            {/* Gulley Duty Selection */}
                            <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto bg-[#F5F5F5] p-1.5 rounded-xl border border-[#D9D9D9]/60">
                                {['Pedestrian / Light Duty', '2.5 T', '5.0 T', 'B125 (12.5 T)'].map((duty) => (
                                    <button
                                        key={duty}
                                        onClick={() => setGulleySubTab(duty)}
                                        className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all flex-1 text-center whitespace-nowrap ${gulleySubTab === duty
                                            ? 'bg-white text-black shadow-sm'
                                            : 'text-[#333333]/70 hover:text-black'
                                            }`}
                                    >
                                        {duty}
                                    </button>
                                ))}
                            </div>

                            <div className="text-center md:text-left md:flex md:justify-between md:items-end">
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#333333]/60">Drainage Solutions</span>
                                    <h3 className="text-2xl font-black uppercase text-black">Water Gulley Covers</h3>
                                </div>
                                <p className="text-xs text-[#333333]/80 font-bold uppercase mt-2 md:mt-0 bg-[#F5F5F5] px-3 py-1 rounded-lg border border-[#D9D9D9]/50 w-fit mx-auto md:mx-0">
                                    Duty Rating: {gulleySubTab}
                                </p>
                            </div>

                            <TableWrapper>
                                <thead>
                                    {/* Desktop Headers */}
                                    <tr className="hidden md:table-row bg-black text-white text-[11px] md:text-xs font-bold uppercase tracking-wider">
                                        <th className="py-4 px-4 text-center border-r border-white/10" rowSpan={2}>Shape</th>
                                        <th className="py-4 px-4 text-center border-r border-white/10" colSpan={2}>Frame Outer Size</th>
                                        <th className="py-4 px-4 text-center border-r border-white/10" colSpan={2}>Frame Inner Opening</th>
                                        <th className="py-4 px-4 text-center border-r border-white/10" colSpan={2}>Cover Size</th>
                                        <th className="py-4 px-4 text-center border-r border-white/10" rowSpan={2}>Cover Only Weight</th>
                                        <th className="py-4 px-4 text-center" rowSpan={2}>Cover With Frame Weight</th>
                                    </tr>
                                    <tr className="hidden md:table-row bg-black text-white text-[10px] md:text-xs font-bold uppercase border-t border-white/10">
                                        <th className="py-2 px-2 text-center border-r border-white/10">MM</th>
                                        <th className="py-2 px-2 text-center border-r border-white/10">INCH</th>
                                        <th className="py-2 px-2 text-center border-r border-white/10">MM</th>
                                        <th className="py-2 px-2 text-center border-r border-white/10">INCH</th>
                                        <th className="py-2 px-2 text-center border-r border-white/10">MM</th>
                                        <th className="py-2 px-2 text-center border-r border-white/10">INCH</th>
                                    </tr>
                                    {/* Mobile Headers */}
                                    <tr className="md:hidden bg-black text-white text-[10px] font-bold uppercase tracking-wider">
                                        <th className="py-3 px-1 text-center border-r border-white/10">Shape</th>
                                        <th className="py-3 px-1.5 text-center border-r border-white/10">Outer</th>
                                        <th className="py-3 px-1.5 text-center border-r border-white/10">Inner</th>
                                        <th className="py-3 px-1.5 text-center border-r border-white/10">Cover</th>
                                        <th className="py-3 px-1.5 text-center">Weight (C/F)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#D9D9D9]/50 text-xs font-semibold">
                                    {gulleyCovers.filter(item => item.duty.startsWith(gulleySubTab.split(' ')[0])).map((item, i) => (
                                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]/30 hover:bg-[#F5F5F5]/60 transition-colors"}>
                                            {/* Shared columns */}
                                            <td className="py-3 px-1 text-center text-black font-bold border-r border-[#D9D9D9]/40">{item.shape}</td>
                                            
                                            {/* Desktop dimension columns */}
                                            <td className="hidden md:table-cell py-3 px-3 text-center text-black font-bold border-r border-[#D9D9D9]/40">{item.outerMm}</td>
                                            <td className="hidden md:table-cell py-3 px-3 text-center text-[#333333] border-r border-[#D9D9D9]/40">{item.outerInch}</td>
                                            <td className="hidden md:table-cell py-3 px-3 text-center text-black font-bold border-r border-[#D9D9D9]/40">{item.innerMm}</td>
                                            <td className="hidden md:table-cell py-3 px-3 text-center text-[#333333] border-r border-[#D9D9D9]/40">{item.innerInch}</td>
                                            <td className="hidden md:table-cell py-3 px-3 text-center text-black font-bold border-r border-[#D9D9D9]/40">{item.coverMm}</td>
                                            <td className="hidden md:table-cell py-3 px-3 text-center text-[#333333] border-r border-[#D9D9D9]/40">{item.coverInch}</td>
                                            
                                            {/* Desktop weight columns */}
                                            <td className="hidden md:table-cell py-3 px-3 text-center text-[#333333] border-r border-[#D9D9D9]/40">{item.weightCoverOnly} Kg</td>
                                            <td className="hidden md:table-cell py-3 px-3 text-center text-[#333333]">{item.weightWithFrame} Kg</td>

                                            {/* Mobile combined dimension columns */}
                                            <td className="md:hidden py-3 px-1.5 text-center border-r border-[#D9D9D9]/40 text-black">
                                                <span className="block text-xs font-bold text-black">{item.outerMm}</span>
                                                <span className="block text-[9px] text-[#555555] font-normal">{item.outerInch}</span>
                                            </td>
                                            <td className="md:hidden py-3 px-1.5 text-center border-r border-[#D9D9D9]/40 text-[#333333]">
                                                <span className="block text-xs font-bold text-[#333333]">{item.innerMm}</span>
                                                <span className="block text-[9px] text-[#555555] font-normal">{item.innerInch}</span>
                                            </td>
                                            <td className="md:hidden py-3 px-1.5 text-center border-r border-[#D9D9D9]/40 text-[#333333]">
                                                <span className="block text-xs font-bold text-[#333333]">{item.coverMm}</span>
                                                <span className="block text-[9px] text-[#555555] font-normal">{item.coverInch}</span>
                                            </td>
                                            
                                            {/* Mobile combined weight column */}
                                            <td className="md:hidden py-3 px-1.5 text-center text-[#333333]">
                                                <span className="block text-[9px] font-bold text-[#333333]">C: {item.weightCoverOnly}</span>
                                                <span className="block text-[9px] text-[#555555] font-normal">F: {item.weightWithFrame}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </TableWrapper>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Terms and Conditions */}
            <div className="max-w-3xl mx-auto pt-6 border-t border-[#D9D9D9] space-y-6">
                <h4 className="text-base font-black uppercase text-black flex items-center gap-2 justify-center">
                    <span className="w-1.5 h-5 bg-black rounded-full" />
                    Terms & Conditions
                </h4>
                <div className="p-6 bg-white rounded-3xl border border-[#D9D9D9]/60 shadow-sm">
                    <ol className="list-decimal pl-5 space-y-2.5 text-xs text-[#333333] font-medium leading-relaxed">
                        <li>Goods once supplied will <strong>not be taken back</strong> under any circumstances.</li>
                        <li>The Company reserves the right to revise product specifications and designs without any prior notice.</li>
                        <li>All transactions are subject to <strong>Rajkot jurisdiction</strong> only.</li>
                        <li>Due to the hand molding manufacturing process, variation of <strong>&plusmn;3% in weight</strong> and <strong>&plusmn;2% in dimensions</strong> is standard and acceptable.</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default SizeChart;
