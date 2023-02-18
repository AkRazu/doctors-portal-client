import React from "react";
import './Banner.css'
import chair from '../../../assets/images/chair.png'
const Banner = () => {
  return (
    <div className="her  bg-image">
      <div className="hero-content mx-auto flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="lg:w-1/2 shadow-2xl"
        />
        <div>
          <h1 className="lg:text-5xl text-4xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
