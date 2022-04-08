// NPM
const inquirer = require('inquirer');
const fs = require('fs');

// Employee Classes
const Employee = require('../lib/Employee');
const Engineer = require('../lib.Engineer');
const Intern = require('../lib/Intern');
const Manager = require('./lib/Manager');

// HTML Cards
const addMCard = require('./src/card-manager');
const addECard = require('./src/card-engineer');
const addICard = require('./src/card-intern');
const cardCase = require('./src/card-case')

// Team Member Array and Questions for Inquirer 
const newManager = [
    {
        name: 'role',
        type: 'confirm',
        message: 'Are you ready to add team information?',
    },
    {
        name: 'name',
        type: 'input',
        message: 'What is your managers name?',
    },
    {
        name: 'id',
        type: 'input',
        message: 'What is the managers employee ID?',
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is the managers email?',
    },
    
]

const newEngineer = []

const newIntern = []


