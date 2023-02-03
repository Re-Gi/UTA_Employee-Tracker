-- a formatted table showing department names and department ids
SELECT * FROM departments;

-- presented with the job title, role id, the department that role belongs to, and the salary for that role
SELECT roles.id AS id, roles.title AS title, departments.name AS department, roles.salary AS salary FROM roles JOIN departments ON roles.department_id = departments.id;

-- a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
SELECT employee.id, employee.first_name, employee.last_name, roles.title, departments.name AS department, roles.salary, CONCAT(manager.first_name,' ', manager.last_name) AS manager
FROM employees employee
LEFT OUTER JOIN employees manager ON employee.manager_id = manager.id
JOIN roles ON employee.role_id = roles.id
JOIN departments ON roles.department_id = departments.id;

-- add a department 
-- INSERT INTO departments (name) VALUES ('Snack Acquisition');
INSERT INTO departments (name) VALUES (?)

-- add a role 
-- INSERT INTO roles (title, salary, department_id) VALUES ('Snack Grabber', 1000000, 5);
INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)

-- add an employee 
-- INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Rebecca', 'Girndt', 9, null);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)

-- update an employee role 
-- UPDATE employees SET role_id = 9 WHERE id = 1;
UPDATE employees SET role_id = ? WHERE id = ?

-- Update employee managers.
-- UPDATE employees SET manager_id = 3 WHERE manager_id = 1;
UPDATE employees SET manager_id = ? WHERE manager_id = ?;