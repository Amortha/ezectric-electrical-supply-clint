import React from 'react';
import CustomerReviews from '../Home/CustomerReviews';
import OurStore from '../Home/OurStore';
import Banar from './Banar';
import BestTems from './BestTems';

import Counters from './Counters';


import ElectricalStore from './ElectricalStore';

const AboutUs = () => {
    return (
        <div>
            <Banar></Banar>
            <ElectricalStore></ElectricalStore>
            <Counters></Counters>
            <CustomerReviews></CustomerReviews>
            <OurStore></OurStore>
            <BestTems></BestTems>
        </div>
    );
};

export default AboutUs;