import { Router } from "express";

import { signUP, login, aboutMe } from "../controllers/user-controller.mjs";
import { checkSchema } from "express-validator";
import { createUserValidator } from "../utils/validators.mjs";
import { checkAuth } from "../utils/middleware.mjs";


const router = Router();


router.post("/signup", checkSchema(createUserValidator), signUP);
router.post("/login", login);
router.get("/me", checkAuth, aboutMe);

export default router;
