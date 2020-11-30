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

function viewEmployees()  {
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

// why is this dull? 
function viewDepartments() {
connection.query(
  `select department.id, department.title, roles.title
  from department 
  INNER JOIN roles on roles.id = roles.department_id`,
  function (err, result, fields) {
    if (err) throw err;
    console.table(result);
    connection.end();
  }
)

};

// why is this dull? 

function viewRoles() {
connection.query(
  `select roles.id, roles.title, roles.salary. roles.department_id
  from roles 
  INNER JOIN department ON department.id = roles.department_id`,

  function (err, result, fields) {
    if (err) throw err;
    console.table(result);
    connection.end();

  }

)  
  };
function addEmployee() {
  connection.query(
    `select employee.id, first_name, last_name, role_id
  from employee`,
    function (err, result, fields) {
      if (err) throw err;
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
                `insert into employee (first_name, last_name, role_id) values (?,?,?)`, [first, last, role,],

                function (err, result, fields) {
                  if (err) throw err;
                  connection.end (); 
              }); 

            });
        });
    }
  )


// the department table should have a name column but I gave it a title column instead. I just changes the column header.   
  function addDepartment() {
  connection.query
    `select department.id, department.title, 
  from department`,
    function (err, result, fields) {
      if (err) throw err;
      inquirer
        .prompt([
          {
            type: "input",
            name: "department_id",
            message: "What is the department_id?",
          },
          {
            type: "input",
            name: "department",
            message: "What department does this employee work in?",
          },
        ])

       // why is the variable dull? It matches with the counter part on right...
        .then((answerDep) => {
          var depID = answerDep.depID;
          var title = answerDep.title;
      
            connection.query(
              `insert into department (id, title) values (?,?,?)`, [id, title],
              
        function(err, result, fields) {
        if (err) throw err;
        connection.end (); 
   
      }); 



function addRole() {
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
            name: "Salary",
            message: "What is the employee's salary?",
          },
          {
            type: "input",
            name: "title",
            message: "What is the employee's title?",
          },
        ])
        .then((answerRole) => {
          var title = answerRole.title;
          var  salary = answerRole.salary

          console.table(result);

          inquirer
            .prompt([
              {
                type: "input",
                name: "department",
                message: "What is the emplyee's department_id?"
              },
            ])
            .then((answerID) => {
              var ID = answerID.roleID
              connection.query(
                `insert into roles (title,salary department_id) values (?,?,?)`, [title, salary, department_id],

                function (err, result, fields) {
                  if (err) throw err;
                  connection.end (); 

         //// why is the function name dull?  all the openers and closers match up.           
function updateEmployeeRole () {
  connection.query(
    `select roles.id, roles.title, roles.salary, roles.department_id
  from roles`,
    function (err, result, fields) {
      if (err) throw err;
      // console.table(result);
    }
    
  )};

  
      inquirer .prompt([
          {
            type: "input",
            name: "newSalary",
            message: "What is the employee's new salary?",
          },
          {
            type: "input",
            name: "newtitle",
            message: "What is the employee's new title?",
          },
        ])
        .then((answerRole) => {
          var title = answerRole.title;
          var  salary = answerRole.salary

          console.table(result);
        
        
          inquirer
            .prompt([
              {
                type: "input",
                name: "department",
                message: "What is the emplyee's department_id?"
              },
            ])
            .then((answerID) => {
             // why is the variable ID dull? It is a repeated syntax and in other places this is not a issue. 

              var ID = answerID.roleID
              connection.query(
                `insert into roles (title,salary department_id) values (?,?,?)`, [title, salary, department_id],
            //why is the word, result, dull?  this particular line of code is repeated in a number of places and  that is only the case here...
                function (err, result, fields) {
                  if (err) throw err;
                  connection.end (); 
            
                })
                
            
  
            
         function removeEmployees() {
                    connection.query(
                      (`select employee employee.id, employee.first_name, employee.last_name)`,
                   
                      function (err, result, fields) {
                        if (err) throw err;
                        console.table(result);
                        connection.end();
                      }) 

                    )};
                    

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

module.exports = connection 
   
});   

   });


  });

                

