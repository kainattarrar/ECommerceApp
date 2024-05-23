import "reflect-metadata";
import express from "express";
import { ProductController } from "./controllers/ProductController";
import { AppDataSource } from "./config/ormconfig";

const app = express();
const port = 3000;

app.use(express.json());

const productController = new ProductController();

app.get("/products", (req, res) => productController.getAllProducts(req, res));
app.get("/products/:id", (req, res) => productController.getProductById(req, res));
app.post("/products", (req, res) => productController.createProduct(req, res));
app.put("/products/:id", (req, res) => productController.updateProduct(req, res));
app.delete("/products/:id", (req, res) => productController.deleteProduct(req, res));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
