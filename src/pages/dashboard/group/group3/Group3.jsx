import React from "react";

const students = [
  {
    name: "Muxlisa",
    surname: "Qo'chqarova",
    group: "103C",
    score: 85,
    rating: "B+",
  },
  {
    name: "Sardor",
    surname: "Eshmatov",
    group: "103C",
    score: 91,
    rating: "A",
  },
  {
    name: "Rayhona",
    surname: "G'ulomova",
    group: "103C",
    score: 66,
    rating: "C+",
  },
  {
    name: "Ismoil",
    surname: "Bahromov",
    group: "103C",
    score: 78,
    rating: "B",
  },
  {
    name: "Dilnoza",
    surname: "Murodova",
    group: "103C",
    score: 96,
    rating: "A+",
  },
  {
    name: "Shohrux",
    surname: "Hamidov",
    group: "103C",
    score: 72,
    rating: "B",
  },
  {
    name: "Madina",
    surname: "Raufova",
    group: "103C",
    score: 83,
    rating: "B+",
  },
  {
    name: "Abdulaziz",
    surname: "Yusupov",
    group: "103C",
    score: 60,
    rating: "C",
  },
  {
    name: "Nilufar",
    surname: "Tajiboyeva",
    group: "103C",
    score: 88,
    rating: "A",
  },
  {
    name: "Shodiyor",
    surname: "Kurbanov",
    group: "103C",
    score: 74,
    rating: "B",
  },
];

const Group3 = () => {
  return (
    <div className="p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-4">Student List - Group №3</h2>
      <table className="min-w-full border border-slate-700 text-left overflow-x-auto">
        <thead className="bg-violet-900 text-white">
          <tr>
            <th className="p-2 border border-gray-400">№</th>
            <th className="p-2 border border-gray-400">Name</th>
            <th className="p-2 border border-gray-400">Surname</th>
            <th className="p-2 border border-gray-400">Group</th>
            <th className="p-2 border border-gray-400">Score</th>
            <th className="p-2 border border-gray-400">Rating</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, idx) => (
            <tr
              key={idx}
              className={`${idx % 2 === 0 ? "bg-gray-700" : "bg-gray-600"}`}
            >
              <td className="p-2 border border-gray-400">{idx + 1}</td>
              <td className="p-2 border border-gray-400">{student.name}</td>
              <td className="p-2 border border-gray-400">{student.surname}</td>
              <td className="p-2 border border-gray-400">{student.group}</td>
              <td className="p-2 border border-gray-400">{student.score}</td>
              <td className="p-2 border border-gray-400">{student.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Group3;
