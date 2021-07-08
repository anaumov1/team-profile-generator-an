const { test, expect} = require("@jest/globals");
const Employee = require('../lib/Employee')

// pass a name string or object
test('creates a Employee object', () => {
    const employee = new Employee('Alex');

    expect(employee.name).toBe('Alex');
    expect(employee.id).toBe(this.id);
    expect(employee.email).toBe(this.email);
});

