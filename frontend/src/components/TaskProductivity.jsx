import React from "react";

export const TeamProductivity = ({ tasks, users }) => {
  const userProductivity = users.map((user) => {
    const userTasks = tasks.filter((task) => task.assignedTo === user._id);
    const completed = userTasks.filter(
      (task) => task.status === "COMPLETED",
    ).length;

    return {
      user,
      total: userTasks.length,
      completed,
      productivity:
        userTasks.length > 0
          ? Math.round((completed / userTasks.length) * 100)
          : 0,
    };
  });

  return (
    <div className="space-y-4">
      {userProductivity.map(({ user, total, completed, productivity }) => (
        <div key={user._id} className="space-y-2">
          <div className="flex items-center gap-2">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-6 h-6 rounded-full"
            />
            <span className="text-sm text-gray-900 dark:text-white">
              {user.name}
            </span>
          </div>
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>
              {completed} of {total} tasks completed
            </span>
            <span>{productivity}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-indigo-500 h-2 rounded-full"
              style={{ width: `${productivity}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
