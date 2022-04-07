const Employee = require('../lib/Employee')

// test for employee construct
test('create an object with employee details', () => {
    const employee = new Employee('James', 30, 'jamesbelk0@gmail.com', 'Employee');

    expect(employee.name).toBe('James');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('jamesbelk0@gmail.com');
    expect(employee.role).toBe('Employee');
});

// test for getName()
test('Pulls the employees name from the input', () => {
    const employee = new Employee('James', 30, 'jamesbelk0@gmail.com', 'Employee');
    expect(employee.getName()).toBe('James');
});

// test for getId
test('Pulls the employees id from the input', () => {
    const employee = new Employee('James', 30, 'jamesbelk0@gmail.com', 'Employee');
    expect(employee.getId()).toEqual(30)
});

// test for getEmail
test('Pulls the employees email from the input', () => {
    const employee = new Employee('James', 1, 'jamesbelk0@gmail.com');
    expect(employee.getEmail()).toBe('jamesbelk0@gmail.com');
});

// test for getRole
test('Identify a role of "Employee"', () => {
    const employee = new Employee('James', 1, 'jamesbelk0@gmail.com', 'Employee');
    expect(employee.getRole()).toBe('Employee')
});