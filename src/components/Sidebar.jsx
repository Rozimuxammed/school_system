import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  ClipboardList,
  BookOpen,
  LogOut,
  Calendar,
  ChevronDown
} from 'lucide-react';

function Sidebar() {
  const [isGradesOpen, setIsGradesOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isHomeworksOpen, setIsHomeworksOpen] = useState(false);

  return (
    <div className="w-64 bg-white shadow-lg h-full flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">School App</h1>
      </div>
      <nav className="mt-6 flex-grow">
        <NavLink to="/" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors">
          <LayoutDashboard className="w-5 h-5 mr-3" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/teachers" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors">
          <Users className="w-5 h-5 mr-3" />
          <span>Teachers</span>
        </NavLink>
        <NavLink to="/students" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors">
          <GraduationCap className="w-5 h-5 mr-3" />
          <span>Students</span>
        </NavLink>

        {/* Grades dropdown */}
        <button
          onClick={() => setIsGradesOpen(!isGradesOpen)}
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors w-full"
        >
          <ClipboardList className="w-5 h-5 mr-3" />
          <span>Grades</span>
          <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${isGradesOpen ? 'rotate-180' : ''}`} />
        </button>
        {isGradesOpen && (
          <div className="ml-6">
            <NavLink to="/teacher-grades" className="block px-6 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              Teacher Grades
            </NavLink>
            <NavLink to="/student-grades" className="block px-6 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              Student Grades
            </NavLink>
          </div>
        )}

        {/* Schedule dropdown */}
        <button
          onClick={() => setIsScheduleOpen(!isScheduleOpen)}
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors w-full"
        >
          <Calendar className="w-5 h-5 mr-3" />
          <span>Schedule</span>
          <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${isScheduleOpen ? 'rotate-180' : ''}`} />
        </button>
        {isScheduleOpen && (
          <div className="ml-6">
            <NavLink to="/teacher-schedule" className="block px-6 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              Teacher Schedule
            </NavLink>
            <NavLink to="/student-schedule" className="block px-6 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              Student Schedule
            </NavLink>
          </div>
        )}

        {/* Homeworks dropdown */}
        <button
          onClick={() => setIsHomeworksOpen(!isHomeworksOpen)}
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors w-full"
        >
          <BookOpen className="w-5 h-5 mr-3" />
          <span>Homeworks</span>
          <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${isHomeworksOpen ? 'rotate-180' : ''}`} />
        </button>
        {isHomeworksOpen && (
          <div className="ml-6">
            <NavLink to="/teacher-homeworks" className="block px-6 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              Teacher Homeworks
            </NavLink>
            <NavLink to="/student-homeworks" className="block px-6 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              Student Homeworks
            </NavLink>
          </div>
        )}
      </nav>

      <button className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors w-full">
        <LogOut className="w-5 h-5 mr-3" />
        <span>Logout</span>
      </button>
    </div>
  );
}

export default Sidebar;
