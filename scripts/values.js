//mi restituisce i values
var results = require("../details.json");
var values = [];
// you can loop through all, assuming that each result set is the same.
if (results.length > 0) {
  // iterating through the results array
  for (var i = 0; i < results.length; i++) {
    // get i-th object in the results array
    var columnsIn = results[i];
    // loop through every key in the object
    for (var key in columnsIn) {
      values.push(results[i][key]);
      // here is your column name you are looking for + its value
    }
  }
} else {
  console.log("No columns");
}
exports.values = values;
