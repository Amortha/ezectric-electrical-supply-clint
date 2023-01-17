import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ orders, setOrders }) => {
    const { _id, name } = orders[0]
    const [user, loading, error] = useAuthState(auth)

    const handleBooking = event => {
        event.preventDefault();
        const booking = {
            orderId: _id,
            product:name,
            customerName: user.displayName,
            customerEmail: user.email,
            quantity: event.target.quantity.value,
            address: event.target.address.value,
            phone: event.target.phone.value

        }
       
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                //close the model
                if(data){
                    toast ( `Dear Customer,
                    Your Product Order is Successfully .please Confirm your order by paying. Thank you 
                    `)
                }
                else{
                    toast(`order not set `)
                }
                setOrders(null);
            })
    }


    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Products Name: {name} </h3>
                    <p className="py-4"></p>

                    <form onSubmit={handleBooking} className='grid justify-items-center'>

                        <input type="text" name="name" disabled value={user?.displayName || ''} placeholder='Your Name' class="input input-bordered w-full max-w-xs m-3" />
                        <input type="email" name='email' disabled value={user?.email || ''} placeholder="Email Address" class="input input-bordered w-full max-w-xs m-3" />
                        <input type="text" name='address' placeholder='Your Location' class="input input-bordered w-full max-w-xs m-3" />
                        <input type="number" name='quantity' placeholder='Quantity' class="input input-bordered w-full max-w-xs m-3" />
                        <input type="number" name="phone" placeholder="Your Phone" class="input input-bordered w-full max-w-xs m-3" />
                        <input type="submit" value='submit' class="input input-bordered w-full max-w-xs text-center btn btn-primary m-3" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;