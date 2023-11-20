// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'Apache-2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
    case 'GPL-3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
    default:
      return "";
}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[License: MIT](https://opensource.org/licenses/MIT)';
    case 'Apache-2.0':
      return '[License: Apache-2.0](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL-3.0':
      return '(https://www.gnu.org/licenses/gpl-3.0)';
    default:
      return "";
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    // Call the renderLicenseBadge and renderLicenseLink functions
    const licenseBadge = renderLicenseBadge(license);
    const licenseLink = renderLicenseLink(license);
    // If there is no license, return an empty string
    if (!licenseBadge && !licenseLink) {
      return '';
    }
    return `Badge: ${licenseBadge}\n Link: ${licenseLink}` 
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Call the renderLicenseSection function to get the license section
  const licenseSection = renderLicenseSection(data.license);
  console.log(data.license)

  return `# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

${licenseSection}  // Include the license section

## Questions

If you have any questions, feel free to reach out:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}
module.exports = generateMarkdown;
