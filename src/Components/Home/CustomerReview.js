import React from 'react';

const CustomerReview = (props) => {
  const { img, name,address, text, post } = props.customerreview
  return (
    <div className='bg-zinc-100 rounded-lg p-10 h-80 mt-8'>
      <div className="rating">
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
      </div>
      <div className='flex '>
        <div>
          <div className="avatar-group -space-x-6">

            <div className="avatar">
              <div className="w-12">
                <img src={img} alt="" />
              </div>
            </div>
          </div>

        </div>
        <div className='px-2'>
          <h1 className='text-xl font-bold'>{name}</h1>
          <h1 className='font-semibold'>{address}</h1>
          <p>{post}</p>
        </div>
      </div>
      <h1 className='py-8'>{text}</h1>
    </div>
  );
};

export default CustomerReview;