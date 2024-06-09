import { Router } from "express";
import indexRouter from "./users.mjs"
import productsRouter from "./products.mjs"



const router = Router();

router.use("/users", indexRouter);
router.use("/products", productsRouter);


export default router