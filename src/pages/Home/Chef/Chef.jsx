import React from "react";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  console.log(chef);
  const { name, picture, experience, recipes, likes, id } = chef;
  return (
    <div className="card hover:border-b-2 border-b-primary rounded-lg">
      <figure>
        <img src={picture} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Experience: {experience} Years</p>
        <p>Toatl Recipes: {recipes.length}</p>
        <p>
          <FaHeart className="text-red-600" /> {likes}
        </p>
        <div className="card-actions">
          <Link to={`/chefsRecipe/${id}`}>
            <button className="btn btn-primary">
              Show Details <FaArrowRight className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chef;
