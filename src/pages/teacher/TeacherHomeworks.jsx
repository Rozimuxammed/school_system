import React, { useState } from 'react';

const initialHomeworks = [
    { id: 1, subject: 'Math', description: 'Solve 10 algebra problems', dueDate: '2025-03-25' },
    { id: 2, subject: 'Biology', description: 'Write a report on DNA', dueDate: '2025-03-26' },
];

function TeacherHomeworks() {
    const [homeworks, setHomeworks] = useState(initialHomeworks);
    const [newHomework, setNewHomework] = useState({ subject: '', description: '', dueDate: '' });

    const handleAddHomework = () => {
        if (!newHomework.subject || !newHomework.description || !newHomework.dueDate) return;

        setHomeworks([...homeworks, { ...newHomework, id: Date.now() }]);
        setNewHomework({ subject: '', description: '', dueDate: '' });
    };

    const handleDelete = (id) => {
        setHomeworks(homeworks.filter(hw => hw.id !== id));
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Teacher Homeworks</h2>
            <div className="mb-4">
                <input
                    type="text" placeholder="Subject" value={newHomework.subject}
                    onChange={(e) => setNewHomework({ ...newHomework, subject: e.target.value })}
                    className="border p-2 mr-2"
                />
                <input
                    type="text" placeholder="Description" value={newHomework.description}
                    onChange={(e) => setNewHomework({ ...newHomework, description: e.target.value })}
                    className="border p-2 mr-2"
                />
                <input
                    type="date" value={newHomework.dueDate}
                    onChange={(e) => setNewHomework({ ...newHomework, dueDate: e.target.value })}
                    className="border p-2 mr-2"
                />
                <button onClick={handleAddHomework} className="bg-blue-500 text-white p-2">Add</button>
            </div>

            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">Subject</th>
                        <th className="border p-2">Description</th>
                        <th className="border p-2">Due Date</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {homeworks.map(hw => (
                        <tr key={hw.id}>
                            <td className="border p-2">{hw.subject}</td>
                            <td className="border p-2">{hw.description}</td>
                            <td className="border p-2">{hw.dueDate}</td>
                            <td className="border p-2">
                                <button onClick={() => handleDelete(hw.id)} className="bg-red-500 text-white p-1">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TeacherHomeworks;
