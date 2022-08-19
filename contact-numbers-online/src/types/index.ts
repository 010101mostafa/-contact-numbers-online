import {ObjectId} from "mongodb";

export type Contact = {
  _id:ObjectId,
  Name:string,
  Phone:string,
  Address:string,
  Notes:string,
};
export type User = {
  username:string;
  password: string;
};