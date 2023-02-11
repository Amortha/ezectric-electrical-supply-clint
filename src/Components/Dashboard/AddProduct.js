
import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url =`https://ezectric-electrical-supply.onrender.com/shops`;
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
                toast ( `Dear Admin,
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
                <h2 className=' font-semibold text-2xl mb-5 '>Product Add </h2>
                <form className='py-2 bg-slate-200' onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid lg:grid-cols-2 gap-6 p-8'>
                        <label>
                            <p className='font-bold text-black mb-2'>Image</p>
                            <input className='border h-10 p-2  w-full' placeholder='Photo URL' {...register("img")} />
                        </label>
                        <label>
                            <p className='font-bold text-black mb-2'>Product Name</p>
                            <input className='border  h-10 p-2 w-full' placeholder=' Type product name' type="text" {...register("name", { required: true, maxLength: 20 })} />
                        </label>
                        <label>
                            <p className='font-bold text-black mb-2'>Product Model</p>
                            <input className='border  h-10 p-2 w-full ' placeholder='Type Model' type="text" {...register("model")} />
                        </label>
                        <label>
                            <p className='font-bold text-black mb-2'>Product Model</p>
                            <input className='border  h-10 p-2 w-full' placeholder='Type Power' type="text" {...register("power")} />
                        </label>
                        <label>
                        <p className='font-bold text-black mb-2'>Product capacity</p>
                        <input className='border  h-10 p-2  w-full' placeholder='Type Capacity' type="text" {...register("capacity")} />
                        </label>
                       <label>
                       <p className='font-bold text-black mb-2'>Product color</p>
                       <input className='border h-10 p-2 w-full' placeholder='Type Color' type="text" {...register("color")} />
                       </label>
                        <label>
                        <p className='font-bold text-black mb-2'>Product Guarantee</p>
                        <input className='border  h-10 p-2 w-full' placeholder='Type Guarantee' type="text" {...register("guarantee")} />
                        </label>
                      <label>
                      <p className='font-bold text-black mb-2 '>Product Warranty</p>
                      <input className='border h-10 p-2 w-full' placeholder='Type Warranty' type="text" {...register("warranty")} />
                      </label>
                        <label>
                        <p className='font-bold text-black mb-2 '>Product Price</p>
                        <input className='border  h-10 p-2 w-full ' placeholder=' Type Price' type="number" {...register("price")} />
                        </label>
                        <label>
                        <p className='font-bold text-black mb-2 '>Product Description</p>
                        <textarea className='border w-full h-10 p-2' placeholder='Type Description' type="text"  {...register("description")} />
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

export default AddProduct;