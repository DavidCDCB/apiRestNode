import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

import indexRoutes from "./routes/index.routes";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(indexRoutes);

export default app;