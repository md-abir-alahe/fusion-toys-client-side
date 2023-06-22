import React from 'react';
import { Link } from 'react-router-dom';

const MySingleToy = ({ toys, user, handleDelete }) => {
    
    return (
        <>
                {
                    toys.map(toy => {
                        const { seller_name, price, toy_name, quantity, sub_category, _id } = toy;
                        return (
                            <tr key={toy._id}>
                                <td>{seller_name}</td>
                                <td>{toy_name}</td>
                                <td>{sub_category}</td>
                                <td>{price}</td>
                                <td className='text-center'>{quantity}</td>
                                <td>
                                    <Link to={`/update/${_id}`}><button className='btn btn-warning me-2'>Update</button></Link>
                                    <button onClick={() => handleDelete(_id)} className='btn btn-error'>Delete</button>
                                </td>
                                <td>
                                    
                                </td>
                            </tr>

                        )

                    })
                }
        </>
    );
};

export default MySingleToy;