const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNum, role){
        super(name, id, email, role)
        this.officeNum = officeNum
        this.role = role
    } 
    getofficeNum(){
        return this.officeNum
    }
};

module.exports = Manager
