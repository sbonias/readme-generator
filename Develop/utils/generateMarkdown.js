// -------Function that edits the inquiry "data" (responses) into md format--------
function generateMarkdown(data) {
  return `
# ${data.title}

## Table of Contents

## Description
 ${data.description}

## Deployed Application
- ${data.githubRepo}
- ${data.deployedRepo}

## Visual Representation
${data.video}

## Install
${data.install}

## Usage
${data.usage}

## License
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
