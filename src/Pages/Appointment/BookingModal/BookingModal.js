import { format } from "date-fns/esm";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ treatment, selectDate,refetch }) => {
  const { name, slots } = treatment;
  const date = format(selectDate, "PP");
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const displayName = form.displayName.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: displayName,
      slot,
      email,
      phone,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Booking confirmed");
          refetch();
        }else{
          toast.error(data.message);
        }
      });

    console.log(booking);
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1">
            <input
              disabled
              type="text"
              value={date}
              className="input input-bordered w-full  my-2"
            />
            <select name="slot" className="select select-bordered w-full">
              <option disabled selected>
                Who shot first?
              </option>
              {slots.map((slot, idx) => (
                <option key={idx} value={slot} selected>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="displayName"
              type="text"
              value={user?.displayName}
              disabled
              placeholder="Full Name"
              className="input input-bordered w-full  my-2"
            />
            <input
              name="email"
              type="text"
              value={user?.email}
              placeholder="Email"
              disabled
              className="input input-bordered w-full  my-2"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full  my-2"
            />

            <input
              type="submit"
              value="submit"
              placeholder="Type here"
              className="btn w-full  my-2"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
