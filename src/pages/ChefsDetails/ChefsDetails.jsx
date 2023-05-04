import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ChefsDetailsCard from "../ChefsDetailsCard/ChefsDetailsCard";

const ChefsDetails = () => {
  const { id } = useParams();
  const chefsDetails = useLoaderData();

  const { name, picture, recipes } = chefsDetails;

  return (
    <div>
      <img src={picture} alt="" />
      <h1 className="text-xl">{name}</h1>
      {recipes.map((recipe) => (
        <ChefsDetailsCard recipe={recipe}></ChefsDetailsCard>
      ))}
    </div>
  );
};

export default ChefsDetails;
