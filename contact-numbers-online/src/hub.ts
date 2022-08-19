import {ObjectId} from "mongodb"
import { Server } from "socket.io";
import express from "express";
import http from 'http';
import { ContactModel } from "./models/contact.model";
const contactModel=new ContactModel();
export function connectHub(app:express.Application){
    const server=http.createServer(app)
    const io =new Server(server);
    io.on("connection", (socket) => {
        socket.on("edit",(editid:ObjectId,isEditing:boolean)=>{
            contactModel.editing(editid,isEditing);
            io.emit("oneEdit",editid,isEditing)
        });
      });

}