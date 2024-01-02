const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");

// function to write README file
function writeToFile(fileName, data) {
  var fileText = "";
  // Users name
  fileText += `${data.name}'s README\n\n`;
  // Users README title
  fileText += ` # ${data.title}\n\n`;
  // Table of contents
  fileText += `## Table of Contents\n\n`;
  // Links to sections within the table of contents
  fileText += ` * [Description](#description)\n\n * [Installation](#installation)\n\n * [Usage-Information](#usage-information)\n\n * [Contribution-Guidelines](#contribution-guidelines)\n\n * [Test-Instructions](#test-instructions)\n\n * [License](#license)\n\n * [Questions](#questions)\n\n`;
  // Description section
  fileText += `## Description\n\n${data.description}\n\n`;
  // Installation section
  fileText += `## Installation\n\n${data.installation}\n\n`;
  // Usage information section
  fileText += `## Usage Information\n\n${data.usage}\n\n`;
  // Contribution guidelines section
  fileText += `## Contribution Guidelines\n\n${data.contribution}\n\n`;
  
  // Questions section
  fileText += `## Questions\n\nHave additional questions? Click the links below to reach me through my GitHub account or Email address.\n\n`;
  // Link to users GitHub
  fileText += `[Link to Github](https://github.com/${data.github})\n\n`;
  // Link to users email
  fileText += `<a href="mailto:${data.email}">${data.email}</a>\n\n`;
  // Utilizing the file system write file method to generate the users README.md doc along with error handling, that tells the user "Success!" within the terminal when README is successfully generated or logs any errors to the console
  fs.writeFile(fileName, fileText, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}


// function to initialize program
function init() {
  inquirer
    // array of questions for user

    .prompt([
      // User name input
      {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      // User README title input
      {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
      },
      // User README description input
      {
        type: "input",
        message: "Add the description of your project:",
        name: "description",
      },
      // User README installation instructions input
      {
        type: "input",
        message: "Add the installation instructions of your project:",
        name: "installation",
      },
      
      
      // User README contribution guidelines input
      {
        type: "input",
        message: "Add the contribution guidelines of your project:",
        name: "contribution",
      },
      
     
     
      // User github handle input
      {
        type: "input",
        message: "What is your GitHub handle?",
        name: "github",
      },
      // User email handle input
      {
        type: "input",
        message: "What is your email?",
        name: "email",
      },
    ])
    // .then takes the user inputs from the prompts answered above and injects them into the writeToFile function, therefore generating a "sample-README.md" file with the users inputs
    .then((data) => {
      writeToFile("sample-README.md", data);
    });
}

// Function call to initialize program
init();
