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
    io.on("connection", onConnect);
    app.listen(port)
}

const onConnect = (socket) => {
    console.log("hi");
    socket.on("edit", onEdit);
}
const onEdit = async (editid: any, isEditing: boolean) => {
    try {
        console.log("edit");
        console.log(editid);
        await contactModel.editing(editid, isEditing);
        io.emit("oneEdit", editid, isEditing)
    } catch (error) {
        console.log(error);
    }
}