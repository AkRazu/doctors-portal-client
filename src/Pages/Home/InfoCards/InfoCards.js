import React from "react";
import clock from "../../../assets/icons/clock.svg";
import location from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
const InfoCards = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3">
        <div className="card w-[450px] bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] text-white">
          <div className="flex items-center">
            <div>
              <img className="h-max-[86px] p-8" src={clock} alt="" />
            </div>
            <div className="card-body">
              <h1 className="font-bold text-xl">Opening Hours</h1>
              <p>Lorem Ipsum is simply dummy text of the pri</p>
            </div>
          </div>
        </div>

        <div className="card w-[450px] bg-accent text-white">
          <div className="flex items-center">
            <div>
              <img className="h-max-[86px] p-8" src={location} alt="" />
            </div>
            <div className="card-body">
              <h1 className="font-bold text-xl">Visit our location</h1>
              <p>Brooklyn, NY 10036, United States</p>
            </div>
          </div>
        </div>

        <div className="card w-[450px] bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] text-white">
          <div className="flex items-center">
            <div>
              <img className="h-max-[86px] p-8" src={phone} alt="" />
            </div>
            <div className="card-body">
              <h1 className="font-bold text-xl">Contact us now</h1>
              <p>+000 123 456789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
