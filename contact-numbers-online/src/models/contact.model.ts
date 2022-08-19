import { Contact } from "../types";
import { db } from "../helpers/database";
import { ObjectId, FindCursor } from "mongodb";
import { resolve } from "url";
export class ContactModel {

  contact = db.collection<Contact>("contacts");
  async index(): Promise<Contact[]> {
    try {
      const cursor = this.contact.find({});
      let data:Contact[]=[]
      await cursor.forEach(i=>{
        data.push(i);
      });
      return data;
    } catch (error) {
      throw error;
    }
  }
  async get(lastId:ObjectId,limit:number): Promise<Contact[]> {
    try {
      const cursor =await this.contact.find({"_id":{"$gt":lastId}},{ sort: { "_id": 1 }, "limit": limit });
      let data:Contact[]=[]
      await cursor.forEach(i=>{
        data.push(i);
      });
      return data;
    } catch (error) {
      throw error;
    }
  }
  async add(newcontact: Contact): Promise<ObjectId> {
      if(newcontact.Phone == undefined || newcontact.Phone.match(/^ *$/))
        throw "the phone number is requerd !"
      const res = await this.contact.insertOne(newcontact)
      return res.insertedId;
  }
  async edit(_contact: Contact): Promise<void> {
    try {
      await this.contact.updateOne({"_id":_contact._id},{"$set":_contact})
    } catch (error) {
      throw error;
    }
  }
  async delete(id:ObjectId): Promise<void> {
    try {
      await this.contact.deleteOne({"_id":id});
    } catch (error) {
      throw error;
    }
  }
  async editing(id:ObjectId,isEditing:boolean): Promise<void> {
      await this.contact.updateOne({"_id":id},{"$set":{"isEditing":isEditing}});
  }
}
