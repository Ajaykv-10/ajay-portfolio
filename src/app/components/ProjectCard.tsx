"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ProjectCardProps {
    images: string[];
    title: string;
    description: string;
    techStack?: string[];
    liveUrl?: string;
    githubUrl?: string;
}

const ProjectCard = ({ images, title, description, techStack = [], liveUrl, githubUrl }: ProjectCardProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const item = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <motion.div 
            variants={item}
            className="group glass-card rounded-2xl overflow-hidden border border-slate-700/50 hover:border-fuchsia-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-fuchsia-500/10 flex flex-col h-full"
        >
            <div className="relative h-64 overflow-hidden w-full bg-slate-800">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                    >
                        <Image 
                            src={images[currentIndex]} 
                            alt={`${title} screenshot ${currentIndex + 1}`} 
                            fill
                            className='object-cover object-top transition-transform duration-700 group-hover:scale-110' 
                        />
                    </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0416] via-transparent to-transparent opacity-80"></div>
                
                {/* Image Navigation Controls */}
                {images.length > 1 && (
                    <>
                        <button 
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-fuchsia-600/80 text-white rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                        >
                            <FaChevronLeft size={14} />
                        </button>
                        <button 
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-fuchsia-600/80 text-white rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                        >
                            <FaChevronRight size={14} />
                        </button>
                        
                        {/* Pagination Dots */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                            {images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={(e) => { e.preventDefault(); setCurrentIndex(idx); }}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-fuchsia-500' : 'w-2 bg-white/50 hover:bg-white'}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className='text-2xl font-bold text-gray-100 group-hover:text-fuchsia-400 transition-colors'>{title}</h3>
                    <div className="flex gap-3 text-gray-400 shrink-0">
                        {githubUrl && (
                            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <FaGithub size={20} />
                            </a>
                        )}
                        {liveUrl && (
                            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <FaExternalLinkAlt size={18} />
                            </a>
                        )}
                    </div>
                </div>
                
                <p className='text-gray-400 leading-relaxed mb-6 flex-grow'>{description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800">
                    {techStack.map((tech, index) => (
                        <span 
                            key={index} 
                            className="text-xs font-medium px-3 py-1 bg-slate-800/80 text-fuchsia-300 rounded-full border border-fuchsia-500/20"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;