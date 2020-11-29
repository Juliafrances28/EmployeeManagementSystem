const inquirer = require ("inquirer"); 
const EditorPrompt = require("inquirer/lib/prompts/editor");
const mysql  = require("mysql");
const cTable = require ("console.table");
const connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Username
  user: "root",
  // Your password
  password: "Barley2020",
  database: "employee_db",
});
 
'use strict';
// connect to mysql server and sql database 
connection.connect(function (err) {
if (err) throw err; 
console.log ('connected as id' + connect.threadId); 
// run the start function after the connection is made to prompt 
});

module.exports = connection; 


  inquirer.prompt([

    // {
    //   type: "input",
    //   name: "firstName",
    //   message: "What is the employee's first name?",
    // },
    // {
    //   type: "input",
    //   name: "lastName",
    //   message: "What is the employee's last name?",
    // },
    {
      type: "list",
      name: "department",
      message: "What is the employee's department?",
      choices: ["Editioral", "Marketing", "Programmer", "Sales", "Human Resources"],      
      },  
      {
      type: "list",
      name: "role",
      message: "What is the emplyee's role?",
      choices : ["Editor", "Graphic Designer", "Web Developer","Bookseller, HR Manager" ],
      },  
      {
       type: "list",
       message: "how to update the chart?",
       choices: ["view all employee" ,
       "view all departments", 
       "add employee",  
       "add department",
       "add roles",
       "update employee role"],
      },
  ]); 

// name: "choices" }).then (answers => {
//   console.log (answers.choices)
//    switch (answers.choices) {


// name = choices.then (answers => {
//   console.log (answers.choices)
//    switch (answers.choices) {

// case "view all employee":
// viewemployees() 
// break; 

// case  "view all departments":
// viewDepartments() 
// break; 

// case  "add employee":
// addEmployee() 
// break;  

// case "add department":
// addDepartment()
// break; 

// case "add roles":
// addRole()
// break; 

// case "update employee role": 
// updateEmployeeRole()
// break; 

// case "update employee role": 
// updateEmployeeRole()
// break; 

// default: 
// connection.end();
// break;

   
