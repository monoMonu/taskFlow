import React from "react";
import { Calendar, MessageSquare, User } from "lucide-react";
import axios from "axios";

const getStatusColor = (status) => {
  switch (status) {
    case "Pending":
      return "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100";
    case "In Progress":
      return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100";
    case "Completed":
      return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100";
  }
};

export const TaskCard = ({
  title,
  description,
  status,
  assignedTo,
  comments,
  id,
}) => {
  const token = window.localStorage.getItem("token");
  const statusColor = getStatusColor(status);
  const updateProgress = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/updateProgress",
        { id },
        {
          headers: {
            Authorization: token,
          },
        },
      );
      // window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>
        <button onClick={() => updateProgress(id)}>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor}`}
          >
            {status.replace("_", " ")}
          </span>
        </button>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
        {description}
      </p>

      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
        </div>

        <div className="flex items-center gap-1">
          <MessageSquare className="w-4 h-4" />
          <span>{comments.length}</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
        <div className="flex items-center gap-2"></div>
      </div>
    </div>
  );
};
