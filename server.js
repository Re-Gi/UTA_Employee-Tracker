const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
require('dotenv').config();

//mysql database connection
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DATABASE
    }, 
    console.log('Connected to the company_db database.')
);

// initial navigation prompt, occurs at the start of the app and after the completion of each action
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

// displays table of current departments
function viewDepartments() {

    db.query('SELECT * FROM departments', function (err, results) {
        console.table('', results);
        mainPrompt();
    });
};

// displays table of current roles and their related departments
function viewRoles() {

    let sql = 'SELECT roles.id AS id, roles.title AS title, departments.name AS department, roles.salary AS salary FROM roles JOIN departments ON roles.department_id = departments.id'

    db.query(sql, function (err, results) {
        console.table('', results);
        mainPrompt();
    });
};

// displays table of current employees with their id, name, title, department, salary, and manager name.
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

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the new department?'
        }
    ]).then((result) => insertDept(result))
};

function insertDept(input) {

    let sql = 'INSERT INTO departments (name) VALUES (?)';
    let params = input.name;

    db.query(sql, params, function (err, result){
        console.log(`'${input.name}' department added to the database`);
        mainPrompt();
    })
}
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