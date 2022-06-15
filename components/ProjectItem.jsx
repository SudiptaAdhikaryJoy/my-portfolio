import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProjectItem({title, backgroundImg, projectUrl}) {
  return (
    <div className='relative flex items-center justify-center h-auto w-full p-4 shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' />
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className="text-white text-center text-2xl tracking-widest">{title}</h3>
                        <p className="pb-4 pt-2 text-white text-center">Full Stack project</p>
                        <Link href={projectUrl}>
                            <p className='text-center rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                        </Link>
                    </div>
                </div>
  )
}

export default ProjectItem