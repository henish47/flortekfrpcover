import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-[#1B8036] text-white hover:bg-[#145C27] border border-[#1B8036] shadow-sm",
        secondary: "bg-[#FFC700] text-[#0B1B3D] border border-[#FFC700] hover:bg-[#E6B200] font-bold",
        outline: "border border-[#1B8036] text-[#1B8036] bg-transparent hover:bg-[#1B8036] hover:text-white",
        ghost: "text-[#0B1B3D] hover:bg-[#F5F5F5]"
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
