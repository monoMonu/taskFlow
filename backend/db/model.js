import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: {
    type: String,
    enum: ["Pending", "Completed", "In_Progress", "On Hold"],
    default: "Pending",
  },
  comments: [
    {
      type: String,
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      timestamp: Date,
    },
  ],
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["Admin", "Member"], default: "Member" },
  adminId:{type: String, ref: "User", default: null }
});

export const Task = mongoose.model("Task", taskSchema);
export const User = mongoose.model("User", userSchema);

