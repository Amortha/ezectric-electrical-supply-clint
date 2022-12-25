import React from 'react';
import BestElactric from '../../assets/BestElaktric.jpg'
import { SlLike } from 'react-icons/sl';
import { GiCheckMark } from 'react-icons/gi';

const BestElectrical = () => {
    return (
        <div>
            <div className='bg-gray-100 w-full h-auto  mb-10 grid lg:grid-cols-2 sm:grid-cols-1 gap-24'>
                <div className='w-full '>
                    <img className='max-h-screen  h-full' src={BestElactric} alt='pic' />
                </div>
                <div className='w-full h-auto'>
                    <div className='mt-12'>
                        <h1 className='text-blue-900 font-semibold text-2xl'>Why Choose Us</h1>
                        <h1 className='text-black font-bold text-4xl py-5'>We Are Best Electrical <br />Store in Town</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer<br /> adipiscing elit. Aenean commodo ligula.</p>
                    </div>
                    <div className='grid lg:grid-cols-2 gap-2 pb-7 mt-6 '>
                        <div className=' bg-blue-700 w-60 h-auto px-6 py-8 rounded-lg'>

                            <SlLike color='white' size="35px" />
                            <h1 className='text-white font-semibold text-2xl mt-1'> We Provide The Best Guarantee For You Loyal Customers</h1>
                        </div>
                        <div>
                            <h1>Money Back Guarantee<span className='pl-4'>90%</span></h1>
                            <progress className="progress progress-primary w-56" value="90" max="100"></progress>
                            <h1>Trusted Company<span className='pl-12'>94%</span></h1>
                            <progress className="progress progress-primary w-56" value="94" max="100"></progress>
                            <div className='flex mt-2'>
                                <GiCheckMark />
                                <p className='pl-4'> Many Brands</p>
                            </div>
                            <div className='flex mt-2'>
                                <GiCheckMark />
                                <p className='pl-4'>Best Quality Product</p>
                            </div>
                          <div className='flex mt-2'>
                          <GiCheckMark />
                            <p className='pl-4'>Commitment to Customers</p>
                          </div>
                        </div>
                    </div>

                    <button className="px-6 py-4 mb-10 bg-blue-800 font-bold text-white">SHOP NOW</button>
                </div>
                
            </div>
        </div>
    );
};

export default BestElectrical;