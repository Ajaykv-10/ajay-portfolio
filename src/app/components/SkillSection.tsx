'use client'
import React from 'react'
import skills from '../constants/skills.constants'

export const SkillSection = () => {
    const loopedSkills = [...skills, ...skills]

    return (
        <section id="skills" className='py-16 overflow-hidden'>
            <h2 className='text-3xl text-center mb-8 font-bold text-fuchsia-600'>Skills</h2>

            <div className='w-full overflow-hidden'>
                <div className='flex w-max gap-8 py-10 animate-marquee-ltr hover:[animation-play-state:paused]'>
                    {loopedSkills.map((skill, index) => (
                        <div
                            key={index}
                            className='relative z-0 hover:z-10 bg-slate-900 text-center rounded-3xl flex flex-col items-center justify-center shadow-lg transition-transform duration-300 hover:scale-125 p-4 cursor-default'
                            style={{ minWidth: '10rem' }}
                        >
                            <div className='text-4xl text-gray-400'>{skill.icon}</div>
                            <p className='text-2xl font-semibold my-4 text-gray-200'>{`${skill.skillLevel} %`}</p>
                            <p className='font-semibold text-amber-300'>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
