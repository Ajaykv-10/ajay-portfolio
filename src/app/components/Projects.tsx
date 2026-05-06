import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <section id="projects">
            <h2 className='text-3xl text-center mb-5 font-bold text-fuchsia-600'>Projects</h2>
            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden'>
                <ProjectCard images={["/project/gt1.png"]} title="Tours and Travel Management App" description="The GT Holidays Dashboard is a web-based admin panel used to manage and monitor travel-related operations. It helps administrators handle key modules like tour packages, customer enquiries, bookings, itineraries, hotels, and staff management in one place." />
                <ProjectCard images={["/project/gt2.png"]} title="Hotel Management App" description="Hotel 360 is a web-based hotel management dashboard designed to simplify hotel operations. It allows admins to manage reservations, room availability, rate plans, staff access, and customer data in a centralized system." />
            </div>

        </section>
    )
}

export default Projects