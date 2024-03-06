import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const filepath = process.argv.length > 2 ? process.argv[2] : '';
      const tuples = await readDatabase(filepath);
      const columns = Object.keys(tuples);
      columns.sort((x, y) => {
        if (x < y) return -1;
        if (x > y) return 1;
        return 0;
      });
      response.statusCode = 200;
      response.write('This is the list of our students\n');
      for (const field of columns) {
        response.write(`Number of students in ${field}: ${tuples[field].length}. List: ${tuples[field].join(', ')}`);
        if (columns.indexOf(field) !== columns.length - 1) response.write('\n');
      }
    } catch (err) {
      response.statusCode = 500;
      response.write(err.message);
    }
    response.end();
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (['CS', 'SWE'].indexOf(major.toUpperCase()) === -1) {
      response.statusCode = 500;
      response.send('Major parameter must be CS or SWE');
    } else {
      const filepath = process.argv.length > 2 ? process.argv[2] : '';
      try {
        const tuples = await readDatabase(filepath);
        response.statusCode = 200;
        response.write(`List: ${tuples[major.toUpperCase()].join(', ')}`);
      } catch (err) {
        response.statusCode = 500;
        response.write(err.message);
      }
      response.end();
    }
  }
}

export default StudentsController;
