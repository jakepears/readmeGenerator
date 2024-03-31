/** @format */

// TODO: Create a function that returns a license badge based on which license is passed in
// Implement the renderLicenseBadge function to return the appropriate license badge based on the license passed in. You can use conditional statements to check the license and return the corresponding badge URL or markdown code.
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	if (license === 'MIT') {
		return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
	} else if (license === 'Apache 2.0') {
		return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
	} else if (license === 'GPL 3.0') {
		return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
	} else if (license === 'BSD 3') {
		return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
	} else {
		return '';
	}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// Implement the renderLicenseLink function to return the license link based on the license passed in. Similar to the badge, use conditional statements to return the appropriate license link.
function renderLicenseLink(license) {
	if (license === 'MIT') {
		return 'https://opensource.org/licenses/MIT';
	} else if (license === 'Apache 2.0') {
		return 'https://opensource.org/licenses/Apache-2.0';
	} else if (license === 'GPL 3.0') {
		return 'https://www.gnu.org/licenses/gpl-3.0';
	} else if (license === 'BSD 3') {
		return 'https://opensource.org/licenses/BSD-3-Clause';
	} else {
		return '';
	}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// Implement the renderLicenseSection function to generate the license section of the README. Use the renderLicenseBadge and renderLicenseLink functions to include the badge and link in the section.
function renderLicenseSection(license) {
	if (license) {
		return (
			`## License` +
			license +
			renderLicenseBadge(license) +
			renderLicenseLink(license)
		);
	} else {
		return '';
	}
}

// TODO: Create a function to generate markdown for README
// Update the generateMarkdown function to generate the entire README content based on the data object passed in. Use template literals to dynamically insert the user's input into the README sections.
function generateMarkdown(data) {
	return `# ${data.title}
  ${renderLicenseSection(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${
		data.email
	}. You can find more of my work at [${data.username}](https://github.com/${
		data.username
	}).
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${
		data.email
	}. You can find more of my work at [${data.username}](https://github.com/${
		data.username
	}).
`;
}

module.exports = generateMarkdown;
