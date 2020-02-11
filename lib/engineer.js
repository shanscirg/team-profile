const Employee = require("./employee");

class Engineer extends Employee {
    constructor(github) {
        super(name, id, email, "Engineer");
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}