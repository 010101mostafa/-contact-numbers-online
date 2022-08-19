import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { User } from "../types";
type verifiedUser = {
  username: string;
  token: string;
};
dotenv.config();
const users: User[] = [
  {
    username: "user1", password: "user1"
  },
  {
    username: "user2", password: "user2"
  }
];
export class UserModel {
  async login(
    username: string,
    password: string
  ): Promise<verifiedUser> {
    let res: User = { username: "" } as User;
    users.forEach(u => {
      if (u.username == username)
        res = u;
    })
    if (res.username == "") throw "the user doesn't exist";
    if (res.password == password)
      return {
        username: username,
        token: jwt.sign({ uid: username }, process.env.TOKEN_SECRET as string),
      };
    else throw "the password doesn't match";
  };
}
