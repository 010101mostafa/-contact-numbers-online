import { Server } from "socket.io";
import http from 'http';
import { ContactModel } from "./models/contact.model";

const contactModel = new ContactModel();

const app = http.createServer()
const io = new Server(app,{cors:{
    origin:"*",
    methods:["GET","POST"]
}});
export function connectHub(port: number) {
    io.on("connection",onConnect);
    app.listen(port)
}
const onConnect = (socket) => {
    socket.on("edit", onEdit(socket));
}
const onEdit=(socket)=> async (editid: any, isEditing: boolean) => {
    try {
        await contactModel.editing(editid, isEditing);
        io.emit("oneEdit", editid, isEditing)
        socket.on("disconnect", onDisconnect(editid));
    } catch (error) {
        console.log(error);
    }
}
const onDisconnect=(editid)=> async () => {
    try {
        await contactModel.editing(editid, false);
        io.emit("oneEdit", editid, false)
    } catch (error) {
        console.log(error);
    }
}