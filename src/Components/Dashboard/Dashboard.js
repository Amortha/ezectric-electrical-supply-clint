import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
               <h2 className='text-2xl lg:text-4xl text-blue-900 font-semibold text-center my-5'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
               

            </div>
            <div className="drawer-side ">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay "></label>
                <ul className=" menu py-12 w-52 bg-indigo-50 text-base-content text-xl font-bold px-2">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to = "/dashboard">Your Order</Link></li>
                    <li><Link to ="/dashboard/review">Your Review</Link></li>
                    <li><Link to ="/dashboard/users">All Users</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;