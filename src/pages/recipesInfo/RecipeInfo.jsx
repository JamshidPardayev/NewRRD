import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeInfo = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://dummyjson.com/recipes/${id}`)
      .then((res) => {
        setRecipe(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center">Loading...🔄</p>;
  if (error)
    return <p className="text-center text-red-600">Error occurred.❌</p>;

  return (
    <div className="max-w-[1200px] mx-auto p-4 min-h-[100vh]">
      <div className="flex gap-x-5">
        <button className="h-[40px] px-6 bg-violet-900 rounded-2xl hover:bg-violet-800 duration-300 hover:shadow-[3px_3px_5px_#360564] cursor-pointer">
          Back To Home
        </button>
        <button className="h-[40px] px-6 bg-violet-900 rounded-2xl hover:bg-violet-800 duration-300 hover:shadow-[3px_3px_5px_#360564] cursor-pointer">
          Back
        </button>
      </div>
      <h1 className="text-[28px] font-bold text-center my-6">{recipe?.name}</h1>
      <div className="flex gap-5 max-sm:flex-col">
        <img
          src={recipe?.image}
          alt={recipe?.name}
          className="sm:max-w-[400px] rounded-lg mb-4 w-full"
        />
        <div className="flex flex-col">
          <p className="mb-2 text-[18px] font-semibold">Ingredients:</p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            {recipe?.ingredients?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-[16px] text-gray-400"><span className="text-[20px] font-semibold text-white">Instructions: </span> {recipe?.instructions}</p>
    </div>
  );
};

export default RecipeInfo;
