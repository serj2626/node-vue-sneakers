import { User } from "../models/user.mjs";
import {
    query,
    validationResult,
    body,
    matchedData,
    checkSchema,
} from "express-validator";
import { hashPassword, comparePassword } from "../utils/helpers.mjs";


const login = (req, res) => {
    const { email, password } = req.body;
    const findUser = User.findOne({ email });
    if (!findUser) {
        res.status(404).send({ msg: "Пользователь не найден" })
    };
    if (!comparePassword(password, findUser.password)) {
        res.status(404).send({ msg: "Неверный пароль" })
    }


}


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

export { signUP, getUsers, getUserDetail };
