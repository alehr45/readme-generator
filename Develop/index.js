const inquirer = require("inquirer");
const fs = require("fs");

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the project title?",
      name: "title",
    },
    {
      type: "input",
      message: "Enter a description of your project.",
      name: "description",
    },
    {
      type: "input",
      message: "What are the installation instructions for this project?",
      name: "install",
    },
    {
      type: "input",
      message: "How should your app be used?",
      name: "usage",
    },
    {
      type: "input",
      message: "Who were the contributors for this project",
      name: "contribution",
    },
    {
      type: "input",
      message: "What are the test instructions for this project?",
      name: "test",
    },
    {
      type: "checkbox",
      message: "Please select a license for this project.",
      choices: ["Mozilla", "Apache", "MIT", "GNU AGPLv3", "Boost", "Other"],
      name: "license",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  ]);
}

promptUser();
