'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
    const [isScrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <header className={`fixed left-0 top-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0b0416]/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-lg' : 'bg-transparent py-5'}`}>
            <div className='max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between'>
                <Link href="/" className='text-3xl font-extrabold font-sans gradient-text hover:scale-105 transition-transform duration-300'>
                    Ajay V
                </Link>

                <nav className='hidden md:flex space-x-10 text-lg font-medium'>
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className='relative text-gray-300 hover:text-white transition-colors duration-300 group'>
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fuchsia-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>

                <button 
                    className='md:hidden text-gray-300 hover:text-fuchsia-500 text-2xl transition duration-300' 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className='md:hidden bg-[#0b0416]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden'
                    >
                        <div className='flex flex-col gap-4 px-6 py-6' onClick={(e) => {
                            if ((e.target as HTMLElement).tagName === "A") setIsMenuOpen(false);
                        }}>
                            {navLinks.map((link) => (
                                <Link key={link.name} href={link.href} className='text-lg font-medium text-gray-300 hover:text-fuchsia-500 transition-colors duration-300'>
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
