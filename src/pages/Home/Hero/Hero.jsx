import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      id="hero"
      className="text-white text-center py-[3%] flex flex-col justify-center"
    >
      <h3 className="text-[55px] font-medium text-gray-300">Welcome To</h3>
      <h2 className="text-[115px] font-bold tracking-wide mt-8 mb-6">
        Desi <span className="text-secondary">Food </span>
        <span className="text-primary">Hut</span>
      </h2>
      <div>
        <p className="text-lg text-gray-300">
          Where we serve up the most delicious traditional food in town!
        </p>
        <p className="mx-auto max-w-[700px] text-lg text-gray-300 mb-20">
          Whether you're in the mood for something spicy, sweet, or savory,we've
          got you covered.
        </p>
      </div>
      <div>
        <button className="text-black btn-primary font-medium rounded-lg px-7 py-3 text-xl">
          Order Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
