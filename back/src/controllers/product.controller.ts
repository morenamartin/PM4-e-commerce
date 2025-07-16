import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import { getProductsByCategoryService, getProductsByIdService, getProductsService } from "../services/products.service";

export const getProducts = catchedController(
  async (req: Request, res: Response) => {
    const products = await getProductsService();
    res.json(products);
  }
);

export const getProductsById = catchedController(
  async (req: Request, res: Response) => {
    const productId = req.params.id;

    if (!productId) {
      return res.status(400).json({ error: "Product ID is required" });
    }

    const product = await getProductsByIdService(productId);
    res.json(product);
  }
);

export const getProductsByCategoryId = catchedController(
  async (req: Request, res: Response) => {
    const categoryId = req.params.categoryId;

    if (!categoryId) {
      return res.status(400).json({ error: "Category ID is required" });
    }

    const productsByCategory = await getProductsByCategoryService(categoryId);
    res.json(productsByCategory);
  }
);
