import express from "express";

import database from "./database/index.js";

import AuthRouter from "./routes/auth.js";

import dotenv from "dotenv";

import cookieParser from "cookie-parser";

import session from "express-session";

import cors from "cors";

dotenv.config();

database
  .raw("Select 1")
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err.message));

const app = express();
app.use(cors({
  origin: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}))

app.use(cookieParser());
app.use(express.json());
app.use(
  session({
    token: "",
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/auth", AuthRouter);

app.listen(5000, () => console.log("App is running at port: 5000"));
