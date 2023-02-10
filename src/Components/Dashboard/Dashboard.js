import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h2 className='text-xl lg:text-3xl text-blue-900 font-semibold text-center my-5'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side ">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay "></label>
                <ul className=" menu py-12 w-52 bg-indigo-50 text-base-content text-xl font-bold px-2">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">Your Order</Link></li>
                    <li><Link to="/dashboard/review">Your Review</Link></li>
                    <ul>
                        {admin && (
                            <li>
                                <Link to="/dashboard/users">All Users</Link>
                                <Link to="/dashboard/addproduct">Add Product</Link>
                                <Link to="/dashboard/ manageproduct"> Manage Product</Link>
                            </li>
                         
                        )}
                       
                    </ul>


                </ul>

            </div>
        </div>
    );
};

export default Dashboard;