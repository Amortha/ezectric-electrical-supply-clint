// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
const MyOrder = () => {
    const [orders, setOrders] = useState([]);

    const [user] = useAuthState(auth);
    const navigate = useNavigate()


    useEffect(() => {
        if (user) {
            fetch(`https://ezectric-electrical-supply.onrender.com/booking?customerEmail=${user.email}`, {
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
    //     axios.get(`https://ezectric-electrical-supply.onrender.com/booking?customerEmail=${user?.email}`, config).then(data => setOrders(data))
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
                            <th className='font-bold text-sm '>Payment</th>

                        </tr>

                    </thead>
                    <tbody>
                        {
                            // orders?.data?.map((o, index) => <tr key={index}></tr>
                            orders.map((o, index) => <tr key = {o._id}>

                                <th className='font-bold'>{index + 1}</th>
                                <td>{o.product}</td>
                                <td>{o.customerName}</td>
                                <td>{o.address}</td>
                                <td>{o.quantity}</td>
                                <td>{o.phone}</td>
                                
                                
                                <td>
                                    {(o.product && !o.paid) && <Link to={`/dashboard/payment/${o._id}`}><button className='btn btn-xs btn-success'>Payment</button></Link>}
                                    {(o.product && o.paid) && <div>
                                        <p><span className='btn btn-xs '>Paid</span></p>
                                        <p className='font-bold'>transaction id:  <span className=' text-success'>{o.transactionId}</span></p>
                                        </div>}
                                    </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;