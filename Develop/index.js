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
      message: "How should your application or website be used?",
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
      choices: ["Mozilla", "Apache", "MIT", "GNU AGPLv3"],
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

### **Licenses**
${response.license}

========================
### Questions?
##### Email: ${response.email}
##### GitHub: www.github.com/${response.github}

========================
`
};

async function makeReadme() {
  try {
    const response = await promptUser();
    const readme = createMarkdown(response);
    await writeFile("ReadMe.md", readme);
    console.log("Your Readme file has been generated! Congratulations!");
  } catch (err) {
    console.log("Something went wrong!");
  }
};

makeReadme();
