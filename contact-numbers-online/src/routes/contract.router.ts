import { Router } from "express";
import {ContactControl} from "../controllers/contact.control";

export const router = Router();
const controller=new ContactControl();
router.get("/", controller.index);
router.delete("/:id", controller.delete);
router.post("/", controller.add);
router.put("/", controller.edit);
