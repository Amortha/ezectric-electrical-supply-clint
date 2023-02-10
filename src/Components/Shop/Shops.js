
import React, { useEffect, useState } from 'react';
import CustomerReviews from '../Home/CustomerReviews'
import Sale from '../Home/Sale';
import Shop from './Shop';
import { FaChevronRight } from "react-icons/fa";

const Shops = () => {
    const [shops, setShops] = useState([]);
    const [searchProduct, setSearchProduct] = useState([]);
    const [query, setQuery] = useState('');

    const searchText = (e) => {
        setQuery(e.target.value);
        const searchProduct = shops.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
        setSearchProduct(searchProduct);
    }
    useEffect(() => {

        fetch('http://localhost:5000/shops')
            .then(res => res.json())
            .then(data => setShops(data))
    }, [])
    return (
        <div>
            <div className={`bg-cover bg-fixed h-80  bg-[url('https://i.ibb.co/3Cp0t4k/concept-of-electrician-tools-space-for-text-e1651085572732.jpg')]`}>
                <div className='bg-black/60 w-full h-80'>

                    <div className='pt-16 text-center'>
                        {/* <h1 className='text-white text-2xl mt-24 mb-5 font-bold'></h1> */}
                        <h1 className='text-3xl font-bold text-white' >Shop</h1>
                        <div className='flex justify-center  text-white text-2xl mt-7' >
                          
                          <h1 className='pr-2'>Home</h1>
                          <FaChevronRight className='w-5 h-5 mt-2 text-amber-500'></FaChevronRight>
                          <h1 className='pl-2 mb-6'>shop</h1>
                        </div>
                        <input type="text" placeholder="Find Your Product" className="input input-bordered  w-full max-w-xs" value={query} onChange={searchText} />
                    </div>
                </div>
            </div>
            <div data-aos="fade-down"
        data-aos-duration="3000">
                <h1 className='text-blue-900 text-xl lg:text-2xl text-center mt-8 font-semibold'>Our product</h1>
                <h1 className='text-black text-2xl lg:text-3xl font-semibold text-center py-4'>Best Seller products <br /> <progress class="progress w-56 "></progress></h1>

            </div>
            <div className='grid lg:grid-cols-4 gap-4 p-11 md:grid-cols-2 sm:grid-cols-1 '>

                {
                    searchProduct.length ? searchProduct.map(shop => <Shop shop={shop} key={shop._id}></Shop>) : shops.map(shop => <Shop shop={shop} key={shop._id}></Shop>)
                }
            </div>
            <Sale></Sale>
            <CustomerReviews></CustomerReviews>
        </div>
    );
};

export default Shops;