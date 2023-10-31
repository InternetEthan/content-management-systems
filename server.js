// Import required modules
const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql');

// Create an instance of express
const app = express();

// Set up MySQL connection
const connection = mysql.createConnection({
    host: '127.0.0.2',
    user: 'root',
    password: '',
    database: 'employee_tracker_db'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

// Set up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});