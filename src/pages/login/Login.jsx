import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSend = () => {
    toast.success("Info Sended!✅");
  };

  const handleReset = () => {
    toast.success("Info Reseted!✅");
  };

  return (
    <div id="login" className="min-h-[100vh] max-w-[1200px] mx-auto px-4 py-5">
      <div className="flex gap-x-5">
        <button
          onClick={() => navigate("/")}
          className="h-[40px] px-6 bg-violet-900 rounded-2xl hover:bg-violet-800 duration-300 hover:shadow-[3px_3px_5px_#360564] cursor-pointer"
        >
          Go Home
        </button>
        <button
          onClick={() => navigate(-1)}
          className="h-[40px] px-6 bg-violet-900 rounded-2xl hover:bg-violet-800 duration-300 hover:shadow-[3px_3px_5px_#360564] cursor-pointer"
        >
          Go Back
        </button>
      </div>
      <form
        action=""
        className="flex flex-col max-w-[600px] mx-auto mt-5 py-2 px-4 rounded-2xl shadow-[0px_2px_8px_3px_#360564]"
      >
        <h1 className="relative text-[26px] w-[80px] mx-auto font-semibold text-center before:absolute before:left-0 before:bottom-0 before:w-[80px] before:h-[2px] before:bg-white before:scale-0 hover:before:scale-100 cursor-pointer before:duration-300">
          Login
        </h1>
        <label htmlFor="name" className="text-[16px] font-semibold mt-3">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter Your Name"
          className="h-[35px] mt-2 border border-[#360564] rounded-[5px] px-2 outline-none shadow-[0px_2px_8px_3px_#360564]"
        />

        <label htmlFor="surname" className="text-[16px] font-semibold mt-3">
          Surname
        </label>
        <input
        id="surname"
          type="text"
          placeholder="Enter Your SurName"
          className="h-[35px] mt-2 border border-[#360564] rounded-[5px] px-2 outline-none shadow-[0px_2px_8px_3px_#360564]"
        />

        <label htmlFor="" className="text-[16px] font-semibold mt-3">
          Phone Number
        </label>
        <input
          type="number"
          placeholder="Enter Your Phone Number"
          className="h-[35px] mt-2 border border-[#360564] rounded-[5px] px-2 outline-none shadow-[0px_2px_8px_3px_#360564]"
        />

        <label htmlFor="" className="text-[16px] font-semibold mt-3">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter Your Email"
          className="h-[35px] mt-2 border border-[#360564] rounded-[5px] px-2 outline-none shadow-[0px_2px_8px_3px_#360564]"
        />

        <label htmlFor="" className="text-[16px] font-semibold mt-3">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter Your Password"
          className="h-[35px] mt-2 border border-[#360564] rounded-[5px] px-2 outline-none shadow-[0px_2px_8px_3px_#360564]"
        />
        <div className="flex mt-5 gap-x-6">
          <button
            onClick={handleSend}
            className="w-full h-[40px] rounded-[10px] bg-[#360564] hover:bg-gray-800 duration-300 cursor-pointer"
          >
            Send
          </button>
          <button
            onClick={handleReset}
            type="reset"
            className="w-full h-[40px] rounded-[10px] bg-[#360564] hover:bg-gray-800 duration-300 cursor-pointer"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
