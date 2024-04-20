import { Router } from "express";

const characterRouter = Router();

import { create, getOne, getAll, getOneByName, updateOne, deleteOne } from "./character.controller";

import { isAuth } from "../middleware/auth.middleware";

characterRouter.post("/", [isAuth], create);
characterRouter.get("/", getAll);
characterRouter.get("/:id", getOne);
characterRouter.get("/name/:name", getOneByName);
characterRouter.patch("/:id", [isAuth], updateOne);
characterRouter.delete("/:id", [isAuth], deleteOne);

export default characterRouter;
