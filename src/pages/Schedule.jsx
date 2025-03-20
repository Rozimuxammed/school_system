import React from "react";

const Schedule = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Class Schedule</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Day</th>
            <th className="border p-2">Time</th>
            <th className="border p-2">Subject</th>
            <th className="border p-2">Teacher</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Monday</td>
            <td className="border p-2">08:00 - 09:30</td>
            <td className="border p-2">Mathematics</td>
            <td className="border p-2">Mr. Johnson</td>
          </tr>
          <tr>
            <td className="border p-2">Tuesday</td>
            <td className="border p-2">09:30 - 11:00</td>
            <td className="border p-2">Physics</td>
            <td className="border p-2">Ms. Smith</td>
          </tr>
          <tr>
            <td className="border p-2">Wednesday</td>
            <td className="border p-2">10:00 - 11:30</td>
            <td className="border p-2">History</td>
            <td className="border p-2">Mr. Brown</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
