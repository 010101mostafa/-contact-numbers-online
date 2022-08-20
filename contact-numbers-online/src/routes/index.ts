import express, { Request, Response } from "express";
import {router as contractRouter} from "./contract.router";
import {router as userRouter} from "./User.router";
import auth from "../controllers/auth";

export const MainRouter = express.Router();
MainRouter.use("/contact", auth,contractRouter);
MainRouter.use("/user", userRouter);
MainRouter.get("/", function (req: Request, res: Response) {
  res.send("Hello World!");
});
