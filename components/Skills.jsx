import Image from 'next/image'
import React from 'react'

function Skills() {
  return (
    <div id='skills' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
            <h2 className='py-4 tracking-wider'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-4 md:p-3'>
                {/* first item */}
                <div className='p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/../public/assets/skills/html.png' 
                                width='64px'
                                height='64px'
                                alt='' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='uppercase'>html</h3>
                        </div>
                    </div>
                </div>
                    {/* second item */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/../public/assets/skills/css.png' 
                                width='64px'
                                height='64px'
                                alt='' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='uppercase'>css</h3>
                        </div>
                    </div>
                </div>
                {/* third item */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/../public/assets/skills/javascript.png' 
                                width='64px'
                                height='64px'
                                alt='' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='uppercase'>javascript</h3>
                        </div>
                    </div>
                </div>
                {/* fourth item */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/../public/assets/skills/react.png' 
                                width='64px'
                                height='64px'
                                alt='' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='uppercase'>react</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/../public/assets/skills/mongo.png' 
                                width='64px'
                                height='64px'
                                alt='' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='uppercase'>mongoDB</h3>
                        </div>
                    </div>
                </div>
                {/* fifth item */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/../public/assets/skills/node.png' 
                                width='64px'
                                height='64px'
                                alt='' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='uppercase'>nodejs</h3>
                        </div>
                    </div>
                </div>
                {/* sixth item */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/../public/assets/skills/tailwind.png' 
                                width='64px'
                                height='64px'
                                alt='' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='uppercase'>tailwind</h3>
                        </div>
                    </div>
                </div>
                {/* seventh item */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/../public/assets/skills/github1.png' 
                                width='64px'
                                height='64px'
                                alt='' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='uppercase'>github</h3>
                        </div>
                    </div>
                </div>
                {/* eighth item */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/../public/assets/skills/firebase.png' 
                                width='64px'
                                height='64px'
                                alt='' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='uppercase'>firebase</h3>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Skills