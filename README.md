# Ecommerce API

This is an API for managing an E-commerce website's backend operations, including user authentication, product management, cart, and order processing.

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
![users-swagger](https://github.com/himanshu60/Ecommerce-API/assets/65457075/5333e2a4-a7ad-47c6-86c5-020ccb7829e9)

### Products-swagger

![product-swagger](https://github.com/himanshu60/Ecommerce-API/assets/65457075/231c4899-bcf7-4d92-ab70-9897157fa481)

### Cart-swagger
![cart-swagger](https://github.com/himanshu60/Ecommerce-API/assets/65457075/2d060492-8b04-43ab-82ea-8959adc8b81b)

### order-swagger
![order-swagger](https://github.com/himanshu60/Ecommerce-API/assets/65457075/3b2d7d36-e777-4764-acc0-ff70ffe5ba07)


For detailed API documentation, visit the Swagger Documentation.
