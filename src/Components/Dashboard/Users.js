import React from 'react';
import { useQuery } from 'react-query';
import Loding from '../Shared/Loding';
import UserRow from './UserRow';

const Users = () => {
    const {data:users,isLoading, refetch} = useQuery('users',() => fetch('http://localhost:5000/user',{
      headers:{
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }  
    }).then(res=>res.json()))
    if(isLoading){
        return <Loding></Loding>
    }
    return (
        <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
     {
        users.map(user => <UserRow
        user = {user}
        key ={user._id}
        refetch={refetch}
        ></UserRow>)
     }
     
     
    </tbody>
  </table>
</div>
    );
};

export default Users;