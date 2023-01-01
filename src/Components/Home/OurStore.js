import React from 'react';


const OurStore = () => {
    return (
        <div className='w-full h-96' >
            <div className={`w-full  h-full bg-cover  bg-[url('https://templatekit.jegtheme.com/ezectric/wp-content/uploads/sites/259/2022/04/white-lamps-are-hanging-in-the-accessories-store--e1650831036913.jpg')]`} >
                <div className="bg-black/50 h-full w-full">
                    <div data-aos="zoom-in-down"
                        data-aos-duration="1000"
                        className='text-center '>
                        <h1 className='font-semibold text-2xl text-amber-300 pt-24'>Our Store</h1>
                        <h1 className='text-4xl text-white font-bold  my-5'>Get 50% Discount by Becoming a Member</h1>
                        <p className=' text-semibold text-white text-xl'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br />
                            commodo ligula.

                        </p>
                        <button className="px-4 py-2 mt-4  font-bold bg-white hover:bg-blue-900 hover:text-white">SHOP NOW</button>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default OurStore;