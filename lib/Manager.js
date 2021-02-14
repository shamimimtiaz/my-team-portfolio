// add Employee constructor 
const Employee = require('./Employee');

//Extend employee constructor to manager constructor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
//Calling employee constructor        
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

// override employee role to manager 
getRole () {
    return "Manager";
}
}

module.exports = Manager;

