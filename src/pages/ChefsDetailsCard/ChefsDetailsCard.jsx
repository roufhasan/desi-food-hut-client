import React, { useState } from "react";
import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { toast } from "react-toastify";

const ChefsDetailsCard = ({ recipe }) => {
  const { recipe_name, img, method, rating, ingredients } = recipe;
  const [favourite, setFavourite] = useState(false);

  const handleFavourite = () => {
    setFavourite(true);
    toast("❤ Added To Favourite", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="card w-full bg-base-100 shadow-lg border-green-500 mb-20">
      <img className="min-h-[313px] object-cover" src={img} alt="" />
      <div className="card-body pt-[5%] pb-[5%] px-[5%]">
        <h2 className="card-title text-3xl">{recipe_name}</h2>
        <p className="text-xl">
          <Rating
            placeholderRating={rating}
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar className="text-primary" />}
            fullSymbol={<FaStar />}
            readonly
          />
          <span>{rating}</span>
        </p>
        <div>
          <p className="font-medium text-xl">Ingredients You Need:</p>
          {ingredients.map((ingredient) => (
            <li className="text-gray-700">{ingredient}</li>
          ))}
        </div>
        <p>
          <span className="font-medium text-xl">Cooking Method: </span>
          {method}
        </p>
        <div
          onClick={handleFavourite}
          className={`${favourite ? "btn-disabled" : "bg-primary"} mt-5`}
        >
          <button className="text-xl font-medium flex items-center gap-2 py-3 px-4 mx-auto">
            <FaRegHeart className="text-2xl"></FaRegHeart> Add to Favourite
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefsDetailsCard;
