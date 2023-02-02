// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
    // function basePrompt(){ inquirer.prompt.then((response) => switch-case => otherFunction()) }


// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
    //function viewDepartments(){ db.query(select department table){ console.table(response) } .then(() => basePrompt()) }


// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
    //function viewRoles(){ db.query(select role table){ console.table(response) } .then(() => basePrompt()) }


// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
    //function viewEmployees(){ db.query(select employee table){ console.table(response) } .then(() => basePrompt()) }


// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
    // function addDepartment(){ inquirer.prompt.then((name) => db.query(insert ? into department)) }


// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
    // function addRole(){ inquirer.prompt.then((title, salary, department_id) => db.query(insert ? into role)) }
    //For department choice: prompt{ type: list, message: "Which dept?", name: "department_id", choices: [deptsArray]}
        //Where does deptsArray come from? db.query(select * department){let deptArray = response}.then inquirer? New function mayhaps??


// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
    // function addEmployee(){ inquirer.prompt.then((first_name, last_name, role_id, manager_id) => db.query(insert ? into role)) }
        //will need roleArray and mgrArray


// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
    // function updateEmployeeRole(){ inquirer.prompt.then((employee, new role) => let variables).then((variables) => db.query(set )) }
        //will need employeeArray and roleArray

        
//look into inquirer docs for choices, can have own msg and name keys?