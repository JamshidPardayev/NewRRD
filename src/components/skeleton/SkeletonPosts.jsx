import React from "react";

const SkeletonPosts = () => {
  return (
    <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-w-[1200px] mx-auto gap-6 p-4">
      {Array(30)
        .fill("")
        .map((_, index) => (
          <div key={index}  className="max-w-[350px] max-sm:w-[300px] flex flex-col rounded-2xl max-sm:mx-auto justify-center p-2 shadow-[0px_2px_8px_3px_#360564]">
            <div className="w-full h-[50px] bg-gray-800 rounded-2xl"></div>
            <div className="w-full h-[40px] bg-gray-800 mt-3 rounded-2xl"></div>
            <div className="flex justify-between mt-4">
              <div className="h-[30px] w-[50px] rounded-[5px] bg-gray-800"></div>
              <div className="h-[30px] w-[50px] rounded-[5px] bg-gray-800"></div>
              <div className="h-[30px] w-[50px] rounded-[5px] bg-gray-800"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SkeletonPosts;
