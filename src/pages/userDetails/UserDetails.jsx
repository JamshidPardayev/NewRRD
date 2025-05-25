import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .get(`/users/${id}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
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
    <div className="max-w-[1200px] mx-auto px-4 py-10 flex gap-6 justify-center max-sm:flex-col">
      <div className="w-[50%] max-sm:w-[100%]">
        <img
          src={user?.image}
          alt="userImg"
          className="w-full max-h-[450px] object-cover rounded-lg"
        />
      </div>
      <div className="w-[50%] max-sm:w-[100%] space-y-4">
        <h1 className="text-2xl font-bold">
          {user?.firstName} {user?.lastName} {user?.maidenName}
        </h1>
        <p className="text-lg text-gray-500">
          {user?.birthDate}, {user?.age} years
        </p>
        <p className="text-md text-gray-400">
          <span className="text-white font-semibold text-[16px]">
            Username:
          </span>{" "}
          {user?.username}
        </p>
        <p className="text-md text-gray-400">
          <span className="text-white font-semibold text-[16px]">Phone:</span>{" "}
          {user?.phone}
        </p>
        <p className="text-lg text-gray-500">{user?.email}</p>
        <p className="text-md text-gray-400">
          <span className="text-white font-semibold text-[16px]">Address:</span>{" "}
          {user?.address?.address}, {user?.address?.city},{" "}
          {user?.address?.country}{" "}
        </p>
        <div>
          <span className="text-white font-semibold text-[18px]">Company:</span>{" "}
          <p className="text-md text-gray-400">
            <span className="text-white font-semibold text-[16px]">
              Address:
            </span>{" "}
            {user?.company?.address?.address}, {user?.company?.address?.city},{" "}
            {user?.company?.address?.state}{" "}
          </p>
          <p className="text-md text-gray-400">
            <span className="text-white font-semibold text-[16px]">
              Department:
            </span>{" "}
            {user?.company?.department}
          </p>
          <p className="text-md text-gray-400">
            <span className="text-white font-semibold text-[16px]">Name:</span>{" "}
            {user?.company?.name}
          </p>
          <p className="text-md text-gray-400">
            <span className="text-white font-semibold text-[16px]">Job:</span>{" "}
            {user?.company?.title}
          </p>
        </div>
        <p className="text-md text-gray-400">
          <span className="text-white font-semibold text-[16px]">
            University:
          </span>{" "}
          {user?.university}
        </p>

        <p className="text-md text-gray-400"><span className="text-white font-semibold text-[16px]">Gender:</span> {user?.gender}</p>
      </div>
    </div>
  );
};

export default UserDetails;
