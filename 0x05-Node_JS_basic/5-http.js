const fs = require("fs");
const http = require("http");

const hostname = "127.0.0.1";
const port = 1245;

async function countStudents(path) {
  try {
    const files = await fs.promises.readFile(path, "utf8");
    const file = files.split("\n");

    const myArr = [];
    const myArrTwo = [];

    file.forEach((record) => {
      const field = record.split(",");
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
    return str;
  } catch (err) {
    throw new Error("Cannot load the database");
  }
}

const app = http.createServer(async (req, res) => {
  res.setHeader("file-Type", "text/plain");
  if (req.url === "/") {
    res.write("Hello Holberton School!");
  } else if (req.url === "/students") {
    res.write("This is the list of our students\n");
    const database = process.argv.length > 2 ? process.argv[2] : "";
    try {
      const file = await countStudents(database);
      res.write(file);
    } catch (err) {
      res.write(err.message);
    }
  }
  res.end();
});

app.listen(port, hostname);

module.exports = app;
