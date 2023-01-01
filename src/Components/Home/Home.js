import React from 'react';
import Banar from './Banar';
import BanarCards from './BanarCards';
import BestElectrical from './BestElectrical';
import Bestsellers from './Bestsellers';
import Counters from './Counters';
import CustomerReviews from './CustomerReviews';
import OurStore from './OurStore';
import Sale from './Sale';






const Home = () => {
    return (
        <div>
            <Banar></Banar>
            <BanarCards></BanarCards>
            <Counters></Counters>
            <Bestsellers></Bestsellers>
            <BestElectrical></BestElectrical>
            <Sale></Sale>
            <CustomerReviews></CustomerReviews>
            <OurStore></OurStore>
        </div>
    );
};

export default Home;