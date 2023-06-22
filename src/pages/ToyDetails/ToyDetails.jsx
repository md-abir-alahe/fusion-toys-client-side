import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../features/Title/useTitle';

const ToyDetails = () => {
    useTitle('Toy Details');
    const loader = useLoaderData();

    const [singleToy, setSingleToy] = useState(loader);
    const { picture_url, seller_name, toy_name, seller_email, rating, price, quantity, detail_description } = singleToy;

    // useEffect(()=>{
    //     fetch('https://fusion-toys-server.vercel.app/toys/only/6469e8f8b28bbdf31c19f517')
    //     .then(res=>res.json())
    //     .then(data=>console.log(data))

    // })
    return (

        <div className="hero min-h-screen">
            <div className="hero-content flex-col text-center lg:text-left lg:flex-row">
                <div>
                    <img src={picture_url} className="w-full h-full rounded-lg shadow-2xl" />
                </div>
                <div className='text-xl w-1/2 ml-10'>
                    <p className='font-bold mb-2'>Seller Name: {seller_name}</p>
                    <p className='font-bold mb-2'>Toy Name: {toy_name}</p>
                    <p className='font-bold mb-2'>Seller Email: {seller_email}</p>
                    <p className='font-bold mb-2'>Price: $ {price}</p>
                    <p className='font-bold mb-2'>Rating: <Rating
                        style={{ maxWidth: 180 }}
                        value={Math.round(rating)}
                        readOnly
                    ></Rating></p>
                    <p className='font-bold mb-2'>Available Quantity: {quantity}</p>
                    <p className='font-semibold'>Details: {detail_description}</p>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;