import React from "react";

const Review = ({ review }) => {
  const { name, review: userReview, img, location } = review;
  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <p>{userReview}</p>
        <div className="card-actions items-center mt-6">
          <div className="avatar ">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt='Person' />
            </div>
          </div>
          <div className="pl-4">
            <h5 className="text-lg">{name}</h5>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
