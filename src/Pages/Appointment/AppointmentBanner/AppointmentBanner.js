import React from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "./AppointmentBanner.css";

const AppointmentBanner = ({ selectDate, setSelectedDate }) => {
  return (
    <header className="my-6">
      <div className="hero appoi-bg">
        <div className="hero-content w-1/2 flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt="Dentist Chair"
            className="max-w-sm lg:w-1/2 w-11/12 rounded-lg shadow-2xl"
          />
          <div className="mr-6">
            <DayPicker
              mode="single"
              selected={selectDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
