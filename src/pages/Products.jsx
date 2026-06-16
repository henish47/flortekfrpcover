import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Loader2 } from 'lucide-react';
import SEO from '../components/common/SEO';

const ProductCard = ({ imageUrl, onClick }) => {
    // Extract a human-readable title from the filename for accessibility/alt text
    const fileName = imageUrl.split('/').pop().replace(/\.[^/.]+$/, "").replace(/[_-]/g, " ");

    return (
        <div 
            onClick={onClick}
            className="bg-white rounded-3xl overflow-hidden border border-[#D9D9D9] hover:border-black transition-all duration-500 h-full flex flex-col group cursor-pointer relative shadow-sm hover:shadow-md"
        >
            <div className="relative aspect-square overflow-hidden bg-[#F5F5F5] flex items-center justify-center p-6 group-hover:bg-[#F2F2F2] transition-colors duration-500">
                <img
                    src={imageUrl}
                    alt={fileName}
                    loading="lazy"
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-4 right-4 bg-black/70 text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Zoom Image
                </span>
            </div>
        </div>
    );
};

const Products = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    // All product images present in the public/images folder
    const productImages = [
        "/images/24 X 36 FRP.PNG",
        "/images/450 X 600_124B125.PNG",
        "/images/750 X 750_C250.PNG",
        "/images/750X750_B125_GRAY.png",
        "/images/750X750_B125_WHITE.jpg",
        "/images/750X750_C250_GRAY.png",
        "/images/750X750_C250_WHITE.png",
        "/images/900 X 900_124_B125.jpeg",
        "/images/900 X 900_124_C250.PNG",
        "/images/FRP 400x400 BS En 124_D400.png",
        "/images/FRP 450x450 BS En 124_D400 GYAY.png",
        "/images/FRP 600 BS EN_124_B125.png",
        "/images/FRP 600x600 BS En 124_D400 GRAY.png",
        "/images/FRP 600x600 BS En 124_D400.png",
        "/images/FRP-10x10-2.5T-FW.png",
        "/images/FRP-12x12-2.5T-FW.png",
        "/images/FRP-15x15-2.5T-FW.png",
        "/images/FRP-18x18-2.5T-FW.png",
        "/images/FRP-18x24-2.5T-FW.png",
        "/images/FRP-24x24-2.5T-FW.png",
        "/images/FRP-24x30-2.5T-FW.png",
        "/images/FRP-24x36-2.5T-FW.png",
        "/images/FRP-28x28-2.5T-FW.png",
        "/images/FRP-450x450-B125.png",
        "/images/FRP-450x600-BSEN-124-B125.png",
        "/images/GULLY  COVER - 18X18-GRAY.png",
        "/images/GULLY COVER - 12X12-GRAY.png",
        "/images/GULLY COVER-5T-500x500-GRAY.png",
        "/images/circular/Round 24 5T.jpg.jpeg",
        "/images/recessed/RECESS COVER _ 450X450_2.5T_GRAY.jpg",
        "/images/watergully/GULLY COVER _300X600_5T_GRAY.png"
    ];

    const filteredImages = productImages.filter(imageUrl => {
        const fileName = imageUrl.split('/').pop().replace(/\.[^/.]+$/, "").replace(/[_-]/g, " ").toLowerCase();
        return fileName.includes(searchTerm.toLowerCase());
    });

    return (
        <div className="bg-white min-h-screen font-sans">
            <SEO
                title="Industrial Product Gallery | Flortek Industries Private Limited"
                description="Explore our visual product gallery of premium FRP, GRP and composite manhole covers."
                keywords="FRP manhole cover, composite covers, catalog, products gallery"
            />

            {/* --- PREMIUM HERO BANNER --- */}
            <div className="relative py-28 px-4 bg-white text-center border-b border-[#F5F5F5]">
                <div className="relative z-10 max-w-4xl mx-auto">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F5F5] border border-[#D9D9D9] text-black text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                        Visual Gallery
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
                    {/* Showing Count */}
                    <div className="text-xs font-black uppercase tracking-wider text-[#333333]/85">
                        Showing all {filteredImages.length} product designs
                    </div>

                    {/* Search Input */}
                    <div className="relative w-full md:max-w-xs focus-within:ring-2 focus-within:ring-black/10 transition-all rounded-full">
                        <input
                            type="text"
                            placeholder="Filter by name..."
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
                        ) : filteredImages.length > 0 ? (
                            <motion.div
                                layout
                                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                            >
                                {filteredImages.map((imageUrl) => (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4 }}
                                        key={imageUrl}
                                    >
                                        <ProductCard 
                                            imageUrl={imageUrl} 
                                            onClick={() => setSelectedImage(imageUrl)}
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
                                <h3 className="text-2xl font-black text-black mb-4 tracking-tight uppercase">No Designs Found</h3>
                                <p className="text-[#333333] max-w-sm mx-auto font-medium text-sm leading-relaxed">No products match your active search filter.</p>
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
