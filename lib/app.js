const inquirer = require("inquirer");
const Manager = require("./Manager");
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const fs = require("fs");
const axios = require("axios");
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
            console.log('teamManager', teamManager);
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
                console.log('final team array:', team)
                fs.writeFile('team.html', html.generateHTML(team), (err) => {
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
            console.log('newIntern', newIntern);
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
            console.log('newEngineer', newEngineer);
            team.push(newEngineer);
            // const queryUrl = `https://api.github.com/users/${engineerGithub}`;
            // axios
            //     .get(queryUrl)
            //     .then(function (res) {
            //         const userProfile = res.data.html_url;
            //         console.log(userProfile);
            //     })
            employeePrompt();
        })
}


const start = () => {
    managerPrompt();
}

start();

