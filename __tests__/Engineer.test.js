const Engineer = require('../lib/Engineer');

// test for engineer construct
test('create an object with engineer details', () => {
    const engineer = new Engineer('James', 30, 'jamesbelk0@gmail.com', 'jamesbelk0', 'Engineer');
    
    expect(engineer.name).toBe('James');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('jamesbelk0@gmail.com');
    expect(engineer.github).toBe('jamesbelk0');
    expect(engineer.role).toBe('Engineer');
});

// test for getName()
test('Pulls the engineers name from the input', () => {
    const engineer = new Engineer('James', 30, 'jamesbelk0@gmail.com', 'jamesbelk0', 'Engineer');
        expect(engineer.getName()).toBe('James');
});

// test for getId
test('Pulls the engineers id from the input', () => {
    const engineer = new Engineer('James', 30, 'jamesbelk0@gmail.com', 'jamesbelk0', 'Engineer');
    expect(engineer.getId()).toEqual(30)
});

// test for getEmail
test('Pulls the engineers email from the input', () => {
    const engineer = new Engineer('James', 30, 'jamesbelk0@gmail.com', 'jamesbelk0', 'Engineer');
    expect(engineer.getEmail()).toBe('jamesbelk0@gmail.com');
});

// test for getGithub
test('pull the engineer github username', () => {
    const engineer = new Engineer('James', 30, 'jamesbelk0@gmail.com', 'jamesbelk0', 'Engineer');
        expect(engineer.getGithub()).toBe('jamesbelk0');
});

// test for getRole
test('Identify a role of "Engineer"', () => {
    const engineer = new Engineer('James', 30, 'jamesbelk0@gmail.com', 'jamesbelk0', 'Engineer');
    expect(engineer.getRole()).toBe('Engineer')
});