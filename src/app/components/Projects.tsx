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
                    Some of my recent work and personal projects (Swipe to explore)
                </p>
            </div>
            
            <div className="relative w-full max-w-7xl mx-auto">
                {/* Gradient fades on the sides for better visual cue on desktop */}
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0b0416] to-transparent z-10 pointer-events-none"></div>
                <div className="hidden md:block absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0b0416] to-transparent z-10 pointer-events-none"></div>

                <motion.div 
                    className='flex overflow-x-auto gap-6 pb-12 pt-4 px-4 md:px-12 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <div className="shrink-0 w-[85vw] md:w-[45vw] lg:w-[450px] snap-center">
                        <ProjectCard 
                            images={["/project/gt1.png", "/project/gt2.png", "/project/gt1.png"]} 
                            title="Tours and Travel Management App" 
                            description="The GT Holidays Dashboard is a web-based admin panel used to manage and monitor travel-related operations. It helps administrators handle key modules like tour packages, customer enquiries, bookings, itineraries, hotels, and staff management in one place." 
                            techStack={['React', 'Next.js', 'Tailwind', 'Node.js']}
                            liveUrl="#"
                            githubUrl="#"
                        />
                    </div>
                    
                    <div className="shrink-0 w-[85vw] md:w-[45vw] lg:w-[450px] snap-center">
                        <ProjectCard 
                            images={["/project/gt2.png", "/project/gt1.png", "/project/gt2.png"]} 
                            title="Hotel Management App" 
                            description="Hotel 360 is a web-based hotel management dashboard designed to simplify hotel operations. It allows admins to manage reservations, room availability, rate plans, staff access, and customer data in a centralized system." 
                            techStack={['React', 'TypeScript', 'Tailwind', 'Redux']}
                            liveUrl="#"
                            githubUrl="#"
                        />
                    </div>
                    
                    <div className="shrink-0 w-[85vw] md:w-[45vw] lg:w-[450px] snap-center">
                        <ProjectCard 
                            images={["/project/gt1.png", "/project/gt2.png", "/project/gt1.png"]} 
                            title="CRM Application" 
                            description="A comprehensive Customer Relationship Management platform designed to streamline sales, marketing, and customer support workflows. Features include lead tracking, pipeline management, and detailed analytics dashboards." 
                            techStack={['React', 'Next.js', 'Tailwind', 'Node.js']}
                            liveUrl="#"
                            githubUrl="#"
                        />
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}

export default Projects;