import React from 'react';
import useTitle from '../../../features/Title/useTitle';
import Banner from '../Banner/Banner';
import Gallary from '../Gallary/Gallary';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import ForOffer from '../ForOffer/ForOffer';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Gallary></Gallary>
            <Testimonials></Testimonials>
            <ShopByCategory></ShopByCategory>
            <ForOffer></ForOffer>
        </div>
    );
};

export default Home;