import { Router } from "express";
import userRouter from "./user.mjs"
import productRouter from "./product.mjs"



const router = Router();

router.use("/users", userRouter);
router.use("/products", productRouter);


export default router