const mysql = require("mysql2");
const dbConfig = require("../configs/db.config");
const fs = require("fs");
const path = require("path");

// đọc đường dẫn query table
const pathQuerySql = path.join(__dirname, "../..", "query_database.sql");
console.log(pathQuerySql);

const connectMysql = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
});

connectMysql.connect(function (err) {
  if (err) throw err;

  console.log("connect oke");
  // đọc file
  fs.readFile(pathQuerySql, "utf8", (err, data) => {
    if (err) throw err;
    connectMysql.query(data, function (err, result) {
      if (err) {
        console.log("co loi");
      } else {
        console.log("sql da thuc hien truy van");
      }
      // connectMysql.end();
    });
  });
});

module.exports = connectMysql;
