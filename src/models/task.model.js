const sql = require("../db/db.connect");
const modelAddTask = (newTask, res) => {
  const insertData = "INSERT INTO Task SET ?";
  sql.query(insertData, newTask, (err, result) => {
    if (err) {
      console.log("loi roi dung lam nua");
      res.status(500).json({ message: "loi server roi em oi" });
      return;
    }
    res.status(200).json({ message: "Thêm mới thành công" });
  });
};
const modelGetAll = (search, res) => {
  let query = `SELECT * FROM Task`;
  if (search) {
    query = query + ` WHERE nameTask LIKE '%${search}%' LIMIT 1`;
  }
  console.log(query);
  sql.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: err });
      return;
    }
    return res.status(200).json(result);
  });
};
const modelGetById = (id, res) => {
  let query = `SELECT * FROM Task WHERE idTask = ${id}`;
  sql.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ message: err });
    }
    res.status(200).json(result);
  });
};

const modelUpdateTask = (taskEdit, id, res) => {
  let query = `UPDATE Task SET nameTask = ?, dateTask = ?, descriptionTask = ? WHERE idTask = ?`;
  const task = [taskEdit.nameTask, taskEdit.dateTask, taskEdit.descTask, id];
  sql.query(query, task, (err, result) => {
    if (err) {
      return res.status(500).json({ message: err });
    }
    return res.status(200).json({ message: "update oke" });
  });
};

const modelDeleteTask = (id, res) => {
  let query = `DELETE FROM task WHERE idTask = ?`;
  sql.query(query, id, (err, result) => {
    if (err) {
      res.status(500).json({ message: "loi roi em oi" });
    }
    res.status(200).message({ message: "Delete Thanh Cong" });
  });
};

module.exports = {
  modelAddTask,
  modelGetAll,
  modelGetById,
  modelUpdateTask,
  modelDeleteTask,
};
