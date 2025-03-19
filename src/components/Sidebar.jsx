import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  ClipboardList,
  BookOpen,
  LogOut
} from 'lucide-react';

function Sidebar() {
  const menuItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/teachers', icon: Users, label: 'Teachers' },
    { path: '/students', icon: GraduationCap, label: 'Students' },
    { path: '/grades', icon: ClipboardList, label: 'Grades' },
    { path: '/homeworks', icon: BookOpen, label: 'Homeworks' },
  ];

  return (
    <div className="w-64 bg-white shadow-lg h-full">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">School App</h1>
      </div>
      <nav className="mt-6">
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
        <button
          onClick={() => {/* Add logout logic */}}
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors w-full mt-auto"
        >
          <LogOut className="w-5 h-5 mr-3" />
          <span>Logout</span>
        </button>
      </nav>
    </div>
  );
}

export default Sidebar