import React, { useEffect, useState } from 'react';
import Bestseller from './BestSeller'

const Bestsellers = () => {
    const [bestsellers, setBestsellers] = useState([]);

    useEffect(() => {

        fetch('https://ezectric-electrical-supply.onrender.com/shops')
            .then(res => res.json())
            .then(data => setBestsellers(data))
    }, [])

    return (
        <div>
            <div data-aos="fade-down"
                data-aos-duration="3000">
                <h1 className='text-blue-900 lg:text-2xl text-center mt-8 font-semibold'>Our product</h1>
                <h1 className='text-black text-lg lg:text-3xl font-semibold text-center py-4'>Best Seller products <br /> <progress class="progress w-56 "></progress></h1>

            </div>
            <div data-aos="zoom-in-down"
                data-aos-duration="3000" className='grid lg:grid-cols-4 gap-4 p-11 md:grid-cols-2 sm:grid-cols-1 '>
                {
                    bestsellers.slice(0 - 8).map(bestseller => <Bestseller
                        bestseller={bestseller}
                        key={bestseller._id}
                    ></Bestseller>)
                }
            </div>

        </div>
    );
};

export default Bestsellers;