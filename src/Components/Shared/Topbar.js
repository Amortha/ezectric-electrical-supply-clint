import React from 'react';
import { RiMailDownloadFill } from "react-icons/ri";
import { BiPhoneCall } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';

const Topbar = () => {
    return (
        <div>
           <div className=' bg-indigo-50 '>
                <div className=' py-4 px-8 grid lg:grid-cols-3  grid-cols-1  w-8/12 lg:ml-72  '>
                    <div className='flex items-center '>
                        <RiMailDownloadFill size='20px' color='blue' />
                        <p className='p-2'> amitsharma1998k@gmail.com</p>
                    </div>
                    <div className='flex items-center'>
                        <BiPhoneCall size='20px' color="blue" />
                        <p className='p-2'> +8801829704087</p>
                    </div>
                    <div className='flex items-center'>
                        <input type="text" placeholder="Search" className="input input-bordered" />
                        <button type="Search" className="border bg-blue-900 p-4" ><BsSearch color='white' /></button>
                    </div>

                </div>
            </div>   
        </div>
    );
};

export default Topbar;