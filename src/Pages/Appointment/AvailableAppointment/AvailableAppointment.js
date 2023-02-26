import { format } from "date-fns";
import React, { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";
import { useQuery } from "@tanstack/react-query";

const AvailableAppointment = ({ selectDate, setSelectedDate }) => {
  const [treatment, setTreatment] = useState(null);

  // const { data: appointmentOptions = [] } = useQuery({
  //   queryKey: ["appointmentOptions"],
  //   queryFn: () =>
  //     const res = await fetch("http://localhost:5000/appointmentOptions")
  // const data = await res.json();
  // return data
  //     ),
  // });

  const { data: appointmentOptions = [] } = useQuery({
    queryKey: ["appointmentOptions"],
    queryFn: () =>
      fetch("http://localhost:5000/appointmentOptions").then((res) =>
        res.json()
      ),
  });
  return (
    <section className="mt-16">
      <p className="text-center font-bold text-secondary">
        Available Appointment {format(selectDate, "PP")}
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            setTreatment={setTreatment}
            key={option._id}
            option={option}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal treatment={treatment} selectDate={selectDate} />
      )}
    </section>
  );
};

export default AvailableAppointment;
