// TODO: Include packages needed for this application

console.log("Program Has started.")

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      name: "title",
      message: "What is your project name?",
    },{ 
      type: "input",
      name: "description",
      message:
        "Give a brief description of your project. Why did you build it? What problem does it solve?",
    },
    //Table of Contents here for linking through the GENERATED-README.md file
    {
      type: "input",
      name: "installation",
      message: "What commands should we run for dependencies?",
      default: "fs",
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license does your project use?",
      choices: ["MIT", "Apache 2.0", "IBM-IPL 1.0", "None"],
    },
    {
      type: "input",
      name: "contributing",
      message: "Who contributed to this project?",
    },
    {
      type: "input",
      name: "test",
      message: "What commands should be run for tests?",
      default: "node index.js",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "GitHub",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "Email",
    },
  ];
  
  

  
  
  
  
  

  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile("GENERATED-README.md", data, (err) => {
        err
          ? console.log(err)
          : console.log("GENERATED-README.md file was created and written!");
      });

}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions).then((data) => {
        writeToFile("GENERATED-README.md", generateMarkdown(data));
      });
}

// Function call to initialize app
init();

