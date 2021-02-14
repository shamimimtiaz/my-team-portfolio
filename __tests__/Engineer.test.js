//Using Engineer constructor
const Engineer = require('../lib/Engineer');

//creating engineer object
const engineer = new Engineer ('Shamim', 1, 'km_si@ymail.com', 'shamimimtiaz');
test('creates an Engineer object', () => {
    
expect(engineer.github).toEqual(expect.any(String)); 
});
// gets github from getGithub()
test('get engineer github value', () => {
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
//get role from getRole()
test('get role of employee', () => {
    expect(engineer.getRole()).toEqual('Engineer');
});

