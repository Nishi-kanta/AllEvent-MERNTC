import React, { useState } from "react";

const DashBoardNavSide = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:relative lg:z-0
      `}
      >
        <div className="p-5">
          <h2 className="text-2xl font-bold mb-6">Sidebar</h2>
          <nav>
            <ul className="space-y-2">
              <li className="p-2 rounded hover:bg-gray-700">
                <a href="#" className="flex items-center">
                  <span className="mr-2">🏠</span>
                  <span>Home</span>
                </a>
              </li>
              <li className="p-2 rounded hover:bg-gray-700">
                <a href="#" className="flex items-center">
                  <span className="mr-2">📊</span>
                  <span>Dashboard</span>
                </a>
              </li>
              <li className="p-2 rounded hover:bg-gray-700">
                <a href="#" className="flex items-center">
                  <span className="mr-2">📝</span>
                  <span>Projects</span>
                </a>
              </li>
              <li className="p-2 rounded hover:bg-gray-700">
                <a href="#" className="flex items-center">
                  <span className="mr-2">👥</span>
                  <span>Team</span>
                </a>
              </li>
              <li className="p-2 rounded hover:bg-gray-700">
                <a href="#" className="flex items-center">
                  <span className="mr-2">⚙️</span>
                  <span>Settings</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main content area with navbar */}
      <div className="flex flex-col flex-1 lg:ml-0">
        {/* Navbar */}
        <header className="bg-white shadow-md z-10">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              {/* Hamburger menu button for mobile */}
              <button
                className="p-2 rounded-md lg:hidden focus:outline-none"
                onClick={toggleSidebar}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
              <h1 className="text-xl font-bold ml-2">My Application</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  ></path>
                </svg>
              </button>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Welcome to Your Dashboard
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold mb-2">Quick Overview</h3>
              <p className="text-gray-600">
                This is your main content area. The sidebar will hide on mobile
                screens and can be toggled using the hamburger menu in the
                navbar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
                <p className="text-gray-600">
                  Here's where you can display recent user activity or
                  notifications.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-2">Statistics</h3>
                <p className="text-gray-600">
                  Display important metrics and statistics here.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashBoardNavSide;