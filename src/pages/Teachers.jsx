import { Table } from '../components/UI/table';

export default function Teachers() {
    const teachers = [
        { id: 1, name: 'John Smith', subject: 'Mathematics', email: 'john@school.com' },
        { id: 2, name: 'Sarah Johnson', subject: 'English', email: 'sarah@school.com' },
        { id: 3, name: 'Michael Brown', subject: 'Science', email: 'michael@school.com' },
    ];

    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Teachers</h2>
            <div className="bg-white rounded-2xl shadow overflow-hidden px-6 py-7">
                <h3 className='font-semibold text-xl text-foreground mb-5'>Fees Collection Table</h3>
                <Table data={teachers} />
            </div>
        </div>
    );
}