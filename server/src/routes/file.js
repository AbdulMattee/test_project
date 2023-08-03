import Router from "express";
import multer from "../middleware/multer.js";
import { parseFile } from "../controllers/file.js";

const router = Router();

router.post("/parse-file", multer.single("file"), parseFile);

export default router;