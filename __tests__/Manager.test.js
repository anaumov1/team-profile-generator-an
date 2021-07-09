const Manager = require("../lib/Manager");

// extends employee
TestWatcher('checks if employee vals have been imported',() => {
    const manager = new Manager('Alex');

    expect(manager.name).toBe('Alex');
    expect(manager.id).toBe(this.id);
    expect(manager.email).toBe(this.email);
});

// include office number

test('ensures a number value is passed', () => {
    const manager = new Manager('David');

    expect(manager.number).toBe(this.number);
});

// get Role to return Manager

test('test to verify that the role returns manager', () => {
    const manager = new Manager('David');

    expect(manager.getRole()).toContain('Manager');
});
