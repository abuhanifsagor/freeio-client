import React, { useContext, useEffect, useState } from "react";
import { NavLink, Outlet, useNavigation, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaTasks,
  FaPlus,
  FaUser,
  FaTimes,
} from "react-icons/fa";
import { RiMenuFold2Line } from "react-icons/ri";
import { AuthContext } from "../../provider/AuthContextProvider";
import logo from "/Logo.png";
import { Link } from "react-router";

const DashboardLayout = () => {
  const navigation = useNavigation();
  const location = useLocation();
  const { user, logout } = useContext(AuthContext);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // always hidden by default
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme
      ? savedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    const theme = isDark ? "dark" : "light";
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDark]);

  useEffect(() => {
    setIsSidebarOpen(false); // close sidebar on route change
  }, [location.pathname]);

  const handleLogout = () => {
    logout().catch((error) => console.error("Logout error:", error));
  };

  return (
    <div className="min-h-screen bg-base-100">
      {/* Top Navbar */}
      <div className="fixed top-0 left-0 right-0 z-30 h-16 bg-[#2A6F57] shadow-md flex items-center justify-between px-4">
        {/* Sidebar Toggle */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className=" text-white cursor-pointer duration-300 p-4 hover:text-gray-200"
        >
          {isSidebarOpen ? (
            <FaTimes size={24} />
          ) : (
            <RiMenuFold2Line size={24} />
          )}
        </button>
        <img src={logo} className="h-8" alt="" />
        {/* Right Controls */}
        <div className="flex items-center  gap-4 ml-auto">
          <label className="swap text-white swap-rotate">
            <input
              type="checkbox"
              checked={isDark}
              onChange={() => setIsDark(!isDark)}
            />
            {/* Sun */}
            <svg
              className="swap-on h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            {/* Moon */}
            <svg
              className="swap-off h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {/* User Avatar */}
          {user?.photoURL && (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt="profile" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-base-200 shadow-md p-4 z-20 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-2xl font-bold mb-6 text-primary">
          Freeio Dashboard
        </h2>
        <nav className="space-y-2">
          <NavLink
            to="/dashboard"
            className="flex items-center gap-2 p-3 rounded-md hover:bg-primary hover:text-white duration-300"
          >
            <FaTachometerAlt /> Overview
          </NavLink>
          <NavLink
            to="/dashboard/all-tasks"
            className={({ isActive }) =>
              `flex items-center gap-2 p-3 rounded-md hover:bg-primary hover:text-white duration-300 ${
                isActive ? "bg-primary text-white" : ""
              }`
            }
          >
            <FaTasks /> All Tasks
          </NavLink>
          <NavLink
            to="/dashboard/my-posted-task"
            className={({ isActive }) =>
              `flex items-center gap-2 p-3 rounded-md hover:bg-primary hover:text-white duration-300 ${
                isActive ? "bg-primary text-white" : ""
              }`
            }
          >
            <FaUser /> My Posted Task
          </NavLink>
          <NavLink
            to="/dashboard/add-task"
            className={({ isActive }) =>
              `flex items-center gap-2 p-3 rounded-md hover:bg-primary hover:text-white duration-300 ${
                isActive ? "bg-primary text-white" : ""
              }`
            }
          >
            <FaPlus /> Add Task
          </NavLink>
          <NavLink
            to="/dashboard/my-profile"
            className={({ isActive }) =>
              `flex items-center gap-2 p-3 rounded-md hover:bg-primary hover:text-white duration-300 ${
                isActive ? "bg-primary text-white" : ""
              }`
            }
          >
            <FaUser /> My Profile
          </NavLink>

          <div className="absolute flex justify-center w-55 items-center bottom-5">
            <Link to="/">
              <a
                href="#_"
                className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-green-800 transition duration-300 ease-out border-2 border-green-800 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white rotate-180 duration-300 -translate-x-full bg-green-800 group-hover:translate-x-0 ease">
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
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-green-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Go Home
                </span>
                <span className="relative invisible">Go Home</span>
              </a>
            </Link>
          </div>
        </nav>
      </aside>

      {/* Page Content */}
      <main className=" p-4">
        {navigation.state === "loading" ? (
          <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-dots loading-xl text-primary"></span>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  );
};

export default DashboardLayout;
