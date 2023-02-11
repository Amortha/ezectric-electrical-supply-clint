import React, { useEffect, useState } from 'react';

const ManageProduct = () => {
    const [shops, setShops] = useState([]);
    useEffect(() => {

        fetch('https://ezectric-electrical-supply.onrender.com/shops')
            .then(res => res.json())
            .then(data => setShops(data))
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm('Are you Sure?');
        if (proceed) {
            const url = `https://ezectric-electrical-supply.onrender.com/shops/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = shops.filter(shop => shop._id !== id)
                    setShops(remaining);
                })
        }
    }
    return (
        <div>
            <table className="table w-full">

                <thead >
                    <tr >
                        <th className='font-bold text-xl' >SL</th>
                        <th className='font-bold text-xl' >Name</th>
                        <th className='font-bold text-xl'>Product img</th>
                        <th className='font-bold text-xl'>Modal</th>
                        <th className='font-bold text-xl'>Price</th>
                        <th className='font-bold text-xl '>Warranty</th>
                        <th className='font-bold text-xl '>Delete Button</th>

                    </tr>

                </thead>
                <tbody>
                    {
                        // orders?.data?.map((o, index) => <tr key={index}></tr>
                        shops.map((shops, index) => <tr key={shops._id}>

                            <th className='font-bold text-xl'>{index + 1}</th>
                            <td><img className='w-28' src={shops.img} alt="" /></td>
                            <td className='font-semibold text-xl'>{shops.name}</td>
                            <td className='font-semibold text-xl'>{shops.model}</td>
                            <td className='font-semibold text-xl'>{shops.price}</td>
                            <td className='font-semibold text-xl'>{shops.Warranty}</td>


                            <td>
                                <button onClick={() => handleDelete(shops._id)} className='btn btn-xs btn-blue-800'>Delete</button>

                            </td>
                        </tr>)
                    }
                </tbody>
            </table>

            {/* {
        shops.map(shop => <div key={shop.id} className="grid grid-cols-5 gap-2 w-9/12 m-auto">
            
            <img className='w-28' src={shop.img}></img>
            <h4 className='text-2xl '>{shop.name}</h4>
            <h4 className='text-2xl '>{shop.modal}</h4>
            <h4 className='text-2xl '>{shop.price}</h4>
            <button className='bg-blue-800 text-blue font-bold  text-xl'>delate</button>
       </div>)
      } */}

        </div>
    );
};

export default ManageProduct;