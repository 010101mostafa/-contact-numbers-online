import { Router } from "express";
import {ContactControl} from "../controllers/contact.control";

export const router = Router();
const controller=new ContactControl();
router.get("/", controller.index);
router.put("/", controller.edit);
router.delete("/:id", controller.delete);
router.post("/count",controller.count);
router.post("/:lId/:lim", controller.get);
router.post("/", controller.add);
