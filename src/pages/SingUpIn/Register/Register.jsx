import React, { useContext, useState } from 'react';
import useTitle from '../../../features/Title/useTitle';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../../provider/AuthProvider';

const Register = () => {

    useTitle('Register');

    const { createUser, updateUserInfo, createUserGoogle } = useContext(AuthContext);

    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        if (password.length < 6) {
            return setError('Password must be at least 6 characters.');
        }
        console.log(name, email, password, photo);

        createUser(email, password)
        .then(result=>{
            setError('');
            updateUserInfo(name, photo);
            form.reset();
            navigate('/');
        })
        .catch(error => {
            if (error.code == 'auth/email-already-in-use') {
                setError('Email already exist. Please Login.')
            }
        })
    }
    // google
    const handleGoogleSignIn = () => {
        createUserGoogle()
        .then(result => {
            setError('');
        })
        .catch(error => {

        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-8">
                    <div className="card-body">
                        <h1 className="text-5xl text-primary mb-4 font-boogaloo font-bold text-center">Please Register</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input name='photo' type="text" placeholder="photo url" className="input input-bordered" />
                            </div>
                            <label className="label">
                                <p className='text-pink-600 font-semibold'>{error}</p>
                            </label>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn-primary mx-auto" value="Register" />
                            </div>
                        </form>
                        <label className="label">
                            <p className='text-center'>Already have an account ? Please <Link className='text-primary font-semibold' to={'/login'}>Login</Link></p>
                        </label>
                        <div className="divider">OR</div>
                        <button onClick={handleGoogleSignIn} className='btn btn-outline mx-auto'><FcGoogle className='text-4xl'></FcGoogle></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;