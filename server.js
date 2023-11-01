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
          'Add department',
          'Add role',
          'Add employee',
          'Update employee role',
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

            case 'Add department':
            addDepartment();
            break;

            case 'Add role':
            addRole();
            break;

            case 'Add employee':
            addEmployee();
            break;

            case "update employee role":
            updateEmployeeRole();
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

  addDepartment = () => {
    inquirer
      .prompt([
        {
          name: 'id',
          type: 'input',
          message: 'Enter a unique ID for the department:'
        },
        {
          name: 'department',
          type: 'input',
          message: 'What is the name of the department?'
        }
      ])
      .then((answer) => {
        const query = 'INSERT INTO department (id, name) VALUES (?, ?)';
        connection.query(query, [answer.id, answer.department], (err, res) => {
          if (err) throw err;
          console.log('Department added.');
          start();
        });
      });
  }

  addRole = () => {
    inquirer
      .prompt([
        {
          name: 'id',
          type: 'input',
          message: 'Enter a unique ID for the role:'
        },
        {
          name: 'title',
          type: 'input',
          message: 'What is the title of the role?'
        },
        {
          name: 'salary',
          type: 'input',
          message: 'What is the salary for this role?'
        },
        {
          name: 'department_id',
          type: 'input',
          message: 'What is the department ID for this role?'
        }
      ])
      .then((answer) => {
        const query = 'INSERT INTO role (id, title, salary, department_id) VALUES (?, ?, ?, ?)';
        connection.query(query, [answer.id, answer.title, answer.salary, answer.department_id], (err, res) => {
          if (err) throw err;
          console.log('Role added.');
          start();
        });
      });
  }

  addEmployee = () => {
    inquirer
      .prompt([
        {
          name: 'id',
          type: 'input',
          message: 'Enter a unique ID for the employee:'
        },
        {
          name: 'first_name',
          type: 'input',
          message: 'What is the first name of the employee?'
        },
        {
          name: 'last_name',
          type: 'input',
          message: 'What is the last name of the employee?'
        },
        {
          name: 'role_id',
          type: 'input',
          message: 'What is the role ID for this employee?'
        },
        {
          name: 'manager_id',
          type: 'input',
          message: 'What is the manager ID for this employee?'
        }
      ])
      .then((answer) => {
        const query = 'INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?, ?)';
        connection.query(query, [answer.id, answer.first_name, answer.last_name, answer.role_id, answer.manager_id], (err, res) => {
          if (err) throw err;
          console.log('Employee added.');
          start();
        });
      });
  }