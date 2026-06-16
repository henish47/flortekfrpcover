import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Loader2, ChevronLeft, ChevronRight } from 'lucide-react';
import { getProducts } from '../utils/productUtils';
import SEO from '../components/common/SEO';

const ProductCard = ({ product, onClick }) => {
    return (
        <div 
            onClick={onClick}
            className="bg-white rounded-3xl overflow-hidden border border-[#D9D9D9] hover:border-black transition-all duration-500 h-full flex flex-col group cursor-pointer relative"
        >
            <div className="relative aspect-square overflow-hidden bg-[#F5F5F5] flex items-center justify-center p-8">
                <img
                    src={product.image}
                    alt="Flortek Product"
                    loading="lazy"
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
        </div>
    );
};

const Products = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState('All');
    const [isLoading, setIsLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    const products = getProducts();
    const categories = Array.from(new Set(products.map(p => p.category)));

    const filteredProducts = products.filter(p => {
        const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
        const matchesSearch = p.category.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-white min-h-screen font-sans">
            <SEO
                title="Industrial Product Gallery | Flortek Industries Private Limited"
                description="Browse our visual catalog of high-performance FRP, GRP and composite manhole covers."
                keywords="FRP manhole cover, composite covers, catalog, gallery"
            />

            {/* --- PREMIUM HERO BANNER --- */}
            <div className="relative py-28 px-4 bg-white text-center border-b border-[#F5F5F5]">
                <div className="relative z-10 max-w-4xl mx-auto">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F5F5] border border-[#D9D9D9] text-black text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                        Visual Catalog
                    </span>
                    <h1 className="text-5xl md:text-8xl font-black text-black mb-8 uppercase tracking-tighter leading-none">
                        Engineered <br /><span className="text-[#333333]">Designs</span>
                    </h1>
                    <p className="text-[#333333] text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        A clean, minimalist overview of our structural composite solutions, built to withstand extreme industrial and municipal loads.
                    </p>
                </div>
            </div>

            {/* --- FILTER CONTROL BAR --- */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-8 mt-16 mb-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-[#F5F5F5] pb-8">
                    {/* Category tabs */}
                    <div className="flex flex-row overflow-x-auto gap-2 pb-2 md:pb-0 scrollbar-hide max-w-full">
                        <button
                            onClick={() => setActiveCategory('All')}
                            className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-wider transition-all duration-300 whitespace-nowrap border ${activeCategory === 'All'
                                ? 'bg-black text-white border-black'
                                : 'bg-[#F5F5F5] text-[#333333] border-[#D9D9D9] hover:bg-[#D9D9D9]'
                            }`}
                        >
                            All ({products.length})
                        </button>
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-wider transition-all duration-300 whitespace-nowrap border ${activeCategory === cat
                                    ? 'bg-black text-white border-black'
                                    : 'bg-[#F5F5F5] text-[#333333] border-[#D9D9D9] hover:bg-[#D9D9D9]'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search Input */}
                    <div className="relative w-full md:max-w-xs focus-within:ring-2 focus-within:ring-black/10 transition-all rounded-full">
                        <input
                            type="text"
                            placeholder="Filter by category..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-10 py-3 bg-[#F5F5F5] border border-[#D9D9D9] rounded-full focus:bg-white focus:outline-none transition-all outline-none text-xs text-black placeholder:text-[#333333] font-bold uppercase tracking-wider"
                        />
                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#333333]">
                            <Search size={14} />
                        </div>
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm("")}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#333333] hover:text-red-500"
                            >
                                <X size={14} />
                            </button>
                        )}
                    </div>
                </div>

                {/* --- GALLERY GRID --- */}
                <div className="mt-8">
                    <AnimatePresence mode="popLayout">
                        {isLoading ? (
                            <div className="h-[40vh] flex flex-col items-center justify-center gap-6">
                                <Loader2 className="animate-spin text-black" size={40} />
                                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#D9D9D9]">Loading Gallery...</p>
                            </div>
                        ) : filteredProducts.length > 0 ? (
                            <motion.div
                                layout
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                            >
                                {filteredProducts.map((product) => (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4 }}
                                        key={product.id}
                                    >
                                        <ProductCard 
                                            product={product} 
                                            onClick={() => setSelectedImage(product.image)}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-24 bg-[#F5F5F5] rounded-3xl border border-[#D9D9D9]"
                            >
                                <h3 className="text-2xl font-black text-black mb-4 tracking-tight uppercase">No Images Found</h3>
                                <p className="text-[#333333] max-w-sm mx-auto font-medium text-sm leading-relaxed">No products match your active filters.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* --- LIGHTBOX MODAL --- */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
                    >
                        <button 
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 text-white hover:text-[#D9D9D9] transition-colors p-3 bg-[#333333]/50 rounded-full border border-white/10"
                        >
                            <X size={20} />
                        </button>
                        
                        <motion.img
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 150 }}
                            src={selectedImage}
                            alt="Lightbox Preview"
                            className="max-w-full max-h-[85vh] object-contain rounded-2xl select-none shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Products;
