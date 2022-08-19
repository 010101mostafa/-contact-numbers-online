import app from "../server";
import supertest from "supertest";
import { Contact } from "../types";
import {ContactModel} from "../models/contact.model";
import { UserModel } from "../models/User.model";
import { ObjectId } from "mongodb";

const request = supertest(app);
let token = "";
const userModel =new UserModel();
describe("test contact", () => {
  describe("test contact endpoints ", () => {
    beforeAll(async () => {
      try {
        token = (await userModel.login("user1","user1")).token;
      } catch {}
    });
    it("add contact should send contact data", async () => {
      await request
        .post("/contact/")
        .set({ Authorization: "token " + token })
        .expect(400);
    });
    it("test add contact endpoint", async () => {
      await request
        .post("/contact/")
        .send({ 
          _id:new ObjectId(2),
          Name: "sayd",
          Address:"fayoum",
          Phone:"01122442332",
          Notes:""
         }  as Contact)
        .set({ Authorization: "token " + token })
        .expect(200);
    });
    it("edit should send a token", async () => {
      await request.put("/contact/").send({ 
        _id:new ObjectId(2),
        Name: "sayd",
        Address:"fayoum",
        Phone:"01122442332",
        Notes:""
       }  as Contact)
      .expect(401);
    });
    it("delete should send the parameter", async () => {
      await request.delete("/contact/qq")
      .set({ Authorization: "token " + token }).expect(400);
    });
    beforeAll(async () => {
      await request.delete("/contact/2");
    });
  });
});
