const { test, expect} = require("@jest/globals");
const Employee = require('../lib/Employee')

// pass a name string or object
test('creates a Employee object', () => {
    const employee = new Employee('Alex');

    expect(employee.name).toBe('Alex');
    expect(employee.id).toBe(this.id);
    expect(employee.email).toBe(this.email);
});

// pass an id string or object

test('gets employee.id', () => {
    const employee = new Employee ('Alex');

    expect (employee.id). toBe(this.id)
});

// pass an email
test('gets employee email', () => {
    const employee = new Employee('Alex');

    expect(employee.email).toBe(this.email);
});

// get name()
test('gets employee name', () => {
    const employee = new Employee();

    expect(employee.name).toBe(this.name);
});

// getRole () needs to return Employee
test('gets employee role and returns Employee', () => {
    const employee = new Employee('Alex');

    expect(employee.name). toEqual (expect.stringContaining(employee.name.toString()));
});

