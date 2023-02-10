import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import Counter from './Counter';

const Counters = () => {
    const [counter,setCounter] = useState(0);
    
    useEffect(()=>{
        const interval =setInterval(()=>{
            setCounter((counter)=> counter+1)
        },100000);
        return ()=>{
            clearInterval(interval);
        }
    },[])

    const counters =[
        {
            _id:1,
            count :<CountUp start={0} end={789} duration={8}/>,
            name:'Happy Customer',
        },
        {
            _id:2,
            count :<CountUp start={0} end={70} duration={8}/>,
            name:'Branch Store',
        },
        {
            _id:3,
            count :<CountUp start={0} end={999} duration={8}/>,
            name:'our products',
        },
    ]
    return (
        <div className='mt-24' data-aos="fade-up"
        data-aos-duration="3000">
            <div >
                <h1 className='font-bold text-center text-lg lg:text-2xl text-blue-900'>About Us</h1>
                <h1 className='font-bold text-center text-2xl px-2 lg:text-4xl text-black'>5000+ Buyers Across The World</h1>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-3 lg:px-12 m-auto py-8' >

                {
                    counters.map(counter=> <Counter key={counter._id} counter={counter}></Counter>)
                }
            </div>
        </div>
    );
};

export default Counters;