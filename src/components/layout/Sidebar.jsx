import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // Use NavLink for active states
import {
    Home,
    Info,
    Package,
    Grid,
    Image,
    Phone,
    Menu,
    X,
    ChevronRight,
    ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../common/Button';

const Sidebar = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Dashboard', path: '/', icon: Home },
        { name: 'Profile', path: '/about', icon: Info },
        { name: 'Inventory', path: '/products', icon: Package },
        { name: 'Applications', path: '/applications', icon: Grid },
        { name: 'Gallery', path: '/gallery', icon: Image },
        { name: 'Contact', path: '/contact', icon: Phone },
    ];

    const SidebarContent = () => (
        <div className="flex flex-col h-full bg-slate-900 text-white">
            {/* Logo Area */}
            <div className="p-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                    <img
                        src="/images/logo.png"
                        alt="Flortek"
                        className="h-10 w-auto bg-white rounded p-1"
                    />
                    <div className="flex flex-col">
                        <span className="font-bold font-display text-lg tracking-tight">FLORTEK</span>
                        <span className="text-xs text-slate-400 uppercase tracking-widest">Admin Panel</span>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 px-3">Main Menu</div>
                {links.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsMobileOpen(false)}
                        className={({ isActive }) => `
                            flex items-center gap-3 px-3 py-3 rounded-lg transition-all group relative
                            ${isActive
                                ? 'bg-accent text-white shadow-lg shadow-accent/20'
                                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                            }
                        `}
                    >
                        <link.icon size={20} />
                        <span className="font-medium text-sm">{link.name}</span>
                        {location.pathname === link.path && (
                            <motion.div
                                layoutId="active-pill"
                                className="absolute right-2"
                            >
                                <ChevronRight size={16} />
                            </motion.div>
                        )}
                    </NavLink>
                ))}
            </nav>

            {/* Bottom Actions */}
            <div className="p-4 border-t border-slate-800 bg-slate-900/50">
                <div className="bg-slate-800 rounded-xl p-4 mb-4">
                    <p className="text-xs text-slate-400 mb-2">Need Help?</p>
                    <a href="tel:+918000888620" className="flex items-center gap-2 text-sm font-semibold text-white hover:text-accent">
                        <Phone size={16} /> +91 80008 88620
                    </a>
                </div>
                <Button variant="primary" className="w-full justify-center text-sm">
                    <ExternalLink size={16} className="mr-2" /> Live Site
                </Button>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop Sidebar (Fixed) */}
            <aside className="hidden lg:block w-72 fixed inset-y-0 left-0 z-50 shadow-2xl">
                <SidebarContent />
            </aside>

            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-slate-900 text-white p-4 flex justify-between items-center shadow-md">
                <div className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="Logo" className="h-8 bg-white rounded p-0.5" />
                    <span className="font-bold">FLORTEK</span>
                </div>
                <button onClick={() => setIsMobileOpen(true)} className="p-2 hover:bg-slate-800 rounded-lg">
                    <Menu size={24} />
                </button>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isMobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 z-50 lg:hidden backdrop-blur-sm"
                            onClick={() => setIsMobileOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 left-0 w-72 bg-slate-900 z-50 lg:hidden shadow-2xl"
                        >
                            <SidebarContent />
                            <button
                                onClick={() => setIsMobileOpen(false)}
                                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
                            >
                                <X size={20} />
                            </button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Sidebar;
