import React from 'react';
import {  FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div >
            <footer className="footer p-10 rounded-t-md bg-back text-tex">
                <div>
                    <Link to={'/'}><p className='text-pink-400 text-5xl font-bangers'><span className='text-primary'>f</span>usion<span className='text-sky-300'>T</span>oys</p></Link>
                    <p>Fusion Toys Ltd.<br />Providing reliable tech since 1996</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover hover:text-quaternary">Branding</a>
                    <a className="link link-hover hover:text-quaternary">Design</a>
                    <a className="link link-hover hover:text-quaternary">Marketing</a>
                    <a className="link link-hover hover:text-quaternary">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover hover:text-quaternary">About us</a>
                    <a className="link link-hover hover:text-quaternary">Contact</a>
                    <a className="link link-hover hover:text-quaternary">Jobs</a>
                    <a className="link link-hover hover:text-quaternary">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover hover:text-quaternary">Terms of use</a>
                    <a className="link link-hover hover:text-quaternary">Privacy policy</a>
                    <a className="link link-hover hover:text-quaternary">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t items-center bg-back text-tex border-primary">
                <div className="items-center grid-flow-col">
                    <div>
                        <span className="footer-title">Social</span>
                        <div className="grid grid-flow-col gap-4">
                            <a><FaYoutube className='text-3xl hover:text-quaternary'></FaYoutube></a>
                            <a><FaFacebookF className='text-3xl hover:text-quaternary'></FaFacebookF></a>
                            <a><FaTwitter className='text-3xl hover:text-quaternary'></FaTwitter></a>
                        </div>
                    </div>
                    
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <p>Copyright © 2023 - All right reserved by Fusion Toys Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;