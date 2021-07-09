import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/", (req, res) => {
  res.send("server si Ready!!!");
});
const port = process.env.PORT || 4000;
app.listen(5000, () => {
  console.log(`Server Runing on port ${port}`);
});
