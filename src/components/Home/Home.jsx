import React from 'react';
import Banner from '../Banner/Banner';
import BannerImage from '../BannerImage/BannerImage';
import CardContainer from '../CardContainer/CardContainer';

const Home = () => {
    return (
        <div>
            {/* Banner */}
            <div>
                <Banner></Banner>
                <BannerImage></BannerImage>
            </div>
            
            {/* card categories */}
            <CardContainer></CardContainer>
        </div>
    );
};

export default Home;