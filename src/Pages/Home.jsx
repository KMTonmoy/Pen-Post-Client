import React from 'react';
import Banner from '../Components/Banner';
import InfoBox from '../Components/InfoBox';
import Blogs from '../Components/Blogs';
import Faq from '../Components/Faq';

const Home = () => {
    return (
        <div>
            <Banner />
            <InfoBox />
            <Blogs />
            <Faq />
        </div>
    );
};

export default Home;