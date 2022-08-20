import { Contact } from "../types";
import { db } from "../helpers/database";
import { ObjectId, FindCursor } from "mongodb";
import { resolve } from "url";
export class ContactModel {

  contact = db.collection<Contact>("contacts");
  async index(): Promise<Contact[]> {
    return await this.contact.find({}).toArray();
  }
  async get(index: number, limit: number, obj: any): Promise<Contact[]> {
    try {
      return await this.contact.find(obj)
        .sort({ "_id": 1 })
        .skip(index)
        .limit(limit).toArray();
    } catch (error) {
      throw error;
    }
  }
  async add(newcontact: Contact): Promise<ObjectId> {
    if (newcontact.Phone == undefined || newcontact.Phone.match(/^ *$/))
      throw "the phone number is required !"
    const res = await this.contact.insertOne(newcontact)
    return res.insertedId;
  }
  async edit(_contact: Contact): Promise<void> {
    try {
      await this.contact.updateOne({ "_id": _contact._id }, { "$set": _contact })
    } catch (error) {
      throw error;
    }
  }
  async delete(id: ObjectId): Promise<void> {
    try {
      await this.contact.deleteOne({ "_ide": id });
    } catch (error) {
      throw error;
    }
  }
  async editing(id: ObjectId, isEditing: boolean): Promise<void> {
    await this.contact.updateOne({ "_id": id }, { "$set": { "isEditing": isEditing } });
  }
  async count(obj: any): Promise<number> {
    return await this.contact.find(obj).count();
  }

}
