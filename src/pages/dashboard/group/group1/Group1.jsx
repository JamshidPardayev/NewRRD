import React from "react";

const students = [
  { name: "Ali", surname: "Karimov", group: "101A", score: 95, rating: "A+" },
  { name: "Laylo", surname: "Islomova", group: "101A", score: 89, rating: "A" },
  { name: "Bekzod", surname: "Rasulov", group: "101A", score: 76, rating: "B+" },
  { name: "Diyora", surname: "Abdurahmonova", group: "101A", score: 68, rating: "C+" },
  { name: "Javohir", surname: "Sattorov", group: "101A", score: 92, rating: "A" },
  { name: "Malika", surname: "Tursunova", group: "101A", score: 84, rating: "B+" },
  { name: "Shahzod", surname: "Nazarov", group: "101A", score: 61, rating: "C" },
  { name: "Kamola", surname: "Yo'ldosheva", group: "101A", score: 97, rating: "A+" },
  { name: "Farruh", surname: "Soliev", group: "101A", score: 73, rating: "B" },
  { name: "Ziyoda", surname: "Toirova", group: "101A", score: 88, rating: "A" },
];

const Group1 = () => {
  return (
    <div className="p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-4">Student List - Group №1</h2>
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

export default Group1;
