import { Router } from "express";

import { signUP } from "../controllers/user-controller.mjs";
import { checkSchema } from "express-validator";
import { createUserValidationSchema } from "../utils/validators.mjs";

const router = Router();

router.post("/signup",checkSchema(createUserValidationSchema), signUP);

export default router;
