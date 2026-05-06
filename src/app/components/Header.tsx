'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa6";

export const Header = () => {
    const [isScrolled, setScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 8) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <div className={`fixed left-0 top-0 right-0 z-50  transition-colors duration-300 ${isScrolled ? 'bg-mauve-800/70 backdrop-blur-md shadow-white' : 'bg-mauve-800'}`}>
            < div className='max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between'>
                <Link href="/" className='text-3xl font-extrabold text-fuchsia-600'>Ajay V</Link>
                <nav className='hidden md:flex space-x-10 text-lg'>
                    <Link href="#home" className='text-white hover:text-fuchsia-600 transition duration-300'>Home</Link>
                    <Link href="#about" className='text-white hover:text-fuchsia-600 transition duration-300'>About</Link>
                    <Link href="#projects" className='text-white hover:text-fuchsia-600 transition duration-300'>Projects</Link>
                    <Link href="#skills" className='text-white hover:text-fuchsia-600 transition duration-300'>Skills</Link>
                    <Link href="#contact" className='text-white hover:text-fuchsia-600 transition duration-300'>Contact</Link>
                </nav>
                <button className='md:hidden text-white text-2xl p-2 rounded-md hover:bg-fuchsia-600 transition duration-300' onClick={() => {
                    setIsMenuOpen(!isMenuOpen)
                }}><FaBars /></button>
            </div>
            {/*Mobile View*/}
            {
                isMenuOpen && (
                    <div className='md:hidden flex flex-col gap-3 text-base text-white font-medium px-6 pb-4' onClick={(e) => {
                        const target = e.target as HTMLElement
                        if (target.tagName === "A") {
                            setIsMenuOpen(false)
                        }
                    }}>
                        <Link href="#home" className=' hover:text-fuchsia-600 transition duration-300'>Home</Link>
                        <Link href="#about" className='hover:text-fuchsia-600 transition duration-300'>About</Link>
                        <Link href="#lab" className='hover:text-fuchsia-600 transition duration-300'>Lab</Link>
                        <Link href="#projects" className='hover:text-fuchsia-600 transition duration-300'>Projects</Link>
                        <Link href="#contact" className='hover:text-fuchsia-600 transition duration-300'>Contact</Link>
                    </div >
                )
            }
        </div >
    )
}
