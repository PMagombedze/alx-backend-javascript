const fs = require('fs');

function countStudents (filepath) {
  let info;
  try {
    info = fs.readFileSync(filepath, { encoding: 'utf8', flag: 'r' });
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const files = info.split('\n');
  const myArr = [];
  const myArrTwo = [];

  files.forEach((file) => {
    const field = file.split(',');
    if (field.length > 0 && field[0] !== '') {
      if (field[3] === 'CS') {
        myArr.push(field[0]);
      } else if (field[3] === 'SWE') {
        myArrTwo.push(field[0]);
      }
    }
  });
  console.log(`Number of students: ${myArr.length + myArrTwo.length}`);
  console.log(`Number of students in CS: ${myArr.length}. List: ${myArr.join(', ')}`);
  console.log(`Number of students in SWE: ${myArrTwo.length}. List: ${myArrTwo.join(', ')}`);
}

module.exports = countStudents;
