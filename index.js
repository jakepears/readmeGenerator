/** @format */
// Create an array of questions for user input using inquirer. Each question should have a type (e.g., input, list), name, and message property. Include questions for the project title, description, installation instructions, usage information, contribution guidelines, test instructions, license choice, GitHub username, and email address.
// Implement the writeToFile function to write the generated README content to a file. Use the fs.writeFile method to write the content to a file with the specified fileName.
// Implement the init function to initialize the application. Use inquirer.prompt to prompt the user with the questions array. Once the user provides the answers, pass the answers object to the generateMarkdown function to generate the README content. Finally, use the writeToFile function to write the generated content to a file.
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
	{
		type: 'input',
		name: 'title',
		message: 'What is the title of your project?',
	},
	{
		type: 'input',
		name: 'description',
		message: 'Please provide a description of your project:',
	},
	{
		type: 'input',
		name: 'installation',
		message: 'Please provide installation instructions:',
	},
	{
		type: 'input',
		name: 'usage',
		message: 'Please provide usage information:',
	},
	{
		type: 'input',
		name: 'contributing',
		message: 'Please provide contribution guidelines:',
	},
	{
		type: 'input',
		name: 'tests',
		message: 'Please provide test instructions:',
	},
	{
		type: 'list',
		name: 'license',
		message: 'Please choose a license for your project:',
		choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
	},
	{
		type: 'input',
		name: 'username',
		message: 'What is your GitHub username?',
	},
	{
		type: 'input',
		name: 'email',
		message: 'What is your email address?',
	},
];

function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log('README.md file generated successfully!');
		}
	});
}

function init() {
	inquirer
		.prompt(questions)
		.then((answers) => {
			const markdown = generateMarkdown(answers);
			writeToFile('README.md', markdown);
		})
		.catch((err) => {
			console.log(err);
		});
}

init();
