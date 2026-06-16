import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-black text-white hover:bg-[#333333] border border-black shadow-sm",
        secondary: "bg-[#F5F5F5] text-black border border-[#D9D9D9] hover:bg-[#D9D9D9]",
        outline: "border border-black text-black bg-transparent hover:bg-[#F5F5F5]",
        ghost: "text-black hover:bg-[#F5F5F5]"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
