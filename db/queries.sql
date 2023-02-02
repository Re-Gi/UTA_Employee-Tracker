-- a formatted table showing department names and department ids
SELECT * FROM departments;

-- presented with the job title, role id, the department that role belongs to, and the salary for that role
SELECT roles.title AS title, roles.id AS id, departments.name AS department, roles.salary AS salary
FROM roles
JOIN departments ON roles.department_id = departments.id;

-- a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
SELECT employee.id, employee.first_name, employee.last_name, roles.title, departments.name AS department, roles.salary, CONCAT(manager.first_name,' ', manager.last_name) AS manager
FROM employees employee
LEFT OUTER JOIN employees manager ON employee.manager_id = manager.id
JOIN roles ON employee.role_id = roles.id
JOIN departments ON roles.department_id = departments.id;

-- add a department 
-- INSERT INTO departments (keys) VALUES (variables);

-- add a role 
-- INSERT INTO roles (keys) VALUES (variables);

-- add an employee 
-- INSERT INTO employees (keys) VALUES (variables);

-- update an employee role 
-- UPDATE role SET key = variable WHERE key = variable;