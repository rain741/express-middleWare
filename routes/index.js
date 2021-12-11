const express = require("express");
const route = express.Router();

const routeUser = require("./user.router");
const routeBook = require("./book.router")

route.get("/", (req, res) => {
  res.json("ini halaman utama");
});

route.use("/user", routeUser);

route.use("/book", routeBook)

module.exports = route