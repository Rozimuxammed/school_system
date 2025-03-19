import React from 'react';

export default function Teachers() {
    const teachers = [
        { id: 1, name: 'John Smith', subject: 'Mathematics', email: 'john@school.com' },
        { id: 2, name: 'Sarah Johnson', subject: 'English', email: 'sarah@school.com' },
        { id: 3, name: 'Michael Brown', subject: 'Science', email: 'michael@school.com' },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Teachers</h1>
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {teachers.map((teacher) => (
                            <tr key={teacher.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{teacher.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{teacher.subject}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{teacher.email}</td>
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