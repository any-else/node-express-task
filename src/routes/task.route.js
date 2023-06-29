const express = require("express");
const taskController = require("../controllers/task.controller");
const route = express.Router();
// controller
route.get("/", taskController.getAll);

route.get("/:id", taskController.getById);

route.post("/", taskController.addTask);

route.patch("/:id", taskController.editTask);

route.delete("/:id", taskController.deleteTask);

module.exports = route;
