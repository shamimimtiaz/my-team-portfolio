
//team portfolio
const Manager = require('./lib/Manager');

// node : inquirer and file system
const fs = require ('fs');
const inquirer = require('inquirer');

// All employees Array
const allEmployees = [];

// Question for managerial role

const addManager = () => {
        return inquirer.prompt ([
        {
        type: 'input',
        name: 'name',
        message: 'Name of the manager of this team?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter the manager's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the manager's ID!",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log ("Please enter the manager's ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the manager's email!",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log ("Please enter the manager's Email!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter the manager's office Number!",
        validate: contactNumber => {
        if (contactNumber) {
            return true;
            } else {
            console.log ("Please enter the manager's office number!");
            return false;
            }
        }
    }
])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        allEmployees.push(manager); 
        console.log(manager); 
    })
};
const addEmployee = () => {
    console.log(`
    ================================
    Adding employees to the team
    ================================
    `)

return inquirer.prompt([
    {
        type: 'list',
        name: 'role',
        message: 'Please choose the role of your employee.',
        choices: ['Engineer', 'Intern']    
    },
{
    type: 'input',
    name: 'name',
    message: 'What is the name of the employee?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log ("Please enter employee's name!");
            return false; 
        }
    }
},
{
    type: 'input',
    name: 'id',
    message: "Please enter the employee's ID.",
    validate: idInput => {
        if (idInput) {
            return true;
        } else {
            console.log ("Please enter the employee's ID!");
            return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: "Please enter the employee's Email.",
    validate: contactNumber => {
    if (contactNumber) {
        return true;
        } else {
        console.log ("Please enter the employee's Email!");
        return false;
        }
    }
},
{
    type: 'input',
    name: 'github',
    message: "Please enter the employee's github username.",
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter the employee's GitHub username!");
        return false;
      }
    }
},
{
    type: 'input',
    name: 'school',
    message: "Please enter the intern's school.",
    validate: linkInput => {
      if (linkInput) {
        return true;
      } else {
        console.log("Please enter the intern's school name!");
        return false;
      }
    }
},
{
    type: 'confirm',
    name: 'confirmAddEmployee',
    message: 'Would you like to add more employee?',
    default: false
}
])
// info based on employee type
.then (employeeInfo => {
let {name, id, email, role, githubLink, school, confirmAddEmployee } = employeeInfo;
let employee = new employeeInfo(name, id, email, role, githubLink, school, confirmAddEmployee);


    if (role === "Engineer") {
    employee = new Engineer (name, id, email, githubLink);
    console.log(employee);
}   else if (role === "Intern") {
    employee = new Intern (name, id, email, school);
    console.log(employee);
}

allEmployees.push(employee);

    if (confirmAddEmployee) {
    return addEmployee(allEmployees); 
}   else {
    return allEmployees;
        }
    })
};

// Function that generate HTML page
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Team profile has been successfully created!")
        }
    })
}; 

addManager()
.then (addEmployee)
.then (allEmployees => {
    return teamHTML(allEmployees);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err => {
console.log(err);
});