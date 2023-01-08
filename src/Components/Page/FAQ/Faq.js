import React from 'react';
import CustomerReviews from '../../Home/CustomerReviews';
import InquiRies from '../Team/InquiRies';
import FaqBanar from './FaqBanar';
const Faq = () => {
    return (
        <div>
            <FaqBanar></FaqBanar>
            <InquiRies></InquiRies>
            <CustomerReviews></CustomerReviews>
        </div>
    );
};

export default Faq;