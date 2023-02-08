import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import Login from '../Login/Login';
import Loding from '../Shared/Loding';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;
    const { data: order, isLoading } = useQuery(['booking', id], () => fetch(url, {

        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loding></Loding>
    }
    return (
        <div className='mx-auto'>

            <div className="card w-50 max-w-md bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className='text-success font-semibold text-2xl'>Hello, {order.customerName}</p>
                    <h2 className="card-title">pay for Product name: {order.product} </h2>
                    <p className='font-bold text-black'>please pay:$ {order.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 mt-10 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order}/>
                    </Elements>

                </div>
            </div>
        </div>

    );
};

export default Payment;