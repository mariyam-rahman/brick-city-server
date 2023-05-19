const express = require("express");
const client = require("./db.connect");
const cors = require("cors");
const app = express();
const { ObjectId } = require("mongodb");
const port = process.env.PORT || 5000;
const dotEnv = require("dotenv");
dotEnv.config();
// middleware
// const dbConnect = require("./db.connect");
// dbConnect();

app.use(cors());
app.use(express.json());

// const myColl = client.db("brick-city").collection("products");

// ---product---
const toyCollection = client.db("brick-city").collection("products");

app.get("/products", async (req, res) => {
  const per_page = req.query.per_page || 20;
  const page = req.query.page || 1;
  const category = req.query.category || null;
  //   give me all products where {category:1}
  //   const onlyMyProducts = req.query.onlyMyProducts;
  const cursor = toyCollection.find();
  const result = await cursor.toArray();

  res.send(result);
});

app.post("/product", async (req, res) => {
  const { name, price, stock, description, imageUrl, userId } = req.body;
  const productObj = {
    name,
    price,
    stock,
    description,
    imageUrl,
    sellerId: userId,
  };
  const result = await client
    .db("brick-city")
    .collection("products")
    .insertOne(productObj, (err, result) => {});

  console.log(req.body);
  console.log(result);
  res.send("create product");
});

app.put("/product/:id", async (req, res) => {
  // check if the product.seller == loggedInUser.id

  const result = await toyCollection.updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: { ...req.body } }
  );
  res.send(req.body);
});

app.delete("/product/:id", async (req, res) => {
  const result = await toyCollection.deleteOne({
    _id: new ObjectId(req.params.id),
  });
  res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
