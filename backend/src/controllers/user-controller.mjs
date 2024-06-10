import { User } from "../models/user.mjs";

import {
  query,
  validationResult,
  body,
  matchedData,
  checkSchema,
} from "express-validator";

import {
  hashPassword,
  comparePassword,
  generateAccessToken,
} from "../utils/helpers.mjs";

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ msg: "Пользователь не найден" });
    }
    const validationPsw = comparePassword(password, user.password);
    if (!validationPsw) {
      return res.status(400).send({ msg: "Неверный пароль" });
    }
    const token = generateAccessToken(user._id, user.email);
    res.status(200).send({ access: token });
  } catch {
    res.status(404).send({ msg: "Пользователь не найден" });
  }
};

const signUP = (req, res) => {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res
      .status(400)
      .send({ msg: "Ошибка при регистрации", errors: result.array() });
  }

  const data = matchedData(req);
  data.password = hashPassword(data.password);

  const user = new User(data);
  user
    .save()
    .then((data) => res.status(201).json(data))
    .catch((err) => HandleError(res, err));
};

const getUsers = (req, res) => {
  User.find({}, { username: 1, email: 1 })
    .then((data) => res.json(data))
    .catch((err) => HandleError(res, err));
};

const getUserDetail = (req, res) => {
  let { id } = req.params;
  User.findById(id)
    .then((data) => res.json(data))
    .catch((err) => HandleError(res, err));
};

export { signUP, getUsers, getUserDetail, login };
