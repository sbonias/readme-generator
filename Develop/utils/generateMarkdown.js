// -------Function that edits the inquiry "data" (responses) into md format--------
function generateMarkdown(data) {
  return `
# ${data.title}

![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Table of Contents
- [Description](#description)
- [Deployed Application](#deployed-application)
- [Visual Presentation](#visual-presentation)
- [Installation Requirements](#installation-requirements)
- [Usage](#usage)
- [Licenses](#licenses)
- [Contributing](#contributing)
- [Tests](#tests-implemented)
- [Questions](#questions)

## Description
${data.description}

## Deployed Application
* [The URL of the GitHub repository](${data.githubRepo})
* [The URL of the Deployed Application](${data.deployedRepo})

## Visual Presentation
[A video demonstrating the entirety of the app's functionality ](${data.video})

## Installation Requirements
\`\`\`
${data.install}
\`\`\`

## Usage
${data.usage}

## Licenses
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Contributing
${data.contributors}

## Tests Implemented
${data.tests}

## Questions
![image](${data.githubImage})
- ${data.githubUserName}

`;
}
// module.exports is an object we use to store variables or methods and allows for export
module.exports = generateMarkdown;

//https://drive.google.com/file/d/1a9bF5JFoByyJ4FjcuHiG9bn022HR5Vgh/view
