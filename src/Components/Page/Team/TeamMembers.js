import React, { useEffect, useState } from 'react';
import TeamMember from './TeamMamber';
const TeamMembers = () => {
    const [teammembers, setTeammember] = useState([]);

    useEffect(() => {
        fetch('./BestTem.json')
            .then(res => res.json())
            .then(data => setTeammember(data))
    }, [])
    return (
        <div className='my-20'>
            <div className='text-center ' data-aos="zoom-in-down"
                data-aos-duration="3000">
                <h1 className='text-blue-700 text-xl font-semibold'> Friendly Team</h1>
                <h1 className='text-3xl py-5 text-black font-bold'>Meet Our Best Team</h1>
                <h1 className='text-slate-600 font-semibold'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br></br>Aenean commodo ligula.</h1>
            </div>

            <div className='grid lg:grid-cols-3 gap-6 px-6 lg:px-24 mt-6'>
                {
                    teammembers.map(teammember => <TeamMember
                        teammember={teammember}
                        key={teammember._id}
                    ></TeamMember>)
                }
            </div>
        </div>
    );
};

export default TeamMembers;