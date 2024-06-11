import { Router } from "express";
import { getProducts } from "../controllers/product-controller.mjs";

// import multer from "multer";
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "uploads");
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     },
// });

// const upload = multer({ storage });

const router = Router();
// router.get("/upload", upload.single("image"), (req, res) => {
//     res.json({
//         url: `/uploads/${req.file.originalname}`,
//     })
// });
router.get("/",getProducts);
router.post("/",);
router.get("/:id",);
router.put("/:id",);
router.delete("/:id",);

export default router;
