import React from 'react';

const ForOffer = () => {
    return (
        <div className='flex justify-around flex-col md:flex-row bg-quaternary mt-16'>
            <img className='w-[300px] md:w-[400px] mx-auto md:mx-0 my-7 md:my-0' src="https://img.freepik.com/free-vector/cardboard-box-full-toys-isolated_1308-38078.jpg?w=740&t=st=1684629410~exp=1684630010~hmac=fae5aa44e3a5832b076af48660f84bb0f8a63a55afaec5a5f2a23f48b5d1dd82" alt="" />
            <div className='flex justify-center flex-col items-center mb-9'>
                <h2 className='text-center text-6xl font-boogaloo font-semibold text-back'>Subscribe For Get FREE Gift!</h2>
                <p className='mt-4 mb-2 text-pink-400'>NEWSLETTER SIGNUP</p>
                <input type="text" placeholder="email@example.com" className="input input-bordered input-success w-full max-w-xs" />
            </div>
        </div>
    );
};

export default ForOffer;