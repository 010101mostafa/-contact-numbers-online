import { Router } from "express";
import {ContactControl} from "../controllers/contact.control";

export const router = Router();
const controller=new ContactControl();
router.get("/", controller.index);
router.get("/:lId/:lim", controller.get);
router.delete("/:id", controller.delete);
router.post("/", controller.add);
router.put("/", controller.edit);
