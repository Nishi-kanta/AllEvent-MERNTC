import React, { useState } from "react";
import { Menu, X, Home, Settings, User, Phone, HelpCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const getSidebarItems = () => {
    const defaultItems = [
      { icon: <Home size={20} />, text: "Dashboard", path: "/dashboard" },
      { icon: <User size={20} />, text: "Profile", path: "/profile" },
      { icon: <Settings size={20} />, text: "Settings", path: "/settings" },
      { icon: <HelpCircle size={20} />, text: "Help", path: "/help" },
    ];

    const accountSetupItems = [
      { icon: <Phone size={20} />, text: "Contact", path: "/contact" },
    ];

    return currentPath.includes("/contact") ? accountSetupItems : defaultItems;
  };

  const handleNavigation = (path) => {
    navigate(path);
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-20 
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:static lg:block`}
        >
          <div className="lg:pt-5 pt-8 px-4 w-64 flex flex-col h-screen">
            <div className="flex lg:justify-center justify-between lg:pb-5 pb-8">
              <p className="font-bold text-[20px]">Nishikanta</p>
              <button
                onClick={toggleSidebar}
                className="lg:hidden text-gray-600 hover:text-gray-900"
              >
                {isSidebarOpen ? <X size={24} /> : ""}
              </button>
            </div>
            <ul className="space-y-2">
              {getSidebarItems().map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className={`flex items-center w-full p-3 rounded-md cursor-pointer transition-colors
                    ${
                      currentPath === item.path
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.text}
                  </button>
                </li>
              ))}
            </ul>
            <button className="mt-auto p-3 w-full mb-6 text-white bg-gray-500 rounded-md">
              Logout
            </button>
          </div>
        </div>

        {/* Main Content */}
        <main
          className={`transition-all duration-300 flex-grow  ${
            isSidebarOpen ? "blur-sm lg:blur-none" : ""
          }`}
        >
          <nav className="bg-white shadow-md h-16 sticky top-0 flex items-center px-4 gap-4">
            <button
              onClick={toggleSidebar}
              className="lg:hidden text-gray-600 hover:text-gray-900"
            >
              <Menu size={24} />
            </button>
            <div className="flex justify-between flex-grow">
              <h1 className="text-xl font-bold text-gray-800 ml-4">
                {currentPath.includes("/contact")
                  ? "Contact Section"
                  : currentPath.includes("/dashboard") && "DashBoard" || currentPath.includes("/profile") && "Profile" || 
                  currentPath.includes("/setting") && "Setting" || currentPath.includes("/help") && "Help" }
              </h1>
              <button
                className="bg-green-400 lg:p-3 rounded-lg text-white lg:w-auto lg:text-md text-sm p-2"
                onClick={() =>
                  navigate(
                    currentPath.includes("/contact") ? "/dashboard" : "/contact"
                  )
                }
              >
                {currentPath.includes("/contact")
                  ? "Go to Dashboard"
                  : "Go to Contact Section"}
              </button>
            </div>
          </nav>
          <div className="pt-5 w-full flex gap-2 px-4 flex-grow h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="font-bold">Back</div>
            {children}
          </div>
        </main>
      </div>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-0 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
