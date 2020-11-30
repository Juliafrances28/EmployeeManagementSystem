
const inquirer = require("inquirer");
const mysql = require("mysql");

const EditorPrompt = require("inquirer/lib/prompts/editor");
const cTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Username
  user: "root",
  // Your password
  password: "barley2020",
  database: "employee_db",
});

("use strict");
function viewEmployees() {
  // select * from employee order by last_name
  console.log("Julia Horan");
  connection.query(
    `select employee.id, employee.first_name, employee.last_name, roles.title 
      from employee 
      INNER JOIN roles ON roles.id = employee.role_id`,
    function (err, result, fields) {
      if (err) throw err;
      console.table(result);
      connection.end();
    }
  );
  // copy and past just change the query
  // for the add use inqurier to ask user stuff
}

function viewDepartments() {}
console.log("Julia Horan");
connection.query(
  `select department.id, department.title, roles.title
  from department 
  INNER JOIN roles on roles.id = roles.department_id`,
  function (err, result, fields) {
    if (err) throw err;
    console.table(result);
    connection.end();
  }
);

function viewRoles() {}
console.log("Julia Horan");
connection.query(
  `select roles.id, roles.title, roles.salary. roles.department_id
  from roles 
  INNER JOIN department ON department.id = roles.department_id`,

  function (err, result, fields) {
    if (err) throw err;
    console.table(result);
    connection.end();



function addEmployee() {
  connection.query(
    `select roles.id, roles.title, roles.salary, roles.department_id
  from roles`,
    function (err, result, fields) {
      if (err) throw err;
      // console.table(result);
      inquirer
        .prompt([
          {
            type: "input",
            name: "firstName",
            message: "What is the employee's first name?",
          },
          {
            type: "input",
            name: "lastName",
            message: "What is the employee's last name?",
          },
        ])
        .then((answerName) => {
          var first = answerName.firstName;
          var last = answerName.lastName;
          
          console.table(result);

          inquirer
            .prompt([
              {
                type: "input",
                name: "role",
                message: "What is the emplyee's role_id?"
              },
            ])
            .then((answerRole) => {
              var role = answerRole.role
              connection.query(
                // insert into employee (first_name, last_name, role_id) values ('Julia', 'Horan', 1);

                `insert into employee (first_name, last_name, role_id) values (?,?,?)`, [first, last, role,],

                function (err, result, fields) {
                  if (err) throw err;
                  connection.end (); 
              }); 

            });
        });
    }
  )

  function addDepartment() {}
  
function addRole() {}

function updateEmployeeRole() {}

const init = async () => {
  try {
    // connect to mysql server and sql database
    await connection.connect(function (err) {
      if (err) throw err;
      console.log("connected as id" + connection.threadId);

      // run the start function after the connection is made to prompt
    });

    const answers = await inquirer
      .prompt([
        {
          type: "list",
          name: "action",
          message: "how to update the chart?",
          choices: [
            "view all employees",
            "view all departments",
            "view all roles",
            "add employee",
            "add department",
            "add role",
            "update employee role",
          ],
        },
      ])
      .then((answers) => {
        console.log(JSON.stringify(answers));
        switch (answers.action) {
          case "view all employees":
            viewEmployees();
            break;

          case "view all departments":
            viewDepartments();
            break;

          case "view all roles":
            viewRoles();
            break;

          case "add employee":
            addEmployee();
            break;

          case "add department":
            addDepartment();
            break;

          case "add role":
            addRole();
            break;

          case "update employee role":
            updateEmployeeRole();
            break;

          default:
            connection.end();
            break;
        }
      });
  } catch (err) {
    console.log(err);
  }
};

init();

module.exports = connection;
