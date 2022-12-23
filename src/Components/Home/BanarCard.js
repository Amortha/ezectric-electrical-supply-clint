import React from 'react';

const BanarCard = ({cardtitle,icon,text}) => {
    return (
        <div className="card card-side bg-indigo-50 shadow-xl  ">
        <figure>{icon}</figure>
        <div className="card-body">
          <h2 className="card-title">{cardtitle}</h2>
          <p>{text}</p>
        </div>
      </div>
    );
};

export default BanarCard;