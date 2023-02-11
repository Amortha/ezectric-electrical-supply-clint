import React from 'react';
import { useNavigate } from 'react-router';

const BestSeller = (props) => {
  const { _id, name, img, price } = props.bestseller
  const navigate = useNavigate();

  const navigateToShopDetails = _id => {
    navigate(`shop/${_id}`)
  }
  return (
    <div className="card w-72 bg-base-100 shadow-xl hover:-translate-y-1 hover:scale-110 hover:duration-500 ">
      <figure><img className=' w-48' src={img} alt="Shoes" /></figure>
      <div className="card-body text-center">
        <h2 className="text-xl font-black font-bold">{name}</h2>
        <p className='text-xl text-teal-700 font-semibold'>${price}</p>
        <div className="card-actions justify-center">
        <button onClick={() => navigateToShopDetails(_id)} className=" bg-blue-700 px-9 lg:px-10 py-2 font-semibold text-lg hover:bg-blue-900  text-white">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;