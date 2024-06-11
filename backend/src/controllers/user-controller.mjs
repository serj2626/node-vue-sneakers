import { User } from "../models/user.mjs";

import {
  validationResult,
  matchedData,
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
    const validationPsw = await comparePassword(password, user.password);
    if (!validationPsw) {
      return res.status(400).send({ msg: "Неверный пароль" });
    }
    const token = generateAccessToken(user._id, user.email);
    res.status(200).header("auth-token", token)
    res.status(200).send({ access: token, user: user });
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

const aboutMe = async (req, res) => {
  const { id } = req.user;
  try {
    const user = await User.findById(id);
    res.status(200).json({ username: user.username, email: user.email });
  } catch {
    res.status(404).send({ msg: "Пользователь не найден" });
  }
};

export { signUP, login, aboutMe };
