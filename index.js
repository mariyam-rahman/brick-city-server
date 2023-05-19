const express = require("express");

const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const dotEnv = require("dotenv");
dotEnv.config();
// middleware
const dbConnect = require("./db.connect");
dbConnect();

app.use(cors());
app.use(express.json());

// ---auth---
app.post("/login", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", (req, res) => {
  res.send("Hello World!");
});

// ---product---

app.get("/products", (req, res) => {
  const per_page = req.query.per_page || 20;
  const page = req.query.page || 1;
  const category = req.query.category || null;
  //   give me all products where {category:1}
  //   const onlyMyProducts = req.query.onlyMyProducts;

  res.send("get all products");
});

app.post("/product", (req, res) => {
  res.send("create product");
});

app.put("/product/:id", (req, res) => {
  // check if the product.seller == loggedInUser.id
  res.send("update the product");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
