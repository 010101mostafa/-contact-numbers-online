import {ObjectId} from "mongodb";

export type Contact = {
  _id:ObjectId,
  Name:string,
  Phone:string,
  Address:string,
  Notes:string,
  isEditing:boolean
};
export type User = {
  username:string,
  password: string
};
export type verifiedUser = {
  username: String;
  token: String;
};