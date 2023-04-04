const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter your project title:",
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a project description:",
    },
    {
        type: "input",
        name: "install",
        message: "Please enter installation commands:",
        default: "npm i",
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter usage information:",
    },
    {
        type: "input",
        name: "contribution",
        message: "Please enter contribution guidelines:",
    },
    {
        type: "input",
        name: "test",
        message: "Please enter test commands:",
        default: "npm test",
    },
    {
        type: "list",
        name: "license",
        message: "What license would you like?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username:",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address:",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
