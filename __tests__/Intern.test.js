const Intern = require('../lib/Intern');

// test for intern construct
test('create an object with intern details', () => {
    const intern = new Intern('James', 30, 'jamesbelk0@gmail.com', 'UNCC', 'Intern');

    expect(intern.name).toBe('James');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('jamesbelk0@gmail.com');
    expect(intern.school).toBe('UNCC');
    expect(intern.role).toBe('Intern');
});

// test for getName()
test('Pulls the interns name from the input', () => {
    const intern = new Intern('James', 30, 'jamesbelk0@gmail.com', 'UNCC', 'Intern');
    expect(intern.getName()).toBe('James');
});

// test for getId
test('Pulls the interns id from the input', () => {
    const intern = new Intern('James', 30, 'jamesbelk0@gmail.com', 'UNCC', 'Intern');
    expect(intern.getId()).toEqual(30)
});

// test for getEmail
test('Pulls the interns email from the input', () => {
    const intern = new Intern('James', 1, 'jamesbelk0@gmail.com', 'UNCC', 'Intern');
    expect(intern.getEmail()).toBe('jamesbelk0@gmail.com');
});

// test for getSchool
test('Pulls the interns school from input', () => {
    const intern = new Intern('James', 30, 'jamesbelk0@gmail.com', 'UNCC', 'Intern');
    expect(intern.getSchool()).toBe('UNCC');
});

// test for getRole
test('Identify a role of "intern"', () => {
    const intern = new Intern('James', 1, 'jamesbelk0@gmail.com', 'UNCC', 'Intern');
    expect(intern.getRole()).toBe('Intern')
});