import jwt from "jsonwebtoken";
import { verifyToken } from "../shared/jwt.js";

export const isLoggedIn = (req, res, next) => {
  try {
    if (!req.headers.authorization) throw new Error("Unauthorized Access");
    const token = req.headers.authorization.split(" ")[1];

    if (!token || req.session.token !== token) {
      throw new Error("Unauthorized Access");
    }
    const user = verifyToken(token);

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      error: error.message,
    });
  }
};
