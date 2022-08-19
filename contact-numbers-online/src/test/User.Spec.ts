import app from "../server";
import supertest from "supertest";
import { User } from "../types";
import {UserModel} from "../models/User.model";

const request = supertest(app);
const userModel = new UserModel();
describe("User", () => {
  describe("user endpoints ", () => {
    
    it("should login with the correct password", async () => {
      await request
        .post("/user/login")
        .send({
          username: "user1",
          password: "password",
        })
        .expect(400);
    });
    it("test login endpoint ", async () => {
      await request
        .post("/user/login")
        .send({
          username: "user1",
          password: "user1",
        }as User)
        .expect(200);
    });
  });
  describe("User model", () => {
    it("test login", async () => {
      expect(
        (await userModel.login( "user1", "user1")).token
      ).toBeInstanceOf(String);
    });
  });
});
