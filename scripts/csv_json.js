const csv = require("csv-parser");
const fs = require("fs");
const results = [];

fs.createReadStream("dettaglio.csv")
  .pipe(csv({ separator: ";" }))
  .on("data", (data) => results.push(data))
  .on("end", () => {
    ///console.log(results);
    ///console.log(JSON.stringify(results));
    console.log(JSON.stringify(results));
    fs.writeFile("details.json", JSON.stringify(results), (err) => {
      if (err) {
        console.log("Error writing file", err);
      } else {
        console.log("Successfully wrote file");
      }
    });
  });
