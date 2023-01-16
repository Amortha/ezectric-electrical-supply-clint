import React, { useEffect, useState } from 'react';
import { MdChromeReaderMode, MdPriceCheck } from 'react-icons/md';
import { GiPowerLightning } from 'react-icons/gi';
import { MdOutlineInvertColors } from 'react-icons/md';
import { GiDuration } from 'react-icons/gi';
import { useParams } from 'react-router';
import { FaFortAwesomeAlt, FaUsps } from 'react-icons/fa';
import { HiSave } from 'react-icons/hi';
import BookingModal from './BookingModal';


const ShopDetails = () => {
    const { shopId } = useParams();
    const [orders, setOrders] = useState(null);
    const [shop, setShop] = useState([]);
  

    useEffect(() => {
        fetch('http://localhost:5000/shops')
            .then(res => res.json())
            .then(data => setShop(data))
    }, [])
    const detailsShop = shop.filter(shop => shop._id == shopId)
    return (
        <div className='bg-white '>

            <div className='lg:mx-24 mx-4 grid lg:grid-cols-2 gap-8 py-12 '>
                <div className=''>
                    <img className='w-full h-96' src={detailsShop[0]?.img} alt='' />
                    <h1 className='font-bold text-2xl '>Description:</h1>
                    <h1 className='font-semibold break-all text-slate-700'>{detailsShop[0]?.description}</h1>
                </div>

                {/* box details */}

                <div className='w-full bg-base-100 shadow-2xl lg:px-12 px-4 py-12'>
                    <h1 className='text-2xl font-semibold'>{detailsShop[0]?.name}</h1>
                    <p className='font-semibold my-2'>Up to 90% Energy saving compared to traditional Products</p>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <p className='text-xl mx-2'>   7 Reviews</p>
                    </div>

                    <div className='grid lg:grid-cols-2 gap-6 mt-8'>
                        <div>
                            <div className='flex gap-4 '>
                                <MdChromeReaderMode className='text-blue-800' size={35}></MdChromeReaderMode>
                                <h1 className='font-semibold text-2xl'>Modal</h1>
                            </div>
                            <p className='text-lg'>{detailsShop[0]?.model}</p>
                        </div>

                        <div>
                            <div className='flex  '>
                                <GiPowerLightning className='text-blue-800' size={35}></GiPowerLightning>
                                <h1 className='font-semibold text-2xl'>Power</h1>
                            </div>
                            <p className='text-lg'>{detailsShop[0]?.power}</p>
                        </div>
                        <div>
                            <div className='flex gap-4 '>
                                <FaFortAwesomeAlt className='text-indigo-500' size={35}></FaFortAwesomeAlt>
                                <h1 className='font-semibold text-2xl'>Capacity</h1>
                            </div>
                            <p className='text-lg'>{detailsShop[0]?.Capacity}</p>
                        </div>
                        <div>
                            <div className='flex gap-4 '>
                                <MdOutlineInvertColors className='text-blue-800' size={35}></MdOutlineInvertColors>
                                <h1 className='font-semibold text-2xl'>color</h1>
                            </div>
                            <p className='text-lg'>{detailsShop[0]?.color}</p>
                        </div>
                        <div>
                            <div className='flex gap-4 '>
                                <GiDuration className='text-blue-800' size={35}></GiDuration>
                                <h1 className='font-semibold text-2xl'>Guarantee</h1>
                            </div>
                            <p className='text-lg'>{detailsShop[0]?.Guarantee}</p>
                        </div>
                        <div>
                            <div className='flex gap-4 '>
                                <FaUsps className='text-blue-800' size={35}></FaUsps>
                                <h1 className='font-semibold text-2xl'>Warranty</h1>
                            </div>
                            <p className='text-lg'>{detailsShop[0]?.Warranty}</p>
                        </div>
                        <div>
                            <div className='flex gap-4 '>
                                <HiSave className='text-blue-800' size={35}></HiSave>
                                <h1 className='font-semibold text-2xl'>Save</h1>
                            </div>
                            <p className='text-lg'>{detailsShop[0]?.save}</p>
                        </div>
                        <div>
                            <div className='flex gap-4 '>
                                <MdPriceCheck className='text-blue-800' size={35}></MdPriceCheck>
                                <h1 className='font-semibold text-2xl'>Price</h1>
                            </div>
                            <p className='text-lg'> $ {detailsShop[0]?.price}</p>
                        </div>

                    </div>
                    <div className='mt-12'>
                    <label onClick={() => setOrders(shop)} className='btn bg-blue-900 w-full lowercase text-white  text-xl hover:bg-blue-600'  for="my-modal">Order Now</label>
                   
                    </div>
                    {orders && <BookingModal  orders={detailsShop} setOrders={setOrders}></BookingModal>}
                </div>
            </div>
        </div>
    );
};

export default ShopDetails;