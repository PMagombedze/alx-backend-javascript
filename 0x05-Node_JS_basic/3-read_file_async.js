/**
 * Reads file asynchronously
 */
const fs = require("fs");

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

    console.log(`Number of students: ${myArr.length + myArrTwo.length}`);
    console.log(`Number of students in CS: ${myArr.length}. List: ${myArr.join(", ")}`);
    console.log(`Number of students in SWE: ${myArrTwo.length}. List: ${myArrTwo.join(", ")}`);
  } catch (err) {
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
