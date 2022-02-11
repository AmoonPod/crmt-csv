const fs = require("fs");

var results = require("./allacci.json");
if (results.length > 0) {
  var i = 1;
  var columnsIns = results[i];
  var insertcolumns = [];

  for (var key in columnsIns) {
    insertcolumns.push(key);
  }
  //console.log(insercolumns);
} else {
  console.log("No insercolumns");
}
//colonna per create table
let colonnaInsert = insertcolumns.join();
let columnsinsert = colonnaInsert.replaceAll(" ", "_");
exports.columnsinsert = columnsinsert;
