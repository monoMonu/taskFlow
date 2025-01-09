import React from "react";

export const TaskStatusChart = ({ tasks }) => {
  const statusCount = tasks.reduce((acc, task) => {
    acc[task.status] = (acc[task.status] || 0) + 1;
    return acc;
  }, {});

  const total = tasks.length;

  return (
    <div className="space-y-4">
      {Object.entries(statusCount).map(([status, count]) => {
        const percentage = Math.round((count / total) * 100);
        const getStatusColor = (status) => {
          switch (status) {
            case "TODO":
              return "bg-yellow-500";
            case "IN_PROGRESS":
              return "bg-blue-500";
            case "COMPLETED":
              return "bg-green-500";
            default:
              return "bg-gray-500";
          }
        };

        return (
          <div key={status} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">
                {status.replace("_", " ")}
              </span>
              <span className="text-gray-900 dark:text-white font-medium">
                {percentage}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className={`${getStatusColor(status)} h-2 rounded-full`}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
