const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const fs = require("fs");
const html = require("./generateHTML");
const team = [];

const managerPrompt = () => {
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
            team.push(teamManager);
            employeePrompt();
        })
}

const employeePrompt = () => {
    inquirer
        .prompt([
            {
                type: "confirm",
                message: "Would you like to add an employee?",
                name: "addEmployee"
            }
        ])
        .then(function ({ addEmployee }) {
            if (addEmployee) {
                inquirer
                    .prompt([
                        {
                            type: "list",
                            message: "Choose employee type:",
                            choices: ["Intern", "Engineer"],
                            name: "employeeType"
                        }
                    ])
                    .then(function ({ employeeType }) {
                        if (employeeType === "Intern") {
                            internPrompt();
                        } else if (employeeType === "Engineer") {
                            engineerPrompt();
                        }
                    })
            }
            else {
                fs.writeFile('../output/team.html', html.generateHTML(team), (err) => {
                    if (err) throw err;
                    console.log('The file has been saved!');
                });
            }
        })
}


const internPrompt = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter intern's name:",
                name: "internName"
            },
            {
                type: "input",
                message: "Enter intern's ID:",
                name: "internId"
            },
            {
                type: "input",
                message: "Enter intern's email:",
                name: "internEmail"
            },
            {
                type: "input",
                message: "Enter intern's school:",
                name: "internSchool"
            },
        ])
        .then(function ({ internName, internId, internEmail, internSchool }) {
            const newIntern = new Intern(internName, internId, internEmail, internSchool)
            team.push(newIntern);
            employeePrompt();
        })
}


const engineerPrompt = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter engineer's name:",
                name: "engineerName"
            },
            {
                type: "input",
                message: "Enter engineer's ID:",
                name: "engineerId"
            },
            {
                type: "input",
                message: "Enter engineer's email:",
                name: "engineerEmail"
            },
            {
                type: "input",
                message: "Enter engineer's GitHub username:",
                name: "engineerGithub"
            },
        ])
        .then(function ({ engineerName, engineerId, engineerEmail, engineerGithub }) {
            const newEngineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub)
            team.push(newEngineer);
            employeePrompt();
        })
}

const start = () => {
    managerPrompt();
}

start();

