const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const handler = require('./lib/Profile');

// questions to answer and pass to employee card

const templateArray = [];

const profile = () => {

    return inquirer
    .prompt([
        {
            type: 'list',
            message: 'What is the role of the Employee?',
            name: 'role',
            choices: ['Engineer', 'Manager', 'Intern']
        },
        {
            type: 'input',
            message: 'Please enter Employee name.',
            name: 'name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('')
                }
            }
        },
        {
            type: 'input',
            message: "Please enter Employee ID number.",
            name: 'id',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('')
                }
            }
        },
        {
            type: 'input',
            message: "Please enter Employee email",
            name: 'email',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('')
                }
            }
        }    
    ])
}