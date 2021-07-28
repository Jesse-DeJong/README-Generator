// Include required packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// Import md formatting function
const generateMarkdown = require('./utils/generateMarkdown');

// Initiate questions to user for generating the Readme
inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the Title of this project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'How would you Describe this project to users?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the Installation instructions?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What are the Usage instructions?',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'What License applies to this project?',
        name: 'license',
        choices: ['MIT', 'Apache', 'GNU']
    },
    {
        type: 'input',
        message: 'What Contribution guidelines are there for this project?',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'How are tests initiated for this project?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'githubName'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    }
  ])
  .then((data) => {
    // Write the data to a file name README.md in the ./Develop folder
    fs.writeFile('README.md', generateMarkdown(data), (err) => {
      if (err) { new Error; }
    }); 
});
