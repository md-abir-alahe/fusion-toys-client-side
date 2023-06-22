import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import userImg from '../../../assets/images/user/user.png';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const Navbar = () => {
    const { user, logOut, loading } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch()
    }

    // html codes
    const navItems = <>
        <li><Link className='hover:text-quaternary' to={'/'}>Home</Link></li>
        <li><Link className='hover:text-quaternary' to={'/toys'}>All Toys</Link></li>
        <li><Link className='hover:text-quaternary' to={'/blog'}>Blogs</Link></li>
    </>
    const conditionalNavItems = <>
        <li><Link className='hover:text-quaternary' to={'/my-toys'}>My Toys</Link></li>
        <li><Link className='hover:text-quaternary' to={'/add-a-toys'}>Add A Toy</Link></li>
    </>


    return (
        <div>
            <div className="navbar rounded-md bg-back text-tex p-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-4 p-2 shadow bg-back text-tex rounded-box w-52">
                            {
                                navItems
                            }
                            {
                                user && conditionalNavItems
                            }
                        </ul>
                    </div>
                    <Link to={'/'}><p className='text-pink-400 text-3xl md:text-5xl font-bangers'><span className='text-primary'>f</span>usion<span className='text-sky-300'>T</span>oys</p></Link>
                </div>
                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                navItems
                            }
                            {
                                user && conditionalNavItems
                            }
                        </ul>
                    </div>
                    <div >
                        {
                            user && <>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            {
                                                !loading && <>
                                                    <img className={user.displayName ? 'user-img-tooltip' : ''} src={user.photoURL ? user?.photoURL : userImg} />
                                                    <Tooltip
                                                    style={{
                                                            backgroundColor: "#1B9C85",
                                                    }}
                                                        anchorSelect='.user-img-tooltip'
                                                        content={user?.displayName}
                                                        place='left'
                                                    ></Tooltip>
                                                </>
                                            }
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-4 p-2 bg-back text-tex rounded-box w-52">
                                        <li>
                                            <a className="justify-between">
                                                Profile
                                                <span className="badge">New</span>
                                            </a>
                                        </li>
                                        <li><a>Settings</a></li>
                                        <li><button onClick={handleLogout}>Logout</button></li>
                                    </ul>
                                </div>
                            </>
                        }
                        {
                            user ? <></> : <Link to={'/login'} className="btn-primary-sm">Login</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;