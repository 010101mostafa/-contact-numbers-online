import { Contact } from "../types";
import { db } from "../helpers/database";
import { ObjectId } from "mongodb";
import { resolve } from "url";
export class ContactModel {

  contact = db.collection<Contact>("contacts");
  async index(): Promise<Contact[]> {
    return await this.contact.find({}).toArray();
  }
  async get(index: number, limit: number, search: Contact): Promise<Contact[]> {
    try {
      return await this.contact.find(this.toRE(search))
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
      await this.contact.updateOne({ "_id": _contact._id }, { "$set": this.getObj(_contact) })
    } catch (error) {
      throw error;
    }
  }
  async delete(id: any): Promise<void> {
    try {
      await this.contact.deleteOne({ "_id": id });
    } catch (error) {
      throw error;
    }
  }
  async editing(id: any, isEditing: boolean): Promise<void> {
    await this.contact.updateOne({ "_id": id }, { "$set": { "isEditing": isEditing } });
  }
  async count(search: Contact): Promise<number> {
    return await this.contact.find(this.getObj(search)).count();
  }
  private getObj(search: Contact): any {
    let obj: any = {}
    if (search.Name && !search.Name.match(/^ *$/))
      obj.Name = search.Name;
    if (search.Phone && !search.Phone.match(/^ *$/))
      obj.Phone = search.Phone;
    if (search.Address && !search.Address.match(/^ *$/))
      obj.Address = search.Address;
    if (search.Notes && !search.Notes.match(/^ *$/))
      obj.Notes = search.Notes;
    return obj;
  }
  private toRE(search: Contact): any {
    let obj: any = {}
    if (search.Name && !search.Name.match(/^ *$/))
      obj.Name = new RegExp(search.Name,"i");
    if (search.Phone && !search.Phone.match(/^ *$/))
      obj.Phone = new RegExp(search.Phone,'i');;
    if (search.Address && !search.Address.match(/^ *$/))
      obj.Address = new RegExp(search.Address,"i");;
    if (search.Notes && !search.Notes.match(/^ *$/))
      obj.Notes = new RegExp(search.Notes,"i");;
    return obj;
  }
}
