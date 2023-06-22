import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import MySingleToy from './MySingleToy/MySingleToy';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        fetch(`https://fusion-toys-server.vercel.app/my-toy?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            if(!data.error){
                setMyToys(data);
            }
            else{
                navigate('/');
            }
        })
    }, []);
    
    const {_id} = myToys;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://fusion-toys-server.vercel.app/delete/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(cof => cof._id !== _id)
                            setMyToys(remaining)
                        }
                    })

            }
        })
    }

    return (
            <div className='p-3'>
                <table className='table w-full'>
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
                    <MySingleToy toys={myToys} user={user} handleDelete={handleDelete}></MySingleToy>
                    </tbody>
                </table>
            </div>
    );
};

export default MyToys;