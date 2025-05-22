import React from "react";
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black py-3">
      <div className="max-w-[1200px] mx-auto px-4 flex justify-between flex-wrap gap-6 font-normal text-gray-400 max-sm:justify-evenly">
        <div>
          <Link to="/">
            <img src="logo1.png" alt="footerLogo" className="h-[100px]" />
          </Link>
          <p className="max-w-[200px]">
            Our site can you give some information about products, users, posts,
            recipes.
          </p>
        </div>
        <div>
          <p className="text-[20px] font-semibold text-white">Recipes</p>
          <p>Chocolates</p>
          <p>Ice-cream</p>
          <p>Caces</p>
          <p>Foods</p>
        </div>
        <div>
          <p className="text-[20px] font-semibold text-white">Users</p>
          <p>Jon Doe</p>
          <p>Jon Uik</p>
          <p>Chan Uk</p>
          <p>Elvin Jr</p>
        </div>
        <div>
          <p className="text-[20px] font-semibold text-white">Posts</p>
          <p>Cars</p>
          <p>Comedy</p>
          <p>Sport</p>
          <p>Gadjets</p>
        </div>
        <div>
          <p className="text-[20px] font-semibold text-white">Contact us</p>
          <form action="" className="w-[250px] h-[40px] flex items-center my-2">
            <input type="email" className="h-[40px] border border-pink-600 rounded-l-[5px] px-2 outline-none"/>
            <button className="bg-pink-600 rounded-r-[5px] w-[80px] h-[40px] cursor-pointer hover:bg-pink-700 text-white duration-300">Send</button>
          </form>
          <div className="flex gap-4 text-[25px] mt-5">
          <FaTelegramPlane className="text-blue-500 hover:text-blue-800 cursor-pointer duration-300"/>
          <FaInstagram className="text-pink-500 hover:text-pink-800 cursor-pointer duration-300"/>
          <FaTwitter className="text-blue-300 hover:text-blue-800 cursor-pointer duration-300"/>
          <FaFacebookF className="text-violet-600 hover:text-violet-900 cursor-pointer duration-300"/>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
