import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { LuCirclePlus } from "react-icons/lu";
import SkeletonProducts from "../../components/skeleton/SkeletonProducts";

const Home = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    toast.success("Product Added!✅");
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://dummyjson.com/products`)
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
      <div className="text-center my-4 text-red-600 text-[18px]">
        <p>Something is wrong:)</p>
      </div>
    );
  }

  return (
    <div id="#" className="max-w-[1200px] mx-auto my-[50px] px-4">
      <h1 className="relative text-[36px] w-[150px] mx-auto font-semibold text-center mt-[50px] mb-8 before:absolute before:left-0 before:bottom-0 before:w-[150px] before:h-[2px] before:bg-white before:scale-0 hover:before:scale-100 cursor-pointer before:duration-300">
        Products
      </h1>
      <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2  max-sm:grid-cols-1 justify-center gap-6">
        {data?.products?.map((product) => (
          <div
            key={product.id}
            className="flex flex-col justify-between max-w-[350px] mx-auto text-center border border-gray-400 rounded-2xl p-4 shadow-[0px_2px_8px_3px_#360564]"
          >
            <div className="max-w-[320px] overflow-hidden mx-auto rounded-2xl">
              <img
                loading="lazy"
                src={product.images[0]}
                alt={product.brand}
                className="w-full h-full rounded-2xl hover:scale-110 duration-300 cursor-pointer"
              />
            </div>
            <p className="text-[18px] mt-1 font-semibold">
              {product.brand} {product.title}
            </p>
            <p className="text-[16px] text-gray-400 my-2">
              {product.description}
            </p>
            <div className="flex items-center  justify-between">
              <p className="text-[18px]">
                Price:{" "}
                <span className="text-green-500 font-bold">
                  ${product.price}
                </span>
              </p>
              <LuCirclePlus
                onClick={handleClick}
                className="text-[30px] text-white drop-shadow duration-300 cursor-pointer hover:rotate-180 hover:scale-110 hover:text-[#6400c2]"
              />
            </div>
          </div>
        ))}
      </div>
      {loading && <SkeletonProducts />}
    </div>
  );
};

export default Home;
