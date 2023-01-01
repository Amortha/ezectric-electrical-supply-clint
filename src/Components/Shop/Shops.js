
import React, { useEffect, useState } from 'react';
import CustomerReviews from '../Home/CustomerReviews'
import Sale from '../Home/Sale';
import Shop from './Shop';

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

        fetch('./Products.json')
            .then(res => res.json())
            .then(data => setShops(data))
    }, [])
    return (
        <div>
            <div className={`bg-cover bg-fixed h-80  bg-[url('https://i.ibb.co/3Cp0t4k/concept-of-electrician-tools-space-for-text-e1651085572732.jpg')]`}>
                <div className='bg-black/70 w-full h-80'>

                    <div className='p-10 text-center'>
                        <h1 className='text-white text-2xl mt-24 mb-5 font-bold'>Find Your Product</h1>
                        <input type="text" placeholder="Search" className="input input-bordered  w-full max-w-xs" value={query} onChange={searchText} />
                    </div>
                </div>
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