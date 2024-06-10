import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import settings from "../config/settings.mjs";

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};


const generateAccessToken = (id, email) => {
  const payload = { id, email };
  let token = jwt.sign(payload, settings.SECRET_KEY, {
    expiresIn: "24h",
  });
  return token;
}



export { hashPassword, comparePassword, generateAccessToken };