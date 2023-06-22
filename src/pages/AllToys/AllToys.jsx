import React, { useContext, useEffect, useState } from 'react';
import SingleToy from './SingleToy/SingleToy';
import { AuthContext } from '../../provider/AuthProvider';
import useTitle from '../../features/Title/useTitle';
import { useLoaderData } from 'react-router-dom';
const AllToys = () => {
    useTitle('All Toys')
    const loadedUser = useLoaderData();
    const [toys, setToys] = useState(loadedUser);
    const {user} = useContext(AuthContext);

    
    const [showBtn, setShowBtn]=useState(false);
    
    const handleShowAll = () => {
        setToys([]);
        setShowBtn(true);
        fetch(`https://fusion-toys-server.vercel.app/toys?limit=0`)
            .then(res => res.json())
            .then(data => setToys(data))
    }


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const search = form.search.value;
        console.log(search);
        setToys([]);
        fetch(`https://fusion-toys-server.vercel.app/toys?search=${search}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }


    return (
        <div>
            <div className='flex justify-center my-8'>
                <div className="form-control">
                    <div className="input-group">
                        <form onSubmit={handleSubmit}>
                            <input type="text" name='search' placeholder="Search…" className="input input-bordered" />
                            <input className='btn' type="submit" value="search" />
                        </form>
                    </div>
                </div>
            </div>
            <table className='table w-full mx-auto p-3'>
                {/* head */}
                <thead>
                    <tr>
                        <th>Seller Name</th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <SingleToy 
                    toys={toys} 
                    user={user}
                    ></SingleToy>
                </tbody>
            </table>
            <div className='flex items-center justify-center mt-6 mb-8'>
                <button onClick={() => handleShowAll()} className={showBtn ? 'hidden' : 'btn btn-outline btn-accent'}>Show All</button>
            </div>
        </div>
    );
};

export default AllToys;