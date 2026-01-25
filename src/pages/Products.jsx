import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Ruler,
    ShieldCheck,
    Search,
    Filter,
    X,
    ArrowRight,
    Download,
    Box,
    Zap,
    Maximize,
    Command,
    Palette,
    Layers,
    ChevronLeft,
    ChevronRight,
    Loader2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Section from '../components/common/Section';
import { getProducts } from '../utils/productUtils';
import { useModal } from '../context/ModalContext';
import { PDFDownloadLink } from '@react-pdf/renderer';
import SizeChartPDF from '../components/products/SizeChartPDF';

import SizeChart from '../components/products/SizeChart';
import SEO from '../components/common/SEO';

const NEW_CATEGORIES = ["Heavy Duty", "Water Gully", "Recessed"];

const ProductCard = ({ product, openModal }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = product.images || [product.image];
    const hasMultipleImages = images.length > 1;

    useEffect(() => {
        if (!hasMultipleImages) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [hasMultipleImages, images.length]);

    const nextImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#FFC107] hover:shadow-xl hover:shadow-[#FFC107]/10 transition-all duration-300 h-full flex flex-col group relative">

            {/* Image Area */}
            <div className="relative aspect-square bg-slate-50 border-b border-slate-100 overflow-hidden">
                <Link to={`/products/${product.id}`} className="block w-full h-full p-3 md:p-6 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentImageIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            src={images[currentImageIndex]}
                            alt={product.name}
                            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                        />
                    </AnimatePresence>
                </Link>

                {/* Badges */}
                <div className="absolute top-2 left-2 md:top-3 md:left-3 z-10 flex flex-col gap-1 md:gap-2 items-start pointer-events-none">
                    <span className="bg-white border border-slate-200 px-2.5 py-1 md:px-3 md:py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-slate-600 shadow-sm">
                        {product.category}
                    </span>
                    {NEW_CATEGORIES.includes(product.category) && (
                        <span className="bg-[#FFC107] px-2.5 py-1 md:px-3 md:py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-slate-900 shadow-sm">
                            New
                        </span>
                    )}
                </div>

                {/* Slider Controls */}
                {hasMultipleImages && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:scale-110"
                        >
                            <ChevronLeft size={16} />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:scale-110"
                        >
                            <ChevronRight size={16} />
                        </button>

                        {/* Dots Indicator */}
                        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-20 pointer-events-none">
                            {images.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`w-1.5 h-1.5 rounded-full transition-colors shadow-sm ${idx === currentImageIndex ? 'bg-[#109148]' : 'bg-slate-300'}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Content */}
            <div className="p-4 md:p-5 flex-grow flex flex-col">
                <Link to={`/products/${product.id}`} className="block">
                    <h3 className="text-sm md:text-lg font-bold text-slate-800 mb-2 group-hover:text-[#109148] transition-colors line-clamp-2 leading-snug md:leading-normal">
                        {product.name}
                    </h3>
                </Link>

                <div className="mt-auto pt-2 md:pt-4 space-y-3">
                    {/* Specs List */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                        {product.specs.Load && (
                            <span className="inline-flex items-center gap-1 px-2 py-1 md:px-2.5 md:py-1 rounded-md bg-[#109148]/5 text-[#109148] text-[10px] md:text-xs font-semibold whitespace-nowrap border border-[#109148]/10">
                                <Zap size={10} className="w-3 h-3 md:w-auto md:h-auto" /> <span className="truncate max-w-[80px] md:max-w-none">{product.specs.Load.replace(/ ?T(onne)?/gi, '')}</span>
                            </span>
                        )}
                        <span className="inline-flex items-center gap-1 px-2 py-1 md:px-2.5 md:py-1 rounded-md bg-slate-50 text-slate-600 text-[10px] md:text-xs font-semibold whitespace-nowrap border border-slate-100">
                            <Maximize size={10} className="w-3 h-3 md:w-auto md:h-auto" />
                            <span className="truncate max-w-[80px] md:max-w-none">{Object.entries(product.specs).find(([k]) => k !== 'Load')?.[1] || 'Standard'}</span>
                        </span>
                    </div>

                    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2 md:mt-4">
                        <Link to={`/products/${product.id}`} className="hidden md:flex items-center gap-2 text-[#109148] font-bold text-sm group-hover:underline decoration-2 underline-offset-4">
                            View Details <ArrowRight size={16} />
                        </Link>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                openModal();
                            }}
                            className="bg-[#FFC107] hover:bg-yellow-300 text-slate-900 text-xs font-bold px-4 py-3 rounded-xl transition-colors shadow-sm hover:shadow-lg active:scale-95 z-20 relative w-full md:w-auto text-center"
                        >
                            Get Quote
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Products = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const productsPerPage = 9;

    useEffect(() => {
        window.scrollTo(0, 0);
        // Simulate load for smooth felt transitions
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, activeCategory]);

    const products = getProducts();
    const categoryCounts = products.reduce((acc, p) => {
        acc[p.category] = (acc[p.category] || 0) + 1;
        return acc;
    }, {});
    const categories = Object.keys(categoryCounts);

    const { openModal } = useModal();

    const filteredProducts = products.filter(p => {
        const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch = p.name.toLowerCase().includes(searchLower) ||
            p.category.toLowerCase().includes(searchLower) ||
            Object.values(p.specs).some(val => val.toString().toLowerCase().includes(searchLower));

        return matchesCategory && matchesSearch;
    });

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        const gridElement = document.getElementById('products-grid');
        if (gridElement) {
            gridElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className=" lg:pt-20 bg-slate-50 min-h-screen font-sans">
            
                <h1 className='font-semibold text-6xl mb-9 text-center mt-5'>OUR PRODUCTS</h1>
            

            <SEO
                title="Industrial Product Catalogue | Flortek Industries"
                description="Browse our comprehensive range of high-performance FRP, BMC, and recessed manhole covers. Precision-engineered solutions for modern infrastructure."
                keywords="FRP manhole cover catalog, BMC covers India, industrial drainage gratings"
            />


            <div className="max-w-[1800px] mx-auto px-4 md:px-12 pt-2 pb-16 lg:pb-24">

                {/* Mobile Download Button */}
                <div className="lg:hidden mb-6">
                    <PDFDownloadLink document={<SizeChartPDF />} fileName="Flortek-Size-Chart.pdf" className="w-full block">
                        {({ blob, url, loading, error }) => (
                            <button className="w-full bg-[#FFC107] text-slate-900 font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform hover:bg-yellow-400">
                                <Download size={20} />
                                {loading ? 'Preparing Reference...' : 'Download Size Range'}
                            </button>
                        )}
                    </PDFDownloadLink>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-20">

                    {/* --- CONTROL SIDEBAR --- */}
                    <aside className="w-full lg:w-[300px] flex-shrink-0 z-30">
                        <div className="lg:sticky lg:top-32 space-y-4 lg:space-y-8">

                            {/* Search */}
                            <div className="bg-white rounded-xl p-4 lg:p-6 border border-slate-200 shadow-sm group focus-within:ring-2 focus-within:ring-[#109148]/20 focus-within:border-[#109148] transition-all">
                                <h3 className="hidden lg:block text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">Search</h3>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search products..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2.5 lg:py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none transition-all outline-none text-sm text-slate-700 placeholder:text-slate-400"
                                    />
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                        <Search size={18} />
                                    </div>
                                    {searchTerm && (
                                        <button
                                            onClick={() => setSearchTerm("")}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-red-500"
                                        >
                                            <X size={16} />
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Responsive Category Filter */}
                            <div className="bg-white lg:rounded-xl p-2 lg:p-6 border-y lg:border border-slate-200 shadow-sm -mx-4 px-4 lg:mx-0">
                                <h3 className="hidden lg:block text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">Categories</h3>
                                <div className="flex flex-row overflow-x-auto lg:flex-col gap-3 lg:gap-0 lg:space-y-2 pb-2 lg:pb-0 scrollbar-hide mask-linear-fade">
                                    <button
                                        onClick={() => setActiveCategory('All')}
                                        className={`flex-shrink-0 lg:w-full flex items-center justify-between gap-3 text-sm font-medium transition-all
                                            px-4 py-2 rounded-full border lg:border-none lg:rounded-lg lg:px-4 lg:py-3 lg:text-left group
                                            ${activeCategory === 'All'
                                                ? 'bg-[#109148] text-white border-[#109148] shadow-md shadow-green-900/10'
                                                : 'bg-white text-slate-600 border-slate-200 hover:border-[#FFC107] lg:bg-slate-50 lg:text-slate-600 lg:hover:bg-slate-100 lg:border-transparent lg:hover:text-[#109148]'
                                            }`}
                                    >
                                        <span>All</span>
                                        <span className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full ${activeCategory === 'All' ? 'bg-[#FFC107] text-slate-900' : 'bg-slate-100 text-slate-500 group-hover:bg-white'}`}>
                                            {products.length}
                                        </span>
                                    </button>

                                    {categories.map((cat, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActiveCategory(cat)}
                                            className={`flex-shrink-0 lg:w-full flex items-center justify-between gap-3 text-sm font-medium transition-all
                                                px-4 py-2 rounded-full border lg:border-none lg:rounded-lg lg:px-4 lg:py-3 lg:text-left group
                                                ${activeCategory === cat
                                                    ? 'bg-[#109148] text-white border-[#109148] shadow-md shadow-green-900/10'
                                                    : 'bg-white text-slate-600 border-slate-200 hover:border-[#FFC107] lg:bg-slate-50 lg:text-slate-600 lg:hover:bg-slate-100 lg:border-transparent lg:hover:text-[#109148]'
                                                }`}
                                        >
                                            <span className="flex items-center gap-2 whitespace-nowrap">
                                                {cat}
                                                {NEW_CATEGORIES.includes(cat) && (
                                                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${activeCategory === cat ? 'bg-[#FFC107] text-slate-900' : 'bg-red-500 text-white'}`}>
                                                        New
                                                    </span>
                                                )}
                                            </span>
                                            <span className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full ${activeCategory === cat ? 'bg-[#FFC107] text-slate-900' : 'bg-slate-100 text-slate-500 group-hover:bg-white'}`}>
                                                {categoryCounts[cat]}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Custom Size Card */}
                            <div className="hidden lg:block p-6 bg-[#109148] rounded-xl text-center text-white shadow-xl shadow-green-900/20 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                                <h4 className="font-bold text-lg mb-2 relative z-10">Need Custom Size?</h4>
                                <p className="text-green-50 text-sm mb-6 relative z-10">We can fabricate unique dimensions for your needs.</p>
                                <Button onClick={openModal} className="w-full bg-[#FFC107] text-slate-900 hover:bg-yellow-300 py-3 rounded-lg font-bold text-sm shadow-md border-none relative z-10">
                                    Request Quote
                                </Button>
                            </div>
                        </div>
                    </aside>

                    {/* --- PRODUCT GRID SYSTEM --- */}
                    <div className="flex-1 min-w-0">
                        <div id="products-grid">
                            <AnimatePresence mode="popLayout" initial={false}>
                                {isLoading ? (
                                    <div className="h-[60vh] flex flex-col items-center justify-center gap-6">
                                        <Loader2 className="animate-spin text-[#109148]" size={60} />
                                        <p className="text-xs font-black uppercase tracking-[0.5em] text-slate-300">Syncing Catalog...</p>
                                    </div>
                                ) : currentProducts.length > 0 ? (
                                    <motion.div
                                        layout
                                        className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
                                    >
                                        {currentProducts.map((product) => (
                                            <motion.div
                                                layout
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                transition={{ duration: 0.3 }}
                                                key={product.id}
                                            >
                                                <ProductCard product={product} openModal={openModal} />
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-48 bg-white rounded-[3rem] border border-slate-100 shadow-sm"
                                    >
                                        <div className="w-40 h-40 bg-slate-50 rounded-[4rem] flex items-center justify-center mx-auto mb-12 shadow-inner">
                                            <Search size={60} className="text-slate-200" />
                                        </div>
                                        <h3 className="text-4xl font-black text-slate-800 mb-6 tracking-tight">No Results Found</h3>
                                        <p className="text-slate-400 max-w-sm mx-auto font-medium text-lg leading-relaxed mb-16">The keywords you provided don't match any series in our current inventory.</p>
                                        <Button
                                            onClick={() => { setSearchTerm(""); setActiveCategory("All") }}
                                            className="bg-[#109148] hover:bg-[#0c7539] text-white rounded-[2rem] px-16 py-7 font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-green-900/20 active:scale-95 transition-all"
                                        >
                                            Return to Index
                                        </Button>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* --- PAGINATION --- */}
                            {!isLoading && totalPages > 1 && (
                                <div className="mt-12 lg:mt-32 flex flex-wrap justify-center items-center gap-3 lg:gap-10">
                                    <button
                                        onClick={() => paginate(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className={`w-10 h-10 lg:w-20 lg:h-20 rounded-xl lg:rounded-[2.5rem] border flex items-center justify-center transition-all 
                                        ${currentPage === 1
                                                ? 'border-slate-50 text-slate-200 cursor-not-allowed'
                                                : 'border-slate-100 text-[#109148] hover:bg-white hover:shadow-2xl hover:-translate-x-1 lg:hover:-translate-x-2'}`}
                                    >
                                        <ChevronLeft className="w-5 h-5 lg:w-8 lg:h-8" />
                                    </button>

                                    <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
                                        {[...Array(totalPages)].map((_, i) => (
                                            <button
                                                key={i + 1}
                                                onClick={() => paginate(i + 1)}
                                                className={`w-10 h-10 lg:w-20 lg:h-20 rounded-xl lg:rounded-[2.5rem] font-black text-xs lg:text-lg transition-all duration-700 
                                                ${currentPage === i + 1
                                                        ? 'bg-[#109148] text-white shadow-lg lg:shadow-3xl shadow-green-900/30 scale-105 lg:scale-110'
                                                        : 'bg-white text-slate-500 hover:text-[#109148] border border-slate-100 hover:shadow-xl'
                                                    }`}
                                            >
                                                {i + 1}
                                            </button>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => paginate(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className={`w-10 h-10 lg:w-20 lg:h-20 rounded-xl lg:rounded-[2.5rem] border flex items-center justify-center transition-all 
                                        ${currentPage === totalPages
                                                ? 'border-slate-50 text-slate-200 cursor-not-allowed'
                                                : 'border-slate-100 text-[#109148] hover:bg-white hover:shadow-2xl hover:translate-x-1 lg:hover:translate-x-2'}`}
                                    >
                                        <ChevronRight className="w-5 h-5 lg:w-8 lg:h-8" />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>


            {/* --- PRODUCT SPOTLIGHT VIDEO --- */}
            <Section className="py-20 bg-slate-900 overflow-hidden relative">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
                <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 text-center">
                    <div className="mb-12">
                        <span className="text-[#FFC107] font-black uppercase tracking-widest text-xs mb-3 block">Visual Demonstration</span>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">See It In Action</h2>
                        <div className="w-20 h-1.5 bg-[#109148] mx-auto rounded-full mb-6"></div>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            Watch our comprehensive guide on FRP Recessed Manhole Covers, showcasing their durability and seamless integration capabilities.
                        </p>
                    </div>

                    <div className="relative aspect-video w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-800">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/IsWANr7fDRk"
                            title="Frp Recessed Manhole Cover | Available on IndiaMART"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </Section>

     
        </div>
    );
};

export default Products;
