// importing Employee constructor 
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }

// returning github from input 
getGithub () {
    return this.github;
    }
// override employee role for engineer

getRole () {
    return "Engineer";
    }
}

module.exports = Engineer; 
