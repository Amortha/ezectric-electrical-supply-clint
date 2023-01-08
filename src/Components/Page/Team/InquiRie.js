import React from 'react';

const InquiRie = ({ inquirie }) => {
    const { qus, ans } = inquirie
    return (
        <div className=' mx-4 my-2'data-aos="zoom-in-down"
        data-aos-duration="3000">
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-slate-200 ">
                <div className="collapse-title text-xl  text-black font-bold">
                   <h1>{qus}</h1>
                </div>
                <div className="collapse-content text-slate-500">
                    <p> {ans}</p>
                </div>
            </div>
        </div>
    );
};

export default InquiRie;