import React from "react";
import { TaskCard } from "./TaskCard";

export const TaskList= ({tasks }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          title={task.title}
          description={task.description}
          status={task.status}
          assignedTo={task.assignedTo}
          comments={task.comments}
          id={task._id}
        />
      ))}
    </div>
  );
};
