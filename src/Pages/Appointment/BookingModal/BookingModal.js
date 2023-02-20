import { format } from "date-fns/esm";
import React from "react";

const BookingModal = ({ treatment, selectDate }) => {
  const { name, slots } = treatment;
  const date = format(selectDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: name,
      slot,
      email,
      phone,
    };
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
              name="name"
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full  my-2"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full  my-2"
            />
            <input
              name="email"
              type="text"
              placeholder="Email"
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
