import React from 'react';

const teacherGradesData = [
    { grade: 'Grade 10', subjects: ['Math', 'Biology'] },
    { grade: 'Grade 11', subjects: ['Physics', 'Chemistry'] },
    { grade: 'Grade 9', subjects: ['English', 'History'] },
];

function TeacherGrades() {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">My Grades</h2>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2">Grade</th>
                        <th className="border border-gray-300 p-2">Subjects</th>
                    </tr>
                </thead>
                <tbody>
                    {teacherGradesData.map((item, index) => (
                        <tr key={index} className="text-center">
                            <td className="border border-gray-300 p-2">{item.grade}</td>
                            <td className="border border-gray-300 p-2">{item.subjects.join(', ')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TeacherGrades;
