import { format } from "date-fns/esm";
import React from "react";

const BookingModal = ({ treatment, selectDate }) => {
  const { name,slots } = treatment;
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
          <form className="grid grid-cols-1">
            <input
              disabled
              type="text"
              value={format(selectDate, "PP")}
              className="input input-bordered w-full  my-2"
            />
            <select className="select select-bordered w-full">
              <option disabled selected>
                Who shot first?
              </option>
             {
              slots.map(slot =>  <option value={slot} selected>
                {slot}
              </option>)
             }
            </select>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full  my-2"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full  my-2"
            />
            <input
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
