import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SkeletonRecipes from "../../components/skeleton/SkeletonRecipes";

const Recipes = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://dummyjson.com/recipes`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (error) {
    return (
      <div className="text-[18px] text-center text-red-600 my-4">
        <p>Something is wrong:)</p>
      </div>
    );
  }

  return (
    <div id="recipes" className="max-w-[1200px] mx-auto px-4 my-[50px]">
      <h1 className="relative text-[36px] w-[130px] mx-auto font-semibold text-center mt-[50px] mb-8 before:absolute before:left-0 before:bottom-0 before:w-[130px] before:h-[2px] before:bg-white before:scale-0 hover:before:scale-100 cursor-pointer before:duration-300">
        Recipes
      </h1>
      <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2  max-sm:grid-cols-1 justify-center gap-6">
        {data?.recipes?.map((recipe) => (
          <div
            key={recipe.id}
            className="relative flex flex-col justify-between max-w-[350px] mx-auto text-center border border-gray-400 rounded-2xl p-4 shadow-[0px_2px_8px_3px_#360564]"
          >
            <div>
              <img src={recipe.image} alt={recipe.name} />
            </div>
            <h2 className="my-3 text-[20px] font-semibold">{recipe.name}</h2>
            <Link to={`/recipeInfo/${recipe.id}`}>
              <button className="h-[40px] w-full bg-violet-700 rounded-2xl hover:bg-violet-800 duration-300 hover:shadow-[3px_3px_5px_#360564] cursor-pointer">
                Get More
              </button>
            </Link>
          </div>
        ))}
      </div>
      {loading && <SkeletonRecipes/>}
    </div>
  );
};

export default Recipes;
