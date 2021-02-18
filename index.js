const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the project title?",
      name: "title",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("A valid project title is required.");
        }
        return true;
      },
    },
    {
      type: "input",
      message: "What is the name of your GitHub repository??",
      name: "repo",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("A valid repository name is required.");
        }
        return true;
      },
    },
    {
      type: "input",
      message: "Enter a description of your project.",
      name: "description",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("A valid project description is required.");
        }
        return true;
      },
    },
    {
      type: "input",
      message: "What are the installation instructions for this project?",
      name: "install",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log(
            "A valid project installation instruction is required."
          );
        }
        return true;
      },
    },
    {
      type: "input",
      message: "How should your application or website be used?",
      name: "usage",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("A valid usage instruction is required.");
        }
        return true;
      },
    },
    {
      type: "input",
      message: "Who were the contributors for this project",
      name: "contribution",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("A valid contributor is required.");
        }
        return true;
      },
    },
    {
      type: "input",
      message: "What are the test instructions for this project?",
      name: "test",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("A valid test instruction is required.");
        }
        return true;
      },
    },
    {
      type: "checkbox",
      message: "Please select a license for this project.",
      choices: ["Mozilla", "Apache", "MIT", "Boost"],
      name: "license",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("A valid license is required.");
        }
        if (answer.length > 1) {
          return console.log("A valid license is required.");
        } else return true;
      },
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("A valid GitHub username is required.");
        }
        return true;
      },
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("A valid email address is required.");
        }
        return true;
      },
    },
  ]);
}

function createMarkdown(response) {
  return `
# ${response.title}


## **Table of Contents**
========================
* [Description](#description)
* [Installation](#installation)
* [Contributors](#contributors)
* [Testing](#Testing)
* [Licensing](#Licenses)
* [Contact](#questions)

========================

### **Repository Name**  
${response.repo}

### **Description**  
${response.description}

### **Installation**  
${response.install}

### **Usage**  
${response.usage}

### **Contributors**  
${response.contribution}

### **Testing**  
${response.test}

### **License**  
![badge](https://img.shields.io/badge/license-${response.license}-brightgreen)  

This application is covered by the ${response.license} license. 

========================

### Questions?
##### Email: ${response.email}
##### GitHub: www.github.com/${response.github}  

========================
`;
}

async function makeReadme() {
  try {
    const response = await promptUser();
    const readme = createMarkdown(response);
    await writeFile("ReadMe.md", readme);
    console.log("Your Readme file has been generated! Congratulations!");
  } catch (err) {
    console.log("Something went wrong!");
  }
}

makeReadme();
