import React from 'react';

const BestSeller = (props) => {
    const {name,img,price} = props.bestseller
    return (
        <div className="card w-72 bg-base-100 shadow-xl  ">
        <figure><img className='hover:-translate-y-1 hover:scale-110 hover:duration-500' src={img} alt="Shoes" /></figure>
        <div className="card-body text-center">
          <h2 className="text-2xl font-black font-bold">{name}</h2>
          <p className='text-xl text-teal-700 font-semibold'>${price}</p>
          <div className="card-actions justify-center">
            <button className=" bg-blue-800 px-12 py-2 text-lg hover:bg-blue-900 rounded-lg text-white">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default BestSeller;