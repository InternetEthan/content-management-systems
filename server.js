// Import required modules
const inquirer = require('inquirer');
const mysql = require('mysql2');

// Set up MySQL connection
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'employee_tracker_db'
});

connection.connect((err) => {
    if (err) throw err;
    start();
  });

  function start() {
    inquirer
      .prompt({
        name: 'choice',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Exit'
        ]
      })
      .then((answer) => {
        switch (answer.choice) {
          case 'View all departments':
            viewDepartments();
            break;
  
          case 'View all roles':
            viewRoles();
            break;
  
          case 'View all employees':
            viewEmployees();
            break;
  
          case 'Exit':
            connection.end();
            break;
        }
      });
  }

  function viewDepartments() {
    const query = 'SELECT * FROM department';
    connection.query(query, (err, res) => {
      if (err) throw err;
      console.table(res);
      start();
    });
  }
  
  function viewRoles() {
    const query = 'SELECT * FROM role';
    connection.query(query, (err, res) => {
      if (err) throw err;
      console.table(res);
      start();
    });
  }
  
  function viewEmployees() {
    const query = 'SELECT * FROM employee';
    connection.query(query, (err, res) => {
      if (err) throw err;
      console.table(res);
      start();
    });
  }