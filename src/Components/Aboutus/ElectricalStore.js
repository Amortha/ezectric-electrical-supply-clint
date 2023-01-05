import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const ElectricalStore = () => {
    return (
        <div className='w-full h-auto grid lg:grid-cols-2  gap-24 lg:px-24 my-24 px-4'>
            <div className='w-full ' >
                <div className='grid lg:grid-cols-2 gap-6'>
                    <div className='bg-slate-200 grid place-items-center '>
                        <h1><span className='font-bold text-5xl'>10 +</span><br />
                            Years Experience</h1>
                    </div>
                    <img src='https://i.ibb.co/48tFQb4/lite.jpg' alt='' />
                </div>
                <img className='w-full h-96 mt-5' src='https://i.ibb.co/R2m5TFC/elecrician-choosing-electrical-goods-in-the-shop-3-768x513.jpg' alt='' />
            </div>
            <div className=' h-auto lg:mt-24'>
                <h1 className='text-blue-600 font-semibold text-2xl'>About Us </h1>
                <h1 className='text-black font-bold text-4xl py-4'>We Are Best Electrical Store in Town Since 2010</h1>
                <h1 className=' text-slate-600 text-xl'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.</h1>
                <div className='grid lg:grid-cols-2  text-slate-600 text-lg mt-12'>
                    <div>
                        <p className='flex '><FaCheckCircle className="text-blue-600 mx-2"></FaCheckCircle> International Brands</p>
                        <p className='flex '><FaCheckCircle className="text-blue-600 mx-2"></FaCheckCircle>Have heen certified</p>
                        <p className='flex '><FaCheckCircle className="text-blue-600 mx-2"></FaCheckCircle>Quality of our research</p>
                        <p className='flex '><FaCheckCircle className="text-blue-600 mx-2"></FaCheckCircle> Breadth of our capabilities</p>
                    </div>
                    <div>
                        <p className='flex '><FaCheckCircle className="text-blue-600 mx-2"></FaCheckCircle>Trustworthy</p>
                        <p className='flex '><FaCheckCircle className="text-blue-600 mx-2"></FaCheckCircle>High integrity</p>
                        <p className='flex '><FaCheckCircle className="text-blue-600 mx-2"></FaCheckCircle>Providing The best product</p>
                        <p className='flex '><FaCheckCircle className="text-blue-600 mx-2"></FaCheckCircle>Global reach of our business</p>
                    </div>
                </div>
                <button className=" bg-blue-600 px-6 py-2 mt-8 text-lg hover:bg-blue-900  text-white">About Us</button>
            </div>

        </div>
    );
};

export default ElectricalStore;