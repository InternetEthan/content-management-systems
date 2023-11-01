-- Seed department table
INSERT INTO department (id, name) VALUES
(1, 'Sales'),
(2, 'Marketing'),
(3, 'Engineering');

-- Seed role table
INSERT INTO role (id, title, salary, department_id) VALUES
(1, 'Salesperson', 50000.00, 1),
(2, 'Sales Manager', 80000.00, 1),
(3, 'Marketing Coordinator', 45000.00, 2),
(4, 'Marketing Manager', 75000.00, 2),
(5, 'Software Engineer', 100000.00, 3),
(6, 'Senior Software Engineer', 120000.00, 3),
(7, 'Engineering Manager', 150000.00, 3);

-- Seed employee table
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES
(2, 'Jane', 'Doe', 2, NULL),
(4, 'Alice', 'Johnson', 4, NULL),
(7, 'Ethan', 'Internet', 7, NULL),
(1, 'John', 'Doe', 1, 2),
(3, 'Bob', 'Smith', 3, 4),
(5, 'Charlie', 'Brown', 5, 7),
(6, 'David', 'Lee', 6, 7);
