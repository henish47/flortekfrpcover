import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Shield, Truck, FileText, Phone, Zap, Maximize, Box, Layers, Share2 } from 'lucide-react';
import Button from '../components/common/Button';
import Section from '../components/common/Section';
import { getProductById } from '../utils/productUtils';
import SEO from '../components/common/SEO';

const ProductDetail = () => {
    const { id } = useParams();
    const product = getProductById(id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: product.name,
                    text: `Check out ${product.name} on Flortek!`,
                    url: window.location.href,
                });
            } catch (error) {
                console.log('Error sharing:', error);
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center p-12 bg-white rounded-[2rem] shadow-xl border border-slate-100">
                    <div className="w-20 h-20 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Box size={32} />
                    </div>
                    <h2 className="text-3xl font-black text-slate-800 mb-4">Product Not Found</h2>
                    <p className="text-slate-500 mb-8 max-w-xs mx-auto">The product you are looking for has been moved or removed from our catalog.</p>
                    <Link to="/products">
                        <Button variant="primary" className="rounded-xl px-8">Return to Catalogue</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="md:pt-5 min-h-screen bg-slate-50 pb-20 font-sans">
            <SEO
                title={product.name}
                description={product.description || `Technical specifications and features of ${product.name} Manhole Cover by Flortek Industries.`}
                keywords={`${product.name} Specifications, ${product.category} Manhole Cover India, Flortek ${product.name}, Best Quality ${product.category}, Buy ${product.name} Online, ${product.name} Load Capacity, FRP ${product.name} Price, Rust Proof Manhole Cover, Anti-theft Manhole Cover`}
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": product.name,
                    "image": `https://flortekfrpcover.vercel.app${product.image.startsWith('/') ? '' : '/'}${product.image}`,
                    "description": product.description || `Flortek ${product.name}`,
                    "brand": {
                        "@type": "Brand",
                        "name": "Flortek"
                    },
                    "sku": product.id,
                    "category": product.category
                }}
                canonicalUrl={`https://flortekfrpcover.vercel.app/products/${product.id}`}
            />

            <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                {/* Navigation Header */}
                <div className="flex justify-between items-center mb-6 md:mb-10">
                    <Link to="/products" className="group inline-flex items-center gap-2 md:gap-3 text-slate-500 hover:text-primary transition-colors font-bold text-xs md:text-sm uppercase tracking-wide">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-all shadow-sm">
                            <ArrowLeft size={14} className="md:w-4 md:h-4" />
                        </div>
                        Back to Inventory
                    </Link>
                    <button
                        onClick={handleShare}
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm"
                        aria-label="Share Product"
                    >
                        <Share2 size={14} className="md:w-4 md:h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* --- LEFT: VISUAL SHOWCASE (7 Cols) --- */}
                    <div className="lg:col-span-7 space-y-6 md:space-y-8">
                        {/* Main Image Stage */}
                        <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100 relative group">
                            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-accent/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />

                            <div className="relative aspect-square md:aspect-[4/3] flex items-center justify-center p-8 md:p-12 lg:p-20">
                                <motion.img
                                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                                    animate={{ scale: 1, opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, type: "spring" }}
                                    src={product.image}
                                    alt={product.name}
                                    className="relative z-10 max-w-full max-h-full object-contain drop-shadow-[0_45px_65px_rgba(0,0,0,0.15)]"
                                />

                                {/* Floating Badge */}
                                <div className="absolute top-4 right-4 md:top-8 md:right-8">
                                    <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 md:px-5 md:py-2.5 rounded-xl md:rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-800 shadow-lg border border-slate-100 flex items-center gap-1.5 md:gap-2">
                                        <Layers size={12} className="md:w-3.5 md:h-3.5 text-primary" />
                                        {product.category} Series
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Specs Strip */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                            {Object.entries(product.specs).slice(0, 4).map(([key, value], i) => (
                                <div key={i} className="bg-white p-4 md:p-5 rounded-2xl md:rounded-3xl border border-slate-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                                    <span className="text-[9px] md:text-[10px] uppercase font-black tracking-widest text-slate-400 mb-1.5 md:mb-2">{key}</span>
                                    <span className="text-xs md:text-sm font-bold text-slate-800">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* --- RIGHT: PRODUCT INTELLIGENCE (5 Cols) --- */}
                    <div className="lg:col-span-5 relative">
                        <div className="lg:sticky lg:top-32 space-y-8 md:space-y-10">

                            {/* Header */}
                            <div>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 md:mb-6 leading-tight tracking-tight">{product.name}</h1>
                                <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium">
                                    {product.description}
                                </p>
                            </div>

                            {/* Features List */}
                            <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-slate-100">
                                <h3 className="flex items-center gap-2 font-black text-slate-800 text-sm uppercase tracking-widest mb-4 md:mb-6 border-b border-slate-100 pb-4">
                                    <Zap size={16} className="text-accent" /> Key Features
                                </h3>
                                <ul className="space-y-3 md:space-y-4">
                                    {product.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-4 text-slate-600 group">
                                            <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-100 transition-colors">
                                                <CheckCircle size={14} />
                                            </div>
                                            <span className="font-medium text-sm leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Detailed Specs Accordion-style (expanded) */}
                            <div className="bg-slate-100 rounded-[2rem] p-6 md:p-8 border border-slate-200/50">
                                <h3 className="flex items-center gap-2 font-black text-slate-800 text-sm uppercase tracking-widest mb-4 md:mb-6">
                                    <FileText size={16} className="text-primary" /> Technical Data
                                </h3>
                                <div className="space-y-2 md:space-y-3">
                                    {Object.entries(product.specs).map(([key, value]) => (
                                        <div key={key} className="flex justify-between items-center py-2 border-b border-slate-200/60 last:border-0">
                                            <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wide">{key}</span>
                                            <span className="text-sm font-bold text-slate-800 text-right">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-4">
                                    <Link to="/contact" className="flex-1">
                                        <Button className="w-full bg-primary hover:bg-[#0b6131] text-white py-5 md:py-6 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs shadow-xl shadow-primary/20 active:scale-95 transition-all">
                                            Requests Quote
                                        </Button>
                                    </Link>
                                    <a href="tel:+918000888620" className="aspect-square h-auto">
                                        <div className="w-full h-full bg-white border-2 border-slate-100 rounded-xl md:rounded-2xl flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary cursor-pointer transition-all shadow-sm">
                                            <Phone size={20} />
                                        </div>
                                    </a>
                                </div>
                                <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                    <Shield size={12} className="inline mr-1 mb-0.5" /> Manufacturer Direct Warranty
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Additional Info Cards */}
                <section className="mt-16 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {[
                        { icon: Shield, title: "Industry Certified", desc: "Exceeds IS:1726 & EN-124 structural standards.", color: "text-blue-500", bg: "bg-blue-50" },
                        { icon: Truck, title: "Zero-Damage Logistics", desc: "Specialized pallet packing for secure transit.", color: "text-amber-500", bg: "bg-amber-50" },
                        { icon: Maximize, title: "Custom Dimensions", desc: "Available for special order upon request.", color: "text-purple-500", bg: "bg-purple-50" }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className={`w-14 h-14 md:w-16 md:h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-4 md:mb-6`}>
                                <item.icon size={24} className="md:w-7 md:h-7" />
                            </div>
                            <h4 className="font-black text-lg text-slate-800 mb-2">{item.title}</h4>
                            <p className="text-sm font-medium text-slate-500">{item.desc}</p>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default ProductDetail;
