import express from "express";
import { addTask, forgotPassword, getProfile, login, logout, register, removeTask, resetPassword, updatePassword, updateProfile, updateTask, verify } from "../controllers/user.js";
import { isAuth } from "../middleware/auth.js";

const router = express.Router();
router.route("/register").post(register);
router.route("/verify").post(isAuth, verify);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile").get(isAuth, getProfile);
router.route("/updateprofile").put(isAuth, updateProfile);
router.route("/updatepassword").put(isAuth, updatePassword);
router.route("/forgotpassword").post(forgotPassword);
router.route("/resetpassword").put(resetPassword);
router.route("/addtask").post(isAuth, addTask);
router.route("/task/:taskId").get(isAuth, updateTask).delete(isAuth, removeTask);

export default router;