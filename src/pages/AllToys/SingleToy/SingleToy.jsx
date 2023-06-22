import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SingleToy = ({ toys, user }) => {
    const handleButton = () => {
        if (!user) {
            Swal.fire(
                'You have to log in first to view details',
            )
        }
    }

    return (
        <>
            {

                toys.map(toy => {
                    const { seller_name, price, toy_name, quantity, sub_category, _id } = toy;
                    return (
                        <tr key={toy._id} >
                            <td>{seller_name}</td>
                            <td>{toy_name}</td>
                            <td>{sub_category}</td>
                            <td>{price}</td>
                            <td className='text-center'>{quantity}</td>
                            <td>
                                <Link onClick={handleButton} to={`/toys/only/${_id}`}><button className='btn btn-primary'>View Details</button></Link>
                                {/* <button className='btn btn-primary'>View Details</button> */}
                            </td>
                        </tr>

                    )

                })
            }
            {/* <tr>
                <th>{seller_name}</th>
                <th>{toy_name}</th>
                <th>{sub_category}</th>
                <th>{price}</th>
                <td>{quantity}</td>
                <th><button>View Details</button></th>
            </tr>  */}
        </>
    );
};

export default SingleToy;