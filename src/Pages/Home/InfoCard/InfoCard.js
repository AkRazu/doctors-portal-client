import React from "react";

const InfoCard = ({card}) => {
    const {name,description,icon,bgClass} = card;
  return (
    <div className={`card text-white lg:flex-row flex-col card-side p-6  shadow-xl ${bgClass}`}>
      <figure>
        <img
        className="lg:w-auto w-1/4"
          src={icon}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div> */}
      </div>
    </div>
  );
};

export default InfoCard;
