import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const MyReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url =`https://ezectric-electrical-supply.onrender.com/reviews`;
        fetch(url,{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data =>{
            if(data){
                toast ( `Dear Customer,
                Your Product is Successfully add .please Chaked this shops page. Thank you 
                `)
            }
            else{
                toast(`product is not set `)
            }
            handleSubmit(null);
        })
    };
    return (
        <div className=''>

            <div className=' w-4/5 m-auto h-80   '>
                <h2 className=' font-semibold text-2xl mb-5 '>Add Reviews </h2>
                <form className='py-2 bg-slate-200' onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid lg:grid-cols-2 gap-6 p-8'>
                        <label>
                            <p className='font-bold text-black mb-2'>Your Image</p>
                            <input className='border h-10 p-2  w-full' placeholder='Photo URL' {...register("img")} />
                        </label>
                        <label>
                            <p className='font-bold text-black mb-2'>Your Name</p>
                            <input className='border  h-10 p-2 w-full' placeholder=' Type your name' type="text" {...register("name", { required: true, maxLength: 20 })} />
                        </label>
                        
                        <label>
                            <p className='font-bold text-black mb-2'>Your Location</p>
                            <input className='border  h-10 p-2 w-full' placeholder='Type Location' type="text" {...register("address")} />
                        </label>
                        <label>
                        <p className='font-bold text-black mb-2'>Your Post</p>
                        <input className='border  h-10 p-2  w-full' placeholder='Type your Post' type="text" {...register("post")} />
                        </label>
                        <label>
                        <p className='font-bold text-black mb-2 '>Your Comment</p>
                        <textarea className='border w-full h-10 p-2' placeholder='Type your comment' type="text"  {...register("text")} />
                        </label>
                       
                    </div>
                    <div className='px-8'>
                        <input className='border text-white py-2 text-xl w-full max-w-5xl px-6 bg-blue-800 hover:bg-blue-900' type="submit" />
                    </div>

                </form>

            </div>
        </div>
    );
};

export default MyReview;