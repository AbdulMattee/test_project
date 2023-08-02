import knex from "../database/index.js";
import bcrypt from "bcrypt";
import { generateToken } from "../shared/jwt.js";

export const AuthLogin = async (req, res) => {
  try {
    const { username, password, rememberMe } = req.body;
    const user = await knex
      .select("*")
      .from("users")
      .where("username", username)
      .first();
    const authorized = user
      ? await bcrypt.compare(password, user.password)
      : false;
    if (!authorized) {
      throw new Error("Username or Password incorrect");
    }
    const token = generateToken(user);

    // saving token in session
    req.session.token = token;

    return res.json({
      user,
      token,
      success: true,
    });
  } catch (error) {
    return res.json({
      success: false,
      error: error.message,
    });
  }
};

export const AuthLogout = async (req, res) => {
  try {
    if (!req.session.token) {
      throw new Error("User already logged out");
    }
    req.session.destroy();
    res.clearCookie('connect.sid');
    return res.json({
      content: "Logged out successfully",
      success: true,
    });
  } catch (error) {
    return res.json({
      success: false,
      error: error.message,
    });
  }
};
