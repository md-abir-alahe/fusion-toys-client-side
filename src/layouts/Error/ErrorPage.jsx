import React from 'react';
import img from '../../assets/images/404/404.gif'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div>
                <img src={img} alt="" />
            </div>
            <Link to={'/'}><button className="btn-primary">Back to Homepage</button></Link>
        </div>
    );
};

export default ErrorPage;