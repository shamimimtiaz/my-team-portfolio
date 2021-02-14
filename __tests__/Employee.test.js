// using Employee constructor 
const Employee = require('../lib/Employee');
const employee = new Employee('Shamim', 1, 'km_si@ymail.com');
// create employee object 
test('create an employee object', () => {
   
expect(employee.name).toEqual(expect.any(String));
expect(employee.id).toEqual(expect.any(Number));
expect(employee.email).toEqual(expect.any(String));
}); 

// get name from getName()
test('get employee name', () => {
    expect(employee.getName()).toEqual(expect.any(String));
});

//get id from getID()
test('get employee ID', () => {
    expect(employee.getId()).toEqual(expect.any(Number));
});

//get email from getEmail
test('get employee email', () => {
    expect(employee.getEmail()).toEqual(expect.any(String));
});

//get role from getRole
test('get role of employee', () => {
    expect(employee.getRole()).toEqual('Employee');
});