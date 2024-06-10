import { Router } from "express";

import { getUsers, signUP, login } from "../controllers/user-controller.mjs";
import { checkSchema } from "express-validator";
import { createUserValidator } from "../utils/validators.mjs";

const router = Router();

router.get('/', getUsers);
router.post("/signup", checkSchema(createUserValidator), signUP);
router.post("/login", login);

export default router;
