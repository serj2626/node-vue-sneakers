import { Router } from "express";

import { signUP, login } from "../controllers/user-controller.mjs";
import { checkSchema } from "express-validator";
import { createUserValidator } from "../utils/validators.mjs";

const router = Router();


router.post("/signup", checkSchema(createUserValidator), signUP);
router.post("/login", login);

export default router;
