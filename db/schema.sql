DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;

use employee_tracker_db;

CREATE TABLE department (
    ID INT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(10,2),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department (id)
);

CREATE TABLE employee (
    ID INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    foreign key (role_id) references role (id),
    manager_id INT
);
