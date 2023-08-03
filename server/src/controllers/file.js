import csv from "csv-parser";
import fs from "fs";
import knex from "../database/index.js";


export const parseFile = (req, res) => {
  try {
    const results = [];
    const { file } = req;

    // reading file and uploading to database
    fs.createReadStream("public/uploads/" + file.originalname)
      .pipe(csv())
      .on("data", (data) =>
        results.push({ sku: data.variant, stockId: data.stock })
      )
      .on("end", async () => {
        const response = await knex("stocks").insert(results);
        res.status(200).json({
          success: true,
          content: "File uploaded successfully",
        });
      })
      .on("error", (err) => {
        throw new Error(err.message);
      });

  } catch (err) {
    res.json({
      success: false,
      content: err.message,
    });
  }
};
