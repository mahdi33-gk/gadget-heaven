import React from 'react';
import Banner from './Banner';
import Products from './Products';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Gadget</title>
            </Helmet>
           <Banner></Banner>
           <Products></Products>
        </div>
    );
};

export default Home;