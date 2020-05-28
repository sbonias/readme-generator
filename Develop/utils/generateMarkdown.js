function generateMarkdown(data) {
  return `
# ${data.title}
# ${data.description}
# ${data.tableContents}
# ${data.install}
# ${data.usage}
# ${data.license}
# ${data.contributors}
# ${data.tests}
# ${data.githubImage}
# ${data.githubUserName}
`;
}
// module.exports is an object we use to store variables or methods and allows for export
module.exports = generateMarkdown;
