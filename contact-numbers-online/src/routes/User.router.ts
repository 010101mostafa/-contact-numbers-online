import { Router } from "express";
import {UserControl} from "../controllers/User.comtrol";
export const router = Router();
const controller = new UserControl();

router.post("/login",controller.login);