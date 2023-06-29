const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const routeTask = require("./routes/task.route");

//middleware
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());
//route
app.use("/api/v1/task", routeTask);

//handle Error

//Start Sever
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Sever Express running http://localhost:${PORT}`);
});
