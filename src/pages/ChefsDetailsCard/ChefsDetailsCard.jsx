import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const ChefsDetailsCard = ({ recipe }) => {
  const { recipe_name, method, rating, ingredients } = recipe;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{recipe_name}</h2>
        <p>{method}</p>
        {ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
        <p>
          <Rating
            placeholderRating={rating}
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar className="text-primary" />}
            fullSymbol={<FaStar />}
            readonly
          />
          <span>{rating}</span>
        </p>
      </div>
    </div>
  );
};

export default ChefsDetailsCard;
