import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

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

export default DialogBox;
