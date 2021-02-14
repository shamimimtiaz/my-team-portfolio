// Using intern constructor
const Intern = require ('../lib/Intern');

// create intern object
const intern = new Intern('Shamim', 5, 'km_si@outlook.com', 'IFIC');

test('Create an Intern object', () => {
    expect(intern.school).toEqual(expect.any(String));
})

// returning school from getSchool() 
test('get employee school', () =>{
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// get role from getRole()
test('get role of employee', () => {
    expect(intern.getRole()).toEqual("Intern");

});


 
