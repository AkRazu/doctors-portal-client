import { format } from "date-fns";
import React, { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";
import { useQuery } from "@tanstack/react-query";

const AvailableAppointment = ({ selectDate, setSelectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selectDate, "PP");
  // const { data: appointmentOptions = [] } = useQuery({
  //   queryKey: ["appointmentOptions"],
  //   queryFn: () =>
  //     const res = await fetch("http://localhost:5000/appointmentOptions")
  // const data = await res.json();
  // return data
  //     ),
  // });

  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: () =>
      fetch(`http://localhost:5000/appointmentOptions?date=${date}`).then(
        (res) => res.json()
      ),
  });
  if (isLoading) {
    return (
      <div
        class="inline-block mx-auto h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    );
  }
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
        <BookingModal
          refetch={refetch}
          treatment={treatment}
          selectDate={selectDate}
        />
      )}
    </section>
  );
};

export default AvailableAppointment;
