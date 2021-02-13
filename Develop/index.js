const inquirer = require("inquirer");
const fs = require("fs");

function promptUser() {
    return inquirer.prompt([
        {
      type: "input",
      message: "Whats the Project title?",
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


    }











])};
   

promptUser();


