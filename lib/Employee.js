//Create employee constructor

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

//get name from input
getName () {
    return this.name;
}
//get name from input
getId () {
    return this.id;
}
//get email from input
getEmail () {
    return this.email;
}
//get employee from list
getRole () {
    return 'Employee';
}
};

// to be exported 
module.exports = Employee; 