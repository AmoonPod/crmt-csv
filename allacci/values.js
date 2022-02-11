//mi restituisce i values
var results = require("./allacci.json");
// var insertvalues = [];
var parentesis = [];
// you can loop through all, assuming that each result set is the same.
if (results.length > 0) {
  for (var i = 0; i < results.length; i++) {
    var columnsIn = results[i];
    //insertvalues.push("(");
    let insertvalues = [];
    for (var key in columnsIn) {
      insertvalues.push("'" + results[i][key] + "'");
    }
    let joinedinsertvalues = insertvalues.join();
    parentesis.push("(" + joinedinsertvalues + ")");
  }
} else {
  console.log("No columns");
}

let valuesinsert = parentesis.join();
// let valuesinsert = valoreInsert.replaceAll("---", "***");
//let valuesInsert = valuesinsert.replaceAll(",'',", "");

exports.valuesinsert = valuesinsert;
