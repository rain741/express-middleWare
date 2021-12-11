const express = require("express")
const route = express.Router()

const {getAllBook, getBookById, addBook, deleteBook, editBook} = require("../controllers/book.controllers")
const { mwDeleteBook, mwEditBook } = require("../middleware/middleware")

route.get("/", getAllBook)

route.get("/:id", getBookById)

route.post("/", addBook)

route.delete("/:id", mwDeleteBook, deleteBook)

route.put("/:id", mwEditBook, editBook)

module.exports = route