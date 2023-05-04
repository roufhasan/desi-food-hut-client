import React from "react";
import Chefs from "../Chefs/Chefs";
import Hero from "../Hero/Hero";
import Categories from "../Categories/Categories";
import Reservation from "../Reservation/Reservation";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Categories></Categories>
      <Chefs></Chefs>
      <Reservation></Reservation>
    </div>
  );
};

export default Home;
