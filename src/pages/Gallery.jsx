import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import Section from '../components/common/Section';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    { src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop", title: "Installation at City Center" },
    { src: "https://images.unsplash.com/photo-1615837136063-4702ba2c24d3?q=80&w=2000&auto=format&fit=crop", title: "Circular Cover Detail" },
    { src: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2009&auto=format&fit=crop", title: "Highway Drainage Grating" },
    { src: "https://plus.unsplash.com/premium_photo-1678743603407-3e0426500854?q=80&w=2000&auto=format&fit=crop", title: "Square Cover Stock" },
    { src: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070&auto=format&fit=crop", title: "Heavy Duty Industrial" },
    { src: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?q=80&w=2006&auto=format&fit=crop", title: "Residential Complex" },
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="pt-20">
            <div className="bg-[#109148] text-white py-12 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Project Gallery</h1>
                    <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mb-4"></div>
                    <p className="text-indigo-50">See our products installed in real-world environments.</p>
                </div>
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            layoutId={`img-${index}`}
                            onClick={() => setSelectedImage(img)}
                            className="group relative h-64 cursor-pointer overflow-hidden rounded-lg bg-slate-200"
                            whileHover={{ scale: 1.02 }}
                        >
                            <img
                                src={img.src}
                                alt={img.title}
                                loading="lazy"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <ZoomIn className="text-white" size={32} />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <p className="text-white font-medium">{img.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={32} />
                        </button>
                        <motion.img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="max-h-[90vh] max-w-full rounded-lg shadow-2xl"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                        />
                        <div className="absolute bottom-8 left-0 right-0 text-center text-white text-xl font-medium pointer-events-none">
                            {selectedImage.title}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
