const express = require("express");
const mysql = require("mysql");

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
app.get("/createcontratti", (req, res) => {
  var tabella = "contratti";
  var create = require("./contratti/create_columns");
  var columnscreate = create.columncreate;
  let sql =
    "CREATE TABLE " +
    tabella +
    " (ID int AUTO_INCREMENT PRIMARY KEY, " +
    columnscreate +
    " )";
  let query = db.query(sql, columnscreate, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("successo");
  });
});

app.get("/createallacci", (req, res) => {
  var tabella = "allacci";
  var create = require("./allacci/create_columns");
  var columnscreate = create.columncreate;
  let sql =
    "CREATE TABLE " +
    tabella +
    " (ID int AUTO_INCREMENT PRIMARY KEY, " +
    columnscreate +
    " )";
  let query = db.query(sql, columnscreate, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("successo");
  });
});

//aggiungi json
app.get("/addcontratti", (req, res) => {
  var tabella = "contratti";
  var create = require("./" + tabella + "/create_columns");
  var insert = require("./" + tabella + "/insert_columns");
  var value = require("./" + tabella + "/values");
  var columnscreate = create.columncreate;
  var columnsinsert = insert.columnsinsert;
  var valuesinsert = value.valuesinsert;

  let sql =
    "INSERT INTO " +
    tabella +
    "(" +
    columnsinsert +
    ") VALUES " +
    valuesinsert +
    "";
  let query = db.query(sql, (columnsinsert, valuesinsert), (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("successo");
  });
});

app.get("/addallacci", (req, res) => {
  var tabella = "allacci";
  var create = require("./" + tabella + "/create_columns");
  var insert = require("./" + tabella + "/insert_columns");
  var value = require("./" + tabella + "/values");
  var columnscreate = create.columncreate;
  var columnsinsert = insert.columnsinsert;
  var valuesinsert = value.valuesinsert;

  let sql =
    "INSERT INTO " +
    tabella +
    "(" +
    columnsinsert +
    ") VALUES " +
    valuesinsert +
    "";
  let query = db.query(sql, (columnsinsert, valuesinsert), (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("successo");
  });
});

app.listen("3000", () => {
  console.log("Server started correctly");
});
