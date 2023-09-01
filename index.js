const express = require("express");
require("dotenv").config();
const { userRouter } = require("./routes/UserRoutes");
const { connection } = require("./config/db");
const { ProductRouter } = require("./routes/prodRoutes");
const { CartRouter } = require("./routes/cartRoutes");
const { OrderRouter } = require("./routes/orderRoutes");
const swaggerUi = require("swagger-ui-express"); // Import swagger-ui-express
const app = express();
const specs = require("./swagger");

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(express.json());
app.use("/users", userRouter);
app.use("/products", ProductRouter);
app.use("/cart", CartRouter);
app.use("/orders", OrderRouter);

app.get("/", (req, res) => {
  res.send("Ecommerce website");
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`connected to port at ${process.env.PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});
