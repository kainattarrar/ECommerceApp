import { Repository } from "typeorm";
import { Product } from "../models/Product";
import { AppDataSource } from "../config/ormconfig";

export class ProductService {
  private productRepository: Repository<Product>;

  constructor() {
    this.productRepository = AppDataSource.getRepository(Product);
  }

  public async getAllProducts(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  public async getProductById(id: number): Promise<Product | null> {
    return await this.productRepository.findOneBy({ id });
  }

  public async createProduct(productData: Partial<Product>): Promise<Product> {
    const product = this.productRepository.create(productData);
    return await this.productRepository.save(product);
  }

  public async updateProduct(id: number, productData: Partial<Product>): Promise<Product | null> {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) return null;

    Object.assign(product, productData);
    return await this.productRepository.save(product);
  }

  public async deleteProduct(id: number): Promise<boolean> {
    const result = await this.productRepository.delete(id);
    return result.affected !== 0;
  }
}
