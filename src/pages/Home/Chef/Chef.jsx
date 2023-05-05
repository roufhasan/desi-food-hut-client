import React from "react";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  console.log(chef);
  const { name, picture, experience, recipes, likes, id } = chef;
  console.log(recipes);
  return (
    <div className="card border border-black rounded-lg transition ease-in-out duration-200 hover:transform hover:scale-105">
      <figure className="relative">
        <img
          className="h-96 w-full object-cover rounded-t-lg rounded-tr-lg"
          src={picture}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        <p className="text-lg text-accent">{experience} year's of experience</p>
        <p>
          <span className="text-lg font-medium">
            Toatl Recipes: {recipes.length}
          </span>
          {recipes.map((recipe) => (
            <li>{recipe.recipe_name},</li>
          ))}
        </p>
        <p className="flex items-center gap-2 bg-black text-white absolute top-0 right-0 px-3 text-lg cursor-pointer  rounded-tr-lg">
          <FaHeart className="text-red-600" /> {likes}
        </p>
        <div className="block">
          <Link to={`/chefsRecipe/${id}`}>
            <button className="btn btn-primary w-full">
              View Recipes <FaArrowRight className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chef;
