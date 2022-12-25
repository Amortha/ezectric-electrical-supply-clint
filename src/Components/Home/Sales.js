import React from 'react';

const Sales = ({ sale }) => {
    return (
        <div>

            <div className=' bg-blue-900   grid grid-cols-2  rounded-lg  ' data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <div className='py-8 w-full ' >
                    <img className='w-48' src={sale.img} alt="pic" />
                </div>
                <div className='py-12 w-full'>
                    <h1 className='text-white text-xl font-semibold'>{sale.name}</h1>
                    <h1 className='text-white text-3xl font-bold'>{sale.descraption}</h1>
                    <button className="  py-4 text-amber-500 font-bold ">SHOP Now </button>
                </div>
            </div>


            {/* <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img className='w-28' src={sale.img} alt="pic" />
          <div>
            <h1 className="text-3xl font-bold">{sale.name}</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> */}
        </div>
    );
};

export default Sales;