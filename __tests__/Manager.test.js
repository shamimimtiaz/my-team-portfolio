// add manager constructor
const Manager = require('../lib/Manager');

//create manager object
test('creates an Manager object', () => {
    const manager = new Manager ('Shamim', 1, 'km_si@ymail.com', 304)
    expect(manager.officeNumber).toEqual(expect.any(Number));
});


// find role from getRole
test('gets role of employee', () => {
    const manager = new Manager('Shamim', 1, 'km_si@ymail.com');
    expect(manager.getRole()).toEqual("Manager");
});



