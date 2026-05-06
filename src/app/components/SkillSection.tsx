'use client';
import React from 'react';
import skills from '../constants/skills.constants';
import { SectionWrapper } from './SectionWrapper';

export const SkillSection = () => {
    const loopedSkills = [...skills, ...skills];

    return (
        <SectionWrapper id="skills" className="overflow-hidden">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold font-sans inline-block">
                    My <span className="gradient-text">Skills</span>
                </h2>
                <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                    Technologies I work with to build modern applications
                </p>
            </div>

            <div className='w-full overflow-hidden relative'>
                {/* Gradient fades on edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0b0416] to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0b0416] to-transparent z-10"></div>

                <div className='flex w-max gap-8 py-10 animate-marquee-ltr hover:[animation-play-state:paused]'>
                    {loopedSkills.map((skill, index) => (
                        <div
                            key={index}
                            className='relative z-0 hover:z-20 glass-card text-center rounded-3xl flex flex-col items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 p-6 cursor-default border border-slate-700/50 hover:border-fuchsia-500/50 group'
                            style={{ minWidth: '12rem' }}
                        >
                            <div className='text-6xl text-gray-400 group-hover:text-fuchsia-400 transition-colors duration-300 drop-shadow-[0_0_15px_rgba(217,70,239,0)] group-hover:drop-shadow-[0_0_15px_rgba(217,70,239,0.5)]'>
                                {skill.icon}
                            </div>
                            <div className="w-full bg-slate-800 rounded-full h-1.5 my-4 overflow-hidden">
                                <div className="bg-gradient-to-r from-amber-400 to-fuchsia-500 h-1.5 rounded-full" style={{ width: `${skill.skillLevel}%` }}></div>
                            </div>
                            <p className='text-xl font-bold text-gray-200'>{skill.name}</p>
                            <p className='text-sm text-gray-400 font-medium mt-1'>{`${skill.skillLevel}%`}</p>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};
