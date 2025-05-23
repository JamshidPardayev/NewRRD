import axios from "axios";
import React, { useEffect, useState } from "react";
import SkeletonUsers from "../../components/skeleton/SkeletonUsers";

const Users = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://dummyjson.com/users`)
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
    <div id="users" className="max-w-[1200px] mx-auto px-4 my-[60px]">
     <h1 className="relative text-[36px] w-[100px] mx-auto font-semibold text-center mt-[50px] mb-8 before:absolute before:left-0 before:bottom-0 before:w-[100px] before:h-[2px] before:bg-white before:scale-0 hover:before:scale-100 cursor-pointer before:duration-300">
        Users
      </h1>
    <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2  max-sm:grid-cols-1 justify-center gap-6 text-gray-400 ">
        {data?.users?.map((user) => (
          <div
            key={user.id}
            className="max-w-[350px] mx-auto text-center rounded-2xl p-4 shadow-[0px_2px_8px_3px_#360564]"
          >
            <div className="max-w-[320px] overflow-hidden mx-auto rounded-2xl">
              <img
              loading="lazy"
                  src={user.image}
                alt={user.firstName}
                className="w-full h-full rounded-2xl hover:scale-110 duration-300 cursor-pointer"
              />
            </div>
            <p className="text-[17px]">
              Hi, I'm{" "}
              <span className="font-semibold text-white">
                {user.firstName} {user.lastName} {user.maidenName}
              </span>
              . I was born on{" "}
              <span className="font-semibold text-white">{user.birthDate}</span>{" "}
              and I'm{" "}
              <span className="font-semibold text-white">{user.age}</span> years
              old. I live at{" "}
              <span className="font-semibold text-white">
                {user.address.address}, {user.address.city},{" "}
                {user.address.state}, {user.address.country}
              </span>
              . My contacts:{" "}
              <span className="font-semibold text-white">{user.phone}</span> and{" "}
              <span className="font-semibold text-white text-[12px]">
                {user.email}
              </span>
              . I studied at{" "}
              <span className="font-semibold text-white">
                {user.university}
              </span>{" "}
              and work at{" "}
              <span className="font-semibold text-white">
                {user.company.name}
              </span>
              .
            </p>
          </div>
        ))}
      </div>
    {loading && <SkeletonUsers />}
    </div>
  )
};

export default Users;
