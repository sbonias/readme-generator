// -------Function that edits the inquiry "data" (responses) into md format--------
function generateMarkdown(data) {
  return `
# ${data.title}

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

## Table of Contents
- [Description](#description)
- [Deployed Application](#deployed-application)
- [Visual Presentation](#visual-presentation)
- [Installation Requirements](#installation-requirements)
- [Usage](#usage)
- [Licences](#licences)
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
${data.license}

## Contributing
${data.contributors}

## Tests Implemented
${data.tests}

## Questions
* ![image](${data.githubImage})
* [Owner E-mail](${data.githubUserName})

`;
}
// module.exports is an object we use to store variables or methods and allows for export
module.exports = generateMarkdown;
