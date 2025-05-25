import React from "react";

const SkeletonProducts = () => {
  return (
    <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-w-[1200px] mx-auto px-4 gap-6">
      {Array(30)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="max-w-[350px] max-sm:w-[300px] max-sm:mx-auto rounded-2xl shadow-[0px_2px_8px_3px_#360564] p-2"
          >
            <div className="w-full h-[200px] bg-gray-800 rounded-2xl mb-3"></div>
            <div className="w-full h-[50px] bg-gray-800 rounded-2xl my-3"></div>
            <div className="w-full h-[40px] bg-gray-800 rounded-2xl"></div>
          </div>
        ))}
    </div>
  );
};

export default SkeletonProducts;
