import mysql from "mysql";

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3306",
  password: "password",
  database: "clicky",
});

export default database;
export const config = database.config;
