import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ChefsDetailsCard from "../ChefsDetailsCard/ChefsDetailsCard";
import { FaHeart } from "react-icons/fa";
import "./ChefsDetails.css";

const ChefsDetails = () => {
  const { id } = useParams();
  const chefsDetails = useLoaderData();

  const { name, picture, bio, likes, experience, recipes } = chefsDetails;

  return (
    <div>
      <div
        id="chefs-details"
        className="flex items-center gap-8 border-b-2 border-orange-500 py-10 px-[4%]"
      >
        <div className="mb-12">
          <img className="max-w-lg rounded shadow-2xl" src={picture} alt="" />
        </div>
        <div>
          <h1 className="text-5xl font-bold text-white">
            About <span className="text-secondary">{name}</span>
          </h1>
          <p className="text-lg text-white my-6">{bio}</p>
          <p className="text-3xl font-medium text-orange-400 my-6">
            {experience}+ Years Of Experience
          </p>
          <div className="flex justify-between">
            <p className="text-2xl font-medium text-white">
              Total Recipe: {recipes.length}
            </p>
            <p className="flex items-center gap-x-1 text-2xl font-medium text-white cursor-pointer">
              <FaHeart className="text-red-600" /> {likes}
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-4xl text-center font-bold mt-20">Top Recipes</h2>
      <div className="max-w-[1440px] px-[4%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-12">
          {recipes.map((recipe) => (
            <ChefsDetailsCard
              recipe={recipe}
              key={recipe._id}
            ></ChefsDetailsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefsDetails;
