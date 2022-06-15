import Image from 'next/image'
import React from 'react'
import img1 from '../public/assets/images/IMG01.jpg'
export default function About() {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='cols-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-4 text-gray-600'>I am a Software Engineer</p>
            </div>
            <div className='w-full h-auto m-auto rounded-xl flex items-center justify-center border-b shadow-gray-400 shadow-xl p-4 hover:scale-105 ease-in duration-300'>
                <Image src='/../public/assets/images/IMG01.jpg' width="400" height="400" alt="" className='rounded-xl' />
            </div>
        </div>
    </div>
  )
}
