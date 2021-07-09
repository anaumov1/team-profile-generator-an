const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, role, number) {

        super(name, id, email, role)
        this.number = number;
    };

    getRole() {
        return this.role = 'Manager';
    };
};

module.exports = Manager;
