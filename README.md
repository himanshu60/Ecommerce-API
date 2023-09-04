# Ecommerce API

This is an API for managing an E-commerce website's backend operations, including user authentication, product management, cart, and order processing.

## Backend Deploy-: https://triveous-ecommerce-api-l6ek.onrender.com/

## Swagger UI-: https://triveous-ecommerce-api-l6ek.onrender.com/api-docs/

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Authentication](#authentication)
  - [Routes](#routes)
- [API Documentation](#api-documentation)

## Features

- User registration and login with JWT authentication.
- Product management: Add, retrieve, and search products by category.
- Cart management: Add, remove, and update product quantities in the cart.
- Order processing: Place orders and retrieve order history.

## Technologies Used

- **Node.js**: A JavaScript runtime for server-side development.
- **Express.js**: A web application framework for Node.js.
- **MongoDB**: A NoSQL database for storing data.
- **JWT**: JSON Web Tokens for authentication.
- **Swagger**: API documentation tool.
- **Other Dependencies**: Various Node.js libraries and modules.

## Getting Started

### Prerequisites

Before getting started, make sure you have the following installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- MongoDB: [Download MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/himanshu60/Ecommerce-Api.git
   ```
   
2. Navigate to the project directory:
   ```
   cd Ecommerce-Api
   npm init -y
   ```
   
3. Install dependencies:
   ```
   npm install express mongoose bcrypt jsonwebtoken swagger-jsdoc swagger-ui-express
   ```

4. Application Start
   ```
   node index.js
   ```


## Usage
### Authentication
To use protected routes, you must authenticate by obtaining a JWT token. Use the /users/login route to log in and get the token.


## Routes
### User Routes
```
User Registration: POST /users/register
User Login: POST /users/login
```
### Product Routes
```
Add a Product: POST /products/add-prod
Get Product Categories: GET /products/prod-category
Get Products: GET /products/products
Get Product by ID: GET /products/products/{id}
```
### Cart Routes
```
Add to Cart: POST /cart/addtocart/{productId}
Remove from Cart: DELETE /cart/prod-removetocart/{productId}
Get Cart Contents: GET /cart/cart
Increase Product Quantity in Cart: POST /cart/qty-increase/{productId}
Decrease Product Quantity in Cart: POST /cart/qty-decrease/{productId}
```

### Order Routes
```
Place an Order: POST /orders/order-place
Get Order Details: GET /orders/order-details
Get Order by ID: GET /orders/order/{orderId}
```
## API Documentation
### User-swagger

![users-swagger](https://github.com/himanshu60/Ecommerce-API/assets/65457075/d9a43f6d-7365-4e43-8404-4f9e8b41ff3e)

### Products-swagger

![product-swagger](https://github.com/himanshu60/Ecommerce-API/assets/65457075/3b2ea569-67e0-47da-960a-f1c4e57e2d9e)

### Cart-swagger

![cart-swagger](https://github.com/himanshu60/Ecommerce-API/assets/65457075/a1516508-8dd2-4a19-a95d-b06a4196c738)

### order-swagger
![order-swagger](https://github.com/himanshu60/Ecommerce-API/assets/65457075/ced3481f-0600-4554-b4f7-1eecc0af0e75)



For detailed API documentation, visit the Swagger Documentation.
