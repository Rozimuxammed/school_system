import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Teachers from './pages/Teachers';
import Students from './pages/Students';
import Grades from './pages/Grades';
import Homeworks from './pages/Homeworks';
import Schedule from './pages/Schedule';
import Sidebar from './components/Sidebar';
import TeacherSchedule from './pages/TeacherSchedule';
import StudentSchedule from './pages/StudentSchedule';
import TeacherGrades from './pages/TeacherGrades';
import StudentGrades from './pages/StudentGrades';
import TeacherHomeworks from './pages/TeacherHomeworks';
import StudentHomeworks from './pages/StudentHomeworks';

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
            <Route path="/grades" element={<Grades />} />
            <Route path="/homeworks" element={<Homeworks />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/teacher-schedule" element={<TeacherSchedule />} />
            <Route path="/student-schedule" element={<StudentSchedule />} />
            <Route path="/teacher-grades" element={<TeacherGrades />} />
            <Route path="/student-grades" element={<StudentGrades />} />
            <Route path="/teacher-homeworks" element={<TeacherHomeworks />} />
            <Route path="/student-homeworks" element={<StudentHomeworks />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
