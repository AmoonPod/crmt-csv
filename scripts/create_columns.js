const fs = require("fs");

var results = require("../details.json");

if (results.length > 0) {
  var i = 1;
  var columnsCr = results[i];
  var createcolumns = [];

  for (var key in columnsCr) {
    createcolumns.push(key);
  }
  //console.log(createcolumns);
} else {
  console.log("No createcolumns");
}

//colonna per create table
let colonnaCreate = createcolumns.join();
let text = colonnaCreate.replaceAll(" ", "_");
let columncreate = text.replaceAll(",", " TEXT,");
exports.columncreate = columncreate;
