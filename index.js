const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");

const teamArray = [];
determineEmployee();
function determineEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "position",
        message: "What is the Employee's position?",
        role: ["Manager", "Engineer", "Intern"],
        choices: ["Manager", "Engineer", "Intern", "I am finished for now"],
      },
    ])
    .then((answer) => {
      switch (answer.position) {
        case "Manager":
          managerInfo();
          break;
        case "Engineer":
          engineerInfo();
          break;
        case "Intern":
          internInfo();
          break;
        case "I am finished for now":
          createHTML();
          break;
      }
    });
}
function managerInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Manager's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Manager's email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the Manager's office number?",
      },
    ])
    .then((answer) => {
      const manager = new Manager(
        answer.name,
        answer.id,
        answer.email,
        answer.officeNumber
      );
      teamArray.push(manager);
      determineEmployee();
    });
}
function engineerInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Engineer's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Engineer's email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the Engineer's GitHub account?",
      },
    ])
    .then((answer) => {
      const engineer = new Engineer(
        answer.name,
        answer.id,
        answer.email,
        answer.github
      );
      teamArray.push(engineer);
      determineEmployee();
    });
}

function internInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Intern's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Intern's email address?",
      },
      {
        type: "input",
        name: "school",
        message: "Where does the intern go to school?",
      },
    ])
    .then((answer) => {
      const intern = new Intern(
        answer.name,
        answer.id,
        answer.email,
        answer.school
      );
      teamArray.push(intern);
      determineEmployee();
    });
}

function createHTML() {
  let teamHTML = "";
  const header = `<!DOCTYPE html>
    <html lang="en">
         <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employee Database</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        </head>
        <body>
        <h1 class="header text-white bg-secondary mb-3" style="display:flex; justify-content: center; align-items: center; padding: 50px; margin: 0 auto; background-color: grey; color: honeydew;">Employee Database</h1>
        <div class ="container row align-items-center" style="display: flex; justify-content: center; margin: auto;"> `
  teamHTML += header;
  for (let subClass of teamArray) {
    console.log("position: ", subClass.getPosition());
    console.log(subClass);
    if (subClass.getPosition() === "Manager") {
      // create manager card, push into teamHTML
      teamHTML += ` 
            <div class="card text-white bg-secondary mb-3" style="width: 18rem; margin: 10px;">
            <div class="card-body">
              <h5 class="card-title">Role: Manager</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Name: ${subClass.getName()}</li>
              <li class="list-group-item">ID: ${subClass.getId()}</li>
              <li class="list-group-item">email: <a href="mailto:${subClass.email}">${subClass.getEmail()}</a></li>
              <li class="list-group-item">Office Number: ${subClass.getofficeNum()}</li>
            </ul>
          </div>`;
    }
    if (subClass.getPosition() === "Engineer") {
      //if subclass position == engineer
      //create engineer card
      teamHTML += ` 
      <div class="card text-white bg-secondary mb-3" style="width: 18rem; margin: 10px;">
      <div class="card-body">
        <h5 class="card-title">Role: Engineer</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Name: ${subClass.getName()}</li>
        <li class="list-group-item">ID: ${subClass.getId()}</li>
        <li class="list-group-item">email: <a href="mailto:${subClass.email}">${subClass.getEmail()}</a></li>
        <li class="list-group-item">Github profile:<a href= "https://github.com/${subClass.getGitHub()}">${subClass.getGitHub()}</a></li>
      </ul>
    </div>
             `;
    }
    if (subClass.getPosition() === "Intern") {
      //if subclass position === intern
      //create intern card
      teamHTML += ` 
      <div class="card text-white bg-secondary mb-3" style="width: 18rem; margin: 10px;">
      <div class="card-body">
        <h5 class="card-title">Role: Intern</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Name: ${subClass.getName()}</li>
        <li class="list-group-item">ID: ${subClass.getId()}</li>
        <li class="list-group-item">email: <a href="mailto:${subClass.email}">${subClass.getEmail()}</a></li>
        <li class="list-group-item">School: ${subClass.getSchool()}</li>
      </ul>
    </div>
      
            `;
    }
  }
  const footer = ` </div>  
                                
        </body>
    </html>
    `;
  teamHTML += footer;

  fs.writeFile("index.html", teamHTML, (err) => {
    if (err) throw err;
    console.log("sent to html");
  });
}








// const questions = [
//     {
//         type: "input",
//         message: "What is the manager's name?",
//         name: "name",
//       },
//       {
//         type: "input",
//         message: "What this person's Office ID?",
//         name: "id",
//       },
//       {
//         type: "input",
//         message: "What is this person's email address?",
//         name: "email",
//       },
//       {
//         type: "input",
//         message: "What is the manager's office number?",
//         name: "officeNum",
//       },

// ]

// const roleQuestion = [
//     {
//         type: "confirm",
//         message: "Do you want to add another team member?",
//         name: "addTeamMember",
//       },
// ]

//     const employeeQuestion = [

//         {
//             type: "input",
//             message: "What is the employee's name?",
//             name: "name",
//           },
//           {
//             type: "input",
//             message: "What this person's ID?",
//             name: "id",
//           },
//           {
//             type: "input",
//             message: "What is this person's email address?",
//             name: "email",
//           },
//         {
//             type: "list",
//             message: "Which role are you creating a profile for?",
//             name: "role",
//             choices: ["Engineer", "Intern"],
//         },
//     ]
//     const engineerQuestion = [
//     {
//     type: "input",
//     message: "What is the GitHub Profile?",
//     name: "github",
//   },
//     ]
//     const internQuestion = [
//   {
//     type: "input",
//     message: "What school does this person go to?",
//     name: "school",
//   },
// ]

// function next(){
//     inquirer.prompt(employeeQuestion).then(answers => {
//         console.log(answers);
//         const employee = new Employee(
//             answers.name,
//             answers.id,
//             answers.email,
//             answers.role);
//         if (answers.role === "Engineer"){
//             inquirer.prompt(engineerQuestion).then(answers => {
//                 console.log(employee)
//                 const engineer = new Engineer(
//                     employee.name,
//                     employee.id,
//                     employee.email,
//                     answers.github);
//                 createEngineer();
//             })
//         }
//         if  (answers.role === "Intern"){
//             inquirer.prompt(internQuestion).then(answers => {
//                 console.log(answers);
//                 const intern = new Intern(
//                     employee.name,
//                     employee.id,
//                     employee.email,
//                     answers.school);
//                 console.log(intern);
//                 createIntern();
//             })
//         }

//     })
// }
// function start (){
//     inquirer.prompt(questions).then(answers => {
//         console.log(answers);
//         const manager = new Manager(
//             answers.name,
//             answers.id,
//             answers.email,
//             answers.officeNum);
//         inquirer.prompt(roleQuestion).then(answers => {
//             console.log(answers)
//             if (answers.addTeamMember){
//                 next()
//             }
//         })
//     })
// }

// start()

// const HTML = []

// //   .then(function (data) {
// //     console.log(data);

// function createHTML(){
//     return (`string literal ${HTML.join()}`)
//  };

//  function createEngineer(data){
//     HTML.push(`string literal`)
//  };

//  function createManager(data){
//     HTML.push(`string literal`)
//  };

//  function createIntern(data){
//     HTML.push(`string literal`)
//  };
