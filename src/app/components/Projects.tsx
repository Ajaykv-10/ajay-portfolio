"use client";
import React from 'react';
import ProjectCard from './ProjectCard';
import { SectionWrapper } from './SectionWrapper';
import { motion } from 'framer-motion';

const Projects = () => {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    return (
        <SectionWrapper id="projects">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold font-sans inline-block">
                    Featured <span className="gradient-text">Projects</span>
                </h2>
                <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                    Some of my recent work and personal projects
                </p>
            </div>
            
            <motion.div 
                className='w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16'
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <ProjectCard 
                    images={["/project/gt1.png"]} 
                    title="Tours and Travel Management App" 
                    description="The GT Holidays Dashboard is a web-based admin panel used to manage and monitor travel-related operations. It helps administrators handle key modules like tour packages, customer enquiries, bookings, itineraries, hotels, and staff management in one place." 
                    techStack={['React', 'Next.js', 'Tailwind', 'Node.js']}
                    liveUrl="#"
                    githubUrl="#"
                />
                <ProjectCard 
                    images={["/project/gt2.png"]} 
                    title="Hotel Management App" 
                    description="Hotel 360 is a web-based hotel management dashboard designed to simplify hotel operations. It allows admins to manage reservations, room availability, rate plans, staff access, and customer data in a centralized system." 
                    techStack={['React', 'TypeScript', 'Tailwind', 'Redux']}
                    liveUrl="#"
                    githubUrl="#"
                />
            </motion.div>
        </SectionWrapper>
    );
}

export default Projects;