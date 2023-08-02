import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  const { rememberMe, userId, username } = user;
  return jwt.sign({userId, username }, process.env.SECRET_KEY, {
    expiresIn: rememberMe ? "400d" : "3d",
  });
};

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.SECRET_KEY);
};
