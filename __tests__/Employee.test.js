const { test } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("getNameFunction test", () => {
    const employee = new Employee ("Kate", "278702", "kebiernat5@gmail.com")
    expect(employee.getName()).toBe("Kate")
})

test("getIdFunction test", () => {
    const employee = new Employee ("Kate", "278702", "kebiernat5@gmail.com")
    expect(employee.getId()).toBe("278702")
})

test("getEmail test", () => {
    const employee = new Employee ("Kate", "278702", "kebiernat5@gmail.com")
    expect(employee.getEmail()).toBe("kebiernat5@gmail.com")
})