// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const MyOrder = () => {
    const [orders, setOrders] = useState([]);

    const [user] = useAuthState(auth);
    const navigate = useNavigate()


    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?customerEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/')
                    }

                    return res.json()
                })
                .then(data => {
                    setOrders(data)
                });

        }
    }, [user])



    // const getBooking = () => {
    //     let config = {
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem("accessToken")}`
    //         }
    //     }
    //     axios.get(`http://localhost:5000/booking?customerEmail=${user?.email}`, config).then(data => setOrders(data))
    // }

    // useEffect(() => {
    //     if (user) {
    //         getBooking()
    //     }
    // }, [])

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
                            // orders?.data?.map((o, index) => <tr key={index}></tr>
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