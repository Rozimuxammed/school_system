import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Teachers from './pages/Teachers';
import Students from './pages/Students';
import Grades from './pages/Grades';
import Homeworks from './pages/Homeworks';
import Schedule from './pages/Schedule';
import Sidebar from './components/layout/Sidebar';
import TeacherSchedule from './pages/teacher/TeacherSchedule';
import StudentSchedule from './pages/student/StudentSchedule';
import TeacherGrades from './pages/teacher/TeacherGrades';
import StudentGrades from './pages/student/StudentGrades';
import TeacherHomeworks from './pages/teacher/TeacherHomeworks';
import StudentHomeworks from './pages/student/StudentHomeworks';
import Header from './components/layout/header';

function App() {
  return (
    <Router>
      <div className="flex bg-background">
        <Sidebar />
        <div className="flex-1 p-4">
          <Header />
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
