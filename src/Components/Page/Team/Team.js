import React from 'react';
import InquiRies from './InquiRies';
import BestElectrical from '../../Home/BestElectrical';
import TeamBanar from './TeamBanar';
import TeamMembers from './TeamMembers';

const Team = () => {
    return (
        <div>
          
            <TeamBanar></TeamBanar>
            <TeamMembers></TeamMembers>
            <BestElectrical></BestElectrical>
            <InquiRies></InquiRies>
        </div>
    );
};

export default Team;