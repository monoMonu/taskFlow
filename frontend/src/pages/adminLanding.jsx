import React, { useEffect, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Plus } from "lucide-react";
import { Header } from "../components/Header";
import { TaskList } from "../components/TaskList";
import { MemberList } from "../components/MemberList";
import axios from "axios";
import { TaskStatusChart } from "../components/TaskStatusChart";
import { TeamProductivity } from "../components/TaskProductivity";
import { TaskCompletionRate } from "../components/TaskCompletionRate";


export const AdminDashboard = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tasks, setTasks] = useState([]);
  const [members, setMembers] = useState([]);
  const token = window.localStorage.getItem("token");

  const createMember = async () => {
    const response = await axios.post(
      "https://taskflow-ez1n.onrender.com/createMember",
      { name, email },
      {
        headers: { Authorization: token },
      },
    );
    // window.location.reload();
  };

  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await axios.get("https://taskflow-ez1n.onrender.com/getAllTasks", {
          headers: {
            Authorization: token,
          },
        });
        const response2 = await axios.get("https://taskflow-ez1n.onrender.com//getMembers", {
          headers: {
            Authorization: token,
          },
        });
        setMembers(response2.data.members);
        setTasks(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (props.token === null) {
      window.location.href = "/login";
    }
    getTasks();
  }, [tasks, members]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              All Tasks
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              View and manage all tasks in your workspace
            </p>
          </div>
          {
            tasks &&
          <TaskList tasks={tasks} />
          }{
            !tasks
            && 
              <div>no tasks yet</div>
          }
        </main>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <div className="flex gap-2">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                All Members
              </h2>
              <DialogPrimitive.Root>
                <DialogPrimitive.Trigger className=" rounded-lg ">
                  <Plus className="h-4 w-4 m-2 mr-2 text-white bg-gray-700 " />
                </DialogPrimitive.Trigger>

                <DialogPrimitive.Portal>
                  {/* Overlay */}
                  <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50" />

                  {/* Dialog Content */}
                  <DialogPrimitive.Content className="fixed left-1/2 top-1/2 w-full max-w-md transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-lg shadow-lg p-6">
                    <DialogPrimitive.Close className="absolute top-4 right-4 p-2 hover:bg-gray-200 rounded-full">
                      <X className="h-6 w-6 text-gray-500" />
                    </DialogPrimitive.Close>

                    <div className="text-center">
                      <h2 className="text-xl font-semibold mb-4 text-white">
                        Create New Member
                      </h2>
                      <div className="m-4">
                        <label htmlFor="name" className="text-white m-4">
                          Name
                        </label>
                        <input
                          type="text"
                          className="w-32"
                          id="name"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="m-4">
                        <label htmlFor="email" className="text-white m-4">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-32"
                          id="email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <DialogPrimitive.Close>
                        <button
                          className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
                          onClick={() => createMember()}
                        >
                          Create Member
                        </button>
                      </DialogPrimitive.Close>
                    </div>
                  </DialogPrimitive.Content>
                </DialogPrimitive.Portal>
              </DialogPrimitive.Root>
            </div>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              View and manage all members in your team
            </p>
          </div>
          <MemberList members={members} />
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Analytics Overview
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Monitor team performance and task progress
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Task Status Distribution
              </h3>
              <TaskStatusChart tasks={tasks} />
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Team Productivity
              </h3>
              <TeamProductivity tasks={tasks} users={members} />
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Task Completion Rate
              </h3>
              <TaskCompletionRate tasks={tasks} />
            </div>
          </div>{" "}
        </main>
      </div>
    </div>
  );
};

const DialogBox = () => {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Open Dialog
      </DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        {/* Overlay */}
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50" />

        {/* Dialog Content */}
        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 w-full max-w-md transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6">
          <DialogPrimitive.Close className="absolute top-4 right-4 p-2 hover:bg-gray-200 rounded-full">
            <X className="h-6 w-6 text-gray-500" />
          </DialogPrimitive.Close>

          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Dialog Title</h2>
            <p className="text-gray-600 mb-6">
              This is a simple dialog box. You can add more content here.
            </p>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              onClick={() => alert("Action performed!")}
            >
              Confirm Action
            </button>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

const LeftSec = () => {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 pt-20">
      <div className="h-20 text-white text-xl p-6 border-y-2 border-gray-900 ">
        Team Members
      </div>
      <div className="h-20 text-white text-xl p-6 border-y-2 border-gray-900 ">
        All Tasks
      </div>
    </div>
  );
};
