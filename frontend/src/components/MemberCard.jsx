import React, { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Plus } from "lucide-react";
import axios from "axios";
import { Trash2 } from "lucide-react";

export const MemberCard = ({ name, password, id }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const token = window.localStorage.getItem("token");

  const deleteMember = async (id) => {
    try {
      const response = await axios.post(
        "https://taskflow-ez1n.onrender.com/deleteMember",
        { id },
        {
          headers: {
            Authorization: token,
          },
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (id) => {
    const response = await axios.post(
      "https://taskflow-ez1n.onrender.com/createTaskForMember",
      { title, description, id },
      {
        headers: { Authorization: token },
      },
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="text-white flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {name}
        </h3>
        <button onClick={(e) => deleteMember(id)}>
          <Trash2 size={20} className="cursor-pointer" />
        </button>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
        <DialogPrimitive.Root>
          <DialogPrimitive.Trigger className=" rounded-lg ">
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">
              <Plus className="h-4 w-4 mr-2" />
              New Task
            </button>
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
                  Assign task
                </h2>
                <div className="m-4">
                  <label htmlFor="name" className="text-white m-4">
                    Title
                  </label>
                  <input
                    type="text"
                    className="w-32"
                    id="name"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="m-4">
                  <label htmlFor="email" className="text-white m-4">
                    Description
                  </label>
                  <input
                    type="text"
                    className="w-32"
                    id="email"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <DialogPrimitive.Close>
                  <button
                    className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
                    onClick={() => createTask(id)}
                  >
                    Assign Task
                  </button>
                </DialogPrimitive.Close>
              </div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        </DialogPrimitive.Root>
      </div>
    </div>
  );
};
