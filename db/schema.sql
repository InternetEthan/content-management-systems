DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;

use employee_tracker_db;

CREATE TABLE department (
    ID INT PRIMARY KEY,
    name VARCHAR(30) NOT NULL DEFAULT ''
);

CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(10,2),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department (id)
);

CREATE TABLE employee (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT DEFAULT 1,
    FOREIGN KEY (role_id) REFERENCES role (id),
    manager_id INT DEFAULT NULL,
    FOREIGN KEY (manager_id) REFERENCES employee (ID)
);
