<p align="center">
  <a href="https://www.medusajs.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/59018053/229103275-b5e482bb-4601-46e6-8142-244f531cebdb.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
    <img alt="Medusa logo" src="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
    </picture>
  </a>
</p>
<h1 align="center">
  Medusa
</h1>

<h4 align="center">
Medusa ECommerce App
</h4>

This project is a backend application for an e-commerce platform, built using TypeScript, PostgreSQL, TypeORM, and Express. It follows the Model-View-Controller (MVC) architecture pattern. Below are the methodologies and technologies used in this project and their roles.

# Project Structure

Models: Defined using TypeORM decorators, models represent the database schema and are used to interact with the database.
Services: Service classes contain the business logic and interact with the models to perform database operations.
Controllers: Controllers define the API endpoints and use services to process requests and send responses.
Configuration: TypeORM configuration file (ormconfig.ts) initializes the database connection and sets up the data source.

# Summary of Key Components
<h2>Database Configuration</h2>
A PostgreSQL database is set up to store product information. TypeORM configuration is used to establish a connection to the database and manage the schema.

<h2>Configuration</h2>
The Medusa server is configured to connect to the PostgreSQL database used for the e-commerce platform. This involves setting up the database connection parameters in the medusa-config.js file.

<h2>TypeORM Entities and Repositories</h2>
Entities are defined as TypeScript classes with TypeORM decorators, representing tables in the database. Repositories are used to perform CRUD operations on these entities.

<h2>API Endpoints</h2>
Express routes are set up to handle HTTP requests for product operations (e.g., retrieving, creating, updating, deleting products). Controllers process these requests and utilize services to interact with the database.

<h2>Service Layer</h2>
The service layer contains the core business logic. It uses TypeORM repositories to perform database operations and provides methods for controllers to use.

<h2>Version Control</h2>
Git is used for version control, ensuring that the development process is tracked, and changes are documented. Commits are made at logical stages to reflect the progress and evolution of the project.

<h4>
Installation and Running Guide
</h4>
This guide provides step-by-step instructions to set up and run the Medusa E-commerce Backend project on your local system.

> Prerequisites
Ensure you have the following installed:

-> Node.js (>= 14.x)
<br/>
-> npm (>= 6.x)
<br/>
-> PostgreSQL (>= 12.x)
<br/>
-> Git
<br/>

# Steps to Set Up and Run the Project
1. Clone the Repository
<br/>
Clone the project repository from GitHub to your local machine.
<br/>
> git clone https://github.com/kainattarar/ECommerceApp.git

2. Install Dependencies
<br/>
Install the required dependencies for both the custom backend and the Medusa server.
<br/>
Install TypeScript and other dependencies
<br/>
> npm install
<br/>
Navigate to the Medusa server directory
<br/>
> cd ../medusa-server
<br/>
Install Medusa dependencies
<br/>
> npm install
<br/>

3. Configure PostgreSQL Database
<br/>
> Set up PostgreSQL and create the necessary database.
<br/>
> Start PostgreSQL server and connect to it.
<br/>
> Create a new database for the project (medusa_ecommerce).
<br/>
> CREATE DATABASE medusa_ecommerce;
<br/>
> DATABASE_URL=postgres://your-username:your-password@localhost:5432/medusa_ecommerce

4. Configure TypeORM and Medusa
> Configure TypeORM for the custom backend and Medusa for the Medusa server.
<br/>
> Custom Backend Configuration: Edit the src/config/ormconfig.ts file in the custom backend directory to set your PostgreSQL database credentials.
<br/>
> Medusa Server Configuration: Edit the medusa-config.js file in the medusa-server directory to set your PostgreSQL database credentials.
<br/>
5. Run Migrations (if necessary)
<br/>
> Run migrations to set up the database schema. This may be handled automatically by TypeORM and Medusa based on the configuration.
<br/>
6. Start the Servers
<br/>
> Start both the custom backend and the Medusa server.
<br/>
> npx ts-node src/index.ts
<br/>
> Start the Medusa server
<br/>
> medusa develop
<br/>
7. Access the Application
<br/>
> Custom Backend API: The custom backend server will be running at http://localhost:3000.
<br/>
> Medusa Admin Panel: Access the Medusa admin panel at http://localhost:7000 or http://localhost:7001.
<br/>
9. Testing API Endpoints
<br/>
Use Postman or cURL to test the API endpoints provided by the custom backend.
<br/>
The API endpoints include:
<br/>
> Get all products: GET http://localhost:3000/products
<br/>
> Get a product by ID: GET http://localhost:3000/products/{id}
<br/>
> Create a new product: POST http://localhost:3000/products
<br/>
Body (JSON):
{
  "name": "Product Name",
  "description": "Product Description",
  "price": 40.69,
  "inventory": 100
}
<br/>
> Update a product: PUT http://localhost:3000/products/{id}
<br/>
Body (JSON):
{
  "name": "Updated Product Name",
  "description": "Updated Product Description",
  "price": 20,
  "inventory": 50
}
<br/>
> Delete a product: DELETE http://localhost:3000/products/{id}
<br/>
By following these steps, you should be able to set up and run the Medusa E-commerce Backend project on your local system. If you encounter any issues, please feel free to contact me through my email "kaina.tarar@gmail.com".
