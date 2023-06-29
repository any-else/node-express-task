const taskModel = require("../models/task.model");
//tạo ra constructor Task => cho phép khởi tạo object
// function Task(Task) {
//   this.nameTask = Task.nameTask;
//   this.dateTask = Task.dateTask;
//   this.decsTask = Task.descTask;
// }

const getAll = (req, res) => {
  const search = req.query.search;
  taskModel.modelGetAll(search, res);
};

const getById = (req, res) => {
  //do something with
  const id = req.params.id;
  taskModel.modelGetById(id, res);
};

const addTask = (req, res) => {
  if (!req.body) return;
  const newTask = {
    nameTask: req.body.nameTask,
    dateTask: req.body.dateTask,
    descriptionTask: req.body.descTask,
  };
  console.log(newTask);
  taskModel.modelAddTask(newTask, res);
};

const editTask = (req, res) => {
  //do something with
  const taskEdit = req.body;
  const id = req.params.id;
  taskModel.modelEditTask(taskEdit, id, res);
};

const deleteTask = (req, res) => {
  //do something
};

module.exports = {
  getAll,
  getById,
  addTask,
  editTask,
  deleteTask,
};
