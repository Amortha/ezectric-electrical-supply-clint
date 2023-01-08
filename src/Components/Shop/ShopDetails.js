import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ShopDetails = () => {
    const {shopId} = useParams();
    const [shop, setShop] = useState([]);
    useEffect (()=>{
        fetch('/Products.json')
        .then(res =>res.json())
        .then(data => setShop(data))
    },[])
    const detailsShop = shop.filter(shop=>shop._id == shopId)
    return (
        <div>
                <p className='pragraph-color'> Technology used: {detailsShop[0]?.name}</p>
                <p className='text-5xl'> Technology used: {detailsShop[0]?.doc  }</p>
                <img src={detailsShop[0]?.img}alt=''/>
        </div>
    );
};

export default ShopDetails;