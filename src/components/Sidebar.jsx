import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  ClipboardList,
  BookOpen,
  LogOut,
  ChevronDown
} from 'lucide-react';

function Sidebar() {
  const [isGradesOpen, setIsGradesOpen] = useState(false);

  const menuItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/teachers', icon: Users, label: 'Teachers' },
    { path: '/students', icon: GraduationCap, label: 'Students' },
    { path: '/homeworks', icon: BookOpen, label: 'Homeworks' },
  ];

  return (
    <div className="w-64 bg-white shadow-lg h-full flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">School App</h1>
      </div>
      <nav className="mt-6 flex-grow">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors ${
                isActive ? 'bg-gray-100 border-r-4 border-blue-500' : ''
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.label}</span>
          </NavLink>
        ))}

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
            <NavLink
              to="/teacher-grades"
              className={({ isActive }) =>
                `block px-6 py-2 text-gray-700 hover:bg-gray-100 transition-colors ${
                  isActive ? 'bg-gray-100 border-r-4 border-blue-500' : ''
                }`
              }
            >
              Teacher Grades
            </NavLink>
            <NavLink
              to="/student-grades"
              className={({ isActive }) =>
                `block px-6 py-2 text-gray-700 hover:bg-gray-100 transition-colors ${
                  isActive ? 'bg-gray-100 border-r-4 border-blue-500' : ''
                }`
              }
            >
              Student Grades
            </NavLink>
          </div>
        )}
      </nav>

      <button
        onClick={() => {/* Add logout logic */}}
        className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors w-full"
      >
        <LogOut className="w-5 h-5 mr-3" />
        <span>Logout</span>
      </button>
    </div>
  );
}

export default Sidebar;
