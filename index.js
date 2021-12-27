// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
}, { 
    type: "input",
    message: "What is a description of this project?",
    name: "Descrption"
}, {
    type: "confirm", 
    message: "Will you be including an table of contents? (Y/N)",
    name: "Table of Contents"
}, {
    type: "input",
    message: "What is the installation requirements for this app?",
    name: "Installation"
}, {
    type: "input",
    message: "How will this app be used?",
    name: "Usage"
}, {
    type: "input",
    message: "What is the license being used?",
    name: "License"
}, {
    type: "input",
    message: "Who are the contributors of this project?",
    name: "Contributing"
}, {
    type:"input",
    message: "What are the commands needed to test this app?",
    name: "Tests"
}, {
    type: "input",
    message: "Where can you be contacted?",
    name: "Questions"
}, {
    type: "input",
    message: "What is your Github username",
    name: "Username"
}, {
    type: "input",
    message: "What is your email address?",
    name: "Email"
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
