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
    {
        type: 'input',
        name: 'install',
        message: 'Please provide instructions for installation of your Project? (comma deliminate each instruction)',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information about this Project. ',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please provide guidelines for contribution.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions for this Project. (comma deliminate each instruction)',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please provide a license for this Project. (Leave blank if n/a, hint MIT is typical)',
        choices: ['MIT','Mozilla','Unlicense','GNU GPLv3', 'Apache 2.0']
    },
    {
        type: 'input',
        name: 'gitHubUser',
        message: 'Please provide your GitHub username.)',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email to contact you for questions on this project.)',
        validate: function(email)
        {
            //from stackoverflow
            // Regex mail check (return true if valid mail)
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }
    },
];

/**
 * function to write README file that was Create a 
 * @param {*} fileName - string, any file name with extension
 * @param {*} data - inquirer JSON object, pass to generateMarkDown script to format README
 */
function writeToFile(fileName, data) {
    const fileContents = markdownGenerator.generateMarkdown(data);
    fs.writeFile(fileName, fileContents, (err) =>
        err ? console.log(err) 
            : console.log('A file README.md file has been made in this directory!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log('please wait sending response to write file function');
            writeToFile('README.md', response);
        });
}

// Function call to initialize app
init();
