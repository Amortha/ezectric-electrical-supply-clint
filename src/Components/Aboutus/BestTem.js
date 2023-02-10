import React, { useState } from 'react';

const BestTem = ({besttem}) => {
    const {img,name,location} =besttem
    const [hover, setHover] = useState(false);
    return (
            <div className='mb-24 sm:mx-6 w-full'>
                <div onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    className="relative lg:h-[62vh] h-96 cursor-pointer">
                    <img className='w-full h-96 ' src={img} alt='' />

                    <div
                        className={`bg-black/50 p-6 w-full h-96 transition-all
           ease-in-out duration-500 uppercase text-sm absolute  ${hover ? "bottom-0" : "opacity-0 -bottom-28"
                            }`} >
                   
                        <h1 className='font-bold text-xl text-blue-700 mt-96 '>{name}</h1>
                        <h1 className="mt-3 font-semibold  tracking-widest">{location}</h1>
                    </div>
                </div>
            </div>
      
    );
};

export default BestTem;