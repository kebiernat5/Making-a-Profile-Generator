const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee")
const Intern = require("./lib/Intern")



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

const teamArray = [];
determineEmployee()
function determineEmployee() {
  inquirer.prompt([
      {
        type: "list",
        name: "position",
        message: "What is the Employee's position?",
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
            internInfo()
          break;
        case "I am finished for now":
            createHTML()
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
        message: "What is the Managers's email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the Managers's office number?",
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
          message: "What is the Engineers's email address?",
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

// determineEmployee()

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


function createHTML(){
    let teamHTML = ""
    const header = 
        `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employee Database</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1 class="header">Employee Database</h1>
        <div class ="taco">`;
        teamHTML += header
 for(let subClass of teamArray){
    console.log("position: ", subClass.getPosition())
    console.log(subClass)
    if (subClass.getPosition() === "Manager"){
       // create manager card, push into teamHTML
      teamHTML += ` 
      <div class="card">
      <div class="card-content">
      <div class="media">
      <div class="media-content">
          <p id="role" class="title is-4">Role: Manager</p>
          <p id="name" class="title is-4">Name: ${subClass.name}</p>
          <p id="id" class="title is-4">ID: ${subClass.id}</p>
          <p id="email" class="title is-4">email:<a href="mailto:${subClass.email}">${subClass.email}</a></p>
          <p id="modifier" class="title is-4">Office Number: ${subClass.officeNumber}</p>
      </div>
  </div>
  </div>
  </div>
  `;
    }
    if(subClass.getPosition() === "Engineer"){
      //if subclass postion == engineer
    //create engineer card
      teamHTML += ` 
      <div class="card">
      <div class="card-content">
      <div class="media">
      <div class="media-content">
          <p id="role" class="title is-4">Role: Engineer</p>
          <p id="name" class="title is-4">Name: ${subClass.name}</p>
          <p id="id" class="title is-4">ID: ${subClass.id}</p>
          <p id="email" class="title is-4">email:<a href="mailto:${subClass.email}">${subClass.email}</a></p>
          <p id="modifier" class="title is-4">Github profile:<a href= "https://github.com/${subClass.gitHubUsername}">${subClass.gitHubUserName}</a></p>
      </div>
  </div>
  </div>
  </div>
  `;
    }
    if(subClass.getPosition() === "Intern"){
      //if subclass postion === intern
    //create intern card
     teamHTML += ` 
      <div class="card">
      <div class="card-content">
      <div class="media">
      <div class="media-content">
          <p id="role" class="title is-4">Role: Intern</p>
          <p id="name" class="title is-4">Name: ${subClass.name}</p>
          <p id="id" class="title is-4">ID: ${subClass.id}</p>
          <p id="email" class="title is-4"><a href="mailto:${subClass.email}">${subClass.email}</a></p>
          <p id="modifier" class="title is-4">School: ${subClass.school}</p>
      </div>
  </div>
  </div>
  </div>
 `
    }; 
  };
  const footer=` </div>  
  
</body>
</html>
`;
teamHTML+=footer;


    fs.writeFile("index.html", teamHTML,(err)=>{
        if (err) throw err;
         console.log("sent to html");
      })
  
}

