import React, { useState } from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";

const Appointment = () => {
  const [selectDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner
        setSelectedDate={setSelectedDate}
        selectDate={selectDate}
      />
      <AvailableAppointment
        setSelectedDate={setSelectedDate}
        selectDate={selectDate}
      />
    </div>
  );
};

export default Appointment;
