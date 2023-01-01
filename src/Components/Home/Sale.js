import React from 'react';
import Sales from './Sales';

const Sale = () => {
const sales =[
    {
        _id:1,
        name:"New Years Sale",
        img:"https://i.ibb.co/2PhFSns/salesection1.png",
        descraption:"50% Off Discount From Online Shop",
       
    },
    {
        _id:2,
        name:"Hallowen Sale",
        img:"https://i.ibb.co/PhM1JJd/salesection12png.png",
        descraption:"Free Shipping For This Month"
      
    },
]


    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 w-10/12 m-auto gap-7 my-12 '>
            {
                sales.map(sale =><Sales
                key={sale._id}
                    sale={sale}
                ></Sales>)
            }
        </div>
    );
};

export default Sale;