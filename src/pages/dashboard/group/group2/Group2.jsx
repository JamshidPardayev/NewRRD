import React from "react";

const students = [
  {
    name: "Ulug'bek",
    surname: "Rashidov",
    group: "102B",
    score: 90,
    rating: "A",
  },
  {
    name: "Sabina",
    surname: "Olimova",
    group: "102B",
    score: 65,
    rating: "C+",
  },
  {
    name: "Mironshoh",
    surname: "Ergashev",
    group: "102B",
    score: 79,
        rating: "B+",
  },
  {
    name: "Nargiza",
    surname: "Shukurova",
    group: "102B",
    score: 99,
    rating: "A+",
  },
  {
    name: "Rustam",
    surname: "Jalolov",
    group: "102B",
    score: 82,
    rating: "B+",
  },
  {
    name: "Dilrabo",
    surname: "Hasanova",
    group: "102B",
    score: 70,
    rating: "B",
  },
  { name: "Jasur", surname: "Qudratov", group: "102B", score: 58, rating: "C" },
  {
    name: "Zarnigor",
    surname: "Akbarova",
    group: "102B",
    score: 93,
    rating: "A",
  },
  { name: "Aziz", surname: "Mansurov", group: "102B", score: 87, rating: "B+" },
  {
    name: "Shoira",
    surname: "Nurmatova",
    group: "102B",
    score: 75,
    rating: "B",
  },
];

const Group2 = () => {
  return (
    <div className="p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-4">Student List - Group №2</h2>
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

export default Group2;
