const connection = require("./config");
const express = require("express");
const Registation = require("./registation");
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors())
connection.connect((err) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log("connected");
  }
});

//Get all Employee Data

app.get("/", (request, response) => {
  connection.query("select * from register", (error, result) => {
    response.send(result);
  });
});

//Add employee
app.post("/add", (request, response) => {
  const data = request.body;
  const c = Object.assign(new Registation(), data);
  console.log(c);
  connection.query(
    "insert into register  set ? ",
    c,
    (error, result, fields) => {
      if (error) error, data;
      response.send("Data Inserted " + result);
    }
  );
});

app.listen(4000, () => console.log("the application running on port 4000"));
