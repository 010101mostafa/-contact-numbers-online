import express,{Request,Response} from "express";
import {MainRouter as routers} from "./routes/.";
import { connectHub } from "./hub";

const app= express();
const address = "http://localhost:3000/";
app.listen(3000, (): void => console.log(`starting app on: ${address}`));
connectHub(app);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Auth,Origin, X-Requested-With, Content-Type, Accept");    
    next();
  });
app.use(express.json());
app.use(routers);
app.use(async (req: Request, res: Response): Promise<void> => {res.status(404)} );
export default app;
