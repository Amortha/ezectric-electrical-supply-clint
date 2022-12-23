import React from 'react';
import BanarCard from './BanarCard';
import { MdOutlinePayments} from "react-icons/md";
import { FaHandHoldingUsd} from "react-icons/fa";
import { FaPaperPlane} from "react-icons/fa";

const BanarCards = () => {
    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-10  px-24  mt-[-30px] '>
            <BanarCard  cardtitle="Big Cashback" text="Over 40% Cashback" icon ={<FaHandHoldingUsd className='w-12 text-blue-900' />}></BanarCard>
            <BanarCard cardtitle="Fast Shipping" text="Order Over $500,00" icon ={<FaPaperPlane className='w-12 text-blue-900' />}></BanarCard>
            <BanarCard cardtitle="Quick Payment" text="100% Secure" icon ={<MdOutlinePayments className='w-12 text-blue-900' />}></BanarCard>
        </div>
    );
};

export default BanarCards;