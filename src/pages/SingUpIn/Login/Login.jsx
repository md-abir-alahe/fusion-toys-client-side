import React, { useContext, useState } from 'react';
import useTitle from '../../../features/Title/useTitle';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../../provider/AuthProvider';

const Login = () => {
    useTitle('Login');

    const { loginWithEmailPassword, createUserGoogle } = useContext(AuthContext);

    const [error, setError] = useState('');

    // private route setup
    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state?.form?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginWithEmailPassword(email, password)
        .then(result => {
            form.reset();
            setError('');
            navigate(form, {replace: true});
        })
        .catch(error => {
            const errorMessage = error.code;
            if (errorMessage){
                setError('Email address or password does not match');
            }
        })
    }
    const handleGoogleSignIn = () => {
        createUserGoogle()
            .then(result=>{
                setError('');
                navigate(form, {replace: true});
            })
            .catch()
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl text-primary mb-4 font-boogaloo font-bold text-center">Please Login</h1>
                        <form onSubmit={handleSubmit}>
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <label className="label">
                                <p className='text-pink-600 font-semibold'>{error}</p>
                            </label>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn-primary mx-auto" value="Login" />
                            </div>
                        </form>
                        <label className="label">
                            <p className='text-center'>Do not have an account ? Please <Link className='text-primary font-semibold' to={'/register'}>Register</Link></p>
                        </label>
                        <div className="divider">OR</div>
                        <button onClick={handleGoogleSignIn} className='btn btn-outline mx-auto'><FcGoogle className='text-4xl'></FcGoogle></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;