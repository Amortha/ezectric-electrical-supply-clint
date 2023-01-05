import React, { useEffect, useState } from 'react';
import BestTem from './BestTem';

const BestTems = () => {
    const [besttems, setBestTems] = useState([]);

    useEffect(() => {
        fetch("./BestTem.json")
            .then(res => res.json())
            .then(data => setBestTems(data))
    }, [])

    return (
        <div className='my-16'>
            <div className='text-center '>
                <h1 className='text-blue-700 text-2xl font-semibold'> Friendly Team</h1>
                <h1 className='text-4xl py-5 text-black font-bold'>Meet Our Best Team</h1>
                <h1 className='text-slate-600 font-semibold'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br></br>Aenean commodo ligula.</h1>
            </div>
            <div className=' grid lg:grid-cols-3 gap-4 px-8  lg:px-24 mt-10'>
                {
                    besttems.slice(0 - 3).map(besttem => <BestTem
                    besttem={besttem}
                   key={besttem._id}
                    ></BestTem>)
                }
            </div>

        </div>
    );
};

export default BestTems;
