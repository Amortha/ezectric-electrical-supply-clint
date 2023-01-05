import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import Counter from '././Counter';
import { FaGg} from "react-icons/fa";
import { FaUsers} from "react-icons/fa";
import { FaRegCalendarCheck} from "react-icons/fa";
import { FaRegHandPeace} from "react-icons/fa";

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
            icon:<FaGg size={50}></FaGg>,
            count :<CountUp start={0} end={1500} duration={5}/>,
            name:'Brands',
        },
        {
            _id:2,
            count :<CountUp start={0} end={789} duration={5}/>,
            icon:<FaUsers size={50}></FaUsers>,
            name:'Customers',
        },
        {
            _id:3,
            count :<CountUp start={0} end={999} duration={5}/>,
            icon:<FaRegCalendarCheck  size={50}></FaRegCalendarCheck>,
            name:'Products',
        },
        {
            _id:4,
            count :<CountUp start={0} end={89} duration={5}/>,
            icon :<FaRegHandPeace size={50}></FaRegHandPeace>,
            name:'Awards',
        },
    ]
    return (
        <div className={` my-10 bg-cover w-full h-auto  bg-[url('https://i.ibb.co/JQC4kV2/wires-and-connectors.jpg')]`} >
         
            <div className='grid lg:grid-cols-4 sm:grid-cols-2  lg:px-12 m-auto py-8 bg-black/40' >

                {
                    counters.map(counter=> <Counter key={counter._id} counter={counter}></Counter>)
                }
            </div>
        </div>
    );
};

export default Counters;