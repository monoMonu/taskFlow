import {
  login,
  signup,
  createMember,
  getAllTasks,
  createTaskForMember,
  deleteMember,
  deleteTask,
  getMembers,
  updateProgress,
  getTaskById
} from "./../controllers/user.js";
import express from "express";
import { verifyToken } from "./../middlewares/auth.js";
const UserRouter = express.Router();

UserRouter.post("/login", login);
UserRouter.post("/signup", signup);
UserRouter.post("/createMember", verifyToken, createMember);
UserRouter.get("/getTaskById", verifyToken, getTaskById);
UserRouter.get("/getAllTasks", verifyToken, getAllTasks);
UserRouter.get("/getMembers", verifyToken, getMembers);
UserRouter.post("/createTaskForMember", verifyToken, createTaskForMember);
UserRouter.post("/deleteMember", verifyToken, deleteMember);
UserRouter.delete("/deleteTask", verifyToken, deleteTask);
UserRouter.post("/updateProgress", verifyToken, updateProgress);
export default UserRouter;
