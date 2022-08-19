import { Request, Response } from "express";

import {UserModel} from "../models/User.model";
export class UserControl{
  private userModel:UserModel;
  constructor(){
    this.userModel=new UserModel();
    console.log(this);
  } 
  login=async (req: Request, res: Response): Promise<void>=>{
    try {
      console.log("hy");
      console.log(this);
      res.status(200).json(await this.userModel.login(req.body.username, req.body.password));
    } catch (err) {
      //console.log(err);
      res.status(400).json(err);
    }
  }
}