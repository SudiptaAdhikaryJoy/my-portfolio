import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
                <h2 className='py-4'>Get In Touch</h2>

                <div className='grid lg:grid-cols-5 gap-8'>
                    {/* left */}
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full'>
                            <div>
                                <img className='rounded-xl hover:scale-105 ease-in duration-300' src="https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=620&q=40" alt="" />
                            </div>
                            <div>
                                <h2 className='py-3 uppercase'>Sudipta Adhikary Joy</h2>
                                <p className='font-bold'>Full Stack Engineer</p>
                                <p className='py-4'>I am a Full Stack Engineer. Contact me and lets talk</p>
                            </div>
                        <div>
                            <p className='uppercase pt-8'>Connect With Me</p>
                            <div className='flex items-center justify-between py-'>
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
                    {/* right */}
                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name
                                        </label>
                                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Number
                                        </label>
                                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email
                                        </label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject
                                        </label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message
                                        </label>
                                        <textarea className='border-2 rounded-lg p-3 border-gray-300' rows="10" />
                                </div>
                                <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 mt-8 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp size={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;