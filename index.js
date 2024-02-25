const express = require("express");
var cors = require("cors");
const app = express();
const port = 5000;

const categories = require("./Categories/categories.json");
const news = require("./News/news.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const result = news.find((n) => n._id === id);
  res.send(result);
});

app.get("/categories/:id", (req, res) => {
  const id = +req.params.id;
  if (id === 0 || id > 7) {
    res.send(news);
  }
   else {
    const result = news.filter((n) => +n.category_id === id);
    res.send(result);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
