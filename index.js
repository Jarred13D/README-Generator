// TODO: Include packages needed for this application
import generateMarkdown from 'generateMarddown.js';
import inquirer from 'inquirer';
import colors from 'colors';
import fs from "fs";
import Choices from 'inquirer/lib/objects/choices';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a brief description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install this project?'
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'Provide a list of required dependencies for this project.'
    },
    {
        type: 'input',
        name: 'licenses',
        message: 'Please select the license you would like to use',
        Choices: ['MIT License', 'BSD 2-Clause License', 'BSD 3-Clause License', 'Apache License 2.0', 'Mozilla Public License 2.0', 'GNU General Public License v3.0', 'Boost Software License 1.0', 'The Unlicense']
    },
    {
        type: 'input',
        name: 'author',
        message: 'List the contributing author(s) of this project. Include name(s) and email(s)'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();