import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-accent hover:bg-accent-hover text-secondary font-bold shadow-lg hover:shadow-xl", // Yellow Button, Navy Text
        secondary: "bg-secondary text-white hover:bg-secondary-light shadow-md", // Navy Button, White Text
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white", // Green Border
        ghost: "text-primary hover:bg-green-50"
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
