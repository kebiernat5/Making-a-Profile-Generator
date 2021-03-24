const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, role, officeNum){
        super(name, id, email, role)
        this.role = role
        this.officeNum = officeNum
    } 
    getofficeNum(){
        return this.officeNum
    }
    getPosition(){
        return "Manager"
    }
};

module.exports = Manager
