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
                const pass = idInput.match(
                    /^[1-9]\d*$/
                    );
                if (pass) {
                    return true;
                } 
                    return "Please enter a positive number greater than zero.";
                
            }
        },
        {
            type: 'input',
            message: "Please enter Employee email",
            name: 'email',
            validate: emailInput => {
                const pass = emailInput.match(
                    /\S+@\S+\.\S+/
                );
                if (pass) {
                    return true;
                } 
                return "Please enter a valid email address.";
                
            }
        }    
    ])
    .then(data => {
        if(data.role === 'Manager') {
            managerPrompt(data)
        } else if (data.role === 'Intern') {
            internPrompt(data)
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
            message: 'What school does the intern attend?',
            name: 'intern',
            validate: internInput => {
                if (internInput) {
                    return true;
                } else {
                    console.log('You must enter the school the intern attends!')
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

//  prompt to create the file when the user is done entering data
const addEmployee = () => {
    return inquirer
    .prompt([
        {
            type: 'confirm',
            message: 'Would you like to add another employee?',
            name: 'addEmployee',
            default: false 
        }
    ])
    .then(data => {
        if(data.addEmployee === true) {
            profile();
        } else {
            // const templateString = JSON.stringify(templateArray);
            handler(templateArray);
        }
        });
};



profile();    