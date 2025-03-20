import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Teachers from './pages/Teachers';
import Students from './pages/Students';
import TeacherGrades from './pages/TeacherGrades';
import StudentGrades from './pages/StudentGrades';
import Homeworks from './pages/Homeworks';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <Router>
            <div className="flex">
                <Sidebar />
                <div className="flex-1 p-10">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/teachers" element={<Teachers />} />
                        <Route path="/students" element={<Students />} />
                        <Route path="/teacher-grades" element={<TeacherGrades />} />
                        <Route path="/student-grades" element={<StudentGrades />} />
                        <Route path="/homeworks" element={<Homeworks />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
