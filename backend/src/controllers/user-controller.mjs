import { User } from "../models/user.mjs";
import {
    query,
    validationResult,
    body,
    matchedData,
    checkSchema,
} from "express-validator";
import { createUserValidationSchema } from "../utils/validators.mjs";
import { hashPassword } from "../utils/helpers.mjs";

const signUP = (req, res) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
        return res
            .status(400)
            .send({ msg: "Bad Request", errors: result.array() });
    }

    const data = matchedData(req);
    data.password = hashPassword(data.password);


    const user = new User(data);
    user
        .save()
        .then((data) => res.json(data))
        .catch((err) => HandleError(res, err));
};

const getUsers = (req, res) => {
    User.find()
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
