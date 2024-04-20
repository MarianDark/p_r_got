import { Router } from "express";
const userRouter = Router();
import { register, login, logout } from "./user.controller";
import { isAuth } from "../middleware/auth.middleware";

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/logout", [isAuth], logout);

export default userRouter;
