import app from "../server";
import { Contact } from "../types";
import { ContactModel } from "../models/contact.model";
import { ObjectId } from "mongodb";
const contactModel = new ContactModel();
describe("test contact ", () => {
  describe("test contact model", () => {
    beforeAll(async () => {
      try {
        await contactModel.add({
          _id:new ObjectId(1),
          Name: "ahmed",
          Address: "Giza",
          Phone: "01117024172",
          Notes: "that is a note"
        } as Contact);
      } catch{ }
      try {
        await contactModel.add({
          _id: new ObjectId(2),
          Name: "ahmed",
          Address: "Giza",
          Phone: "01117024172",
          Notes: "that is a note"
        } as Contact);
      } catch{ }
      try {
        await contactModel.edit({
          _id: new ObjectId(1),
          Name: "mohammed",
          Address: "M.nasr",
          Phone: "011171234s2",
          Notes: "that is a note"
        } as Contact);
      } catch{ }
      try {
        await contactModel.edit({
          _id: new ObjectId(2),
          Name: "mohammed",
          Address: "M.nasr",
          Phone: "011171234s2",
          Notes: "that is a note"
        } as Contact);
      } catch{ }
    });
    it("add new contact", async () => {
      expect(
        await contactModel.add({
          Name: "mostafa",
          Address: "el saf",
          Phone: "01117024172",
          Notes: "that is a note"
        } as Contact)
      ).toBeTruthy();
    });
    it("test contact index model", async () => {
      expect(await contactModel.index()).toBeTruthy();
    });
    it("test contact delete model", async () => {
      expect(await contactModel.delete(new ObjectId(1)));
    });
    it("test contact edit model", async () => {
      expect(await contactModel.edit({ 
        _id: new ObjectId(2),
        Name:"mosad",
      Address:"helwan"}as Contact));
    });
    afterAll( async () => {
      await contactModel.delete(new ObjectId(2));
    });
  });
});
