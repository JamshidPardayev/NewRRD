import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[100vh] max-w-[1200px] mx-auto px-4 py-5">
      <div className="flex gap-x-5">
        <button onClick={()=>navigate("/")} className="h-[40px] px-6 bg-violet-900 rounded-2xl hover:bg-violet-800 duration-300 hover:shadow-[3px_3px_5px_#360564] cursor-pointer">
          Go Home
        </button>
        <button onClick={()=>navigate(-1)} className="h-[40px] px-6 bg-violet-900 rounded-2xl hover:bg-violet-800 duration-300 hover:shadow-[3px_3px_5px_#360564] cursor-pointer">
          Go Back
        </button>
      </div>
      <h1 className="text-[100px] max-sm:text-[60px] text-center">
        Not Found!
      </h1>
      <p className="text-[60px] max-sm:text-[40px] text-center">404 Error❌</p>
    </div>
  );
};

export default NotFound;
