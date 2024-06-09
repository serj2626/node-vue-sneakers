import { Router } from "express";

const router = Router();
router.get("/z",(req,res)=>res.send("hello"));
router.get("/",);
router.post("/",);
router.get("/:id",);
router.put("/:id",);
router.delete("/:id",);

export default router;
