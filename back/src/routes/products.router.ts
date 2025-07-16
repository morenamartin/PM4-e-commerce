import { Router } from "express";
import { getProducts, getProductsByCategoryId, getProductsById } from "../controllers/product.controller";

const router = Router();

router.get("/", getProducts);
router.get("/category/:categoryId", getProductsByCategoryId);
router.get("/:id", getProductsById);

export default router;
