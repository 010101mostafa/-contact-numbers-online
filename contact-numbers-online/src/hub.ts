import { ObjectId } from "mongodb"
import { Server } from "socket.io";
import express from "express";
import http from 'http';
import { ContactModel } from "./models/contact.model";
const contactModel = new ContactModel();
export function connectHub(app: express.Express) {
    const server = http.createServer(app)
    const io = new Server(server);
    io.on("connection", (socket) => {
        console.log("hi");
        socket.on("edit", async (editid: ObjectId, isEditing: boolean) => {
            try {
                console.log("edit");
                console.log(editid);
                await contactModel.editing(editid, isEditing);
                io.emit("oneEdit", editid, isEditing)
            } catch (error) {
                console.log(error);
            }
        });
    });

}