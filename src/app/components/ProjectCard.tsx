"use client";
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
    images: string[];
    title: string;
    description: string;
    techStack?: string[];
    liveUrl?: string;
    githubUrl?: string;
}

const ProjectCard = ({ images, title, description, techStack = [], liveUrl, githubUrl }: ProjectCardProps) => {
    const item = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <motion.div 
            variants={item}
            className="group glass-card rounded-2xl overflow-hidden border border-slate-700/50 hover:border-fuchsia-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-fuchsia-500/10 flex flex-col h-full"
        >
            <div className="relative h-64 overflow-hidden w-full bg-slate-800">
                <Image 
                    src={images[0]} 
                    alt={title} 
                    fill
                    className='object-cover object-top transition-transform duration-700 group-hover:scale-110' 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0416] via-transparent to-transparent opacity-80"></div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className='text-2xl font-bold text-gray-100 group-hover:text-fuchsia-400 transition-colors'>{title}</h3>
                    <div className="flex gap-3 text-gray-400">
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