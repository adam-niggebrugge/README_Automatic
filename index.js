// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this Project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of the Project?',
    },
    // {
    //     type: 'input',
    //     name: 'install',
    //     message: 'Please provide instructions for installation of your Project? (if applicable)',
    // },
    // {
    //     type: 'input',
    //     name: 'usage',
    //     message: 'Please provide usage information about this Project.',
    // },
    // {
    //     type: 'input',
    //     name: 'contribute',
    //     message: 'Please provide guidelines for contribution.',
    // },
    // {
    //     type: 'input',
    //     name: 'test',
    //     message: 'Please provide test instructions for this Projecct.',
    // }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
