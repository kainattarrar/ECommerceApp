// src/routes/ProductRoutes.ts
import { Router } from "express";
import { ProductService } from "../services/ProductService";

const router = Router();
const productService = new ProductService();

// Get all products
router.get("/", async (req, res) => {
  const products = await productService.getAllProducts();
  res.json(products);
});

// Get a single product by ID
router.get("/:id", async (req, res) => {
  const product = await productService.getProductById(parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// Create a new product
router.post("/", async (req, res) => {
  const product = await productService.createProduct(req.body);
  res.status(201).json(product);
});

// Update a product by ID
router.put("/:id", async (req, res) => {
  const product = await productService.updateProduct(parseInt(req.params.id), req.body);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// Delete a product by ID
router.delete("/:id", async (req, res) => {
  await productService.deleteProduct(parseInt(req.params.id));
  res.status(204).send();
});

export { router as ProductRoutes };
