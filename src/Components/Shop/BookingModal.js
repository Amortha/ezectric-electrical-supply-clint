import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const BookingModal = () => {


    const { shopId } = useParams();
    const [shop, setShop] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/shops')
            .then(res => res.json())
            .then(data => setShop(data))
    }, [])
    const detailsShop = shop.filter(shop => shop._id == shopId)



    return (
        <div>
            {/* The button to open modal */}



            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Booking {detailsShop[0]?.name}</h3>
                    <p className="py-4"></p>

                    <form className='grid justify-items-center'>

                        <input type="text" name="name" class="input input-bordered w-full max-w-xs m-3" />
                        <input type="text" class="input input-bordered w-full max-w-xs m-3" />
                        <input type="text" class="input input-bordered w-full max-w-xs m-3" />
                        <input type="email" name='email' placeholder="Email" class="input input-bordered w-full max-w-xs m-3" />
                        <input type="Number" name="number" placeholder="phone" class="input input-bordered w-full max-w-xs m-3" />
                        <input type="submit" value='submit' class="input input-bordered w-full max-w-xs text-center btn btn-primary m-3" />

                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;