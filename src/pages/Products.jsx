import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Loader2 } from 'lucide-react';
import SEO from '../components/common/SEO';
import { useModal } from '../context/ModalContext';

const ProductCard = ({ product, onZoom, onQuote }) => {
    return (
        <div 
            className="bg-white rounded-3xl overflow-hidden border border-[#D9D9D9] hover:border-black hover:shadow-lg transition-all duration-500 h-full flex flex-col group relative"
        >
            {/* Image container */}
            <div 
                onClick={onZoom}
                className="relative aspect-square overflow-hidden bg-[#F5F5F5] flex items-center justify-center p-6 group-hover:bg-[#F2F2F2] transition-colors duration-500 cursor-zoom-in"
            >
                <img
                    src={product.imageUrl}
                    alt={product.title}
                    loading="lazy"
                    className="w-[85%] h-[85%] object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-4 right-4 bg-black/75 text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Zoom Image
                </span>
                
                {/* Load class badge on image */}
                <span className="absolute top-4 left-4 bg-black text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                    {product.loadClass.split(' ')[0]} {product.loadClass.includes('Ton') ? 'Ton' : ''}
                </span>
            </div>
            
            {/* Metadata container */}
            <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#333333]/60 block mb-1">
                        {product.category}
                    </span>
                    <h3 className="text-sm font-black uppercase text-black mb-3 line-clamp-2 leading-tight">
                        {product.title}
                    </h3>
                    
                    {/* Specs list */}
                    <div className="space-y-1 text-xs text-[#333333]/80 font-medium mb-5">
                        <div className="flex justify-between border-b border-[#F5F5F5] pb-1">
                            <span className="text-[#333333]/50">Shape:</span>
                            <span className="font-bold text-black">{product.shape}</span>
                        </div>
                        <div className="flex justify-between border-b border-[#F5F5F5] pb-1">
                            <span className="text-[#333333]/50">Dimensions:</span>
                            <span className="font-bold text-black">{product.dimensions}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#333333]/50">Rating:</span>
                            <span className="font-bold text-black text-[10px]">{product.loadClass}</span>
                        </div>
                    </div>
                </div>
                
                {/* Quote Button */}
                <button
                    onClick={onQuote}
                    className="w-full py-2.5 bg-black text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#333333] transition-colors mt-auto flex items-center justify-center gap-1.5 shadow-sm"
                >
                    Get Quote
                </button>
            </div>
        </div>
    );
};

