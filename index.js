// TODO: Include packages needed for this application
import generateMarkdown from './utils/generateMarkdown.js';
import inquirer from 'inquirer';
import colors from 'colors';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [];
    inquirer
    .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? '
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a brief description of your project: '
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install this project? '
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'Provide a list of required dependencies for this project: '
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'Please select the license you would like to use',
        choices: ['MIT License', 'Apache License 2.0', 'BSD 3-Clause License', 'Mozilla Public License 2.0', 'GNU General Public License v3.0', 'The Unlicense']
    },
    {
        type: 'input',
        name: 'author',
        message: 'List the contributing author(s) of this project. Include name(s) and email(s): '
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address: '
    }
])
    .then((answers) => {
        const readMe = generateMarkdown(answers);
        writeToFile('README.md', readMe);
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            console.error(colors.red("An error occured while saving the README.md file."));
        } else {
            console.log(colors.green(`Your README.md file has been successfully generated!`));
        }
    });
}

// TODO: Create a function to initialize app
function init() {}
   // inquirer
   // .prompt(questions)
   // .then((data) => {
   //     writeToFile("generated-readme/README.md", generateMarkdown(data));
   // });
// }

// Function call to initialize app
init();