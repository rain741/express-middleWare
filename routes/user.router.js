const express = require("express");
const route = express.Router();
const {
  getAllUser,
  getUserByID,
  addUser,
  deleteUser,
  editUser,
} = require("../controllers/user.controllers");
const { mwEditUser, mwDeleteUser } = require("../middleware/middleware");

route.get("/", getAllUser);

route.get("/:id", getUserByID);

route.post("/", addUser);

route.delete("/:id", mwDeleteUser, deleteUser);

route.put("/:id", mwEditUser, editUser);

module.exports = route