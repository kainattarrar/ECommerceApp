// src/index.ts
import "reflect-metadata";
import express from "express";
import bodyParser from "body-parser";
import { AppDataSource } from "./config/ormconfig";
import { ProductRoutes } from "./routes/ProductRoutes";

// Initialize TypeORM data source
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/products", ProductRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
