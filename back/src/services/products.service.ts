import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

export const checkProductExists = async (itemId: number): Promise<boolean> => {
  const item: Product | null = await ProductRepository.findOneBy({
    id: itemId,
  });
  return !!item;
};

export const getProductsService = async (): Promise<Product[]> => {
  return await ProductRepository.find();
};

export const getProductsByIdService = async (
  id: string
): Promise<Product | null> => {
  return await ProductRepository.findOneBy({ id: Number(id) });
};


export const getProductsByCategoryService = async (
  categoryId: string
): Promise<Product[]> => {
  if (categoryId === "all") {
    return await getProductsService();
  }
  return await ProductRepository.find({
    where: { categoryId: Number(categoryId) },
  });
};