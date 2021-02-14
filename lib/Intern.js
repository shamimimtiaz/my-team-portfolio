// importing Employee constructor 
const Employee = require('./Employee');

//Extend intern constructor with employee constructor

class Intern extends Employee {
    constructor (name, id, email, school) {
// calling employee constructor
        super (name, id, email);

        this.school = school;
    }

// returning scholl from input
getSchool () {
    return this.school;
    }
//override employee role to intern
getRole () {
    return "Intern";
    }
}

module.exports = Intern; 