import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthContextProvider";
import {
  FaTasks,
  FaUserTie,
  FaEnvelope,
  FaCheckCircle,
  FaClock,
  FaStar,
} from "react-icons/fa";

const DashboardOverview = () => {
  const allTasks = useLoaderData();
  const { user } = useContext(AuthContext);
  const myTasks = allTasks.filter((task) => task.email === user.email);

  return (
    <div className="mt-20 space-y-10">
      {/* Welcome */}
      <div>
        <h2 className="text-3xl font-bold mb-2">
          👋 Welcome back, {user.displayName}!
        </h2>
        <p className="text-gray-500">
          Here’s a quick snapshot of your dashboard activity.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-base-200 rounded-xl shadow p-6 border-l-4 border-primary flex items-center gap-4">
          <FaTasks className="text-3xl text-primary" />
          <div>
            <h3 className="text-sm text-gray-500">Total Tasks</h3>
            <p className="text-3xl font-bold">{allTasks.length}</p>
          </div>
        </div>

        <div className="bg-base-200 rounded-xl shadow p-6 border-l-4 border-secondary flex items-center gap-4">
          <FaUserTie className="text-3xl text-secondary" />
          <div>
            <h3 className="text-sm text-gray-500">My Posted Tasks</h3>
            <p className="text-3xl font-bold">{myTasks.length}</p>
          </div>
        </div>

        <div className="bg-base-200 rounded-xl shadow p-6 border-l-4 border-green-500 flex items-center gap-4">
          <FaEnvelope className="text-3xl text-green-500" />
          <div>
            <h3 className="text-sm text-gray-500">User Email</h3>
            <p className="text-md font-medium">{user.email}</p>
          </div>
        </div>
      </div>

      {/* Demo Section: Account Status */}
      <div className="bg-base-200 rounded-xl shadow p-6 border-l-4 border-blue-400">
        <div className="flex items-center gap-4">
          <FaCheckCircle className="text-3xl text-blue-400" />
          <div>
            <h3 className="text-md font-semibold">Account Status</h3>
            <p className="text-sm text-gray-500">✅ Verified and Active</p>
          </div>
        </div>
      </div>

      {/* Demo Section: Recent Activity */}
      <div className="bg-base-200 rounded-xl shadow p-6 border-l-4 border-yellow-500">
        <div className="flex items-start gap-4">
          <FaClock className="text-3xl text-yellow-500 mt-1" />
          <div>
            <h3 className="text-md font-semibold">Recent Activity</h3>
            <ul className="text-sm text-gray-600 list-disc ml-5 mt-2 space-y-1">
              <li>Viewed 3 new tasks</li>
              <li>Posted a task on Web Design</li>
              <li>Updated profile information</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Demo Section: Motivational Card */}
      <div className="bg-base-200 rounded-xl shadow p-6 border-l-4 border-purple-500 flex items-center gap-4">
        <FaStar className="text-3xl text-purple-500" />
        <div>
          <h3 className="text-md font-semibold">Keep it up!</h3>
          <p className="text-sm text-gray-600">
            You're doing great. Stay consistent and reach your goals 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
