import { Users, GraduationCap, ClipboardList, BookOpen } from 'lucide-react';

export default function Dashboard() {
    const stats = [
        { label: 'Total Teachers', value: '24', icon: Users },
        { label: 'Total Students', value: '450', icon: GraduationCap },
        { label: 'Active Courses', value: '12', icon: ClipboardList },
        { label: 'Assignments', value: '48', icon: BookOpen },
    ];

    return (
        <>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
            <div className="flex flex-wrap gap-[5%]">
                {stats.map((stat) => (
                    <div key={stat.label} className="odd:bg-secondary even:bg-primary rounded-3xl shadow px-5 py-4 pr-[72px]">
                        <div className="flex items-center">
                            {/* <stat.icon className="w-12 h-12 text-foreground" /> */}
                            <div className="ml-4">
                                <div className="text-foreground text-xl font-normal mb-3">{stat.label}</div>
                                <h2 className="text-4xl font-semibold text-foreground">{stat.value}</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}