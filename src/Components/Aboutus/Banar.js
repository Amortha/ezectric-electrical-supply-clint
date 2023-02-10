import React from 'react';
import { FaChevronRight } from "react-icons/fa";

const Banar = () => {
    return (
        <div className={`w-full bg-fixed h-72 bg-cover bg-[url('https://i.ibb.co/CKD08H6/elecrici.jpg')]`}>
            <div className='bg-black/50 w-full h-full' >
            <h1 className='text-2xl lg:text-3xl font-bold text-white text-center pt-24' >About Us</h1>
                        <div className='flex justify-center  text-white text-2xl mt-7' >
                          
                          <h1 className='pr-2'>Home</h1>
                          <FaChevronRight className='w-5 h-5 mt-2 text-amber-500'></FaChevronRight>
                          <h1 className='pl-2 mb-6'>About us</h1>
                        </div>
            </div>
        </div>
    );
};

export default Banar;