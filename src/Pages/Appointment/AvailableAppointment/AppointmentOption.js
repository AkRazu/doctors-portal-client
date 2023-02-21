import React from "react";

const AppointmentOption = ({ option, setTreatment }) => {
  const { name, slots } = option;
  
  return (
    <div className="card bg-base-100 shadow-xl ">
      <div className="card-body text-center">
        <h2 className="font-bold text-center text-2xl text-secondary">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
        </p>
        <div className="card-actions justify-center">
          <label
          disabled = {slots.length === 0}
            htmlFor="booking-modal"
            className="btn btn-primary bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] text-white"
            onClick={() => setTreatment(option)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
