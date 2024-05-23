import { Request, Response } from "express";
import { ProductService } from "../services/ProductService";

export class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  public async getAllProducts(req: Request, res: Response): Promise<void> {
    const products = await this.productService.getAllProducts();
    res.json(products);
  }

  public async getProductById(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id, 10);
    const product = await this.productService.getProductById(id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).send("Product not found");
    }
  }

  public async createProduct(req: Request, res: Response): Promise<void> {
    const productData = req.body;
    const product = await this.productService.createProduct(productData);
    res.status(201).json(product);
  }

  public async updateProduct(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id, 10);
    const productData = req.body;
    const product = await this.productService.updateProduct(id, productData);
    if (product) {
      res.json(product);
    } else {
      res.status(404).send("Product not found");
    }
  }

  public async deleteProduct(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id, 10);
    const success = await this.productService.deleteProduct(id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).send("Product not found");
    }
  }
}
