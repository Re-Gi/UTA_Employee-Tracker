const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
require('dotenv').config();

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DATABASE
    }, 
    console.log('Connected to the company_db database.')
);

// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
    // function basePrompt(){ inquirer.prompt.then((response) => switch-case => otherFunction()) }
function mainPrompt() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'next',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        }
    ]).then((result) => {
        switch (result.next) {
            case 'View all departments':
                viewDepartments();
                break;
            case 'View all roles':
                viewRoles();
                break;
            case 'View all employees':
                viewEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case 'Update an employee role':
                updateEmployeeRole();
                break;
        }
    });
};

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
    //function viewDepartments(){ db.query(select department table){ console.table(response) } .then(() => mainPrompt()) }
function viewDepartments() {

    db.query('SELECT * FROM departments', function (err, results) {
        console.table('', results);
        mainPrompt();
    });
};

// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
    //function viewRoles(){ db.query(select role table){ console.table(response) } .then(() => mainPrompt()) }
function viewRoles() {

    let sql = 'SELECT roles.id AS id, roles.title AS title, departments.name AS department, roles.salary AS salary FROM roles JOIN departments ON roles.department_id = departments.id'

    db.query(sql, function (err, results) {
        console.table('', results);
        mainPrompt();
    });
};

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
    //function viewEmployees(){ db.query(select employee table){ console.table(response) } .then(() => mainPrompt()) }
function viewEmployees() {

    let sql = "SELECT employee.id, employee.first_name, employee.last_name, roles.title, departments.name AS department, roles.salary, CONCAT(manager.first_name,' ', manager.last_name) AS manager FROM employees employee LEFT OUTER JOIN employees manager ON employee.manager_id = manager.id JOIN roles ON employee.role_id = roles.id JOIN departments ON roles.department_id = departments.id"

    db.query(sql, function (err, results) {
        console.table('', results);
        mainPrompt();
    })
};

// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
    // function addDepartment(){ inquirer.prompt.then((name) => db.query(insert ? into department)) }
function addDepartment() {
    console.log('Add a department');
};

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
    // function addRole(){ inquirer.prompt.then((title, salary, department_id) => db.query(insert ? into role)) }
    //For department choice: prompt{ type: list, message: "Which dept?", name: "department_id", choices: [deptsArray]}
        //Where does deptsArray come from? db.query(select * department){let deptArray = response}.then inquirer? New function mayhaps??
function addRole() {
    console.log('Add a role');
};

// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
    // function addEmployee(){ inquirer.prompt.then((first_name, last_name, role_id, manager_id) => db.query(insert ? into role)) }
        //will need roleArray and mgrArray
function addEmployee() {
    console.log('Add an employee');
};

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
    // function updateEmployeeRole(){ inquirer.prompt.then((employee, new role) => let variables).then((variables) => db.query(set )) }
        //will need employeeArray and roleArray
function updateEmployeeRole() {
    console.log('Update an employee role');
};
        
//look into inquirer docs for choices, can have own msg and name keys?

mainPrompt();