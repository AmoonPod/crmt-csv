const { strict } = require("assert");
const csv = require("csv-parser");
const fs = require("fs");
const results = [];

fs.createReadStream("../csvs/contratti.csv")
  .pipe(csv({ separator: ";" }))
  .on("data", (data) => {
    delete data[""];
    results.push(data);
  })

  .on("end", () => {
    fs.writeFile("contratti.json", JSON.stringify(results), (err) => {
      if (err) {
        console.log("Error writing file", err);
      } else {
        console.log("Successfully wrote file");
      }
    });
  });
