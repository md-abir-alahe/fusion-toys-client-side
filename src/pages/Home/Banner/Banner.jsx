import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'

const Banner = () => {
    return (
        <div className='mt-3'>
            <div className="carousel w-full md:h-[600px] rounded-xl">
                <div id="slide1" className=" carousel-item overflow-hidden  relative w-full rounded-xl">
                    <img src={img1} className="w-full h-fit rounded-xl" />
                    <div className=" absolute h-full flex items-center left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-lg">
                        <div className='text-white space-y-7 w-2/3 ps-12'>
                            <h2 className='text-3xl md:text-6xl  font-chewy text-sky-400'>A World To Explore</h2>
                            <p className='hidden md:block'>Active toys for smart and active kids. Bring fun and non-stop learning for your little ones.</p>
                            <div className='hidden md:block'>
                                <button className="btn btn-secondary me-5">Discover More</button>
                               
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item overflow-hidden relative w-full">
                    <img src={img2} className="h-fit w-full rounded-xl" />
                    <div className="absolute h-full flex items-center left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-lg">
                        <div className='text-white space-y-7 w-2/3 ps-12'>
                            <h2 className='text-3xl md:text-6xl  font-chewy text-sky-400'>The Ultimate Toy Story</h2>
                            <p className='hidden md:block'>Delivering smile with toys. Get your unbeatable fun and learning experience with our creative toys.</p>
                            <div className='hidden md:block'>
                                <button className="btn btn-secondary me-5">Discover More</button>
                               
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item overflow-hidden relative w-full">
                    <img src={img3} className="h-fit w-full rounded-xl" />
                    <div className="absolute h-full flex items-center left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-lg">
                        <div className='text-white space-y-7 w-2/3 ps-12'>
                            <h2 className='text-3xl md:text-6xl  font-chewy text-sky-400'>Extraordinary Learning Toys</h2>
                            <p className='hidden md:block'>Premium toy for the genuine start. The best place to your buy dream toy. We provide toys for all age kids.</p>
                            <div className='hidden md:block'>
                                <button className="btn btn-secondary me-5">Discover More</button>
                               
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;