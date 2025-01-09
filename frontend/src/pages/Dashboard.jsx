import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { TaskList } from "../components/TaskList";
import axios from "axios";

export const Dashboard = (props) => {
  const [tasks, setTasks] = useState([]);
  const token = window.localStorage.getItem("token");
  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await axios.get("https://taskflow-ez1n.onrender.com/getTaskById", {
          headers: {
            Authorization: token,
          },
        });
        console.log(response.data.tasks)
        setTasks(response.data.tasks)
      } catch (error) {
        console.log(error);
      }
    };
    if (props.token === null) {
      window.location.href = "/login";
    }
    getTasks();
  }, [tasks]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            All Tasks
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            View and manage all tasks in your workspace
          </p>
        </div>
          <TaskList tasks={tasks} />
      </main>
    </div>
  );
};
