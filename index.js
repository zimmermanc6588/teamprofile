const inquirer = require(`inquirer`);
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/template');
const writeFile = require('./src/generate') 

let employeeArr = {manager, engineer, intern};
let manager = [];
let engineer = [];
let intern = [];

function Prompt() {
    
    return inquirer 
    .prompt([
        {
            type:'text',
            name: 'employee',
            message: "What is the Employee's name?"   
        },
        {
            type:'text',
            name: 'id',
            message: "What is the employee's ID number?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the employee's email?"
},
{
    type: 'list',
    name: 'role',
    message:"What is the employee's role?",
    choices: ['Manager', 'Engineer', 'Intern']
}])

.then(({employee, id, email, role}) => {
    if (role === "Manager") {
        return inquirer
            .prompt([{
                type:'text',
                name: 'office',
                message:"What is the Manager's office number?"
            },
            {
                type:'confirm',
                name:'anotherEntry',
                message: "What you like to add another employee?",
                default: false
            }])
            .then(({office, anotherEntry}) => {
                manager.push(new Manager(employee, id, email, office))
                // console.log(employeeArr)
                if (anotherEntry) {
                    return Prompt();
                }
            })
        } else if (role === "Engineer") {
            return inquirer
                .prompt([{
                    type: 'text',
                    name: 'github',
                    message: "What is the Engineer's Github username?"
                },
                {
                    type:'confirm',
                    name:'anotherEntry',
                    message: "What you like to add another employee?",
                    default: false
                }])
                .then(({github, anotherEntry}) => {
                    engineer.push(new Engineer(employee, id, email, github))
                    // console.log(employeeArr)
                    if (anotherEntry) {
                        return Prompt();
                    }
                })
        } else if (role === 'Intern') {
             return inquirer
                .prompt([{
                    type:'text',
                    name:'school',
                    message: "What is the Intern's school?"
                },
                {
                    type:'confirm',
                    name:'anotherEntry',
                    message: "What you like to add another employee?",
                    default: false
                }])
                .then(({school, anotherEntry}) => {
                    intern.push(new Intern(employee, id, email, school))
                    // console.log(employeeArr)
                    if (anotherEntry) {
                        return Prompt();
                    }
                })
        }
    })
};


Prompt()
    .then(teamData => {
        return generatePage(employeeArr)
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })
