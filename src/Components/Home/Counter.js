import React from 'react';

const Counter = ({counter}) => {
const {count,name} = counter;

    return (
        <div className="card w-96  text-black">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-semibold">{count}+</h2>
          <p className='text-2xl font-semibold'>{name}</p>
         
        </div>
      </div>
    );
};

export default Counter;