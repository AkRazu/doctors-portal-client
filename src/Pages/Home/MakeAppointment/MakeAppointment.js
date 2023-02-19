import React from "react";
import "./MakeAppointment.css";
import doctor from "../../../assets/images/doctor-small.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
const MakeAppointment = () => {
  return (
    <section className="appointment-bg">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img src={doctor} className="max-w-sm hidden lg:block rounded-lg -mb-8 -mt-32 " alt="doctor"/>
          <div className="text-white">
            <h4 className="text-secondary font-bold text-lg">Appointment</h4>
            <h1 className="text-4xl font-bold">Make an appointment Today</h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
