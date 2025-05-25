import React from "react";
import women from "../../../../assets/women.jpg";
const Students2 = () => {
  return (
    <div>
      <div className="flex gap-6 max-sm:flex-col mt-5">
        <div className="w-[50%] max-md:w-[100%] rounded-2xl overflow-hidden">
          <img
            src={women}
            alt="profileImg"
            className="w-full max-w-[450px] rounded-2xl hover:scale-110 duration-500 cursor-pointer"
          />
        </div>
        <div className="w-[50%] max-sm:w-[100%]">
          <p className="text-[24px] font-bold ">Shaxlo Ahmedova</p>
          <p className="text-[16px] font-medium mt-3 text-gray-300">
            05.05.1995, 30 years old
          </p>
          <p className="text-[16px] font-medium mt-3 text-gray-300">
            shahloahmedova@gmail.com
          </p>
          <p className="text-[16px] font-medium mt-3 text-gray-300">
            +998941112233
          </p>
          <p className="text-[16px] font-medium mt-3 text-gray-300">
            +998881234567
          </p>
        </div>
      </div>
    </div>
  );
};

export default Students2;
