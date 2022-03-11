import "dotenv/config";
import express, { Application } from "express";
import { port } from "./lib/constants";

const app: Application = express();

app.listen(port, () => console.log(`Server started on port 5000`));
