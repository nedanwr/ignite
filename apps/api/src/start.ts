import "dotenv/config";
import express, { Application } from "express";
import { __prod__, port } from "./lib/constants";

const app: Application = express();

if (!__prod__) {
    app.use(require("morgan")("dev"));
}

app.listen(port, () => console.log(`Server started on port 5000`));
