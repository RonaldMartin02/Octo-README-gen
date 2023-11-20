// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs').promises;
const generateMarkdown = require('./generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your title",
        name: "title"
    },
    {
        type: 'input',
        message: "What is your description",
        name: "description"
    },
    {
        type: 'input',
        message: "What is your license",
        name: "license"
    },
    {
        type: 'input',
        message: "What is your installation",
        name: "installation"
    },
    {
        type: 'input',
        message: "What is your usage",
        name: "usage"
    },
    {
        type: 'input',
        message: "What is your contributing",
        name: "contributing"
    },
    {
        type: 'input',
        message: "What is your tests",
        name: "tests"
    },
    {
        type: 'input',
        message: "What is your github",
        name: "github"
    },
    {
        type: 'input',
        message: "What is your email",
        name: "email"
    },
    {
        type: 'input',
        message: "What do you want to name this file",
        name: "fileName"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`,generateMarkdown(data));
}

// TODO: Create a function to initialize app
const init = async() =>{
    const data = await inquirer.prompt(questions);
    console.log(data.fileName)
    writeToFile(data.fileName,data)
}

// Function call to initialize app
init()
