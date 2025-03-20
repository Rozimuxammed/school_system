import React from 'react';

const teacherScheduleData = [
    { day: 'Monday', subject: 'Math', time: '09:00 - 10:30', class: 'Grade 10' },
    { day: 'Tuesday', subject: 'Physics', time: '11:00 - 12:30', class: 'Grade 11' },
    { day: 'Wednesday', subject: 'Chemistry', time: '14:00 - 15:30', class: 'Grade 9' },
    { day: 'Thursday', subject: 'Biology', time: '10:00 - 11:30', class: 'Grade 10' },
    { day: 'Friday', subject: 'English', time: '13:00 - 14:30', class: 'Grade 8' },
];

function TeacherSchedule() {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Teacher Schedule</h2>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2">Day</th>
                        <th className="border border-gray-300 p-2">Subject</th>
                        <th className="border border-gray-300 p-2">Time</th>
                        <th className="border border-gray-300 p-2">Class</th>
                    </tr>
                </thead>
                <tbody>
                    {teacherScheduleData.map((item, index) => (
                        <tr key={index} className="text-center">
                            <td className="border border-gray-300 p-2">{item.day}</td>
                            <td className="border border-gray-300 p-2">{item.subject}</td>
                            <td className="border border-gray-300 p-2">{item.time}</td>
                            <td className="border border-gray-300 p-2">{item.class}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TeacherSchedule;
