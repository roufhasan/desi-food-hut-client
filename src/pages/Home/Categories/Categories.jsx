import React from "react";

const Categories = () => {
  return (
    <div className="max-w-[1440px] px-[4%] mx-auto mt-2 mb-6">
      <h2 className="text-4xl text-center font-bold mt-20">
        Our Most Popular Dishes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center mt-12">
        <div className="transition ease-in-out duration-300 hover:transform hover:scale-105 hover:rotate-12">
          <img
            className="h-40 w-40 rounded-full object-cover mx-auto"
            src="https://i.ibb.co/dMYFvJ7/akzj-hero.webp"
            alt=""
          />
          <p className="font-semibold text-lg mt-4">Chicken Grill</p>
        </div>
        <div className="transition ease-in-out duration-300 hover:transform hover:scale-105 hover:rotate-12">
          <img
            className="h-40 w-40 rounded-full object-cover mx-auto"
            src="https://i.ibb.co/xDhGgbV/Kacchi-Bashmoti-for-5.jpg"
            alt=""
          />
          <p className="font-semibold text-lg mt-4">Kacchi Biryani</p>
        </div>
        <div className="transition ease-in-out duration-300 hover:transform hover:scale-105 hover:rotate-12">
          <img
            className="h-40 w-40 rounded-full object-cover mx-auto"
            src="https://i.ibb.co/br1LnX5/quzt-hero.webp"
            alt=""
          />
          <p className="font-semibold text-lg mt-4">Morog Polao</p>
        </div>
        <div className="transition ease-in-out duration-300 hover:transform hover:scale-105 hover:rotate-12">
          <img
            className="h-40 w-40 rounded-full object-cover mx-auto"
            src="https://i.ibb.co/6vr7NS5/zglw-hero.webp"
            alt=""
          />
          <p className="font-semibold text-lg mt-4">Seekh Kabab</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
