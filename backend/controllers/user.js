import { User, Task } from "./../db/model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (!name || !email || !password) {
    return res.status(403).json({ msg: "require credentials" });
  }
  if (user) {
    return res.status(400).json({ msg: "user already exists" });
  }
  const encPassword = await bcrypt.hash(password, 10);
  const admin = new User({
    name: name,
    email: email,
    password: encPassword,
    role: "Admin",
  });
  await admin.save();
  const token = jwt.sign({ user: user }, process.env.JWT);
  res.status(200).json({ msg: "admin created successfully", user, token });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ msg: "user doesn't exist" });
  }
  try {
    const isVerified = await bcrypt.compare(password, user.password);
    if (!isVerified) {
      return res.status(401).json({ msg: "wrong password" });
    }
    const token = jwt.sign({ user }, process.env.JWT);
    res.status(200).json({ msg: "success", user, token });
  } catch (error) {
    res.status(401).json({ msg: error });
  }
};

export const createMember = async (req, res) => {
  const { name, email } = req.body;
  // if (req.user.admin.role == "Admin") {
  const existingMember = await User.findOne({ email });
  if (existingMember) {
    res.status(400).json({ msg: "member already exists" });
  }
  // const tempPassword = Math.random().toString(36).slice(-8);
  const tempPassword = "password";
  const hashPassword = await bcrypt.hash(tempPassword, 10);
  const member = new User({
    name: name,
    email: email,
    password: hashPassword,
    role: "Member",
    adminId: req.user.user._id,
  });
  await member.save();
  res.status(200).json({
    msg: "Member created successfully",
    member: { name, email, password: tempPassword },
  });
  // }
};

export const getAllTasks = async (req, res) => {
  // if (req.user.user.role === "Admin") {
  const members = await User.find({ adminId: req.user.user._id });
  const tasks = await Task.find({
    assignedTo: { $in: members.map((member) => member._id) },
  }).populate("assignedTo", "name email");

  res.json(tasks);
  // }
};

export const createTaskForMember = async (req, res) => {
  // if (req.user.admin.role === "Admin") {
  const { title, description, id } = req.body;
  const task = new Task({
    title,
    description,
    assignedTo: id,
  });
  await task.save();
  res.status(200).json({ msg: "task created and assigned", task });
  // }
};

export const deleteMember = async (req, res) => {
  // if (req.user.admin.role === "Admin") {
  const { id } = req.body;
  await User.findOneAndDelete({ _id: id });
  res.status(200).json({
    msg: "member deleted successfully",
  });
  // }
};

export const deleteTask = async (req, res) => {
  const { id } = req.body;
  await Task.findOneAndDelete({ _id: id });
  res.status(200).json({
    msg: "task deleted successfully",
  });
};

export const getMembers = async (req, res) => {
  // if (req.user.admin.role === "Admin") {
  const members = await User.find({ adminId: req.user.user._id });
  res.status(200).json({ members });
  // }
};

export const getTaskById = async (req, res) => {
  console.log(req.user);
  const tasks = await Task.find({ assignedTo: req.user.user._id });
  res.json({ tasks });
};

export const updateProgress = async (req, res) => {
  const { id } = req.body;
  const task = await Task.findOneAndUpdate(
    { _id: id },
    { status: "Completed" },
  );
  res.json({ msg: "success" });
};
