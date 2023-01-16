import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const BookingModal = ({orders,setOrders}) => {
    const {_id,name} = orders[0]
    const [user,loading,error] = useAuthState(auth)

    const handleBooking = event =>{
        event.preventDefault();
        const name =event.target.name.value ;
        const order ={
            orderId:_id,
            order : name,
            customerName:user.displayName,
            customerEmail:user.email,
            address:event.target.address.value,
            phone:event.target.phone.value

        }
        setOrders(null);
    }


    return (
        <div>
            {/* The button to open modal */}



            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Products Name: {name} </h3>
                    <p className="py-4"></p>

                    <form onSubmit={handleBooking} className='grid justify-items-center'>

                        <input type="text" name="name" disabled value={user?.displayName || ''} placeholder= 'Your Name' class="input input-bordered w-full max-w-xs m-3" />
                        <input type="email" name='email'disabled value={user?.email || ''} placeholder="Email Address" class="input input-bordered w-full max-w-xs m-3" />
                        <input type="text" name='address' placeholder='Your Location' class="input input-bordered w-full max-w-xs m-3" />
                        <input type="number" name='number' placeholder='Quantity' class="input input-bordered w-full max-w-xs m-3" />
                       
                        <input type="number" name="number" placeholder="Your Phone" class="input input-bordered w-full max-w-xs m-3" />
                        <input type="submit" value='submit' class="input input-bordered w-full max-w-xs text-center btn btn-primary m-3" />

                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;