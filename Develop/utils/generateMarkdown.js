// Import the full license strings from an external object
const licenseJson = require('./licenses');

// Function that returns the license string for README
// If there is no license, return an empty string
function renderLicense(data) {
  if (data.license == '') {
    return ''
  } else if (data.license == 'Apache') {
    return licenseJson.Apache.license; 
  } else if (data.license == 'GNU') {
    return licenseJson.GNU.license;
  } else if (data.license == 'MIT') {
    return licenseJson.MIT.license;
  } 
}

// Function that returns the license badge for README
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === '') {
    return ''
  } else if (license === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'GNU') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
}

// Function to construct markdown for the README from the passed in answers
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}.
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)

  ## Installation

  ${data.installation}.
  
  ## Usage

  ${data.usage}.
  
  ## Contributing

  ${data.contributing}.

  ## Tests

  ${data.tests}.

  ## Questions

  Can be directed to ${data.githubName}(https://github.com/${data.githubName}) or [Email](mailto:${data.email}).

  ## License
  
  ${renderLicense(data)}`;
}

module.exports = generateMarkdown;
