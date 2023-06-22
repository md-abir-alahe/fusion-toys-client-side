import React from 'react';
import Marquee from "react-fast-marquee";
import img1 from '../../../assets/images/gallary/1.jpg'
import img2 from '../../../assets/images/gallary/2.jpg'
import img3 from '../../../assets/images/gallary/3.jpg'
import img4 from '../../../assets/images/gallary/4.jpg'
import img5 from '../../../assets/images/gallary/5.jpg'
import img6 from '../../../assets/images/gallary/6.jpg'
import img7 from '../../../assets/images/gallary/7.jpg'
import img8 from '../../../assets/images/gallary/8.jpg'
import img9 from '../../../assets/images/gallary/9.jpg'
import img10 from '../../../assets/images/gallary/10.jpg'
import img11 from '../../../assets/images/gallary/11.jpg'
import img12 from '../../../assets/images/gallary/12.jpg'
import img13 from '../../../assets/images/gallary/13.jpg'

const Gallary = () => {
    return (
        <div className='my-6 '>
            <div className="divider"></div>
            <p className='text-center text-4xl font-boogaloo font-semibold text-back'>Photo Gallery</p>
            <Marquee
            speed={25}
            gradient={true}
            gradientWidth={50}
            pauseOnClick={true}
            play={true}
            >
                <div className="card w-96 bg-base-100 m-5 shadow-xl bg-quaternary">
                    <figure className="px-6 py-6">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 m-5 shadow-xl bg-quaternary">
                    <figure className="px-6 py-6">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 m-5 shadow-xl bg-quaternary">
                    <figure className="px-6 py-6">
                        <img src={img3} alt="Shoes" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 m-5 shadow-xl bg-quaternary">
                    <figure className="px-6 py-6">
                        <img src={img4} alt="Shoes" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 m-5 shadow-xl bg-quaternary">
                    <figure className="px-6 py-6">
                        <img src={img5} alt="Shoes" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 m-5 shadow-xl bg-quaternary">
                    <figure className="px-6 py-6">
                        <img src={img6} alt="Shoes" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 m-5 shadow-xl bg-quaternary">
                    <figure className="px-6 py-6">
                        <img src={img7} alt="Shoes" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 m-5 shadow-xl bg-quaternary">
                    <figure className="px-6 py-6">
                        <img src={img8} alt="Shoes" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 m-5 shadow-xl bg-quaternary">
                    <figure className="px-6 py-6">
                        <img src={img9} alt="Shoes" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 m-5 shadow-xl bg-quaternary">
                    <figure className="px-6 py-6">
                        <img src={img10} alt="Shoes" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 m-5 shadow-xl bg-quaternary">
                    <figure className="px-6 py-6">
                        <img src={img11} alt="Shoes" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 m-5 shadow-xl bg-quaternary">
                    <figure className="px-6 py-6">
                        <img src={img12} alt="Shoes" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 m-5 shadow-xl bg-quaternary">
                    <figure className="px-6 py-6">
                        <img src={img13} alt="Shoes" className="rounded-xl" />
                    </figure>
                </div>
            </Marquee>
            <div className="divider"></div>
        </div>
    );
};

export default Gallary;