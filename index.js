const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    {
        type: "input",
        message: "What is the manager's name?",
        name: "manName",
      },
      {
        type: "input",
        message: "Name",
        name: "name",
      },
      {
        type: "input",
        message: "What this person's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is this person's email?",
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
            type: "list"
            message: "Which role are you creating a profile for?"
            name: "role"
            choices: ["Manager", "Engineer", "Intern"]        
        }
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


inquirer
  .prompt(questions)

  .then(function (data) {
    console.log(data);
    fs.writeFile("index.html", convertToHTML(data), () =>
      console.log("Wrote to file.")
    );
  });


  
  

function convertToHTML(data) {
  return `
 `;
}
