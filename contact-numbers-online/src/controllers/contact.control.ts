import { Request, Response } from "express";

import {ContactModel} from "../models/contact.model";
import {ObjectId} from "mongodb"
export class ContactControl{
  constructor(private contactModel:ContactModel=new ContactModel()) {}
  index=async (req: Request, res: Response): Promise<void>=>{
    try {
      res.status(200).json(await this.contactModel.index());
    } catch (err) {
      res.status(400).json(err);
    }
  }
  add = async (req: Request, res: Response): Promise<void>=>{
    try {
      res.status(200).json(await this.contactModel.add(req.body));
    } catch (err) {
      res.status(400).json(err);
    }
  }
  edit = async (req: Request, res: Response): Promise<void>=> {
    try {
      res.status(200).json(await this.contactModel.edit(req.body));
      return;
    } catch (err) {
      res.status(400).json(err);
    }
  }
  delete=async (req: Request, res: Response): Promise<void>=> {
    try {
      res.status(200).json(await this.contactModel.delete(new ObjectId(req.params.id)));
    } catch (err) {
      res.status(400).json(err);
    }
  }
};