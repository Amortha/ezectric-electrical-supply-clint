import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const FaqBanar = () => {
    return (
        <div className={`w-full h-80 bg-fixed bg-cover bg-[url('https://i.ibb.co/SfHWrhG/jpg.jpg')]`}>
           
           <div className='w-full h-full bg-black/60'>
                <h1 className='text-3xl font-bold text-white text-center pt-24' >Faq</h1>
                <div className='flex justify-center  text-white text-2xl mt-7' >

                    <h1 className='pr-2'>Home</h1>
                    <FaChevronRight className='w-5 h-5 mt-2 text-amber-500'></FaChevronRight>
                    <h1 className='pl-2 mb-6'>Faq</h1>
                </div>
            </div>
        </div>
    );
};

export default FaqBanar;