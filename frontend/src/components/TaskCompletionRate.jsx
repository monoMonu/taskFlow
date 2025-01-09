import React from "react";
import { CheckCircle, Clock, AlertCircle } from "lucide-react";

export const TaskCompletionRate = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.status === "Completed").length;
  const inProgress = tasks.filter(
    (task) => task.status === "In_Progress",
  ).length;
  const overdue = tasks.filter((task) => {
    const dueDate = new Date(task.dueDate);
    return dueDate < new Date() && task.status !== "COMPLETED";
  }).length;

  const stats = [
    {
      label: "Completed Tasks",
      value: completed,
      icon: CheckCircle,
      color: "text-green-500",
    },
    {
      label: "In Progress",
      value: inProgress,
      icon: Clock,
      color: "text-blue-500",
    },
    {
      label: "Overdue Tasks",
      value: overdue,
      icon: AlertCircle,
      color: "text-red-500",
    },
  ];

  return (
    <div className="space-y-6">
      {stats.map(({ label, value, icon: Icon, color }) => (
        <div key={label} className="flex items-center gap-4">
          <Icon className={`w-8 h-8 ${color}`} />
          <div>
            <div className="text-2xl font-semibold text-gray-900 dark:text-white">
              {value}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
