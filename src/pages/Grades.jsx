import React from 'react';

export default function Grades() {
  const grades = [
    { id: 1, student: 'Alice Wilson', subject: 'Mathematics', grade: 'A', date: '2024-03-15' },
    { id: 2, student: 'Bob Anderson', subject: 'English', grade: 'B+', date: '2024-03-14' },
    { id: 3, student: 'Carol Taylor', subject: 'Science', grade: 'A-', date: '2024-03-13' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Grades</h1>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {grades.map((grade) => (
              <tr key={grade.id}>
                <td className="px-6 py-4 whitespace-nowrap">{grade.student}</td>
                <td className="px-6 py-4 whitespace-nowrap">{grade.subject}</td>
                <td className="px-6 py-4 whitespace-nowrap">{grade.grade}</td>
                <td className="px-6 py-4 whitespace-nowrap">{grade.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
                  <button className="text-red-500 hover:text-red-700">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}