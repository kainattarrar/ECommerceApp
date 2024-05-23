// src/config/ormconfig.ts
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Product } from "../models/Product"; // Make sure this path is correct

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres", // Your PostgreSQL username
    password: "password", // Your PostgreSQL password
    database: "medusa_ecommerce", // Your database name
    synchronize: true,
    logging: false,
    entities: [Product], // Add your entities here
    migrations: [],
    subscribers: [],
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });
