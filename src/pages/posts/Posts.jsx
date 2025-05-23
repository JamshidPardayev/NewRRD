import axios from "axios";
import React, { useEffect, useState } from "react";
import SkeletonPosts from "../../components/skeleton/SkeletonPosts";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";

const Posts = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://dummyjson.com/posts`)
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
    <div id="posts" className="max-w-[1200px] mx-auto px-4 my-[60px]">
      <h1 className="relative text-[36px] w-[100px] mx-auto font-semibold text-center mt-[50px] mb-8 before:absolute before:left-0 before:bottom-0 before:w-[100px] before:h-[2px] before:bg-white before:scale-0 hover:before:scale-100 cursor-pointer before:duration-300">
        Posts
      </h1>
      <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6 text-gray-400">
        {data?.posts?.map((post) => (
          <div key={post.id} className="max-w-[350px] flex flex-col justify-between mx-auto content-between text-center rounded-2xl p-4 shadow-[0px_2px_8px_3px_#360564] ">
            <h2 className="text-[22px] text-white">{post.title}</h2>
            <p>{post.body}</p>
            <div className="flex justify-between my-3">
              <p className="text-[#5603a3] flex gap-1 items-center">
                <AiFillLike className="text-[25px] " />
                {post.reactions.likes}
              </p>
              <p className="text-[#5603a3] flex gap-1 items-center">
                <AiFillDislike className="text-[25px] " />
                {post.reactions.dislikes}
              </p>
              <p className="text-[#5603a3] flex gap-1 items-center">
                <IoEyeSharp className="text-[25px] " />
                {post.views}
              </p>
            </div>
          </div>
        ))}
      </div>
      {loading && <SkeletonPosts />}
    </div>
  );
};

export default Posts;
