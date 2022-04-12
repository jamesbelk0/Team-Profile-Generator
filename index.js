// NPM
const inquirer = require('inquirer');
const fs = require('fs');

// Employee Classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// HTML Cards
const addManagerCard = require('./src/card-manager');
const addEngineerCard = require('./src/card-engineer');
const addInternCard = require('./src/card-intern');
const profileCase = require('./src/card-case');

// Team Member Array and Questions for Inquirer 
const team = [];

// Manager
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
    {
        name: 'officeNumber',
        type: 'input',
        message: 'What is the managers office number?'
    },
    {
        name: 'nextRole',
        type: 'list',
        choices: ['Add Intern', 'Add Engineer', 'Finished'],
        message: 'Who will you add next, or are you done?'
    },
];

//Engineer
const newEngineer = [
    {
        name: 'name',
        type: 'input',
        message: 'What is your engineers name?',
    },
    {
        name: 'id',
        type: 'input',
        message: 'What is the engineers employee ID?',
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is the engineers email?',
    },
    {
        name: 'github',
        type: 'input',
        message: 'What is the engineers github username?'
    },
    {
        name: 'nextRole',
        type: 'list',
        choices: ['Add Intern', 'Add Engineer', 'Finished'],
        message: 'Who will you add next, or are you done?'
    },
];

//Intern
const newIntern = [
    {
        name: 'name',
        type: 'input',
        message: 'What is your interns name?',
    },
    {
        name: 'id',
        type: 'input',
        message: 'What is the interns employee ID?',
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is the interns email?',
    },
    {
        name: 'school',
        type: 'input',
        message: 'What is the interns school?'
    },
    {
        name: 'nextRole',
        type: 'list',
        choices: ['Add Intern', 'Add Engineer', 'Finished'],
        message: 'Who will you add next, or are you done?'
    },
];

// start 
ask(newManager);

// Run Inquirer Prompts
function ask(questions) {
    inquirer
        .prompt(questions)
        .then((member) => {
            team.push(member);

            if (member.nextRole === 'Add Intern') {
                ask(newIntern);
            } else if (member.nextRole === 'Add Engineer') {
                ask(newEngineer);
            } else {
                createRoles(team);
            }
        })
        .catch((err) => console.log(err));
}

function createRoles(team) {
    console.log(team)
    const profiles = team.map((member) => {
        const { name, id, email } = member;

        // Manager = Office Number
        if (member.hasOwnProperty('officeNumber')) {
            const { officeNumber } = member;
            return new Manager(name, id, email, officeNumber);
        }

        // Intern = School
        if (member.hasOwnProperty('school')) {
            const { school } = member;
            return new Intern(name, id, email, school);
        }
        // Engineer = GitHub
        if (member.hasOwnProperty('github')) {
            const { github } = member;
            return new Engineer(name, id, email, github);
        }
    });

    // Make HTML from member cards
    generateHtml(profiles);
}

function generateHtml(profiles) {
    let profileCards = '';
        profiles.forEach((profile) => {
            if (profile instanceof Manager) {
                const cards = addManagerCard(profile);
                profileCards += cards;
            } if (profile instanceof Intern) {
                const cards = addInternCard(profile);
                profileCards += cards;
            } if (profile instanceof Engineer) {
                const cards = addEngineerCard(profile);
                profileCards += cards;
            };
        })

const HTML = profileCase(profileCards)

writeHtml(HTML);
};

function writeHtml(HTML) {
    fs.writeFile('./dist/Team-Profile-Generator.html', HTML, (err) => {
        if (err) throw err;
        console.log('HTML document is in the /dist folder.');
    });
};