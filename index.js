// TODO: Include packages needed for this application
const markdownGenerator = require('./utils/generateMarkdown');
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
    //     message: 'Please provide instructions for installation of your Project? (Leave blank if n/a)',
    // },
    // {
    //     type: 'input',
    //     name: 'usage',
    //     message: 'Please provide usage information about this Project. ',
    // },
    // {
    //     type: 'input',
    //     name: 'contribute',
    //     message: 'Please provide guidelines for contribution.',
    // },
    // {
    //     type: 'input',
    //     name: 'test',
    //     message: 'Please provide test instructions for this Project. (Leave blank if n/a)',
    // }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data);
    const fileContents = markdownGenerator.generateMarkdown(data);
    fs.writeFile(fileName, fileContents, (err) =>
        err ? console.log(err) 
            : console.log('A file README.md file has been made in this directory!')
    );
}

// TODO: Create a function to initialize app
function init() {
    console.log('before inquirer runs promise');

    inquirer
        .prompt(questions)
        .then((response) => {
            console.log(response);
            writeToFile('README.md', response);
        });
}

// Function call to initialize app
init();
