import Image from 'next/image';
import React from 'react'
interface ProjectCardProps {
    images: string[];
    title: string;
    description: string;

}
const ProjectCard = ({ images, title, description }: ProjectCardProps) => {
    return (
        <div><Image src={images[0]} alt={title} width={800} height={600} className='rounded-lg' />
            <p className='my-4 text-xl sm:text-2xl font-semibold text-gray-200'>{title}</p>
            <p className='text-gray-400 font-medium'>{description}</p></div>
    )
}

export default ProjectCard