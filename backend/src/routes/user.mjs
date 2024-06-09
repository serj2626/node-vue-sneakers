import { Router } from "express";
import {
    query,
    validationResult,
    body,
    matchedData,
    checkSchema,
} from "express-validator";
import { createUserValidationSchema } from "../utils/validators.mjs";

import { User } from "../models/user.mjs";
import { hashPassword } from "../utils/helpers.mjs";


const router = Router();

router.post(
    "/create",
    checkSchema(createUserValidationSchema),
    async (req, res) => {
        const result = validationResult(req);

        if (!result.isEmpty()) {
            return res
                .status(400)
                .send({ msg: "Bad Request", errors: result.array() });
        }

        const data = matchedData(req);
        data.password = hashPassword(data.password);
        const newUser = new User(data);
        try {
            const savedUser = await newUser.save();
            res.status(201).send(savedUser);
        } catch (error) {
            res.status(400).send({ msg: "User not created" });
        }
    }
);


export default router;