import React from "react";
import men from "../../../../assets/men.jpg";
const Students1 = () => {
  return (
    <div>
      <div className="flex gap-6 max-sm:flex-col mt-5">
        <div className="w-[50%] max-md:w-[100%] rounded-2xl overflow-hidden">
          <img
            src={men}
            alt="profileImg"
            className="w-full max-w-[450px] rounded-2xl hover:scale-110 duration-500 cursor-pointer"
          />
        </div>
        <div className="w-[50%] max-sm:w-[100%]">
          <p className="text-[24px] font-bold ">Jamshid Pardayev</p>
          <p className="text-[16px] font-medium mt-3 text-gray-300">
            29.01.2002, 23 years old
          </p>
          <p className="text-[16px] font-medium mt-3 text-gray-300">
            jamshidnt@gmail.com
          </p>
          <p className="text-[16px] font-medium mt-3 text-gray-300">
            +998948811511
          </p>
          <p className="text-[16px] font-medium mt-3 text-gray-300">
            +998889704443
          </p>
        </div>
      </div>
    </div>
  );
};

export default Students1;
