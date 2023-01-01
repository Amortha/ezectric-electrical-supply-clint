import React, { useRef, useEffect, useState } from 'react';
import CustomerReview from './CustomerReview';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./CustomerReview.css"


// import required modules
import { Pagination } from "swiper";


const CustomerReviews = () => {
    const [customerReviews, setCustomerReviews] = useState([]);
    useEffect(() => {
        fetch('./CustomerReviews.json')
            .then(res => res.json())
            .then(data => setCustomerReviews(data))
    }, [])
    return (

        <div>

            <div className='lg:px-16  py-10 grid lg:grid-cols-2 w-full'>
                <div className={` h-96 lg:px-12 bg-cover bg-fixed bg-[url('https://i.ibb.co/52TVQ1S/review.jpg')]`}>

                </div>
                <div className='lg:ml-[-150px] lg:mt-1 sm: px-6    sm: mt-[-80px] grid  sm:grid-cols-1  '>
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <div >
                            {
                                customerReviews.map(customerreview => <SwiperSlide>
                                    <CustomerReview
                                        key={customerreview._id}
                                        customerreview={customerreview}
                                    ></CustomerReview></SwiperSlide>
                                )
                            }
                        </div>
                    </Swiper>
                </div>
            </div>

        </div>
    );
};

export default CustomerReviews;