const Intern = require('../lib/Intern')

// extension of employee

test ('creates a Employee object', () => {
    const intern = new Intern('Alex');

    expect(intern.name).toBe('Alex');
    expect(intern.id).toBe(this.id);
    expect(intern.email).toBe(this.email);
})

// get School function

test('tests to check if intern school is added to the object', () => {
    const intern = new Intern('Alex');

    expect(intern.getSchool()).toBe(this.school);
})

// get Role function

test('tests to check if intern role was added to the object', () => {
    const intern = new Intern('Alex');

    expect(intern.getRole()).toContain('Intern')
})