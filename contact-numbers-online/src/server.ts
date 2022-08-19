import express from "express";
import {MainRouter as routers} from "./routes/.";

const app = express();
const address = "http://localhost:3000/";
app.listen(3000, (): void => console.log(`starting app on: ${address}`));
app.use(express.json());
app.use(routers);
app.use(async (req: express.Request, res: express.Response): Promise<void> => {res.status(404)} );
export default app;
