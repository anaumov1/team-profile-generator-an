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
    .then(data => {
        if(data.role === 'Manager') {
            managerPrompt(data)
        } else if (data.role === 'Intern') {

        } else {
            engineerPrompt(data)
        }
    })
};

const managerPrompt = (answers) => {
    return inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter the Managers phone number.',
            name: 'number',
            validate: numberInput => {
                if (numberInput) {
                    return true;
                } else {
                    console.log('Manager phone number is required!')
                }
            }
        }
    ])

    .then(data => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.role, data.number)
        templateArray.push(manager)
        addEmployee();
    });
};

const internPrompt = (answers) => {
    return inquirer
    .prompt ([
        {
            type: 'input',
            message: 'Plase enter Intern school.',
            name: 'intern',
            validate: internInput => {
                if (internInput) {
                    return true;
                } else {
                    console.log('School is required for Intern!')
                }
            },
        }
    ])
    .then(data => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.role, data.intern)
        templateArray.push(intern);
        addEmployee();
    });
};

const engineerPrompt = (answers) => {
    return inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please provide a link to the Engineer github?',
            name: 'Github',
            validate: Github => {
                if (Github) {
                    return true;
                } else {
                    console.log('A link to Engineer Github is required!')
                }
            }
        }
    ])
    .then(data => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.role, data.Github)
        templateArray.push(engineer);
        addEmployee();
    });
};