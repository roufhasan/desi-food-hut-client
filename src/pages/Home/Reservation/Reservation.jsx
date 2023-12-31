import React from "react";
import "./Reservation.css";

const Reservation = () => {
  return (
    <div>
      <h2 className="text-4xl text-center font-bold mt-20">
        Reserve Your Table Now
      </h2>
      <div
        className="max-w-[1440px] px-[4%] mx-auto mt-12 mb-6 lg:flex justify-between"
        id="reservation"
      >
        <div className="flex items-center">
          <h3 className="text-4xl font-semibold text-white ">
            Reserve Your Seats to <br /> Confirm if You Come with
            <br /> Your Family
          </h3>
        </div>
        <div className="lg:w-1/2 lg:p-10 mt-12 md:mt-0 text-center">
          <form>
            <input
              className="border-black border px-2 py-3 rounded-lg"
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
            />
            <br />
            <input
              className="border-black border my-3 px-2 py-3 rounded-lg"
              type="email"
              name="email"
              id="email"
              placeholder="Your Email Address"
            />
            <br />
            <input
              className="border-black border px-1 py-3 rounded-lg"
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone Number"
            />
            <br />
            <input
              className="border-black border my-3 px-2 py-3 rounded-lg"
              type="text"
              name="date"
              id="date"
              placeholder="Enter Date"
            />
            <br />
            <input
              className="border-black border px-2 py-3 rounded-lg"
              type="text"
              name="time"
              id="time"
              placeholder="Enter Time"
            />
            <br />
            <button className="bg-primary text-white text-xl font-semibold my-3 px-5 py-2">
              Reserve
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
