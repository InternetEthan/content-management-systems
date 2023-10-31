// Import required modules
const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql');

// Create an instance of express
const app = express();

// Set up MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'database_name'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Set up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});