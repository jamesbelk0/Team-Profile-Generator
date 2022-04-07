const Manager = require('../lib/Manager');

// test for manager construct
test('create an object with manager details', () => {
    const manager = new Manager('James', 30, 'jamesbelk0@gmail.com', 123, 'Manager');
    
    expect(manager.name).toBe('James');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('jamesbelk0@gmail.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.role).toBe('Manager');
});

// test for getName()
test('Pulls the managers name from the input', () => {
    const manager = new Manager('James', 30, 'jamesbelk0@gmail.com', 123, 'Manager');
        expect(manager.getName()).toBe('James');
});

// test for getId
test('Pulls the managers id from the input', () => {
    const manager = new Manager('James', 30, 'jamesbelk0@gmail.com', 123, 'Manager');
    expect(manager.getId()).toEqual(30)
});

// test for getEmail
test('Pulls the managers email from the input', () => {
    const manager = new Manager('James', 30, 'jamesbelk0@gmail.com', 123, 'Manager');
    expect(manager.getEmail()).toBe('jamesbelk0@gmail.com');
});

// test for getOffice
test('pull the manager office number', () => {
    const manager = new Manager('James', 30, 'jamesbelk0@gmail.com', 123, 'Manager');
        expect(manager.getOffice()).toEqual(expect.any(Number));
});

// test for getRole
test('Identify a role of "manager"', () => {
    const manager = new Manager('James', 30, 'jamesbelk0@gmail.com', 123, 'Manager');
    expect(manager.getRole()).toBe('Manager')
});