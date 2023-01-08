import React from 'react';
import InquiRie from './InquiRie';

const InquiRies = () => {
    const inquiries = [
        {
            qus: "What is Ezectric?",
            ans: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis natoque.",
        },
        {
            qus: "Is Ezectric Safe?",
            ans: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis natoque.",
        },
        {
            qus: "Is Ezectric certified?",
            ans: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis natoque.",
        },
        {
            qus: "What does Ezectric do?",
            ans: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis natoque.",
        },
        {
            qus: "Which credit card do you accept?",
            ans: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis natoque.",
        },
        {
            qus: "What are the benefits of going Ezectric?",
            ans: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis natoque.",
        },
        {
            qus: "What do you think about Ezectric?",
            ans: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis natoque.",
        },
        {
            qus: "How long will it be before I get A refund?",
            ans: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis natoque.",
        },
    ]
    return (
        <div className='my-12 '>
            <div className='text-center'>
                <h1 className='text-2xl text-blue-700 font-semibold'>FAQ</h1>
                <h1 className='text-4xl text-black font-bold my-2'>Customer Inquiries</h1>
                <h1 className='font-semibold text-slate-500'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br /> Aenean commodo ligula.</h1>
            </div>

            <div className='grid lg:grid-cols-2 sm:grid-cols-1 mx-8 mt-12'>
                {
                    inquiries.map(inquirie => <InquiRie
                        inquirie={inquirie}
                        key={inquirie._id}
                    ></InquiRie>)
                }
            </div>
        </div>
    );
};

export default InquiRies;