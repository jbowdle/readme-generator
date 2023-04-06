const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

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
        choices: ["MIT", "APACHE 2.0", "BSD 3", "None"],
    },
    {
        type: "input",
        name: "year",
        message: "Please enter the year for the copyright:",
    },
    {
        type: "input",
        name: "copyright",
        message: "Please enter the name of the copyright holder:",
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
function writeToFile(fileName, data) {
    const fileFramework = generateMarkdown(data);

    fs.writeFile(fileName, fileFramework, (err) =>
        err ? console.log(err) : console.log("Markdown generated")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const fileName = `${data.title}README.md`;

            writeToFile(fileName, data);
        });
}

// Function call to initialize app
init();
