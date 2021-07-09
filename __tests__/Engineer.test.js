const Engineer = require("../lib/Engineer");

// extends employee
test('creates a Employee object', () => {
    const engineer = new Engineer('Alex');
    
    expect(engineer.name).toBe('Alex');
    expect(engineer.id).toBe(this.id);
    expect(engineer.email).toBe(this.email);
});

// getGithub()
test('tests to make sure the engineers github has been added', () => {
    const engineer = new Engineer('Alex');

    expect(engineer.getGithub()).toBe(this.github);
});

// getRole() // Overridden to return Engineer
test('tests to make sure the engineers role has been overriden from employee to engineer', () => {
    const engineer = new Engineer('Alex');

    expect(engineer.getRole()).toMatch('Engineer');
});