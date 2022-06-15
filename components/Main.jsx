import Link from 'next/link';
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import {FaGithub, FaInstagram, FaLinkedinIn} from 'react-icons/fa';
import Typical from 'react-typical';

export const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Lets Build Something Together</p>
                <h1 className='py-4 text-gray-700'>
                    Hello, I'm <span className="text-[#5651e5]">Sudipta Adhikary</span>
                </h1>
                <h1 className='py-2 text-gray-700'>
                    <Typical
                loop={ Infinity}
                steps={[
                    "Full Stack Developer",
                    500, 
                    "MERN Stack Developer",
                    500, 
                    "Backend Stack Developer",
                    400, 
                ]}
                 />
                    </h1>
                <p className='py-4 text-gray-600 mx-w-[70%] m-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ducimus officiis illo ipsam obcaecati voluptatibus eaque eveniet assumenda, impedit iusto!</p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaInstagram />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
