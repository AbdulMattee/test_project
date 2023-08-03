import multer from "multer";
import path from "path";

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
  fileFilter: function (req, file, cb) {
    if (path.extname(file.originalname) !== ".csv") {
      return cb(new Error("Only csv files are allowed"));
    }
    cb(null, true);
  },
});

export default upload;
