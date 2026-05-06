import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="w-full bg-[#0b0416] border-t border-slate-800 py-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-fuchsia-600 to-transparent opacity-30"></div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start">
                    <Link href="/" className="text-2xl font-extrabold font-sans gradient-text">
                        Ajay V
                    </Link>
                    <p className="text-gray-500 mt-2 text-sm text-center md:text-left max-w-xs">
                        Building modern web experiences with passion and precision.
                    </p>
                </div>
                
                <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-400">
                    <Link href="#home" className="hover:text-fuchsia-500 transition-colors">Home</Link>
                    <Link href="#about" className="hover:text-fuchsia-500 transition-colors">About</Link>
                    <Link href="#projects" className="hover:text-fuchsia-500 transition-colors">Projects</Link>
                    <Link href="#skills" className="hover:text-fuchsia-500 transition-colors">Skills</Link>
                    <Link href="#contact" className="hover:text-fuchsia-500 transition-colors">Contact</Link>
                </nav>
                
                <div className="flex gap-4">
                    <a href="#" className="text-gray-500 hover:text-white transition-colors"><FaGithub size={20} /></a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors"><FaLinkedin size={20} /></a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors"><FaTwitter size={20} /></a>
                </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-800 text-center text-gray-600 text-sm">
                <p>&copy; {new Date().getFullYear()} Ajay V. All rights reserved.</p>
            </div>
        </footer>
    );
};
