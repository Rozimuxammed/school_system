import React from 'react';

export default function Students() {
    const students = [
        { id: 1, name: 'Alice Wilson', grade: '10th', email: 'alice@school.com' },
        { id: 2, name: 'Bob Anderson', grade: '11th', email: 'bob@school.com' },
        { id: 3, name: 'Carol Taylor', grade: '9th', email: 'carol@school.com' },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Students</h1>
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{student.grade}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{student.email}</td>
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