const inquirer = require("inquirer");
const Manager = require("./Manager");
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");


// Inquirer prompt for manager info
inquirer
    .prompt([
        {
            type: "input",
            message: "Enter team manager's name:",
            name: "managerName"
        },
        {
            type: "input",
            message: "Enter team manager's ID:",
            name: "managerId"
        },
        {
            type: "input",
            message: "Enter team manager's email:",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "Enter team manager's office number:",
            name: "managerOffice"
        }
    ])
    .then(function ({ managerName, managerId, managerEmail, managerOffice }) {
        const teamManager = new Manager(managerName, managerId, managerEmail, managerOffice)
        console.log(teamManager);
    })


// Inquirer prompt for employees
inquirer
    .prompt([
        {
            type: "input",
            message: "Enter employee name:",
            name: "employeeName"
        },
        {
            type: "list",
            message: "Choose employee type:",
            name: "employeeType",
            choices: ["Intern", "Engineer"]
        },
        {
            type: "input",
            message: "Enter employee's ID:",
            name: "employeeId"
        },
        {
            type: "input",
            message: "Enter employee's email:",
            name: "employeeEmail"
        },
        {
            type: "input",
            message: "Enter employee's GitHub username or school:",
            name: "employeeGitSchool"
        }
    ])
    .then(function ({ employeeName, employeeType, employeeId, employeeEmail, employeeGitSchool }) {
        const newEmployee = new Employee(employeeName, employeeType, employeeId, employeeEmail, employeeGitSchool)
        console.log(newEmployee);
    })