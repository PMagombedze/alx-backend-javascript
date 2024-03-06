import fs from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, records) => {
      if (err) reject(new Error('Cannot load the database'));
      else {
        const data = records.split('\n');
        data.splice(0, 1);
        const report = {};
        data.forEach((record) => {
          const line = record.split(',');
          if (line[3] && line[0]) {
            if (Object.keys(report).indexOf(line[3]) === -1) {
              report[line[3]] = [line[0]];
            } else {
              (report[line[3]]).push(line[0]);
            }
          }
        });
        resolve(report);
      }
    });
  });
}

export default readDatabase;
