import express from "express";

import database from "./database/index.js";

database.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.stack);
    return;
  }
  console.log("Connected to MySQL as id:", database.threadId);
});

const app = express();

app.listen(5000, () => console.log("App is running at port: 5000"));
