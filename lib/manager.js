const Employee = require("./employee");

class Manager extends Employee {
    constructor(officeNumber) {
        super(name, id, email, "Manager");
        this.officeNumber = officeNumber;
    }
    getRole(){
        return "Manager";
    }
}