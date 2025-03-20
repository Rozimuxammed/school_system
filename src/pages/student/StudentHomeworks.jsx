import React from 'react';

const studentHomeworks = [
    { subject: 'Math', description: 'Solve 10 algebra problems', dueDate: '2025-03-25' },
    { subject: 'Biology', description: 'Write a report on DNA', dueDate: '2025-03-26' },
];

function StudentHomeworks() {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">My Homeworks</h2>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">Subject</th>
                        <th className="border p-2">Description</th>
                        <th className="border p-2">Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {studentHomeworks.map((hw, index) => (
                        <tr key={index}>
                            <td className="border p-2">{hw.subject}</td>
                            <td className="border p-2">{hw.description}</td>
                            <td className="border p-2">{hw.dueDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StudentHomeworks;
