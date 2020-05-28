// -------Overview--------
// run npm install - considering all dependencies are listed within the package.json file
// The user will be prompted for their GitHub username and other information pertaining to the project the README is for.
// The generated README includes 1 badge that's specific to the repository.

// -------Require--------
// set the standard library for reading and writing files
const fs = require("fs");
// https://www.npmjs.com/package/inquirer
const inquirer = require("inquirer");
// https://www.npmjs.com/package/dotenv
const dotenv = require("dotenv").config();
// referencing the generateMarkdown module to allow for import
const generateMarkdown = require("./utils/generateMarkdown.js");
console.log(generateMarkdown);

// -------Function that initializes the question asking process--------
// should rewrite as a function to apply inquirer.prompt
// incorporate data validation?
// this is going to be an array of questions based on readme criteria
// What is your Project Title? = [string]
// Provide a Description of your project. = [string]
// List out your Table of Contents. = [array: string] or an object
// How to install? = [string]
// What is your usage? = [string]
// What is your license? = [string] = "MIT"
// List all of your contributors? [array: string]
// What are your tests. = [string]
// What are your questions? = [array: string]: ["How do I install this application?"]
// Provide the link to your User Github profile picture. [string]
// Provide your User Github email address. [string]
//const questions = []
function promptUser() {
  return (
    inquirer
      .prompt([
        {
          type: "input",
          name: "title",
          message: "What is your Project Title?",
        },
        {
          type: "input",
          name: "description",
          message: "Provide a Description of your project.",
        },
        {
          type: "input",
          name: "tableContents",
          message: "List out your table of contents.",
        },
        {
          type: "input",
          name: "install",
          message: "Provide installation requirements",
        },
        {
          type: "input",
          name: "usage",
          message: "Provide usage instructions",
        },
        {
          type: "input",
          name: "license",
          message: "Provide any license requirements.",
        },
        {
          type: "input",
          name: "contributors",
          message: "Provide your contributors",
        },
        {
          type: "input",
          name: "tests",
          message: "What tests did you apply to this project?",
        },
        {
          type: "input",
          name: "githubImage",
          message: "Provide a link to your Github profile picture",
        },
        {
          type: "input",
          name: "githubUserName",
          message: "Provide your Github e-mail address",
        },
      ])
      // -------fs.writeFile--------
      // placed here so it occurs after the ".prompt" finishes executing
      // determine location of where file should be placed
      // create a file with name fileName = "README.md"
      // write to file fileName the data = "generateMarkdown(data)"
      .then((data) => {
        fs.writeFile("./utils/README.md", generateMarkdown(data), function (
          err
        ) {
          if (err) {
            return console.log(err);
          }
          return console.log("Success!");
        });
      })
  );
}
promptUser();
