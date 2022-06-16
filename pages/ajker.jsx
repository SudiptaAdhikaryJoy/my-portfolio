import Image from 'next/image'
import React from 'react'
import propertyOne from '../public/assets/property/propertyOne.png'

const ajker = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 w-full left-0 h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={propertyOne} alt='' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-y-[-50%] translate-x-[-50%] z-10 py-6 px-6 text-white'>
          <h2 className='py-2'>Ajker Barta</h2>
          <h3>An Online Base News Portal</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <h4>Project</h4>
          <h2>Overview</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam tenetur, totam laboriosam ipsum atque iure animi aspernatur. Molestiae, repudiandae?</p>
          <button className='px-8 py-2 mt-4 mr-9'>Demo</button>
          <button className='px-8 py-2 mt-4'>Code</button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl rounded-xl shadow-gray-400 p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
          </div>
          <div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default ajker