import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hoverEffect = true }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={hoverEffect ? {
                y: -8,
                transition: { duration: 0.3 }
            } : {}}
            className={`
        bg-white 
        rounded-2xl 
        border border-slate-100 
        shadow-sm hover:shadow-xl hover:shadow-accent/15 hover:border-accent/30
        overflow-hidden 
        transition-all duration-300
        ${className}
      `}
        >
            {/* Subtle Gradient Overlay on Hover for premium feel */}
            {hoverEffect && (
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            )}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </motion.div>
    );
};

export default Card;
