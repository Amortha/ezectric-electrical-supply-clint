import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);


    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?customerEmail=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data));

        }
    }, [user])

    return (
        <div className='bg-white'>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead >
                        <tr >
                            <th className='font-bold text-sm'>SL no</th>
                            <th className='font-bold text-sm'>Product Name</th>
                            <th className='font-bold text-sm' >Your Name</th>
                            <th className='font-bold text-sm'>Your Location</th>
                            <th className='font-bold text-sm'>Quantity</th>
                            <th className='font-bold text-sm '>Phone Number</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((o, index) => <tr>
                                <th className='font-bold'>{index + 1}</th>
                                <td>{o.product}</td>
                                <td>{o.customerName}</td>
                                <td>{o.address}</td>
                                <td>{o.quantity}</td>
                                <td>{o.phone}</td>
                            </tr>)
                        }





                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;