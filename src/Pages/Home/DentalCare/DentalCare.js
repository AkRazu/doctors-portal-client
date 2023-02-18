import React from "react";
import treatment from "../../../assets/images/treatment.png";
const DentalCare = () => {
  return (
    <div className="lg:mt-36 mt-16 lg:pb-36 lg:max-w-5xl mx-auto">
      <div className="card lg:card-side bg-base-100">
        <img className="lg:w-1/2  lg:p-0 p-5 rounded-lg" src={treatment} alt="Album" />
        <div className="card-body justify-center">
          <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
          <p className="flex-grow-0">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] text-white">GET STARTED</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
