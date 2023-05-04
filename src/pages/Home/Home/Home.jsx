import React from "react";
import Chefs from "../Chefs/Chefs";
import Hero from "../Hero/Hero";
import Categories from "../Categories/Categories";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Categories></Categories>
      <Chefs></Chefs>
    </div>
  );
};

export default Home;
