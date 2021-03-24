const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee")
const Intern = require("./lib/Intern")


const questions = [
    {
        type: "input",
        message: "What is the manager's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What this person's Office ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is this person's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNum",
      },

]

const roleQuestion = [
    {
        type: "confirm",
        message: "Do you want to add another team member?",
        name: "addTeamMember",
      },
]

    const employeeQuestion = [
  
        {
            type: "input",
            message: "What is the employee's name?",
            name: "name",
          },
          {
            type: "input",
            message: "What this person's ID?",
            name: "id",
          },
          {
            type: "input",
            message: "What is this person's email address?",
            name: "email",
          },
        {
            type: "list",
            message: "Which role are you creating a profile for?",
            name: "role",
            choices: ["Engineer", "Intern"],   
        },
    ]
    const engineerQuestion = [
    {    
    type: "input",
    message: "What is the GitHub Profile?",
    name: "github",
  },
    ]
    const internQuestion = [
  {
    type: "input",
    message: "What school does this person go to?",
    name: "school",
  },
]



function next(){
    inquirer.prompt(employeeQuestion).then(answers => {
        console.log(answers);
        const employee = new Employee(answers.name, answers.id, answers.email, answers.role);
        if (answers.role === "Engineer"){
            inquirer.prompt(engineerQuestion).then(answers => {
                console.log(employee)
                const engineer = new Engineer(employee.name, employee.id, employee.email, answers.github);
            })
        }
        if  (answers.role === "Intern"){
            inquirer.prompt(internQuestion).then(answers => {
                console.log(answers);
                const intern = new Intern(employee.name, employee.id, employee.email, answers.school);
                console.log(intern);
            })
        }
        
    })
}
function start (){
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
        inquirer.prompt(roleQuestion).then(answers => {
            console.log(answers)
            if (answers.addTeamMember){
                next()
            }
        })
    })
}

start()


//   .then(function (data) {
//     console.log(data);
//     fs.writeFile("index.html", convertToHTML(data), () =>
//       console.log("Wrote to file.")
//     );
//   });


  
  

function convertToHTML(data) {
  return `
 `;
}
