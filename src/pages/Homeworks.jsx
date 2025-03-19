import React from 'react';

export default function Homeworks() {
    const homeworks = [
        { id: 1, subject: 'Mathematics', title: 'Quadratic Equations', dueDate: '2024-03-20', status: 'Active' },
        { id: 2, subject: 'English', title: 'Essay Writing', dueDate: '2024-03-22', status: 'Active' },
        { id: 3, subject: 'Science', title: 'Lab Report', dueDate: '2024-03-18', status: 'Completed' },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Homeworks</h1>
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {homeworks.map((homework) => (
                            <tr key={homework.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{homework.subject}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{homework.title}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{homework.dueDate}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 py-1 rounded-full text-xs ${homework.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                        }`}>
                                        {homework.status}
                                    </span>
                                </td>
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