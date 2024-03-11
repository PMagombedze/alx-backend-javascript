const fs = require("fs");
const express = require("express");

const app = express();
const port = 1245;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, records) => {
      if (err) reject(new Error("Cannot load the database"));
      else {
        const files = records.split("\n");
        const myArr = [];
        const myArrTwo = [];

        files.forEach((file) => {
          const field = file.split(",");
          if (field.length > 0) {
            if (field[3] === "CS") {
              myArr.push(field[0]);
            } else if (field[3] === "SWE") {
              myArrTwo.push(field[0]);
            }
          }
        });

        let str = `Number of students: ${myArr.length + myArrTwo.length}\n`;
        str += `Number of students in CS: ${myArr.length}. List: ${myArr.join(", ")}\n`;
        str += `Number of students in SWE: ${myArrTwo.length}. List: ${myArrTwo.join(", ")}`;
        resolve(str);
      }
    });
  });
}

app.get("/", (req, res) => {
  res.send("Hello Holberton School!");
});

app.get("/students", async (req, res) => {
  res.write("This is the list of our students\n");
  const database = process.argv.length > 2 ? process.argv[2] : "";
  try {
    const files = await countStudents(database);
    res.write(files);
  } catch (err) {
    res.write(err.message);
  }
  res.end();
});

app.listen(port);

module.exports = app;
