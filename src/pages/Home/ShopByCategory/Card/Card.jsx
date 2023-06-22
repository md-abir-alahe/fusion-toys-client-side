import React, { useContext } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Card = ({ toy, user }) => {
    const { _id, picture_url, toy_name, price, rating } = toy;
    const handleButton = () => {
        if (!user){
            Swal.fire(
                'You have to log in first to view details',
            )
        }
    }
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={picture_url} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-sky-600 text-2xl">{toy_name}</h2>
                    <p><span className='font-semibold'>Price: $</span> {price}</p>
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={Math.round(rating)}
                        readOnly
                    ></Rating>
                    <div className="card-actions justify-end">
                        <Link onClick={handleButton} to={`/toys/only/${_id}`}><button className="btn btn-primary-sm">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;