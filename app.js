const express = require("express");
const mysql = require("mysql");

var create = require("./scripts/create_columns");
var insert = require("./scripts/insert_columns");
var value = require("./scripts/values");

var columns = create.columncreate.slice(0, -1);
var insertcolumns = columns;

var column = columns.column;
////Create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ordini",
});
db.connect(function (err) {
  if (err) throw err;
  console.log("DB CONNESSO");
});
const app = express();
//crea tabella ordine
app.get("/createordertable", (req, res) => {
  let sql = "CREATE TABLE ordine (" + columns + ")";
  let query = db.query(sql, columns, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("successo");
  });
});

//aggiungi json
app.get("/addliquidity", (req, res) => {
  let sql =
    "INSERT INTO ordine (" + column + ") VALUES (" + "'" + values + "'" + ")";
  let query = db.query(sql, column, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("successo");
  });
});

app.listen("3000", () => {
  console.log("Server started correctly");
});
