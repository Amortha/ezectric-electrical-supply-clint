import React from 'react';

const Counter = ({ counter }) => {
    const { count, name, icon } = counter;

    return (
        <div className="card w-96  text-black">
            <div className="card-body items-center text-center">
                <h1 className='text-amber-400 mb-4'>{icon}</h1>
                <h2 className="card-title text-5xl text-white font-semibold">{count}+</h2>
                <p className='text-xl text-slate-400  font-semibold'>{name}</p>

            </div>
        </div>
    );
};

export default Counter;