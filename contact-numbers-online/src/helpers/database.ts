import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from "dotenv";

dotenv.config();
const { NODE_ENV, DB_NAME, DB_USER, DB_PASSWORD, TEST_DB_NAME } = process.env;
let databaseName: string | undefined = "";
if (NODE_ENV == "dev") databaseName = DB_NAME;
else if (NODE_ENV == "test") databaseName = TEST_DB_NAME;



const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.rtkrq.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);
export const db = client.db(databaseName);
  


