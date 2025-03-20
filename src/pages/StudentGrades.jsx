import React from 'react';

const studentGradeData = {
    grade: 'Grade 10',
    subjects: ['Math', 'Biology', 'English', 'History'],
};

function StudentGrades() {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">My Grade</h2>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2">Grade</th>
                        <th className="border border-gray-300 p-2">Subjects</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center">
                        <td className="border border-gray-300 p-2">{studentGradeData.grade}</td>
                        <td className="border border-gray-300 p-2">{studentGradeData.subjects.join(', ')}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default StudentGrades;
