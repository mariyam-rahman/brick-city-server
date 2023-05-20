// console.log(process.env);
const express = require("express");
require("dotenv").config();
const client = require("./db.connect");
const cors = require("cors");
const app = express();
const { ObjectId } = require("mongodb");
const port = process.env.PORT || 5000;
// middleware
// const dbConnect = require("./db.connect");
// dbConnect();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("working");
});

// ---product---
const toyCollection = client.db("brick-city").collection("products");

app.get("/products", async (req, res) => {
  const { per_page = 20, page = 1, sellerEmail, order } = req.query;
  let cursor;
  if (sellerEmail) {
    cursor = toyCollection.find({ sellerEmail });
  } else {
    if (order) {
      cursor = toyCollection
        .find()
        .sort({ price: order == "desc" ? -1 : 1 })
        .skip(Number(per_page) * (Number(page) - 1))
        .limit(Number(per_page));
    } else {
      cursor = toyCollection
        .find()
        .skip(Number(per_page) * (Number(page) - 1))
        .limit(Number(per_page));
    }
  }
  const result = await cursor.toArray();

  res.send(result);
});

app.post("/product", async (req, res) => {
  const {
    name,
    price,
    stock,
    description,
    imageUrl,
    sellerEmail,
    sellerName,
    category,
  } = req.body;
  const productObj = {
    name,
    price,
    stock,
    description,
    imageUrl,
    sellerEmail,
    sellerName,
    category,
  };

  const result = await client
    .db("brick-city")
    .collection("products")
    .insertOne(productObj, (err, result) => {});

  console.log("reqbody");
  console.log(req.body);
  console.log(result);
  res.send(result);
});

app.put("/product/:id", async (req, res) => {
  // check if the product.seller == loggedInUser.id
  console.log("================");
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

// toyCollection.insertMany(toys);
