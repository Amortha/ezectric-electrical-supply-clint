import React from 'react';

const Sales = ({ sale }) => {
    return (
        <div  data-aos="fade-down"
        data-aos-duration="3000">

            <div className=' bg-blue-900   grid grid-cols-2  rounded-lg  '>
                <div className='py-8 w-full ' >
                    <img className='w-48' src={sale.img} alt="pic" />
                </div>
                <div className='py-12 pr-1 w-full'>
                    <h1 className='text-white text-xl font-semibold'>{sale.name}</h1>
                    <h1 className='text-white lg:text-2xl font-bold'>{sale.descraption}</h1>
                    <button className="  py-4 text-amber-500 font-bold ">SHOP Now </button>
                </div>
            </div>
        </div>
    );
};

export default Sales;