import React from 'react';
import Banar from './Banar';
import BanarCards from './BanarCards';
import Bestsellers from './Bestsellers';
import Counters from './Counters';




const Home = () => {
    return (
        <div>
            <Banar></Banar>
            <BanarCards></BanarCards>
            <Counters></Counters>
            <Bestsellers></Bestsellers>
        </div>
    );
};

export default Home;