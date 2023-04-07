# README Generator

## Description
This is a README generator. It is run through node and will output a README file with a description, table of contents, installation instructions, usage instructions, license information, contribution guidelines, testing isntructions, and a contact section.

## Installation
To install dependencies, run the following command:

```
npm i
```

## Usage
Once dependencies have been installed, run index.js using node. Inquirer will provide several prompts in a row. Please provide information for these prompts, or leave blank if you do not wish to enter that information. When it asks for installation commands and test commands, a default value of (npm i) and (npm test) are given respectively. Press enter to accept these default values. The program will also give you a list of several license options. Navigate through these with your arrow keys and press enter on the option you want.

After providing answers to all questions, the README file will be generated in the generated-files directory in the format (project-title)README.md

[Usage Video](./assets/usage-video.webm)