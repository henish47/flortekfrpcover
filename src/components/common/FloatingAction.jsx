import React from 'react';
import { Phone, Mail } from 'lucide-react';

const FloatingAction = () => {
    return (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2.5">
            <div className="flex flex-col gap-3">
                {/* Email Button */}
                <a
                    href="mailto:flortekindustries@gmail.com"
                    className="bg-[#0B1B3D] text-white p-3.5 rounded-full border border-[#0B1B3D] shadow-md hover:bg-[#1B8036] hover:-translate-y-1 transition-all flex items-center justify-center group relative"
                    aria-label="Send Email"
                >
                    <Mail size={20} className="relative z-10" />
                    <span className="absolute right-full mr-3 bg-white text-black text-xs font-bold py-1 px-2 rounded border border-[#D9D9D9] shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden lg:block">
                        Mail via Gmail
                    </span>
                </a>

                {/* WhatsApp Button */}
                <a
                    href="https://wa.me/918000888620?text=Hello%20Flortek%2C%20I%20visited%20your%20website%20and%20I%20am%20interested%20in%20your%20FRP%20products.%20Please%20provide%20more%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white p-3.5 rounded-full border border-[#25D366] shadow-md hover:bg-[#20ba5a] hover:border-[#20ba5a] hover:-translate-y-1 transition-all flex items-center justify-center group relative"
                    aria-label="Chat on WhatsApp"
                >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="relative z-10">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.755.002-2.607-1.002-5.06-2.825-6.886-1.821-1.821-4.244-2.81-6.853-2.81-5.439 0-9.865 4.37-9.87 9.761-.001 1.77.462 3.498 1.402 5.041l-.997 3.64 3.754-.981zm11.386-5.45c-.273-.135-1.617-.788-1.87-.878-.252-.09-.436-.135-.62.135-.183.27-.708.879-.868 1.059-.16.179-.32.203-.593.067-.27-.137-1.143-.418-2.177-1.328-.805-.714-1.348-1.597-1.506-1.867-.159-.271-.018-.417.118-.552.122-.121.272-.315.409-.472.136-.157.182-.262.272-.437.09-.176.046-.329-.023-.465-.069-.136-.62-1.477-.849-2.023-.223-.532-.47-.461-.644-.47l-.547-.008c-.19 0-.498.07-.759.352-.26.281-1 .974-1 2.375s1.018 2.751 1.16 2.942c.143.19 2.001 3.01 4.848 4.224.678.29 1.207.463 1.62.593.68.214 1.3.184 1.79.111.545-.081 1.617-.653 1.843-1.282.227-.63.227-1.171.159-1.283-.07-.11-.253-.176-.526-.312z"/>
                    </svg>
                    <span className="absolute right-full mr-3 bg-white text-black text-xs font-bold py-1 px-2 rounded border border-[#D9D9D9] shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden lg:block">
                        Chat with us
                    </span>
                </a>

                {/* Phone Button */}
                <a
                    href="tel:+918000888620"
                    className="bg-[#FFC700] text-[#0B1B3D] p-3.5 rounded-full border border-[#FFC700] shadow-md hover:bg-[#E6B200] hover:-translate-y-1 transition-all flex items-center justify-center group relative font-bold"
                    aria-label="Call Now"
                >
                    <Phone size={20} className="relative z-10" />
                    <span className="absolute right-full mr-3 bg-white text-black text-xs font-bold py-1 px-2 rounded border border-[#D9D9D9] shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden lg:block">
                        Call Now
                    </span>
                </a>
            </div>
        </div>
    );
};

export default FloatingAction;
