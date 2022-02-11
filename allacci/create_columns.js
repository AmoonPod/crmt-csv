const fs = require("fs");

var results = require("./allacci.json");

if (results.length > 0) {
  var i = 1;
  var columnsCr = results[i];
  var createcolumns = [];

  for (var key in columnsCr) {
    let chiave = key.replaceAll(" ", "_");
    createcolumns.push(chiave + " TEXT");
  }
  //console.log(createcolumns);
} else {
  console.log("No createcolumns");
}

//colonna per create table
let colonnaCreate = createcolumns.join();
let columncreate = colonnaCreate;
exports.columncreate = columncreate;
