import React from 'react';
import { GoLocation } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineFieldTime } from 'react-icons/ai';

const GatTouch = () => {
    return (
        <div className='lg:mx-24 mx-4 my-24'>
            <div className='w-full grid lg:grid-cols-2 gap-8 '>
                {/* // Got touch information */}
                <div >
                    <h1 className='text-xl text-blue-800 font-semibold'>Got Any Questions?</h1>
                    <h1 className='my-2 text-4xl text-black font-bold'>Get In Touch</h1>
                    <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>


                    <div className='grid grid-cols-2 gap-6 mt-12'>
                        <div className='bg-green-50 rounded-lg grid place-items-center py-8 '>
                            <div className='flex '>
                                <GoLocation size={35} className="text-blue-700"></GoLocation>
                                <h1 className=' font-semibold text-2xl  '> Location</h1>
                            </div>
                            <p className='my-2 text-slate-600 font-semibold ' >jl. Sunset Road No.99, Kuta</p>
                        </div>
                        <div className='bg-green-50 rounded-lg grid place-items-center  py-8 '>
                            <div className='flex '>
                                <FiPhoneCall size={35} className="text-blue-700 mx-2"></FiPhoneCall>
                                <h1 className=' font-semibold text-2xl  '> Phone</h1>
                            </div>
                            <p className=' text-slate-600 font-semibold '>+8801829704087</p>
                        </div>
                        <div className='bg-green-50 rounded-lg grid place-items-center  py-8 '>
                            <div className='flex '>
                                <AiOutlineMail size={35} className="text-blue-700"></AiOutlineMail>
                                <h1 className='font-semibold text-2xl mx-2 '>Email</h1>
                            </div>
                            <p className='my-2 text-slate-600 font-semibold ' >amitsharma1998k@gmail,com</p>
                        </div>
                        <div className='bg-green-50 rounded-lg grid place-items-center  py-8 '>
                            <div className='flex '>
                                <AiOutlineFieldTime size={35} className="text-blue-700 mx-2"></AiOutlineFieldTime>
                                <h1 className='font-semibold text-2xl  '>Opening</h1>
                            </div>
                            <p className='my-2 text-slate-600 font-semibold '>Mon- Sat 8:00 AM - 9:00 PM</p>
                        </div>

                    </div>
                </div>
                {/* Login section */}

                <div className=' h-auto'>
                    <div className=" w-full bg-base-100 shadow-xl px-12">
                        <div className="card-body">
                            <h1>Name*</h1>
                            <input type="text" placeholder="Enter your Name" className="input input-bordered  w-full " />
                            <h1>Email Address*</h1>
                            <input type="email" placeholder=" Enter Your Email" className="input input-bordered  input-black w-full " />
                            <h1>Subject</h1>
                            <input type="text" placeholder="Subject" className="input input-bordered  w-full " />
                            <h1>Comments / Questions</h1>
                            <textarea className="textarea input-bordered w-full " placeholder="Your Massage"></textarea>
                       <button className='bg-blue-800 mt-2  w-28 text-white py-3 text-lg font-bold'>shop naw</button>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GatTouch;