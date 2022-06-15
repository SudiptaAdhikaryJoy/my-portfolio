import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import propertyOne from '../public/assets/property/propertyOne.png'
import propertyTwo from '../public/assets/property/propertyTwo.png'
import propertyThree from '../public/assets/property/propertyThree.png'
import ProjectItem from './ProjectItem'

function Projects() {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Build</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <ProjectItem 
                    title='Ajker Barta'
                    backgroundImg = {propertyOne}
                    projectUrl = '/property'
                />
                <ProjectItem 
                    title='Express Travel'
                    backgroundImg = {propertyTwo}
                    projectUrl = '/property'
                />
                <ProjectItem 
                    title='Mercury Car Services'
                    backgroundImg = {propertyThree}
                    projectUrl = '/property'
                />

            </div>
        </div>
    </div>
  )
}

export default Projects