// -------Function that edits the inquiry "data" (responses) into md format--------
function generateMarkdown(data) {
  return `
# ${data.title}

## Table of Contents
- [Description](#description)
- [Deployed Application](#githubRepo)
- [Visual Presentation](#video)
- [Installation Requirements](#install)
- [Usage](#usage)
- [Licences](#licence)
- [Contributing](#contributors)
- [Tests](#tests)
- [Questions](#githubImage)

## Description
 ${data.description}

## Deployed Application
- ${data.githubRepo}
- ${data.deployedRepo}

## Visual Representation
${data.video}

## Installation Requirements
${data.install}

## Usage
${data.usage}

## Licenses
${data.license}

## Contributing
${data.contributors}

## Tests Implemented
${data.tests}

## Questions
- ${data.githubImage}
- ${data.githubUserName}

`;
}
// module.exports is an object we use to store variables or methods and allows for export
module.exports = generateMarkdown;
