import React from 'react';
import { Users, GraduationCap, ClipboardList, BookOpen } from 'lucide-react';

export default function Dashboard() {
    const stats = [
        { label: 'Total Teachers', value: '24', icon: Users },
        { label: 'Total Students', value: '450', icon: GraduationCap },
        { label: 'Active Courses', value: '12', icon: ClipboardList },
        { label: 'Assignments', value: '48', icon: BookOpen },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <stat.icon className="w-12 h-12 text-blue-500" />
                            <div className="ml-4">
                                <h2 className="text-2xl font-bold text-gray-800">{stat.value}</h2>
                                <p className="text-gray-600">{stat.label}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}