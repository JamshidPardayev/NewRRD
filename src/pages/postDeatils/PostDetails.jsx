import React, { useEffect, useState } from "react";
import { api } from "../../api";
import { useParams } from "react-router-dom";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";

const ProductDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .get(`/post/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);
  if (loading) return <p className="text-center">Loading...🔄</p>;
  if (error)
    return <p className="text-center text-red-600">Error occurred.❌</p>;

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10">
      <h1 className="text-[30px] text-white font-semibold">{post?.title}</h1>
      <p className="text-[18px] mt-4 text-gray-300">{post?.body}</p>
      <div className="flex justify-between max-w-[400px] mt-5">
        <p className="text-[#5603a3] flex gap-1 items-center">
          <AiFillLike className="text-[25px] " />
          {post?.reactions.likes}
        </p>
        <p className="text-[#5603a3] flex gap-1 items-center">
          <AiFillDislike className="text-[25px] " />
          {post?.reactions.dislikes}
        </p>
        <p className="text-[#5603a3] flex gap-1 items-center">
          <IoEyeSharp className="text-[25px] " />
          {post?.views}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