const Products = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [isLoading, setIsLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);
    const { openModal } = useModal();

    useEffect(() => {
        window.scrollTo(0, 0);
        const timer = setTimeout(() => setIsLoading(false), 400);
        return () => clearTimeout(timer);
    }, []);

    // All structured product designs
    const productsData = [
        {
            id: 1,
            imageUrl: "/images/24 X 36 FRP.PNG",
            title: "Rectangular Manhole Cover (24\" x 36\")",
            category: "Manhole Covers",
            shape: "Rectangle",
            loadClass: "2.5 Ton (Light Duty)",
            dimensions: "24\" x 36\" / 600 x 900 mm"
        },
        {
            id: 2,
            imageUrl: "/images/450 X 600_124B125.PNG",
            title: "FRP B125 Manhole Cover (450 x 600)",
            category: "Manhole Covers",
            shape: "Rectangle",
            loadClass: "12.5 Ton (Class B125)",
            dimensions: "18\" x 24\" / 450 x 600 mm"
        },
        {
            id: 3,
            imageUrl: "/images/750 X 750_C250.PNG",
            title: "FRP C250 Heavy Duty Cover (750 x 750)",
            category: "Manhole Covers",
            shape: "Square",
            loadClass: "25 Ton (Class C250)",
            dimensions: "30\" x 30\" / 750 x 750 mm"
        },
        {
            id: 4,
            imageUrl: "/images/750X750_B125_GRAY.png",
            title: "Class B125 Manhole Cover (Gray)",
            category: "Manhole Covers",
            shape: "Square",
            loadClass: "12.5 Ton (Class B125)",
            dimensions: "30\" x 30\" / 750 x 750 mm"
        },
        {
            id: 5,
            imageUrl: "/images/750X750_B125_WHITE.jpg",
            title: "Class B125 Manhole Cover (White)",
            category: "Manhole Covers",
            shape: "Square",
            loadClass: "12.5 Ton (Class B125)",
            dimensions: "30\" x 30\" / 750 x 750 mm"
        },
        {
            id: 6,
            imageUrl: "/images/750X750_C250_GRAY.png",
            title: "Class C250 Heavy Duty Cover (Gray)",
            category: "Manhole Covers",
            shape: "Square",
            loadClass: "25 Ton (Class C250)",
            dimensions: "30\" x 30\" / 750 x 750 mm"
        },
        {
            id: 7,
            imageUrl: "/images/750X750_C250_WHITE.png",
            title: "Class C250 Heavy Duty Cover (White)",
            category: "Manhole Covers",
            shape: "Square",
            loadClass: "25 Ton (Class C250)",
            dimensions: "30\" x 30\" / 750 x 750 mm"
        },
        {
            id: 8,
            imageUrl: "/images/900 X 900_124_B125.jpeg",
            title: "Class B125 Manhole Cover (900 x 900)",
            category: "Manhole Covers",
            shape: "Square",
            loadClass: "12.5 Ton (Class B125)",
            dimensions: "36\" x 36\" / 900 x 900 mm"
        },
        {
            id: 9,
            imageUrl: "/images/900 X 900_124_C250.PNG",
            title: "Class C250 Heavy Duty Cover (900 x 900)",
            category: "Manhole Covers",
            shape: "Square",
            loadClass: "25 Ton (Class C250)",
            dimensions: "36\" x 36\" / 900 x 900 mm"
        },
        {
            id: 10,
            imageUrl: "/images/FRP 400x400 BS En 124_D400.png",
            title: "Class D400 Heavy Duty Cover (400 x 400)",
            category: "Manhole Covers",
            shape: "Square",
            loadClass: "40 Ton (Class D400)",
            dimensions: "16\" x 16\" / 400 x 400 mm"
        },
        {
            id: 11,
            imageUrl: "/images/FRP 450x450 BS En 124_D400 GYAY.png",
            title: "Class D400 Heavy Duty Cover (450 x 450)",
            category: "Manhole Covers",
            shape: "Square",
            loadClass: "40 Ton (Class D400)",
            dimensions: "18\" x 18\" / 450 x 450 mm"
        },
        {
            id: 12,
            imageUrl: "/images/FRP 600 BS EN_124_B125.png",
            title: "Circular B125 Manhole Cover (600 mm)",
            category: "Manhole Covers",
            shape: "Round",
            loadClass: "12.5 Ton (Class B125)",
            dimensions: "Round 24\" / 600 mm"
        },
        {
            id: 13,
            imageUrl: "/images/FRP 600x600 BS En 124_D400 GRAY.png",
            title: "Class D400 Manhole Cover (Gray)",
            category: "Manhole Covers",
            shape: "Square",
            loadClass: "40 Ton (Class D400)",
            dimensions: "24\" x 24\" / 600 x 600 mm"
        },
        {
            id: 14,
            imageUrl: "/images/FRP 600x600 BS En 124_D400.png",
            title: "Class D400 Heavy Duty Cover (600 x 600)",
            category: "Manhole Covers",
            shape: "Square",
            loadClass: "40 Ton (Class D400)",
            dimensions: "24\" x 24\" / 600 x 600 mm"
        },
        {
            id: 15,
            imageUrl: "/images/FRP-10x10-2.5T-FW.png",
            title: "Light Duty Square Cover (10\" x 10\")",
            category: "Manhole Covers",
            shape: "Square",
            loadClass: "2.5 Ton (Light Duty)",
            dimensions: "10\" x 10\" / 250 x 250 mm"
        },
        {
            id: 16,
            imageUrl: "/images/FRP-12x12-2.5T-FW.png",
            title: "Light Duty Square Cover (12\" x 12\")",
            category: "Manhole Covers",
            shape: "Square",
            loadClass: "2.5 Ton (Light Duty)",
            dimensions: "12\" x 12\" / 300 x 300 mm"
        },
        {
            id: 17,
            imageUrl: "/images/FRP-15x15-2.5T-FW.png",
            title: "Light Duty Square Cover (15\" x 15\")",
            category: "Manhole Covers",
            shape: "Square",
            loadClass: "2.5 Ton (Light Duty)",
            dimensions: "15\" x 15\" / 380 x 380 mm"
        },
        {
            id: 18,
            imageUrl: "/images/FRP-18x18-2.5T-FW.png",
            title: "Light Duty Square Cover (18\" x 18\")",
            category: "Manhole Covers",
            shape: "Square",
            loadClass: "2.5 Ton (Light Duty)",
            dimensions: "18\" x 18\" / 450 x 450 mm"
        },
        {
            id: 19,
            imageUrl: "/images/FRP-18x24-2.5T-FW.png",
            title: "Light Duty Rectangle Cover (18\" x 24\")",
            category: "Manhole Covers",
            shape: "Rectangle",
            loadClass: "2.5 Ton (Light Duty)",
            dimensions: "18\" x 24\" / 450 x 600 mm"
        },
        {
            id: 20,
            imageUrl: "/images/FRP-24x24-2.5T-FW.png",
            title: "Light Duty Square Cover (24\" x 24\")",
            category: "Manhole Covers",
            shape: "Square",
            loadClass: "2.5 Ton (Light Duty)",
            dimensions: "24\" x 24\" / 600 x 600 mm"
        },
        {
            id: 21,
            imageUrl: "/images/FRP-24x30-2.5T-FW.png",
            title: "Light Duty Rectangle Cover (24\" x 30\")",
            category: "Manhole Covers",
            shape: "Rectangle",
            loadClass: "2.5 Ton (Light Duty)",
            dimensions: "24\" x 30\" / 600 x 750 mm"
        },
        {
            id: 22,
            imageUrl: "/images/FRP-24x36-2.5T-FW.png",
            title: "Light Duty Rectangle Cover (24\" x 36\")",
            category: "Manhole Covers",
            shape: "Rectangle",
            loadClass: "2.5 Ton (Light Duty)",
            dimensions: "24\" x 36\" / 600 x 900 mm"
        },
        {
            id: 23,
            imageUrl: "/images/FRP-28x28-2.5T-FW.png",
            title: "Light Duty Square Cover (28\" x 28\")",
            category: "Manhole Covers",
            shape: "Square",
            loadClass: "2.5 Ton (Light Duty)",
            dimensions: "28\" x 28\" / 700 x 700 mm"
        },
        {
            id: 24,
            imageUrl: "/images/FRP-450x450-B125.png",
            title: "FRP Class B125 Square Cover (450 x 450)",
            category: "Manhole Covers",
            shape: "Square",
            loadClass: "12.5 Ton (Class B125)",
            dimensions: "18\" x 18\" / 450 x 450 mm"
        },
        {
            id: 25,
            imageUrl: "/images/FRP-450x600-BSEN-124-B125.png",
            title: "FRP Class B125 Rectangle Cover (450 x 600)",
            category: "Manhole Covers",
            shape: "Rectangle",
            loadClass: "12.5 Ton (Class B125)",
            dimensions: "18\" x 24\" / 450 x 600 mm"
        },
        {
            id: 26,
            imageUrl: "/images/GULLY  COVER - 18X18-GRAY.png",
            title: "Gulley Drain Cover - Gray (18\" x 18\")",
            category: "Gulley Covers",
            shape: "Square",
            loadClass: "Light Duty (Pedestrian)",
            dimensions: "18\" x 18\" / 450 x 450 mm"
        },
        {
            id: 27,
            imageUrl: "/images/GULLY COVER - 12X12-GRAY.png",
            title: "Gulley Drain Cover - Gray (12\" x 12\")",
            category: "Gulley Covers",
            shape: "Square",
            loadClass: "Light Duty (Pedestrian)",
            dimensions: "12\" x 12\" / 300 x 300 mm"
        },
        {
            id: 28,
            imageUrl: "/images/GULLY COVER-5T-500x500-GRAY.png",
            title: "FRP Gulley Cover 5T (500 x 500)",
            category: "Gulley Covers",
            shape: "Square",
            loadClass: "5 Ton (Medium Duty)",
            dimensions: "20\" x 20\" / 500 x 500 mm"
        },
        {
            id: 29,
            imageUrl: "/images/circular/Round 24 5T.jpg.jpeg",
            title: "Medium Duty Round Cover (24\" / 5T)",
            category: "Manhole Covers",
            shape: "Round",
            loadClass: "5 Ton (Medium Duty)",
            dimensions: "Round 24\" / 600 mm"
        },
        {
            id: 30,
            imageUrl: "/images/recessed/RECESS COVER _ 450X450_2.5T_GRAY.jpg",
            title: "Recessed Tile/Manhole Cover (450 x 450)",
            category: "Recessed Covers",
            shape: "Square",
            loadClass: "2.5 Ton (Light Duty)",
            dimensions: "18\" x 18\" / 450 x 450 mm"
        },
        {
            id: 31,
            imageUrl: "/images/watergully/GULLY COVER _300X600_5T_GRAY.png",
            title: "Water Gulley Cover 5T (300 x 600)",
            category: "Gulley Covers",
            shape: "Rectangle",
            loadClass: "5 Ton (Medium Duty)",
            dimensions: "12\" x 24\" / 300 x 600 mm"
        },
        {
            id: 32,
            imageUrl: "/images/FRP-31x42-2.5T-FW.jpg",
            title: "FRP Rectangular Manhole Cover (31\" x 42\")",
            category: "Manhole Covers",
            shape: "Rectangle",
            loadClass: "2.5 Ton (Light Duty)",
            dimensions: "31\" x 42\" / 785 x 1065 mm"
        },
        {
            id: 33,
            imageUrl: "/images/FRP-300x300-B125.jpg",
            title: "FRP Class B125 Square Cover (300 x 300)",
            category: "Manhole Covers",
            shape: "Square",
            loadClass: "12.5 Ton (Class B125)",
            dimensions: "12\" x 12\" / 300 x 300 mm"
        }
    ];

    const filteredProducts = productsData.filter(product => {
        const matchesCategory = activeCategory === "All" || product.category === activeCategory;
        const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.shape.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.loadClass.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.dimensions.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-white min-h-screen font-sans">
            <SEO
                title="Industrial Product Gallery | Flortek Industries Private Limited"
                description="Explore our visual product gallery of premium FRP, GRP and composite manhole covers."
                keywords="FRP manhole cover, composite covers, catalog, products gallery"
            />

            {/* --- SLIM & MODERN PAGE HEADER --- */}
            <div className="bg-white border-b border-[#D9D9D9]/50 pt-10 pb-8 px-6 md:px-8">
                <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#333333]/60 mb-2 block">
                            Product Index
                        </span>
                        <h1 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight leading-none mb-3">
                            Engineered Designs
                        </h1>
                        <p className="text-[#333333] text-xs md:text-sm font-medium max-w-xl leading-relaxed">
                            Explore our premium range of composite solutions, rated by load capacity and engineered for extreme industrial/municipal service.
                        </p>
                    </div>

                    {/* Quick Stats */}
                    <div className="hidden sm:flex items-center gap-3 bg-[#F5F5F5] p-3 rounded-2xl border border-[#D9D9D9]/50 w-fit">
                        <div className="w-8 h-8 rounded-xl bg-black text-white flex items-center justify-center font-black text-xs">
                            {productsData.length}
                        </div>
                        <div className="text-left">
                            <p className="text-[9px] font-black uppercase text-[#333333]/50">Total Designs</p>
                            <p className="text-[10px] font-black uppercase text-black">FRP & SMC Products</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- FILTER CONTROL BAR --- */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-8 mt-8 mb-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-[#D9D9D9]/40 pb-6">
                    {/* Category tabs */}
                    <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
                        {["All", "Manhole Covers", "Recessed Covers", "Gulley Covers"].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => {
                                    setActiveCategory(cat);
                                    setSearchTerm("");
                                }}
                                className={`px-4 py-2.5 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-wider transition-all border ${activeCategory === cat
                                    ? 'bg-black text-white border-black shadow-sm'
                                    : 'bg-white text-[#333333]/80 border-[#D9D9D9]/70 hover:border-black hover:text-black'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search & Count */}
                    <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                        <div className="text-[10px] font-black uppercase tracking-wider text-[#333333]/60 hidden sm:block">
                            Showing {filteredProducts.length} items
                        </div>
                        
                        <div className="relative w-full sm:max-w-xs focus-within:ring-2 focus-within:ring-black/10 transition-all rounded-full">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-9 pr-9 py-2.5 bg-[#F5F5F5] border border-[#D9D9D9] rounded-full focus:bg-white focus:outline-none transition-all outline-none text-[11px] text-black placeholder:text-[#333333]/65 font-bold uppercase tracking-wider"
                            />
                            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#333333]/60">
                                <Search size={12} />
                            </div>
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm("")}
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#333333] hover:text-red-500"
                                >
                                    <X size={12} />
                                </button>
                            )}
                        </div>
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
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
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
                                            onZoom={() => setSelectedImage(product.imageUrl)}
                                            onQuote={() => openModal()}
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
