import React from "react";

const students = [
  { name: "Jamshid", surname: "Pardayev", score: 100, rating: "A+" },
  { name: "Nargiza", surname: "Mamajonova", score: 99, rating: "A+" },
  { name: "Timur", surname: "Qodirov", score: 94, rating: "A" },
  { name: "Doston", surname: "Mahmudov", score: 91, rating: "A" },
  { name: "Nilufar", surname: "Jalolova", score: 87, rating: "B+" },
  { name: "Sardor", surname: "Aliyev", score: 83, rating: "B" },
  { name: "Shaxzoda", surname: "Kenjayeva", score: 78, rating: "B" },
  { name: "Javohir", surname: "Qayumov", score: 72, rating: "C+" },
  { name: "Aziza", surname: "Ergasheva", score: 67, rating: "C" },
  { name: "Komil", surname: "Nasrullayev", score: 62, rating: "C" },
  { name: "Guli", surname: "Mirzayeva", score: 58, rating: "D" },
];

const Statistics = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Student Ratings</h2>
      <table className="w-full  border-collapse border border-gray-300">
        <thead>
          <tr className="bg-violet-800">
            <th className="border border-gray-300 p-2 text-left">№</th>
            <th className="border border-gray-300 p-2 text-left">Ism</th>
            <th className="border border-gray-300 p-2 text-left">Familiya</th>
            <th className="border border-gray-300 p-2 text-left">Ball</th>
            <th className="border border-gray-300 p-2 text-left">Reyting</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, idx) => (
            <tr key={idx} className="even:bg-gray-700">
              <td className="border border-gray-300 p-2">{idx + 1}</td>
              <td className="border border-gray-300 p-2">{student.name}</td>
              <td className="border border-gray-300 p-2">{student.surname}</td>
              <td className="border border-gray-300 p-2">{student.score}</td>
              <td className="border border-gray-300 p-2">{student.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
