import React, { useEffect, useState } from "react";
import Chef from "../Chef/Chef";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="max-w-[1440px] px-[4%] mx-auto mt-2 mb-6">
      <h2 className="text-4xl text-center font-bold mt-20">Our Top Chefs</h2>
      <div className="grid lg:grid-cols-3 gap-4 gap-y-5 max-w-[1440px] px-[4%] mx-auto my-14">
        {chefs.map((chef) => (
          <Chef key={chef.id} chef={chef}></Chef>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
